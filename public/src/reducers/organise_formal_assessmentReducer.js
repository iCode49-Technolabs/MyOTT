import * as actionType from "../constants/actionTypes";

const organise_formal_assessmentReducer = (
	state = { organise_formal_assessmentData: null },
	action
) => {
	switch (action.type) {

		case actionType.ORGANISE_FORMAL_ASSESSMENT:
			return { ...state, organise_formal_assessment: JSON.parse(action.payload)?.body };
		default:
			return state;
	}
};

export default organise_formal_assessmentReducer;