import { ORGANISE_FORMAL_ASSESSMENT } from '../constants/actionTypes';
import * as api from '../api/index.js';


export const organise_formal_assessment = (payload) => async (dispatch) => {
    console.log('payload', payload);
    try {
        const { data } = await api.organise_formal_assessment(payload);
        console.log('data', data);
        dispatch({ type: ORGANISE_FORMAL_ASSESSMENT, payload: data });
    } catch (error) {
        console.log(error);
    }
};