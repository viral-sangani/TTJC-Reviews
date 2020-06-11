import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Colors from '../../constants/Colors'
import Markdown from 'react-native-markdown-display'

const BlogDetailCard = ({ projectCounter, showCount, navigation }) => {
    const handlePress = (title) => {
        navigation.navigate('UserScreen', { title })
    }
    return (
        <View style={styles.mainView}>
            <View style={styles.content}>
                <View style={{}}>
                    <Text style={styles.projectHeadingLabe}>Title:</Text>
                    <Text style={styles.projectContent}>
                        Blazing fast blog built with Gatsby and hosted
                        serverlessly using AWS Lambda and S3
                    </Text>
                    <Text style={styles.projectHeadingLabe}>Description:</Text>
                    <View style={{ marginHorizontal: 16 }}>
                        <Markdown style={MarkdownStyles}>{data}</Markdown>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default BlogDetailCard

const styles = StyleSheet.create({
    mainView: {
        backgroundColor: Colors.secondaryBg,
        marginVertical: 20,
        marginHorizontal: 20,
        borderRadius: 30,
        justifyContent: 'space-between',
    },
    content: { marginBottom: 16 },
    projectNumber: {
        fontFamily: 'AirbnbCerealMedium',
        fontSize: 18,
        color: '#fcfcfc',
        marginHorizontal: 18,
        marginVertical: 8,
    },
    projectHeadingLabe: {
        fontFamily: 'AirbnbCerealMedium',
        marginHorizontal: 16,
        color: '#fcfcfc',
        marginTop: 12,
        fontSize: 18,
        textDecorationLine: 'underline',
    },
    projectContent: {
        fontFamily: 'AirbnbCerealMedium',
        marginHorizontal: 16,
        color: '#fcfcfc',
        marginTop: 4,
    },
    heading6: {
        color: '#fcfcfc',
    },
})

export const MarkdownStyles = {
    // The main container
    body: {
        color: '#fcfcfc',
        fontFamily: 'AirbnbCerealMedium',
    },

    // Headings
    heading1: {
        flexDirection: 'row',
        fontSize: 32,
    },
    heading2: {
        flexDirection: 'row',
        fontSize: 24,
    },
    heading3: {
        flexDirection: 'row',
        fontSize: 18,
    },
    heading4: {
        flexDirection: 'row',
        fontSize: 16,
    },
    heading5: {
        flexDirection: 'row',
        fontSize: 13,
    },
    heading6: {
        flexDirection: 'row',
        fontSize: 11,
    },

    // Horizontal Rule
    hr: {
        backgroundColor: '#000000',
        height: 1,
    },

    // Emphasis
    strong: {
        fontWeight: 'bold',
    },
    em: {
        fontStyle: 'italic',
    },
    s: {
        textDecorationLine: 'line-through',
    },

    // Blockquotes
    blockquote: {
        paddingHorizontal: 14,
        paddingVertical: 4,
        backgroundColor: '#CCCCCC',
    },

    // Lists
    bullet_list: {},
    ordered_list: {},
    list_item: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    // @pseudo class, does not have a unique render rule
    bullet_list_icon: {
        marginLeft: 10,
        marginRight: 10,
        ...Platform.select({
            android: {
                marginTop: 5,
            },
            ios: {
                marginTop: 0,
            },
            default: {
                marginTop: 0,
            },
        }),
        ...Platform.select({
            ios: {
                lineHeight: 36,
            },
            android: {
                lineHeight: 30,
            },
            default: {
                lineHeight: 36,
            },
        }),
    },
    // @pseudo class, does not have a unique render rule
    bullet_list_content: {
        flex: 1,
        flexWrap: 'wrap',
    },
    // @pseudo class, does not have a unique render rule
    ordered_list_icon: {
        marginLeft: 10,
        marginRight: 10,
        ...Platform.select({
            android: {
                marginTop: 4,
            },
            default: {
                marginTop: 0,
            },
        }),
        ...Platform.select({
            ios: {
                lineHeight: 36,
            },
            android: {
                lineHeight: 30,
            },
            default: {
                lineHeight: 36,
            },
        }),
    },
    // @pseudo class, does not have a unique render rule
    ordered_list_content: {
        flex: 1,
        flexWrap: 'wrap',
    },

    // Code
    code_inline: {
        borderWidth: 1,
        borderColor: '#CCCCCC',
        backgroundColor: '#f5f5f5',
        padding: 10,
        borderRadius: 4,
    },
    code_block: {
        borderWidth: 1,
        borderColor: '#CCCCCC',
        backgroundColor: '#f5f5f5',
        padding: 10,
        borderRadius: 4,
    },
    fence: {
        borderWidth: 1,
        borderColor: '#CCCCCC',
        backgroundColor: '#f5f5f5',
        padding: 10,
        borderRadius: 4,
    },

    // Tables
    table: {
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 3,
    },
    thead: {},
    tbody: {},
    th: {
        flex: 1,
        padding: 5,
    },
    tr: {
        borderBottomWidth: 1,
        borderColor: '#000000',
        flexDirection: 'row',
    },
    td: {
        flex: 1,
        padding: 5,
    },

    // Links
    link: {
        textDecorationLine: 'underline',
    },
    blocklink: {
        flex: 1,
        borderColor: '#000000',
        borderBottomWidth: 1,
    },

    // Images
    image: {
        flex: 1,
    },

    // Text Output
    text: {},
    textgroup: {},
    paragraph: {
        marginTop: 10,
        marginBottom: 10,
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        width: '100%',
    },
    hardbreak: {
        width: '100%',
        height: 1,
    },
    softbreak: {},

    // Believe these are never used but retained for completeness
    pre: {},
    inline: {},
    span: {},
}
