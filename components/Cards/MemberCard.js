import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native'
import Colors from '../../constants/Colors'
import { Avatar } from 'react-native-paper'
import AnimateNumber from 'react-native-animate-number'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'

const MemberCard = ({ touchAble, user, showCount, navigation }) => {
    const handlePress = () => {
        navigation.navigate('UserScreen', { user })
    }

    if (touchAble) {
        return (
            <TouchableOpacity onPress={handlePress}>
                <View style={styles.mainView}>
                    <View style={styles.leftView}>
                        <Avatar.Image
                            size={48}
                            source={{
                                uri: user.avatarUrl,
                            }}
                        />
                        <View style={{ marginLeft: 12, width: 225 }}>
                            <Text
                                style={styles.fullName}
                                adjustsFontSizeToFit
                                ellipsizeMode="head"
                            >
                                {user.name && user.name.length > 16
                                    ? user.name.substring(0, 16 - 3) + '...'
                                    : user.name}
                            </Text>
                            <View style={styles.githubText}>
                                <MaterialCommunityIcons
                                    name="github-circle"
                                    size={20}
                                    color="white"
                                />
                                <Text
                                    style={styles.githubUsername}
                                    onPress={() => {
                                        Linking.openURL(
                                            `https://www.github.com/${user.login}`
                                        )
                                    }}
                                >
                                    @
                                    {user.login.length > 16
                                        ? user.login.substring(0, 16 - 3) +
                                          '...'
                                        : user.login}
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
                                    value={user.totalProjects}
                                    countBy={1}
                                    timing={(interval, progress) => {
                                        // slow start, slow end
                                        return (
                                            interval *
                                            (1 - Math.sin(Math.PI * progress)) *
                                            10
                                        )
                                    }}
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
    return (
        <View style={styles.mainView}>
            <View style={styles.leftView}>
                <Avatar.Image
                    size={48}
                    source={{
                        uri: user.avatarUrl,
                    }}
                />
                <View style={{ marginLeft: 12, width: 225 }}>
                    <Text
                        style={styles.fullName}
                        adjustsFontSizeToFit
                        ellipsizeMode="head"
                    >
                        {user.name && user.name.length > 16
                            ? user.name.substring(0, 16 - 3) + '...'
                            : user.name}
                    </Text>
                    <View style={styles.githubText}>
                        <MaterialCommunityIcons
                            name="github-circle"
                            size={20}
                            color="white"
                        />
                        <Text style={styles.githubUsername}>
                            @
                            {user.login.length > 16
                                ? user.login.substring(0, 16 - 3) + '...'
                                : user.login}
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
                            value={user.totalProjects}
                            countBy={1}
                            timing={(interval, progress) => {
                                // slow start, slow end
                                return (
                                    interval *
                                    (1 - Math.sin(Math.PI * progress)) *
                                    10
                                )
                            }}
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
    )
}

export default MemberCard

const styles = StyleSheet.create({
    mainView: {
        backgroundColor: Colors.secondaryBg,
        flexDirection: 'row',
        marginTop: 20,
        // marginBottom: 20,
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
        width: 225,
    },
    leftText: {
        marginLeft: 24,
    },
    fullName: {
        color: '#fcfcfc',
        fontSize: 18,
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
