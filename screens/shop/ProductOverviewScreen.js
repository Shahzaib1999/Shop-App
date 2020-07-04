import React from 'react';
import { FlatList, Text } from 'react-native';
import { useSelector } from 'react-redux';

// components
import ProductItem from '../../components/shop/ProductItem';

const ProductOverviewScreen = props => {
    const products = useSelector(state => state.products.availibleProducts);
    return <FlatList data={products}
        keyExtractor={item => item.id}
        renderItem={itemData => (
            <ProductItem
                image={itemData.item.imageUrl}
                title={itemData.item.title}
                price={itemData.item.price}
                onViewDetail={() => { }}
                onAddToCart={() => { }}
            />
        )}
    />
}

export default ProductOverviewScreen;