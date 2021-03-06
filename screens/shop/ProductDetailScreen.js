import React from 'react';
import { ScrollView, View, Text, Image, Button, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

// constants
import Colors from '../../constants/Colors';

const ProductDetailScreen = props => {
    const productId = props.navigation.getParam('productId');
    const selectProduct = useSelector(state => state.products.availableProducts.find(prod => prod.id === productId));
    return <ScrollView>
        <Image style={styles.image} source={{ uri: selectProduct.imageUrl }} />
        <View style={styles.action}>
            <Button color={Colors.primary} title="Add to cart" onPress={() => { }} />
        </View>
        <Text style={styles.price}>${selectProduct.price.toFixed(2)}</Text>
        <Text style={styles.description}>{selectProduct.description}</Text>
    </ScrollView>
};

ProductDetailScreen.navigationOptions = navData => {
    return {
        headerTitle: navData.navigation.getParam('productTitle')
    }
};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300
    },
    action: {
        marginVertical: 10,
        alignItems: 'center'
    },
    price: {
        fontSize: 20,
        color: '#888888',
        textAlign: 'center',
        marginVertical: 20,
        fontFamily: 'open-sans-bold'
    },
    description: {
        fontSize: 14,
        textAlign: 'center',
        marginHorizontal: 20,
        fontFamily: 'open-sans'
    }
});

export default ProductDetailScreen;