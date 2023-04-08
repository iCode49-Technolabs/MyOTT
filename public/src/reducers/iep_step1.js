import * as actionType from "../constants/actionTypes";

const iep_step1Reducer = (state = { authData: null }, action) => {
	switch (action.type) {
		
			case actionType.IEP_STEP_1_STUDENTDETAILS:
			return { ...state, iep_step_1_studentdetails: JSON.parse(action.payload)?.body[0] };
		case actionType.IEP_STEP_1_IMPINFO:
            
			return { ...state, iep_step_1_impinfo: JSON.parse(action.payload)?.body[0] };
            case actionType.IEP_STEP_1_PERSONALINFO:
            
                return { ...state, iep_step_1_personalinfo: JSON.parse(action.payload)?.body[0] }; 
				case actionType.IEPID:
            
                return { ...state, iepid: JSON.parse(action.payload)?.body[0] };   
		default:
			return state;
	}
};

export default iep_step1Reducer;