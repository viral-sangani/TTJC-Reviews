import * as React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Colors from '../constants/Colors'
import TopBar from '../components/TopBar'
import { DataContext } from '../API/Main'
import Loader from '../components/Loader'
import Spinner from 'react-native-loading-spinner-overlay'

export default function ReviewPending({ navigation }) {
    const { projectData, reloadData } = React.useContext(DataContext)
    const [loading, setLoading] = React.useState(false)
    const handleReload = async () => {
        setLoading(true)
        await reloadData()
        setLoading(false)
    }
    var projectReviewPending = []
    projectData.map((project) => {
        if (project.labels.edges.length > 0) {
            if (
                project.labels.edges.some((label) => {
                    return label.name !== 'Reviewed-By-Mentor'
                })
            ) {
                projectReviewPending.push(project)
            }
        } else {
            projectReviewPending.push(project)
        }
    })
    return (
        <View style={styles.container}>
            <Spinner
                visible={loading}
                size="large"
                textContent={'Loading Please wait...'}
                textStyle={{ color: '#FFF' }}
                children={<Loader />}
            />
            <StatusBar barStyle="light-content" />
            <TopBar
                title={`Review Pending`}
                navigation={navigation}
                secondary={true}
                handleReloadData={handleReload}
            />
            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.contentContainer}
            >
                {/* <MemberCard user={user} showCount={true} />
                {user.projects
                    .slice(0)
                    .reverse()
                    .map((projectId) => {
                        return (
                            <UserProjectCard
                                projectId={projectId}
                                key={projectId}
                            />
                        )
                    })} */}
                {/* <UserProjectCard /> */}
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
