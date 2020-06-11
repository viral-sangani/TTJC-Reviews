import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import * as React from 'react'
import { Text } from 'react-native'

import TabBarIcon from '../components/TabBarIcon'
import HomeScreen from '../screens/HomeScreen'
import MemberScreen from '../screens/MemberScreen'
import ProjectsScreen from '../screens/ProjectsScreen'

const BottomTab = createBottomTabNavigator()
const INITIAL_ROUTE_NAME = 'Home'

export default function BottomTabNavigator({ navigation, route }) {
    return (
        <BottomTab.Navigator
            initialRouteName={INITIAL_ROUTE_NAME}
            lazy={false}
            tabBarOptions={{
                activeBackgroundColor: '#FF0A78',
                activeTintColor: '#fff',
            }}
        >
            <BottomTab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: 'Overview',
                    tabBarIcon: ({ focused }) => (
                        <TabBarIcon focused={focused} name="md-podium" />
                    ),
                }}
            />
            <BottomTab.Screen
                name="Member"
                component={MemberScreen}
                options={{
                    title: 'Members',
                    tabBarIcon: ({ focused }) => (
                        <TabBarIcon focused={focused} name="md-people" />
                    ),
                }}
            />
            <BottomTab.Screen
                name="Projects"
                component={ProjectsScreen}
                options={{
                    title: 'Projects',
                    tabBarIcon: ({ focused }) => (
                        <TabBarIcon
                            focused={focused}
                            name="md-checkmark-circle-outline"
                        />
                    ),
                }}
            />
        </BottomTab.Navigator>
    )
}

// function getHeaderTitle(route) {
//     const routeName =
//         route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME

//     switch (routeName) {
//         case 'Home':
//             return 'How to get started'
//         case 'Links':
//             return 'Links to learn more'
//     }
// }
