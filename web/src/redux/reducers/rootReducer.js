import { SET_NEAREST_CDD } from '../actions/actionTypes';

const initialState = {
    nearestCdd: {}
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEAREST_CDD:
            return {
                ...state,
                nearestCdd: action.cdd
            };
        default:
            return state;
    }
};

export default reducer;
