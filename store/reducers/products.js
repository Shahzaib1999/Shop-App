import PRODUCTS from '../../models/product'

const initialState = {
    availibleProducts: PRODUCTS,
    userProducts: PRODUCTS.filter(prod => prod.ownerId = 'u1');
}

export default (state = initialState, action) => {
    return state;
}