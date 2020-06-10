import * as React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Colors from '../constants/Colors'
import ProjectDetailCard from '../components/Cards/ProjectDetailCard'
import MemberCard from '../components/Cards/MemberCard'
import TopBar from '../components/TopBar'

export default function ProjectDetailScreen({ navigation, route }) {
    const { project } = route.params
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <TopBar
                title={`Project Issue - #${project.number}`}
                navigation={navigation}
                secondary={true}
            />
            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.contentContainer}
            >
                <MemberCard
                    user={project.author}
                    navigation={navigation}
                    showCount={false}
                />
                <ProjectDetailCard project={project} />
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
