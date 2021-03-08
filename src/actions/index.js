import {
    SET_CURRENT_USER,
    TOGGLE_CART_HIDDEN
} from  './types';


export const setCurrentUser = user => ({
    type: SET_CURRENT_USER,
    payload: user
});


export const toggleCartHidden = () => ({
    type: TOGGLE_CART_HIDDEN
});