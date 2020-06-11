import * as React from 'react'
import { StyleSheet, View, StatusBar, FlatList } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Colors from '../constants/Colors'
import TopBar from '../components/TopBar'
import ProjectCard from '../components/Cards/ProjectCard'
import { DataContext } from '../API/Main'
import Loader from '../components/Loader'
import Spinner from 'react-native-loading-spinner-overlay'

export default function ProjectScreen({ navigation }) {
    const { projectData, reloadData } = React.useContext(DataContext)
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
            <TopBar handleReloadData={handleReload} />
            <FlatList
                data={projectData.slice(0).reverse()}
                renderItem={({ item }) => {
                    return (
                        <ProjectCard project={item} navigation={navigation} />
                    )
                }}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primaryBg,
    },
})
