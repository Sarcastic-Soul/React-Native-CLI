import { Image, StyleSheet, Text, View } from 'react-native'
import React, { PropsWithChildren } from 'react'

type ProductProps = PropsWithChildren<{
    product: Product
}>
// ProductItem.tsx
const ProductItem = ({ product }: ProductProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri: product.imageUrl }}
                    style={styles.image}
                    resizeMode="contain"
                />
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.name} numberOfLines={2}>{product.name}</Text>
                <View style={styles.detailsContainer}>
                    <View style={styles.priceContainer}>
                        <Text style={styles.originalPrice}>${product.price}</Text>
                        <View style={styles.discountBadge}>
                            <Text style={styles.discountPrice}>${product.discountPrice}</Text>
                        </View>
                    </View>
                    <View style={styles.ratingContainer}>
                        <Text style={styles.rating}>★ {product.rating}</Text>
                        <Text style={styles.ratingCount}>({product.ratingCount})</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 12,
        backgroundColor: 'white',
        borderRadius: 12,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        marginVertical: 4,
        marginHorizontal: 8,
    },
    imageContainer: {
        width: 100,
        height: 100,
        backgroundColor: '#f8f8f8',
        borderRadius: 8,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '90%',
        height: '90%',
    },
    contentContainer: {
        flex: 1,
        marginLeft: 12,
        justifyContent: 'space-between',
    },
    name: {
        fontSize: 16,
        fontWeight: '600',
        color: '#1a1a1a',
        marginBottom: 8,
        flexShrink: 1,
    },
    detailsContainer: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    priceContainer: {
        marginBottom: 4,
    },
    originalPrice: {
        fontSize: 14,
        fontWeight: '700',
        color: '#666',
        textDecorationLine: 'line-through',
        marginBottom: 2,
    },
    discountBadge: {
        backgroundColor: '#ff3b30',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
        alignSelf: 'flex-start',
    },
    discountPrice: {
        color: 'white',
        fontWeight: '700',
        fontSize: 14,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4,
    },
    rating: {
        fontSize: 14,
        fontWeight: '600',
        color: '#ff9500',
    },
    ratingCount: {
        fontSize: 14,
        color: '#666',
        marginLeft: 4,
    },
})

export default ProductItem
