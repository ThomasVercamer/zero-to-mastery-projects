import {createSelector} from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector([selectCart], cart => cart.cartItems);

export const selectIsCartHidden = createSelector([selectCart], cart => cart.isCartHidden);

export const selectCartItemsCount = createSelector([selectCartItems], items => items.reduce((count, item) => count + item.quantity, 0));