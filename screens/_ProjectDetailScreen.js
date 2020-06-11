import * as React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Colors from '../constants/Colors'
import ProjectDetailCard from '../components/Cards/ProjectDetailCard'
import MemberCard from '../components/Cards/MemberCard'
import TopBar from '../components/TopBar'
import { DataContext } from '../API/Main'
import Loader from '../components/Loader'
import Spinner from 'react-native-loading-spinner-overlay'

export default function ProjectDetailScreen({ navigation, route }) {
    const { project } = route.params
    const { reloadData } = React.useContext(DataContext)
    const [loading, setLoading] = React.useState(false)
    const handleReload = async () => {
        setLoading(true)
        await reloadData()
        setLoading(false)
    }
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
                title={`Project Issue - #${project.number}`}
                navigation={navigation}
                secondary={true}
                handleReloadData={handleReload}
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
