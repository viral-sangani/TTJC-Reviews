import axios from 'axios'
import React from 'react'
var iterateArray = []
var totalCount = 0
var uri = `https://api.github.com/graphql`
var data = []
var projects = []
var users = []
var Overviews = {
    fiveProjects: 0,
    fourProjects: 0,
    threeProjects: 0,
    twoProjects: 0,
    oneProjects: 0,
}
var labels = []
const regexProject = /\[[pP]roject[- 0-9a-zA-Z]*[\[0-9a-zA-Z \]]*(\])(?!.*\])[ -]*/

export const DataContext = React.createContext()

export const DataProvider = ({ children }) => {
    const [projectData, setProjectData] = React.useState(projects)
    const [userData, setUserData] = React.useState(users)
    const [lableData, setLableData] = React.useState(labels)

    const reloadData = async () => {
        let data = await generateDataStructure()
        setProjectData(data.projects)
        setUserData(data.users)
        setLableData(data.labels)
    }

    return (
        <DataContext.Provider
            value={{
                projectData,
                setProjectData,
                userData,
                setUserData,
                lableData,
                setLableData,
                reloadData,
            }}
        >
            {children}
        </DataContext.Provider>
    )
}

export const generateDataStructure = async () => {
    iterateArray = []
    totalCount = 0
    data = []
    projects = []
    users = []
    labels = []
    console.log('Starting....')
    let query = `
    query totalIssues{
      repositoryOwner(login: "tanaypratap") {
        repository(name: "teamtanay.jobchallenge.dev") {
          issues(first: 100) {
            totalCount

          }
        }
      }
    }
    `

    let p1 = await axios.post(
        uri,
        { query },
        {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization:
                    'Bearer b2b4751ae33cc8cc322ab2ccd7271be185ff5676',
            },
        }
    )
    getTotalCount(p1.data)
    await getData()
    return { projects, labels, users }
}

async function getData() {
    console.log('Getting data...')
    var cursor = ''
    let query = `query getdata{
                    repositoryOwner(login: "tanaypratap") {
                        repository(name: "teamtanay.jobchallenge.dev") {
                            issues(first: 100) {
                                edges {
                                    cursor
                                    node {
                                        labels(first: 10){
                                            edges {
                                                node {
                                                description
                                                name
                                                }
                                            }
                                        }
                                        id
                                        url
                                        title
                                        number
                                        createdAt
                                        body
                                        author {
                                            ... on User {
                                                name
                                                avatarUrl
                                                login
                                                id
                                                url
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }`
    let res = await axios.post(
        uri,
        {
            query,
        },
        {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization:
                    'Bearer b2b4751ae33cc8cc322ab2ccd7271be185ff5676',
            },
        }
    )

    data = [...res.data.data.repositoryOwner.repository.issues.edges]
    console.log('0 Call')
    cursor = getCursor(res.data.data.repositoryOwner.repository.issues.edges)

    for (let i = 1; i < iterateArray.length; i++) {
        let query = `query getdata($after: String){
                        repositoryOwner(login: "tanaypratap") {
                            repository(name: "teamtanay.jobchallenge.dev") {
                                issues(first: 100, after: $after) {
                                    edges {
                                    cursor
                                    node {
                                        labels(first: 10){
                                            edges {
                                                node {
                                                description
                                                name
                                                }
                                            }
                                        }
                                        id
                                        url
                                        title
                                        number
                                        createdAt
                                        body
                                        author {
                                            ... on User {
                                                name
                                                avatarUrl
                                                login
                                                id
                                                url
                                            }
                                        }
                                    }
                                }
                                }
                            }
                        }
                    }`
        let res = await axios.post(
            uri,
            {
                query,
                variables: { after: cursor },
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    Authorization:
                        'Bearer b2b4751ae33cc8cc322ab2ccd7271be185ff5676',
                },
            }
        )
        data = [
            ...data,
            ...res.data.data.repositoryOwner.repository.issues.edges,
        ]
        console.log(i + ' call')
        cursor = getCursor(
            res.data.data.repositoryOwner.repository.issues.edges
        )
    }
    getProjects(data)
    console.log('generating Projet data')
    getUsers(projects)
    console.log('generating User data')
    getLables(projects)
    console.log('generating Label data')
}

function getTotalCount(data) {
    totalCount = data.data.repositoryOwner.repository.issues.totalCount
    while (totalCount > 0) {
        iterateArray.push(Math.min(totalCount, 100))
        totalCount = totalCount - 100
    }
    totalCount = data.data.repositoryOwner.repository.issues.totalCount
}

const getCursor = (data) => {
    return data.slice(-1)[0].cursor
}

function getProjects(array) {
    let i = 0
    array.forEach((item) => {
        if (
            regexProject.test(item.node.title) &&
            item.node.author.login !== 'tanaypratap'
        ) {
            item.node.title = item.node.title
                .substring(item.node.title.lastIndexOf(']') + 1)
                .trim()
            if (item.node.title[0] === '-') {
                item.node.title = item.node.title.substr(1).trim()
            }
            projects.push(item.node)
        }
    })
}

function getUsers(projects) {
    projects.forEach((project) => {
        if (
            users.some((item) => {
                return item.login === project.author.login
            })
        ) {
            index = users.findIndex(
                (item) => item.login === project.author.login
            )
            users[index].totalProjects = users[index].totalProjects + 1
            users[index].projects.push(project.id)
        } else {
            var projectsArray = []
            projectsArray.push(project.id)
            users.push({
                ...project.author,
                totalProjects: 1,
                projects: projectsArray,
            })
            return true
        }
    })
}

function getLables(projects) {
    projects.map((project) => {
        if (project.labels.edges.length > 0) {
            project.labels.edges.map((label) => {
                if (label.node.name == 'Reviewed-By-Mentor') {
                    labels.push(project)
                }
            })
        }
    })
}
