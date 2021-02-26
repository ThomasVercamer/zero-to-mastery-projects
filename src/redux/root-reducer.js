import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

const persistConfig = {
    key: 'root', // start from the root reducer
    storage: storageSession,
    whitelist: ['cart'] // names of the reducers that we want to store
};

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);