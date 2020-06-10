import * as React from 'react'
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    TouchableOpacity,
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Colors from '../constants/Colors'
import { LinearGradient } from 'expo-linear-gradient'
import TopBar from '../components/TopBar'
import AnimateNumber from 'react-native-animate-number'
import { Avatar } from 'react-native-paper'
import { DataContext } from '../API/Main'

export default function HomeScreen({ navigation }) {
    const { projectData, lableData } = React.useContext(DataContext)

    const pressHandler = (title) => {
        navigation.navigate('OverviewDetailScreen', { title })
    }
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <TopBar />

            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.contentContainer}
            >
                <View style={styles.alertView}>
                    <Text style={styles.alertText}>
                        Projects are tracked via Issues from official repository
                        of Team Tanay Job Challenge
                        (2020.teamtanay.jobchallenge.dev).
                    </Text>
                </View>
                <View style={{ marginBottom: 30 }}>
                    <LinearGradient
                        colors={['#7A0168', '#FF0A78']}
                        style={styles.gradientView}
                    >
                        <View>
                            <Text style={styles.mainHeading}>
                                Total Projects
                            </Text>
                            <Text style={styles.subHeading}>in the review</Text>
                        </View>
                        <AnimateNumber
                            style={styles.counter}
                            value={projectData.length}
                            countBy={5}
                            timing={(interval, progress) => {
                                // slow start, slow end
                                return (
                                    interval *
                                    (1 - Math.sin(Math.PI * progress)) *
                                    10
                                )
                            }}
                        />
                    </LinearGradient>
                    <View style={styles.mainView}>
                        <View style={styles.leftView}>
                            <View>
                                <Text style={styles.mainHeading}>Projects</Text>
                                <Text style={styles.subHeading}>
                                    in the review by
                                </Text>
                            </View>
                        </View>
                        <View style={styles.rightView}>
                            <AnimateNumber
                                style={styles.counter}
                                value={100}
                                formatter={(val) => {
                                    return parseInt(val)
                                }}
                                timing="easeOut"
                            />
                            <Text style={styles.people}>People</Text>
                        </View>
                    </View>
                    <View style={styles.mainView}>
                        <View style={styles.leftView}>
                            <View>
                                <Text style={styles.mainHeading}>
                                    Projects Reviwed
                                </Text>
                                {/* <Text style={styles.subHeading}>
                                    in the review by
                                </Text> */}
                            </View>
                        </View>
                        <View style={styles.rightView}>
                            <AnimateNumber
                                style={styles.counter}
                                value={lableData.length}
                                formatter={(val) => {
                                    return parseInt(val)
                                }}
                                timing="easeOut"
                            />
                            {/* <Text style={styles.people}>People</Text> */}
                        </View>
                    </View>
                    <View style={styles.mainView}>
                        <View style={styles.leftView}>
                            <View>
                                <Text style={styles.mainHeading}>
                                    Review Pending
                                </Text>
                                {/* <Text style={styles.subHeading}>
                                    in the review by
                                </Text> */}
                            </View>
                        </View>
                        <View style={styles.rightView}>
                            <AnimateNumber
                                style={styles.counter}
                                value={100}
                                formatter={(val) => {
                                    return parseInt(val)
                                }}
                                timing="easeOut"
                            />
                            {/* <Text style={styles.people}>People</Text> */}
                        </View>
                    </View>
                    {/* <TouchableOpacity
                        onPress={() => pressHandler('1 Projects Completed by')}
                    >
                        <HomeListCard
                            projectCounter={OverviewData.oneProjects}
                            label={1}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => pressHandler('2 Projects Completed by')}
                    >
                        <HomeListCard
                            projectCounter={OverviewData.twoProjects}
                            label={2}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => pressHandler('3 Projects Completed by')}
                    >
                        <HomeListCard
                            projectCounter={OverviewData.threeProjects}
                            label={3}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => pressHandler('4 Projects Completed by')}
                    >
                        <HomeListCard
                            projectCounter={OverviewData.fourProjects}
                            label={4}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => pressHandler('5 Projects Completed by')}
                    >
                        <HomeListCard
                            projectCounter={OverviewData.fiveProjects}
                            label={5}
                        />
                    </TouchableOpacity> */}
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
    mainHeading: {
        fontFamily: 'AirbnbCerealBold',
        color: '#fcfcfc',
        fontSize: 24,
        marginLeft: 30,
    },
    subHeading: {
        fontFamily: 'AirbnbCerealBold',
        color: '#fcfcfc',
        fontSize: 14,
        marginLeft: 30,
    },
    counter: {
        fontSize: 30,
        fontFamily: 'AirbnbCerealBold',
        marginRight: 40,
        color: 'white',
    },
    alertView: {
        backgroundColor: 'yellow',
        height: 35,
        justifyContent: 'center',
    },
    alertText: {
        marginHorizontal: 20,
        fontFamily: 'AirbnbCerealMedium',
        fontSize: 10,
    },
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
        // marginLeft: 16,
    },
    rightView: {
        // marginRight: 24,
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
        marginRight: 20,
    },
})
