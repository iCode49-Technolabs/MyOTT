import "./StudentVoiceChoice.css";
import React, { useState, useEffect } from "react";
import Footer from "../Footer";
import Header from "../Header";
import StudentView from "./StudentView";

import InformationRecords from "./InformationRecords";
import StudentInfo from "../StudentInfo";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {teacherNames,formSubmit,teacherTagging} from "../../actions/studentvoicechoice"
import { useLocation } from "react-router-dom";
import { soft_skill } from "../../actions/setting";
function StudentVoiceChoice() {
	const location = useLocation();
	const user= JSON.parse(localStorage.getItem('profile'))
	const apiData = useSelector((state) => state.studentvoicechoice);
	const soft_skill_options=useSelector((state)=>state.setting?.view_soft_skill)
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
		dispatch(soft_skill({ 
			school_name: user.school_name
			, type: "view"
		}));
	}, []);
	const [activeView, setActiveView] = useState({
		studentView: {
			isActive: true,
			style: { backgroundColor: "#092433", color: "white" },
		},
        informationRecords: {
			isActive: false,
			style: { backgroundColor: "#fff", color: "#69B3DD",border:"#69B3DD solid .1rem" },
		},
	});
	
	const changeView = (view) => {
		const temp = {
			studentView: {
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
					<p>Student Voice & Choice</p>
					<div className="views">
						<p
							style={activeView.studentView.style}
							onClick={() => changeView("studentView")}
						>
							Student View
						</p>
                      
                        <p
							style={activeView.informationRecords.style}
							onClick={() => changeView("informationRecords")}
						>
							Conversation Record
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
						{activeView.studentView.isActive && <StudentView tab={activeTab} student={location.state?.student} apiData={apiData} handleSubmit={handleSubmit} publish={publish} soft_skill_options={soft_skill_options}/>}
						
                        {activeView.informationRecords.isActive && <InformationRecords studentData={location.state?.student} />}
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);

	}
export default StudentVoiceChoice;
