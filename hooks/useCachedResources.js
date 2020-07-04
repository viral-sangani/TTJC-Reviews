import Ionicons from 'react-native-vector-icons/Ionicons'
import * as Font from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import * as React from 'react'
import { generateDataStructure } from '../API/Main'

function cacheFonts(fonts) {
    return fonts.map((font) => Font.loadAsync(font))
}

export default function useCachedResources() {
    const [isLoadingComplete, setLoadingComplete] = React.useState(false)

    // Load any resources or data that we need prior to rendering the app
    React.useEffect(() => {
        async function loadResourcesAndDataAsync() {
            try {
                SplashScreen.preventAutoHideAsync()

                // Load fonts
                await Font.loadAsync({
                    ...Ionicons.font,
                    // 'space-mono': require('../assets/fonts/SpaceMono-Regular.ttf'),
                    // AirbnbCerealBold: require('../assets/fonts/AirbnbCerealBold.ttf'),
                    // AirbnbCerealMedium: require('../assets/fonts/AirbnbCerealMedium.ttf'),
                    // AirbnbCerealBook: require('../assets/fonts/AirbnbCerealBook.ttf'),
                })
                await generateDataStructure()
            } catch (e) {
                // We might want to provide this error information to an error reporting service
                console.warn(e)
            } finally {
                setLoadingComplete(true)
                SplashScreen.hideAsync()
            }
        }

        loadResourcesAndDataAsync()
    }, [])

    return isLoadingComplete
}
