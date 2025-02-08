import { StyleSheet, Text, View, } from 'react-native'
import React from 'react'

const Separator = () => {
    return (
        <View style={styles.separator}>
        </View>
    )
}

export default Separator

const styles = StyleSheet.create({
    separator: {
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0, 0, 0, 0.1)',
        marginVertical: 8,
    },
})
