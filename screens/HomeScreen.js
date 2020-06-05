import * as React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Colors from '../constants/Colors'
import { LinearGradient } from 'expo-linear-gradient'
import TopBar from '../components/TopBar'
import AnimateNumber from 'react-native-animate-number'
import HomeListCard from '../components/Cards/HomeListCard'

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <TopBar />
            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.contentContainer}
            >
                <View style={{ marginBottom: 30 }}>
                    <LinearGradient
                        colors={['#7A0168', '#FF0A78']}
                        style={styles.gradientView}
                    >
                        <Text style={styles.totalProject}>
                            Total Projects :
                        </Text>
                        <AnimateNumber
                            style={styles.counter}
                            value={43}
                            formatter={(val) => {
                                return parseInt(val)
                            }}
                            timing="easeOut"
                        />
                    </LinearGradient>
                    <HomeListCard projectCounter={25} label={5} />
                    <HomeListCard projectCounter={12} label={4} />
                    <HomeListCard projectCounter={32} label={3} />
                    <HomeListCard projectCounter={80} label={2} />
                    <HomeListCard projectCounter={121} label={1} />
                </View>
            </ScrollView>
        </View>
    )
}

HomeScreen.navigationOptions = {
    header: null,
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primaryBg,
    },
    gradientView: {
        flexDirection: 'row',
        marginTop: 20,
        marginHorizontal: 20,
        height: 80,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    totalProject: {
        fontFamily: 'AirbnbCerealBold',
        color: '#fcfcfc',
        fontSize: 24,
        marginLeft: 30,
    },
    counter: {
        fontSize: 30,
        fontFamily: 'AirbnbCerealBold',
        marginRight: 40,
        color: 'white',
    },
})
