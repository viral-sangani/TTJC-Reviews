import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Colors from '../../constants/Colors'
import { Avatar } from 'react-native-paper'
import { AntDesign } from '@expo/vector-icons'

const mytextvar =
    'Blazing fast blog built with Gatsby and hosted serverlessly using AWS Lambda and S3'
const maxlimit = 50

const ProjectCard = ({ navigation }) => {
    const handlePress = (data) => {
        navigation.navigate('ProjectDetailScreen', { data })
    }

    return (
        <TouchableOpacity onPress={() => handlePress('viral')}>
            <View style={styles.mainView}>
                <View style={{ width: 260 }}>
                    <View style={styles.leftText}>
                        <Text style={styles.projectName}>
                            {mytextvar.length > maxlimit
                                ? mytextvar.substring(0, maxlimit - 3) + '...'
                                : mytextvar}
                        </Text>
                        <View style={styles.githubView}>
                            <Avatar.Icon
                                size={16}
                                style={styles.githubIcon}
                                color={Colors.primaryBg}
                                icon={() => (
                                    <AntDesign
                                        name="github"
                                        size={16}
                                        color="#fcfcfc"
                                    />
                                )}
                            />
                            <Text style={styles.githubUsername}>
                                viral-sangani
                            </Text>
                        </View>
                    </View>
                </View>
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
            </View>
        </TouchableOpacity>
    )
}

export default ProjectCard

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
    projectName: {
        fontFamily: 'AirbnbCerealMedium',
        fontSize: 16,
        color: '#fcfcfc',
    },
    leftText: {
        marginLeft: 18,
    },
    githubView: {
        flexDirection: 'row',
        marginTop: 4,
    },
    githubIcon: {
        marginRight: 8,
        backgroundColor: Colors.primaryBg,
    },
    githubUsername: {
        fontFamily: 'AirbnbCerealMedium',
        fontSize: 13,
        color: '#FF0A78',
    },
})
