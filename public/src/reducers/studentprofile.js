
import * as actionType from "../constants/actionTypes";

const studentprofileReducer = (
	state = { studentprofile: null },
	action
) => {
	switch (action.type) {
		
		case actionType.STUDENT:
            
		return { ...state, student: JSON.parse(action.payload)?.body[0] };
		case actionType.PARENT:
		
		return { ...state, parent: JSON.parse(action.payload)?.body[0] };
		case actionType.TEACHER:
		
		return { ...state, teacher: JSON.parse(action.payload)?.body[0] };
			case actionType.TEACHERCOMMENTS:
				return { ...state, teachercomments: JSON.parse(action.payload)?.body };
				case actionType.STUDENT_PROFILE:
				return { ...state, student_profile: JSON.parse(action.payload)?.body };
				case actionType.REVIEW_PAST_IEP:
				return { ...state, review_past_iep: JSON.parse(action.payload)?.body };
				case actionType.DOCUMENT_REPOSITRY:
					return { ...state, document_repositry: JSON.parse(action.payload)?.body };
				
		default:
			return state;
	}
};

export default studentprofileReducer;
