import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import { Platform } from 'react-native';


// Screens
import ProductOverviewScreen from '../screens/shop/ProductOverviewScreen';

// colors
import Colors from '../constants/Colors';

const ProductsNavigator = createStackNavigator({
    ProductOverview: ProductOverviewScreen
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
    }
});

export default createAppContainer(ProductsNavigator);