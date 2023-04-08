import * as actionType from "../constants/actionTypes";

const studentvoicechoiceReducer = (state = { authData: null }, action) => {
	switch (action.type) {
		
			case actionType.TEACHERNAMES:
			return { ...state, teacherNames: JSON.parse(action.payload)?.body };
		case actionType.STUDENTSVOICCHOICE:
            
			return { ...state, studentvoicechoice: JSON.parse(action.payload)?.body };
			case actionType.STUDENT:
            
			return { ...state, student: JSON.parse(action.payload)?.body[0] };
			case actionType.PARENT:
            
			return { ...state, parent: JSON.parse(action.payload)?.body[0] };
			case actionType.TEACHER:
            
			return { ...state, teacher: JSON.parse(action.payload)?.body[0] };
            case actionType.TEACHERTAGGING:
            
                return { ...state, teacherTagging: JSON.parse(action.payload)?.body };   
				case actionType.SOFT_SKILL_SUB_CATEGORY:
            
                return { ...state, sub_category: JSON.parse(action.payload)?.body };   
				case actionType.SOFT_SKILL_ROOT_CAUSE:
            
                return { ...state, root_cause: JSON.parse(action.payload)?.body };   
		default:
			return state;
	}
};

export default studentvoicechoiceReducer;
