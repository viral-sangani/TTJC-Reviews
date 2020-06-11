import * as React from 'react'
import { StyleSheet, View, StatusBar } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Colors from '../constants/Colors'
import TopBar from '../components/TopBar'
import ProjectCard from '../components/Cards/ProjectCard'
import { DataContext } from '../API/Main'
import Loader from '../components/Loader'
import Spinner from 'react-native-loading-spinner-overlay'
import { Searchbar } from 'react-native-paper'
import MemberCard from '../components/Cards/MemberCard'

export default function SearchUserScreen({ navigation }) {
    const { userData } = React.useContext(DataContext)
    const [data, setData] = React.useState([])
    const [search, setSearch] = React.useState('')
    const onChangeSearch = (searchValue) => {
        const newData = userData.filter((item) => {
            if (item.name) {
                const itemData = item.name.toUpperCase()
                const textData = searchValue.toUpperCase()
                return itemData.indexOf(textData) > -1
            }
        })
        setSearch(searchValue)
        setData(newData)
    }
    return (
        <View style={styles.container}>
            <Searchbar
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={search}
                autoFocus={true}
            />
            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.contentContainer}
            >
                <View style={{ marginBottom: 20 }}>
                    {data
                        .slice(0)
                        .reverse()
                        .map((user) => (
                            <MemberCard
                                key={user.id}
                                id={user.id}
                                user={user}
                                navigation={navigation}
                                showCount={true}
                            />
                        ))}
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primaryBg,
    },
})
