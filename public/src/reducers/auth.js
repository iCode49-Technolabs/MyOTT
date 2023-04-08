import * as actionType from "../constants/actionTypes";

const authReducer = (state = { authData: null }, action) => {
	switch (action.type) {
		case actionType.VALIDATE:
			return action.payload;

		case actionType.SCHOOLS:
			return { ...state, school: JSON.parse(action.payload) };
		case actionType.CURRICULUM:
			return { ...state, curriculums: JSON.parse(action.payload) };
		// case actionType.SCHOOLONBOARDING:
		// 	return { ...state, schoolonboarding: JSON.parse(action.payload) };
		case actionType.STUDENTDETAILS:
			console.log(JSON.parse(action.payload).body)
			return { ...state, studentdetails: JSON.parse(action.payload).body };
			
			case actionType.UPCOMINGREVIEWS:
				console.log(JSON.parse(action.payload).body)
				return { ...state, studentdetails: JSON.parse(action.payload).body };
				case actionType.OVERDUEREVIEWS:
					console.log(JSON.parse(action.payload).body)
					return { ...state, studentdetails: JSON.parse(action.payload).body };
					case actionType.VIEWALLREVIEW:
						console.log(JSON.parse(action.payload).body)
						return { ...state, studentdetails: JSON.parse(action.payload).body };
					



		case actionType.ROLES:
			return { ...state, role: JSON.parse(action.payload) };
		case actionType.SCHOOLSCOUNT:
			return { ...state, schoolscount: JSON.parse(action.payload)?.body };
		case actionType.USERSCOUNT:
			console.log(JSON.parse(action.payload)?.body);
			return { ...state, userscount: JSON.parse(action.payload)?.body };
		case actionType.STUDENTSCOUNT:
			console.log(JSON.parse(action.payload)?.body);
			return { ...state, studentscount: JSON.parse(action.payload)?.body };
		case actionType.TEACHERSCOUNT:
			console.log(JSON.parse(action.payload)?.body);
			return { ...state, teacherscount: JSON.parse(action.payload)?.body };
		case actionType.COORDINATORSCOUNT:
			console.log(JSON.parse(action.payload)?.body);
			return { ...state, coordinatorscount: JSON.parse(action.payload)?.body };
		case actionType.NEWSTUDENTCOUNT:
			return { ...state, newstudentcount: JSON.parse(action.payload)?.body };
		case actionType.TOTALSTUDENT:
			return { ...state, totalStudent: JSON.parse(action.payload)?.body };
		case actionType.TEACHER:
			return { ...state, teacher: JSON.parse(action.payload)?.body };
			
		case actionType.PARENT:
			return { ...state, parent: JSON.parse(action.payload)?.body };
		case actionType.ACTIVESTUDENT:
			return { ...state, activeStudent: JSON.parse(action.payload)?.body };
		case actionType.STUDENTASSESSMENTCOUNT:
			return {
				...state,
				studentassessmentcount: JSON.parse(action.payload)?.body,
			};

			case actionType.ALLREVIEWCOUNT:
				return {
					...state,
					allreviewcount: JSON.parse(action.payload)?.body,
				};
				case actionType.UPCOMINGREVIEWCOUNT:
			return {
				...state,
				upcomingreviewcount: JSON.parse(action.payload)?.body,
			};
			case actionType.OVERDUEREVIEWCOUNT:
			return {
				...state,
				overduereviewcount: JSON.parse(action.payload)?.body,
			};
		
		case actionType.SCHOOLSDETAILS:
			
			return { ...state, schooldetails: JSON.parse(action.payload).body };
			case actionType.YEARLEVELDATA:
			return { ...state, yearleveldata: JSON.parse(action.payload).body };
			case actionType.BARGRAPHCOUNTS:
				
			return { ...state, bargraphcounts: JSON.parse(action.payload).body };
			case actionType.POPULATEYEARLEVELS:
			return { ...state, populateyearlevels: JSON.parse(action.payload).body };
			case actionType.NEWSTUDENTDETAILS:
				
			return { ...state, newstudentdetails: JSON.parse(action.payload).body };
			case actionType.FILESTATUS:
				
			return { ...state, filestatus: action.payload };
		case actionType.AUTH:
			console.log(action.test)
			localStorage.setItem("profile", JSON.stringify(action.test));
			console.log(localStorage.getItem('profile'))
			return {
				...state,
				user: action.test,
				loading: false,
				errors: null,
			};
		case actionType.LOGIN:
			return { ...state, authData: action.data, loading: false, errors: null };
			case actionType.FORGOTPASSWORD:
				console.log(action.payload)
				return { ...state, newPassword: action.payload };
		case actionType.LOGOUT:
			if(JSON.parse(localStorage.getItem('profile')).remember_me!="yes"){
				localStorage.clear();
			}
			

			return { ...state, authData: null, loading: false, errors: null };
		default:
			return state;
	}
};

export default authReducer;
