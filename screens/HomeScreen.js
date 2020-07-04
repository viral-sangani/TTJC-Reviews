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
import { DataContext } from '../API/Main'
import Loader from '../components/Loader'
import Spinner from 'react-native-loading-spinner-overlay'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function HomeScreen({ navigation }) {
    const { projectData, userData, lableData, reloadData } = React.useContext(
        DataContext
    )
    const [loading, setLoading] = React.useState(false)
    const handleReload = async () => {
        setLoading(true)
        await reloadData()
        setLoading(false)
    }
    // console.log('reviwedData', reviwedData.length)
    // console.log('notReviwedData', notReviwedData.length)
    return (
        <View style={styles.container}>
            <Spinner
                visible={loading}
                size="large"
                textContent={'Loading Please wait...'}
                textStyle={{ color: '#FFF' }}
                children={<Loader />}
            />
            <StatusBar barStyle="light-content" />
            <TopBar navigation={navigation} handleReloadData={handleReload} />

            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.contentContainer}
            >
                {/* <View style={styles.alertView}>
                    <Text style={styles.alertText}>
                        Projects are tracked via Issues from official repository
                        of Team Tanay Job Challenge
                        (2020.teamtanay.jobchallenge.dev).
                    </Text>
                </View> */}
                <View style={{ marginBottom: 30 }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Projects')}
                    >
                        <LinearGradient
                            colors={['#7A0168', '#FF0A78']}
                            style={styles.gradientView}
                        >
                            <View>
                                <Text style={styles.mainHeading}>
                                    Total Projects
                                </Text>
                                <Text style={styles.subHeading}>
                                    in the review
                                </Text>
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
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Member')}
                    >
                        <View style={styles.mainView}>
                            <View style={styles.leftView}>
                                <View>
                                    <Text style={styles.mainHeading}>
                                        Active Users
                                    </Text>
                                    <Text style={styles.subHeading}>
                                        who have submitted projects
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.rightView}>
                                <AnimateNumber
                                    style={styles.counter}
                                    value={userData.length}
                                    formatter={(val) => {
                                        return parseInt(val)
                                    }}
                                    timing="easeOut"
                                />
                                <Text style={styles.people}>People</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('ProjectReview')}
                    >
                        <View style={styles.mainView}>
                            <View style={styles.leftView}>
                                <View>
                                    <Text style={styles.mainHeading}>
                                        Projects Reviewed
                                    </Text>
                                    <Text style={styles.subHeading}>
                                        with label - "Reviewed-By-Mentor"
                                    </Text>
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
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate('ProjectNotReviewed')
                        }
                    >
                        <View style={styles.mainView}>
                            <View style={styles.leftView}>
                                <View>
                                    <Text style={styles.mainHeading}>
                                        Pending Reviews
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.rightView}>
                                <AnimateNumber
                                    style={styles.counter}
                                    value={
                                        projectData.length - lableData.length
                                    }
                                    formatter={(val) => {
                                        return parseInt(val)
                                    }}
                                    timing="easeOut"
                                />
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        marginRight: 50,
                        marginLeft: 20,
                    }}
                >
                    <MaterialCommunityIcons
                        name="information-outline"
                        size={24}
                        color="white"
                    />
                    <Text style={styles.alertText}>
                        Projects are tracked via Issues from official repository
                        of Team Tanay Job Challenge.
                    </Text>
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
        fontSize: 13,
        marginLeft: 30,
    },
    counter: {
        fontSize: 30,
        fontFamily: 'AirbnbCerealBold',
        marginRight: 40,
        color: 'white',
    },
    alertText: {
        marginLeft: 10,
        fontFamily: 'AirbnbCerealMedium',
        fontSize: 12,
        color: '#fcfcfc',
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
