import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Colors from '../../constants/Colors'
import { Avatar } from 'react-native-paper'
import AnimateNumber from 'react-native-animate-number'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const HomeListCard = ({ label, projectCounter }) => {
    return (
        <View style={styles.mainView}>
            <View style={styles.leftView}>
                <Avatar.Image
                    size={48}
                    source={require('../../assets/images/logo.jpeg')}
                />
                <View style={{ marginLeft: 12 }}>
                    <Text style={styles.fullName}>Viral Sangani</Text>
                    <View style={styles.githubText}>
                        <MaterialCommunityIcons
                            name="github-circle"
                            size={20}
                            color="white"
                        />
                        <Text style={styles.githubUsername}>viral-sangani</Text>
                    </View>
                </View>
            </View>
            <View style={styles.rightView}>
                <AnimateNumber
                    style={styles.counter}
                    value={projectCounter}
                    formatter={(val) => {
                        return parseInt(val)
                    }}
                    timing="easeOut"
                />
                <Text style={styles.projects}>Projects</Text>
            </View>
        </View>
    )
}

export default HomeListCard

const styles = StyleSheet.create({
    mainView: {
        backgroundColor: Colors.secondaryBg,
        flexDirection: 'row',
        marginTop: 20,
        marginHorizontal: 20,
        height: 80,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    leftView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 16,
    },
    rightView: {
        marginRight: 24,
        alignItems: 'center',
    },
    leftText: {
        marginLeft: 24,
    },
    fullName: {
        color: '#fcfcfc',
        fontSize: 24,
        fontFamily: 'AirbnbCerealMedium',
    },
    githubText: {
        marginTop: 6,
        flexDirection: 'row',
        alignItems: 'center',
    },
    githubUsername: {
        marginLeft: 6,
        color: '#fcfcfc',
        fontSize: 14,
        fontFamily: 'AirbnbCerealMedium',
    },
    avatarNumber: {
        backgroundColor: Colors.primaryBg,
        fontFamily: 'AirbnbCerealBold',
    },
    counter: {
        fontSize: 30,
        fontFamily: 'AirbnbCerealBold',
        // marginRight: 2,
        color: 'white',
    },
    projects: {
        color: '#fcfcfc',
        fontFamily: 'AirbnbCerealMedium',
    },
})
