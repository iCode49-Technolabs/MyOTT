import * as actionType from "../constants/actionTypes";

const school_systemadminReducer = (
	state = { school_systemadminData: null },
	action
) => {
	switch (action.type) {
		case actionType.TOTALSTUDENT:
			return { ...state, totalStudent: JSON.parse(action.payload)?.body };

		case actionType.ACTIVESTUDENT:
			return { ...state, activeStudent: JSON.parse(action.payload)?.body };
		case actionType.COORDINATOR:
			return { ...state, coordinator: JSON.parse(action.payload)?.body };
		case actionType.STUDENT:
			return { ...state, student: JSON.parse(action.payload)?.body };
		case actionType.TEACHER:
			return { ...state, teacher: JSON.parse(action.payload)?.body };
	
		case actionType.ASSIGNTEACHERCOORDINATOR:
			return {
				...state,
				assignteachercoordinator: JSON.parse(action.payload)?.body,
			};
			case actionType.STUDENTDETAILS:
				return { ...state, studentdetails: JSON.parse(action.payload).body };
		default:
			return state;
	}
};

export default school_systemadminReducer;
