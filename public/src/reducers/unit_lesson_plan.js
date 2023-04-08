import * as actionType from "../constants/actionTypes";

const unit_lesson_planReducer = (
	state = { unit_lesson_planData: null },
	action
) => {
	switch (action.type) {

		case actionType.LESSONPLAN:
			return { ...state, lessonplan: JSON.parse(action.payload)?.body };
		default:
			return state;
	}
};

export default unit_lesson_planReducer;