import * as actionType from "../constants/actionTypes";

const iep_step3Reducer = (
	state = { iep_step2Data: null },
	action
) => {
	switch (action.type) {
		
			
				case actionType.IEP_STEP3:
					console.log(JSON.parse(action.payload)?.body)
					return { ...state, iep_step3: JSON.parse(action.payload)?.body  };
					case actionType.KEY_OUTCOME:
						
					return { ...state, key_outcome: JSON.parse(action.payload)?.body[0] };
					case actionType.KEY_OUTCOME_ID:
					
					return { ...state, key_outcome_id: JSON.parse(action.payload)?.body };
					case actionType.VIEW_STRATERGIES_ADJUSTMENTS:
					return { ...state, view_stratergies_adjustments: JSON.parse(action.payload)?.body };
					case actionType.NEGOTIATE_GOAL:
					return { ...state, negotiate_goal: JSON.parse(action.payload)?.body.slice(-1)[0] };
		default:
			return state;
	}
};

export default iep_step3Reducer;
