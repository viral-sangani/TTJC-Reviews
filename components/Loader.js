import React from 'react'
import { View, Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Bars } from 'react-native-loader'

export default function Loader() {
    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <LinearGradient
                colors={['#7A0168', '#FF0A78']}
                style={{
                    flexDirection: 'column',
                    width: '80%',
                    height: 250,
                    borderRadius: 30,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        marginHorizontal: 50,
                    }}
                >
                    <Bars size={10} color="#FDAAFF" />
                    <Text
                        style={{
                            fontFamily: 'AirbnbCerealBold',
                            color: '#fcfcfc',
                            fontSize: 24,
                            marginLeft: 30,
                        }}
                    >
                        Loading...
                    </Text>
                </View>
                <Text
                    style={{
                        fontFamily: 'AirbnbCerealBold',
                        color: '#fcfcfc',
                        fontSize: 12,
                        marginTop: 30,
                    }}
                >
                    Fetching data from GITHUB
                </Text>
                <Text
                    style={{
                        fontFamily: 'AirbnbCerealBold',
                        color: '#fcfcfc',
                        fontSize: 12,
                    }}
                >
                    Please wait...
                </Text>
            </LinearGradient>
        </View>
    )
}
