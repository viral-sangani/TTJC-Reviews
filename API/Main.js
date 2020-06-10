import axios from 'axios'
import React from 'react'
import AsyncStorage from '@react-native-community/async-storage'
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
var lables = []
const regexProject = /\[[pP]roject[- 0-9a-zA-Z]*[\[0-9a-zA-Z \]]*(\])(?!.*\])[ -]*/

export const DataContext = React.createContext()

export const DataProvider = async ({ children }) => {
    // projectsTemp = await AsyncStorage.getItem('projectData')
    // usersTemp = await AsyncStorage.getItem('userData')
    // labelsTemp = await AsyncStorage.getItem('lableData')

    const [projectData, setProjectData] = React.useState(projects)
    const [userData, setUserData] = React.useState(users)
    const [lableData, setLableData] = React.useState(lables)
    return (
        <DataContext.Provider
            value={{
                projectData,
                setProjectData,
                userData,
                setUserData,
                lableData,
                setLableData,
            }}
        >
            {children}
        </DataContext.Provider>
    )
}

const makePersistant = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value))
    } catch {
        console.log(err)
    }
}

export const generateDataStructure = async () => {
    console.log(1)
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
}

async function getData() {
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
        cursor = getCursor(
            res.data.data.repositoryOwner.repository.issues.edges
        )
    }
    getProjects(data)
    getUsers(projects)
    getLables(projects)
    makePersistant(projectData, projects)
    makePersistant(userData, users)
    // getOverview(users)
    // console.log(project)
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
            users[index].projects.push(project)
        } else {
            users.push({
                ...project.author,
                totalProjects: 1,
                projects: [projects.id],
            })
            return true
        }
    })
}

function getLables(projects) {
    projects.map((project) => {
        project.lables.edges.forEach((element) => {
            if (element.node.name === 'Reviewed-By-Mentor') {
                lables.push(project)
            }
        })
    })
}

// function getOverview(users) {
//     users.map((user) => {
//         if (user.totalProjects == 1) {
//             Overviews.oneProjects = Overviews.oneProjects + 1
//         } else if (user.totalProjects == 2) {
//             Overviews.twoProjects = Overviews.twoProjects + 1
//         } else if (user.totalProjects == 3) {
//             Overviews.threeProjects = Overviews.threeProjects + 1
//         } else if (user.totalProjects == 4) {
//             Overviews.fourProjects = Overviews.fourProjects + 1
//         } else if (user.totalProjects == 5) {
//             Overviews.fiveProjects = Overviews.fiveProjects + 1
//         }
//     })
// }
