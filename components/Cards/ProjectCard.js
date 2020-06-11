import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native'
import Colors from '../../constants/Colors'
import { Avatar } from 'react-native-paper'
import { AntDesign } from '@expo/vector-icons'

const maxlimit = 75

const ProjectCard = ({ project, navigation }) => {
    const handlePress = () => {
        navigation.navigate('ProjectDetailScreen', { project })
    }
    var showTick = false
    const checkReview = (labels) => {
        if (labels.length > 0) {
            labels.map((label) => {
                if (label.node.name === 'Reviewed-By-Mentor') {
                    showTick = true
                    return
                } else {
                    showTick = false
                    return
                }
            })
        } else {
            showTick = false
            return
        }
    }
    checkReview(project.labels.edges)
    return (
        <TouchableOpacity onPress={handlePress}>
            <View style={styles.mainView}>
                <View style={{ width: 260 }}>
                    <View style={styles.leftText}>
                        <Text style={styles.projectName}>
                            {project.title.length > maxlimit
                                ? project.title.substring(0, maxlimit - 3) +
                                  '...'
                                : project.title}{' '}
                            {showTick && (
                                <AntDesign
                                    style={{ paddingLeft: 12 }}
                                    name="checkcircle"
                                    size={16}
                                    color="#0cff00"
                                />
                            )}
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
                            <Text
                                style={styles.githubUsername}
                                onPress={() => {
                                    Linking.openURL(
                                        `https://www.github.com/${project.author.login}`
                                    )
                                }}
                            >
                                @
                                {project.author.login &&
                                project.author.login.length > 16
                                    ? project.author.login.substring(
                                          0,
                                          16 - 3
                                      ) + '...'
                                    : project.author.login}
                            </Text>
                        </View>
                        <Text style={styles.projectDate}>
                            Name:{' '}
                            {project.author.name &&
                            project.author.name.length > 16
                                ? project.author.name.substring(0, 16 - 3) +
                                  '...'
                                : project.author.name}{' '}
                        </Text>
                        <Text style={styles.projectDate}>Date: 04/05/2000</Text>
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
        height: 125,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    projectName: {
        fontFamily: 'AirbnbCerealMedium',
        fontSize: 16,
        color: '#fcfcfc',
    },
    projectDate: {
        marginTop: 5,
        fontFamily: 'AirbnbCerealMedium',
        fontSize: 13,
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
