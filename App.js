import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import * as React from 'react'
import { Platform, StatusBar, StyleSheet, View } from 'react-native'

import useCachedResources from './hooks/useCachedResources'
import BottomTabNavigator from './navigation/BottomTabNavigator'
import LinkingConfiguration from './navigation/LinkingConfiguration'
import OverviewDetailScreen from './screens/_OverviewDetailScreen'
import ProjectDetailScreen from './screens/_ProjectDetailScreen'
import BlogDetailScreen from './screens/_BlogDetailScreen'
import UserScreen from './screens/_UserScreen'
import { DataProvider } from './API/Main'
import ReviewPending from './screens/_ReviewPending'

const Stack = createStackNavigator()

export default function App(props) {
    const isLoadingComplete = useCachedResources()
    if (!isLoadingComplete) {
        return null
    } else {
        return (
            <DataProvider>
                <View style={styles.container}>
                    {Platform.OS === 'ios' && (
                        <StatusBar barStyle="dark-content" />
                    )}
                    <NavigationContainer linking={LinkingConfiguration}>
                        <Stack.Navigator screenOptions={{ headerShown: false }}>
                            <Stack.Screen
                                name="Root"
                                component={BottomTabNavigator}
                            />
                            <Stack.Screen
                                name="OverviewDetailScreen"
                                component={OverviewDetailScreen}
                            />
                            <Stack.Screen
                                name="UserScreen"
                                component={UserScreen}
                            />
                            <Stack.Screen
                                name="ProjectDetailScreen"
                                component={ProjectDetailScreen}
                            />
                            <Stack.Screen
                                name="BlogDetailScreen"
                                component={BlogDetailScreen}
                            />
                            <Stack.Screen
                                name="ReviewPending"
                                component={ReviewPending}
                            />
                        </Stack.Navigator>
                    </NavigationContainer>
                </View>
            </DataProvider>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
})
