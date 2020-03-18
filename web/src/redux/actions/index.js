import { SET_NEAREST_CDD } from './actionTypes';

export const setNearsetCdd = cdd => {
    return {
        type: SET_NEAREST_CDD,
        cdd
    };
};
