import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Colors from '../../constants/Colors'
import { Avatar } from 'react-native-paper'
import AnimateNumber from 'react-native-animate-number'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'

const MemberCard = ({ projectCounter, showCount, navigation }) => {
    console.log(navigation)
    const handlePress = (title) => {
        navigation.navigate('UserScreen', { title })
    }
    return (
        <TouchableOpacity onPress={() => handlePress('viral-sangani')}>
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
                            <Text style={styles.githubUsername}>
                                viral-sangani
                            </Text>
                        </View>
                    </View>
                </View>
                <View
                    style={{
                        marginRight: showCount ? 24 : 6,
                        alignItems: 'center',
                    }}
                >
                    {showCount ? (
                        <>
                            <AnimateNumber
                                style={styles.counter}
                                value={projectCounter}
                                formatter={(val) => {
                                    return parseInt(val)
                                }}
                                timing="easeOut"
                            />
                            <Text style={styles.projects}>Projects</Text>
                        </>
                    ) : (
                        <Avatar.Icon
                            size={48}
                            style={{
                                marginRight: 8,
                                backgroundColor: Colors.primaryBg,
                            }}
                            color={Colors.primaryBg}
                            icon={() => (
                                <AntDesign
                                    name="rightcircleo"
                                    size={24}
                                    color="#fcfcfc"
                                />
                            )}
                        />
                    )}
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default MemberCard

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
        color: '#FF0A78',
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
