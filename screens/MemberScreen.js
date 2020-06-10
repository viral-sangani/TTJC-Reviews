import * as React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Colors from '../constants/Colors'
import MemberCard from '../components/Cards/MemberCard'
import TopBar from '../components/TopBar'
import { DataContext } from '../API/Main'

export default function MemberScreen({ navigation }) {
    const { userData } = React.useContext(DataContext)
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <TopBar />
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
