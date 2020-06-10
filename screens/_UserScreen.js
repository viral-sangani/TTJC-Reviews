import * as React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Colors from '../constants/Colors'
import UserProjectCard from '../components/Cards/UserProjectCard'
import MemberCard from '../components/Cards/MemberCard'
import TopBar from '../components/TopBar'

export default function UserScreen({ navigation, route }) {
    const { user } = route.params
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <TopBar
                title={`@${user.login}`}
                navigation={navigation}
                secondary={true}
            />
            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.contentContainer}
            >
                <MemberCard user={user} showCount={true} />
                <UserProjectCard />
                <UserProjectCard />
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
