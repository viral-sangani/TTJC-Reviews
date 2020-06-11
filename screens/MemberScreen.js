import * as React from 'react'
import { StyleSheet, View, StatusBar } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Colors from '../constants/Colors'
import MemberCard from '../components/Cards/MemberCard'
import TopBar from '../components/TopBar'
import { DataContext } from '../API/Main'
import Loader from '../components/Loader'
import Spinner from 'react-native-loading-spinner-overlay'

export default function MemberScreen({ navigation }) {
    const { userData, reloadData } = React.useContext(DataContext)
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
            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.contentContainer}
            >
                <View style={{ marginBottom: 20 }}>
                    {userData
                        .slice(0)
                        .reverse()
                        .map((user) => (
                            <MemberCard
                                key={user.id}
                                id={user.id}
                                user={user}
                                navigation={navigation}
                                showCount={true}
                            />
                        ))}
                </View>
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
