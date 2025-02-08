import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'

type DetailsProps = NativeStackScreenProps<RootStackParamList, 'Details'>
const Details = ({ route }: DetailsProps) => {
    const { product } = route.params
    return (
        <ScrollView style={styles.container}>
            <View style={styles.content}>
                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: product.imageUrl }}
                        style={styles.image}
                        resizeMode="contain"  // Changed to contain
                    />
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.name}>{product.name}</Text>
                    <View style={styles.priceRow}>
                        <View style={styles.priceInfo}>
                            <Text style={styles.originalPrice}>₹{product.price}</Text>
                            <View style={styles.discountContainer}>
                                <Text style={styles.discountPrice}>₹{product.discountPrice}</Text>
                                <Text style={styles.offerBadge}>{product.offerPercentage}% OFF</Text>
                            </View>
                        </View>
                        <View style={styles.ratingContainer}>
                            <Text style={styles.rating}>★ {product.rating}</Text>
                            <Text style={styles.ratingCount}>({product.ratingCount} reviews)</Text>
                        </View>
                    </View>
                    <View style={styles.descriptionContainer}>
                        <Text style={styles.sectionTitle}>Description</Text>
                        <Text style={styles.description}>{product.description}</Text>
                    </View>
                    <View style={styles.tagsContainer}>
                        <Text style={styles.sectionTitle}>Tags</Text>
                        <View style={styles.tagsList}>
                            {product.tags.map(tag => (
                                <View key={tag} style={styles.tagBadge}>
                                    <Text style={styles.tagText}>{tag}</Text>
                                </View>
                            ))}
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
    },
    content: {
        flex: 1,
    },
    imageContainer: {
        width: '100%',
        height: 350,
        backgroundColor: '#f8f8f8',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '90%',
        height: '90%',
    },
    infoContainer: {
        padding: 16,
        backgroundColor: 'white',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        marginTop: -20,
    },
    name: {
        fontSize: 24,
        fontWeight: '700',
        color: '#1a1a1a',
        marginBottom: 16,
    },
    priceRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 20,
    },
    priceInfo: {
        flex: 1,
    },
    originalPrice: {
        fontSize: 18,
        color: '#666',
        textDecorationLine: 'line-through',
        marginBottom: 4,
    },
    discountContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    discountPrice: {
        fontSize: 24,
        fontWeight: '700',
        color: '#ff3b30',
        marginRight: 8,
    },
    offerBadge: {
        backgroundColor: '#ff3b30',
        color: 'white',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
        fontSize: 14,
        fontWeight: '600',
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rating: {
        fontSize: 18,
        fontWeight: '600',
        color: '#ff9500',
        marginRight: 4,
    },
    ratingCount: {
        fontSize: 14,
        color: '#666',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#1a1a1a',
        marginBottom: 8,
    },
    descriptionContainer: {
        marginVertical: 20,
    },
    description: {
        fontSize: 16,
        color: '#444',
        lineHeight: 24,
    },
    tagsContainer: {
        marginBottom: 20,
    },
    tagsList: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    tagBadge: {
        backgroundColor: '#f0f0f0',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 16,
        marginRight: 8,
        marginBottom: 8,
    },
    tagText: {
        color: '#666',
        fontSize: 14,
    },
})

export default Details
