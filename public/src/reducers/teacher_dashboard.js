import * as actionType from "../constants/actionTypes";

const teacher_dashboardReducer = (
	state = { teacher_dashboardData: null },
	action
) => {
	switch (action.type) {
		
			
				case actionType.TEACHERASSESSMENTREQUEST:
					return { ...state, teacherassessmentrequest: JSON.parse(action.payload)?.body };
					case actionType.LESSON_UNIT:
					return { ...state, lesson_unit: JSON.parse(action.payload)?.body[0] };
					case actionType.STUDENTCONVODATA:
						return { ...state, studentconvodata: JSON.parse(action.payload)?.body };
						case actionType.STRATEGIESADJUSTMENT:
							return { ...state, strategiesadjustment: JSON.parse(action.payload)?.body };
							case actionType.VIEWKEYOUTCOME:
								return { ...state, viewkeyoutcome: JSON.parse(action.payload)?.body };
								case actionType.RECORDEVIDENCE:
									return { ...state, recordevidence: JSON.parse(action.payload)?.body };
								
		default:
			return state;
	}
};

export default teacher_dashboardReducer;
