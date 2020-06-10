import * as React from 'react'
import { StyleSheet, View, StatusBar } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Colors from '../constants/Colors'
import TopBar from '../components/TopBar'
import ProjectCard from '../components/Cards/ProjectCard'
import { DataContext } from '../API/Main'

export default function ProjectScreen({ navigation }) {
    const { projectData } = React.useContext(DataContext)
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <TopBar />
            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.contentContainer}
            >
                {projectData &&
                    projectData
                        .slice(0)
                        .reverse()
                        .map((project) => {
                            return (
                                <ProjectCard
                                    project={project}
                                    navigation={navigation}
                                />
                            )
                        })}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primaryBg,
    },
})
