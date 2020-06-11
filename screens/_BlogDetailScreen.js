import * as React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Colors from '../constants/Colors'
import BlogDetailCard from '../components/Cards/BlogDetailCard'
import MemberCard from '../components/Cards/MemberCard'
import TopBar from '../components/TopBar'
import { DataContext } from '../API/Main'
import Loader from '../components/Loader'
import Spinner from 'react-native-loading-spinner-overlay'

export default function BlogDetailScreen({ navigation, route }) {
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
                title={route.params.title}
                navigation={navigation}
                secondary={true}
                handleReloadData={handleReload}
            />
            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.contentContainer}
            >
                {/* <MemberCard showCount={true} /> */}
                <BlogDetailCard />
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
