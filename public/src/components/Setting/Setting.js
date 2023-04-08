import "./Setting.css";
import React, { useState, useEffect } from "react";
import Footer from "../Footer";
import Header from "../Header";
import Strategies_Adjustments from "./Strategies_Adjustments";
import EditData from "./EditData"
import Soft_Skill from "./Soft_Skill";
import Share_Library_School from "./Share_Library_School";
import Review from "./Review";
import Category_Of_Concern from "./Category_Of_Concern";
import New_Student_Duration from "./New_Student_Duration";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
// import {teacherNames,formSubmit,teacherTagging} from "../../actions/setting"
import { useLocation } from "react-router-dom";
  
function Setting() {
// 	const location = useLocation();
	const user= JSON.parse(localStorage.getItem('profile'))
	const apiData = useSelector((state) => state.setting);
// const dispatch = useDispatch();
// 	useEffect(() => {
// 	dispatch(teacherNames({ school: user.school_name }))
// 	// setChecked({...checked,teacher:apiData.teacherNames?.map((data)=>false)});
// 	},[])
// 	const handleSubmit = (e,form) => {
// 		e.preventDefault();
// 		console.log(JSON.stringify(form));
// 		dispatch(formSubmit(form))
		
// 	};
// 	const publish = (e,publishData) => {
// 		e.preventDefault();
// 		dispatch(teacherTagging({email:publishData.email,teachers:publishData.teachers.toString(),view:publishData.view}))
// 		console.log(JSON.stringify(publishData));
// 	};
	const [activeView, setActiveView] = useState({
		strategies_adjustments: {
			isActive: false,
			style: { backgroundColor: "#fff", color: "#092433" },
		},
		soft_skill: {
			isActive: false,
			style: { backgroundColor: "#fff", color: "#092433" },
		},
		review: {
			isActive: false,
			style: { backgroundColor: "#fff", color: "#092433" },
		},
        category_of_concern: {
			isActive: false,
			style: { backgroundColor: "#fff", color: "#092433" },
		},
		new_student_duration: {
			isActive: true,
			style: { backgroundColor: "#092433", color: "white" },
		},
		share_library_school: {
			isActive: false,
			style: { backgroundColor: "#fff", color: "#092433" },
		},
        
	});
	
	const changeView = (view) => {
		const temp = {
			strategies_adjustments: {
				isActive: false,
				style: { backgroundColor: "#fff", color: "#092433" },
			},
			soft_skill: {
                isActive: false,
                style: { backgroundColor: "#fff", color: "#092433" },
            },
            review: {
                isActive: false,
                style: { backgroundColor: "#fff", color: "#092433" },
            },
            category_of_concern: {
                isActive: false,
                style: { backgroundColor: "#fff", color: "#092433" },
            },
			new_student_duration: {
				isActive: false,
				style: { backgroundColor: "#fff", color: "#092433" },
			},
			share_library_school: {
				isActive: false,
				style: { backgroundColor: "#fff", color: "#092433" },
			},
            
		};
        temp[view] = {
			isActive: true,
			style: { backgroundColor: "#092433", color: "white" },
		};
		setActiveView(temp);
	};
	const [activeTab, setActiveTab] = useState({
		tab1: {
			isActive: "block",
			style: { backgroundColor: " #FFE4AF", color: "#092433" },
		},
		tab2: {
			isActive: "none",
			style: { backgroundColor: "#fff", color: "#FFE4AF" },
		}
	});
	const changeTab = (view) => {
		const temp = {
			tab1: {
				isActive: "none",
				style: { backgroundColor: "#fff", color: "#FFE4AF" },
			},
			tab2: {
                isActive: "none",
                style: { backgroundColor: "#fff", color: "#FFE4AF" },
            }}
			temp[view] = {
			isActive: "block",
			style: { backgroundColor: " #FFE4AF", color: "#092433" },
		};
		setActiveTab(temp);
	};
	const [popup, setPopup] = useState(false)
	const [editData,setEditData]=useState()
	return (
		<div className="setting">
			<Header />
			{popup ? <EditData  setPopup={setPopup}  editData={editData}/> : undefined}
			<div className="container">
			

				<div className="nav-text">
					<div></div>
					<p>Back to All Students</p>
				</div>
				<div className="setting-container">
					<p>Settings</p>
					<div className="views">
						{/* <p
							style={activeView.strategies_adjustments.style}
							onClick={() => changeView("strategies_adjustments")}
						>
							Strategies / Adjustments
						</p> */}
                        {/* <p
							style={activeView.soft_skill.style}
							onClick={() => changeView("soft_skill")}
						>
							Soft Skill
						</p> */}
                        {/* <p
							style={activeView.review.style}
							onClick={() => changeView("review")}
						>
							Review
						</p> */}
                        {/* <p
							style={activeView.category_of_concern.style}
							onClick={() => changeView("category_of_concern")}
						>
							Category Of Concern
						</p> */}
                        
						<p
							style={activeView.new_student_duration.style}
							onClick={() => changeView("new_student_duration")}
						>
							New Student Duration
						</p>
						<p
							style={activeView.share_library_school.style}
							onClick={() => changeView("share_library_school")}
						>
							Share Adjustments/Strategies Repositories
						</p>
                        
					</div>
					<hr className="line" />
					
					{!activeView.share_library_school.isActive&&!activeView.new_student_duration.isActive&&!activeView.category_of_concern.isActive&&<div className="tabs">
						<p
							style={activeTab.tab1.style}
							onClick={() => changeTab("tab1")}
						>
							View
						</p>
                        <p
							style={activeTab.tab2.style}
							onClick={() => changeTab("tab2")}
						>
							Add
						</p>
                        
						
					</div>}
					<div className="view-container">
						{activeView.strategies_adjustments.isActive && <Strategies_Adjustments tab={activeTab} setPopup={setPopup} setEditData={setEditData}/>}
						{/* {activeView.soft_skill.isActive && <Soft_Skill tab={activeTab} setPopup={setPopup} setEditData={setEditData} />} */}
						{activeView.review.isActive && <Review tab={activeTab} setPopup={setPopup} setEditData={setEditData}/>}
                        {activeView.category_of_concern.isActive && <Category_Of_Concern tab={activeTab} setPopup={setPopup} setEditData={setEditData}/>}
                        {activeView.new_student_duration.isActive && <New_Student_Duration tab={activeTab} setPopup={setPopup} setEditData={setEditData}/>}
                        {activeView.share_library_school.isActive && <Share_Library_School tab={activeTab} setPopup={setPopup} setEditData={setEditData}/>}
                        
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);

	}
export default Setting;
