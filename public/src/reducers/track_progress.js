import * as actionType from "../constants/actionTypes";

const track_progressReducer = (
	state = { track_progressData: null },
	action
) => {
	switch (action.type) {

		case actionType.PROGRESSDATA:
			return { ...state, progressdata: JSON.parse(action.payload)?.body };
		default:
			return state;
	}
};

export default track_progressReducer;