import "./ConversationParentTeacher.css";
import React, { useState, useEffect } from "react";
import Footer from "../Footer";
import Header from "../Header";
import ParentView from "./ParentView";
import TeacherView from "./TeacherView";
import InformationRecords from "./InformationRecords";
import StudentInfo from "../StudentInfo";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {teacherNames,formSubmit,teacherTagging} from "../../actions/studentvoicechoice"
import { useLocation } from "react-router-dom";
import { mapstudentviews } from "../../actions/studentprofile";
function ConversationParentTeacher() {
	const location = useLocation();
	const user= JSON.parse(localStorage.getItem('profile'))
	const apiData = useSelector((state) => state.studentvoicechoice);
	const soft_skill_options=useSelector((state)=>state.studentprofile?.student?.soft_name)
const dispatch = useDispatch();
	useEffect(() => {
	dispatch(teacherNames({ school: user.school_name }))
	// setChecked({...checked,teacher:apiData.teacherNames?.map((data)=>false)});
	},[])
	const handleSubmit = (e,form) => {
		e.preventDefault();
		console.log(JSON.stringify(form));
		dispatch(formSubmit(form))
		alert("Saved Successfully")
		
	};
	const publish = (e,publishData) => {
		e.preventDefault();
		dispatch(teacherTagging({email:publishData.email,teachers:publishData.teachers.toString(),view:publishData.view}))
		console.log(JSON.stringify(publishData));
		alert("Published Successfully")
	};
	useEffect(() => {
		dispatch(
			mapstudentviews({
				email: location.state?.student?.email,
				school_name: user.school_name,
				active: "yes",
				view: "student",
			})
		);
	}, []);
	const [activeView, setActiveView] = useState({
		
		parentView: {
			isActive: true,
			style: { backgroundColor: "#092433", color: "white" },
		},
		teacherView: {
			isActive: false,
			style: { backgroundColor: "#fff", color: "#092433" },
		},
        
        informationRecords: {
			isActive: false,
			style: { backgroundColor: "#fff", color: "#69B3DD",border:"#69B3DD solid .1rem" },
		},
	});
	
	const changeView = (view) => {
		const temp = {
			
			parentView: {
                isActive: false,
                style: { backgroundColor: "#fff", color: "#092433" },
            },
            teacherView: {
                isActive: false,
                style: { backgroundColor: "#fff", color: "#092433" },
            },
            
            informationRecords: {
                isActive: false,
                style: { backgroundColor: "#fff", color: "#69B3DD",border:"#69B3DD solid .1rem" },
            },
		};
        if(view=="informationRecords")
        {
            temp[view] = {
                isActive: true,
                style: { backgroundColor: "#69B3DD", color: "white",border:"#69B3DD solid .1rem" },
            }; 
        }
        else
		{temp[view] = {
			isActive: true,
			style: { backgroundColor: "#092433", color: "white" },
		};}
		setActiveView(temp);
	};
	const [activeTab, setActiveTab] = useState({
		tab1: {
			isActive: "block",
			style: { backgroundColor: " #FFE4AF", color: "#092433" },
		},
		tab2: {
			isActive: "none",
			style: { backgroundColor: "#fff", color: "#092433" },
		}
	});
	const changeTab = (view) => {
		const temp = {
			tab1: {
				isActive: "none",
				style: { backgroundColor: "#fff", color: "#092433" },
			},
			tab2: {
                isActive: "none",
                style: { backgroundColor: "#fff", color: "#092433" },
            }}
			temp[view] = {
			isActive: "block",
			style: { backgroundColor: " #FFE4AF", color: "#092433" },
		};
		setActiveTab(temp);
	};

	return (
		<div className="studentvoicechoice">
			<Header />
			<div className="container">
				<StudentInfo student={location.state?.student}/>

				<div className="nav-text">
					<div></div>
					<p>Back to All Students</p>
				</div>
				<div className="studentvoicechoice-container">
					<p>Conversation with Parent and Teacher</p>
					<div className="views">
						
                        <p
							style={activeView.parentView.style}
							onClick={() => changeView("parentView")}
						>
							Carer / Parent View
						</p>
                        <p
							style={activeView.teacherView.style}
							onClick={() => changeView("teacherView")}
						>
							Teacher View
						</p>
                       
                        <p
							style={activeView.informationRecords.style}
							onClick={() => changeView("informationRecords")}
						>
							Information Records
						</p>
						
					</div>
					<hr className="line" />
					{!activeView.informationRecords.isActive &&
					<div className="tabs">
						<p
							style={activeTab.tab1.style}
							onClick={() => changeTab("tab1")}
						>
							Conversation to Develop IEP 
						</p>
                        <p
							style={activeTab.tab2.style}
							onClick={() => changeTab("tab2")}
						>
							Conversation to Review IEP
						</p>
                        
						
					</div>}
					<div className="view-container">
						{activeView.parentView.isActive && <ParentView tab={activeTab} student={location.state?.student} apiData={apiData} handleSubmit={handleSubmit} publish={publish} soft_skill_options={soft_skill_options}/>}
						{activeView.teacherView.isActive && <TeacherView tab={activeTab} student={location.state?.student} apiData={apiData} handleSubmit={handleSubmit} publish={publish} soft_skill_options={soft_skill_options}/>}
                        
                        {activeView.informationRecords.isActive && <InformationRecords studentData={location.state?.student} />}
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);

	}
export default ConversationParentTeacher;
