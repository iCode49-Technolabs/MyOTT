import * as actionType from "../constants/actionTypes";

const user_profile_dataReducer = (
    state = { user_profile_dataReducer: null },
    action
) => {
    switch (action.type) {

        case actionType.USER_PROFILE_DATA:
            return {
                ...state, userProfile: JSON.parse(action.payload)?.body
            };
        default:
            return state;
    }
};

export default user_profile_dataReducer;