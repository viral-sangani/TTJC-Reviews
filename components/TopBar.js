import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Avatar } from 'react-native-paper'
import {} from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import Colors from '../constants/Colors'

const TopBar = ({ title, secondary, navigation }) => {
    const backButton = () => {
        navigation.pop()
    }
    return (
        <React.Fragment>
            <View style={styles.topBar}>
                <View
                    style={{
                        marginHorizontal: secondary ? 4 : 16,
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}
                >
                    {secondary ? (
                        <>
                            <TouchableOpacity onPress={backButton}>
                                <Avatar.Icon
                                    size={48}
                                    style={{
                                        marginleft: 8,
                                        backgroundColor: Colors.primaryBg,
                                    }}
                                    color={Colors.primaryBg}
                                    icon={() => (
                                        <AntDesign
                                            name="leftcircleo"
                                            size={24}
                                            color="#fcfcfc"
                                        />
                                    )}
                                />
                            </TouchableOpacity>
                            <Text
                                style={{
                                    marginHorizontal: 12,
                                    fontSize: 20,
                                    color: '#fcfcfc',
                                    fontFamily: 'AirbnbCerealBold',
                                }}
                            >
                                {title}
                            </Text>
                        </>
                    ) : (
                        <>
                            <Avatar.Image
                                size={32}
                                source={require('../assets/images/logo.jpeg')}
                            />
                            <Text style={styles.appName}>TTJC Analytics</Text>
                        </>
                    )}
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
