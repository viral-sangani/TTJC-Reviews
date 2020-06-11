import * as React from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Colors from '../constants/Colors'
import { DataContext } from '../API/Main'
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
                    <FlatList
                        data={data.slice(0).reverse()}
                        renderItem={({ item }) => {
                            return (
                                <MemberCard
                                    user={item}
                                    navigation={navigation}
                                    showCount={true}
                                />
                            )
                        }}
                        keyExtractor={(item) => item.id}
                    />
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
