import * as actionType from "../constants/actionTypes";

const iep_step2Reducer = (
	state = { iep_step2Data: null },
	action
) => {
	switch (action.type) {
		
			case actionType.SUPPORTSTAFF:
			return { ...state, support: JSON.parse(action.payload)?.body };
            case actionType.ASSESSMENT_TYPE:
                return { ...state, assessment_type: JSON.parse(action.payload)?.body };
				case actionType.IEP_STEP2:
					return { ...state, iep_step2: JSON.parse(action.payload)?.body.slice(-1)[0] };
		default:
			return state;
	}
};

export default iep_step2Reducer;
