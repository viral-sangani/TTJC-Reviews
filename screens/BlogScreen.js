import * as React from 'react'
import { StyleSheet, View, StatusBar } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Colors from '../constants/Colors'
import TopBar from '../components/TopBar'
import BlogCard from '../components/Cards/BlogCard'

export default function BlogScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <TopBar />
            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.contentContainer}
            >
                <BlogCard navigation={navigation} />
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
