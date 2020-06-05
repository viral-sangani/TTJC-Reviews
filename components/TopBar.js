import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { Avatar } from 'react-native-paper'
import {} from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const TopBar = () => {
    return (
        <React.Fragment>
            <View style={styles.topBar}>
                <View style={styles.leftContent}>
                    <Avatar.Image
                        size={32}
                        source={require('../assets/images/logo.jpeg')}
                    />
                    <Text style={styles.appName}>TTJC Analytics</Text>
                </View>
                <MaterialCommunityIcons
                    style={styles.rightContent}
                    name="reload"
                    size={28}
                    color="black"
                />
            </View>
        </React.Fragment>
    )
}

export default TopBar

const styles = StyleSheet.create({
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 60,
        alignItems: 'center',
    },
    leftContent: {
        marginHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
    },
    appName: {
        marginHorizontal: 16,
        fontSize: 20,
        color: '#fcfcfc',
        fontFamily: 'AirbnbCerealBold',
    },
    rightContent: {
        color: '#fcfcfc',
        marginRight: 16,
    },
})
