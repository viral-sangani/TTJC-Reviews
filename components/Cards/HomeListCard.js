import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Colors from '../../constants/Colors'
import { Avatar } from 'react-native-paper'
import AnimateNumber from 'react-native-animate-number'

const HomeListCard = ({ label, projectCounter }) => {
    return (
        <View style={styles.mainView}>
            <View style={styles.leftView}>
                <Avatar.Text
                    size={48}
                    label={label}
                    style={styles.avatarNumber}
                    labelStyle={styles.avatarNumber}
                />
                <View style={{ marginLeft: 16 }}>
                    <Text style={styles.projects}>Projects</Text>
                    <Text style={styles.completedBy}>Completed by</Text>
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
                <Text style={styles.people}>People</Text>
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
    projects: {
        color: '#fcfcfc',
        fontSize: 24,
        fontFamily: 'AirbnbCerealMedium',
    },
    completedBy: {
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
        marginRight: 17,
        color: 'white',
    },
    people: {
        color: '#fcfcfc',
        fontFamily: 'AirbnbCerealMedium',
    },
})
