import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'
import ProductItem from '../components/ProductItem'
import Separator from '../components/Separator'
import { PRODUCTS_LIST } from '../Data/constants'

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>

const Home = ({ navigation }: HomeProps) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={PRODUCTS_LIST}
                keyExtractor={item => item.id.toString()}
                ItemSeparatorComponent={() => <Separator />}
                renderItem={({ item }) => (
                    <Pressable onPress={() => {
                        navigation.navigate('Details', { product: item })
                    }}
                    >
                        <ProductItem product={item} />
                    </Pressable>
                )}
            />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
        paddingVertical: 8,
    },
})
