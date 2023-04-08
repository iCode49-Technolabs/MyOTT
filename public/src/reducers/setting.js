import * as actionType from "../constants/actionTypes";

const settingReducer = (
	state = { settingData: null },
	action
) => {
	switch (action.type) {
		
			
				case actionType.VIEW_SOFT_SKILL:
					return { ...state, view_soft_skill: JSON.parse(action.payload)?.body };
					case actionType.VIEW_REVIEW:
						return { ...state, view_review: JSON.parse(action.payload)?.body };
						case actionType.VIEW_CATEGORY_OF_CONCERN:
						return { ...state, view_category_of_concern: JSON.parse(action.payload)?.body };
						case actionType.VIEW_STRATERGIES_ADJUSTMENTS:
						return { ...state, view_stratergies_adjustments: JSON.parse(action.payload)?.body };
						case actionType.NEW_STUDENT_DURATION:
						return { ...state, new_student_duration: JSON.parse(action.payload)?.body[0] };
						case actionType.SHARE_SCHOOL:
						return { ...state, share_school: JSON.parse(action.payload)?.body };
		default:
			return state;
	}
};

export default settingReducer;
