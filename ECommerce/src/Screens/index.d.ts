interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    offerPercentage?: number;
    discountPrice?: number;
    imageUrl: string;
    rating: number;
    ratingCount: number;
    tags: string[];
}
