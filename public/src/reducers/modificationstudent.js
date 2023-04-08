import * as actionType from "../constants/actionTypes";

const modificationstudentReducer = (
	state = { modificationstudentData: null },
	action
) => {
	switch (action.type) {
		
			
				case actionType.MODIFICATIONSTUDENT:
					return { ...state, modificationstudent: JSON.parse(action.payload)?.body  };
					
		default:
			return state;
	}
};

export default modificationstudentReducer;
