import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import themeReducer from './themeReducer';

let reducers = combineReducers({
    cartReducer: cartReducer,
    themeReducer: themeReducer
});

const rootReducer = (state, action) => {
    return reducers(state, action);
};

export default rootReducer;