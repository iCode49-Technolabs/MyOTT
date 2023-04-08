import * as actionType from "../constants/actionTypes";

const subject_requiring_adjustmentReducer = (state = { subject_requiring_adjustmentData: null }, action) => {
	switch (action.type) {
		
			case actionType.VIEW_SUBJECT:
			return { ...state,view_subject: JSON.parse(action.payload)?.body };
		
		default:
			return state;
	}
};

export default subject_requiring_adjustmentReducer;
