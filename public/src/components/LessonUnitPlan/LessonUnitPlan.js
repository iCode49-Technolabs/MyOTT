import "./LessonUnitPlan.css";
import React, { useState, useEffect } from "react";
import Footer from "../Footer";
import Header from "../Header";
import UnitPlan from "./UnitPlan";
import LessonPlan from "./LessonPlan";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { useLocation } from "react-router-dom";

function LessonUnitPlan({type}) {
	const location = useLocation();
	const user= JSON.parse(localStorage.getItem('profile'))
	
	const [activeView, setActiveView] = useState({
		
		unitplan: {
			isActive: type=="CreateLessonUnitPlan"?true:type=="ViewUnitPlan"?true:false,
			style: { backgroundColor: "#092433", color: "white" },
		},
		lessonplan: {
			isActive: type=="CreateLessonUnitPlan"?false:type=="ViewUnitPlan"?false:true,
			style: { backgroundColor: "#fff", color: "#092433" },
		},
        
        
	});
	
	const changeView = (view) => {
		const temp = {
			
			unitplan: {
                isActive: false,
                style: { backgroundColor: "#fff", color: "#092433" },
            },
            lessonplan: {
                isActive: false,
                style: { backgroundColor: "#fff", color: "#092433" },
            },
            
           
		};
       
		temp[view] = {
			isActive: true,
			style: { backgroundColor: "#092433", color: "white" },
		}
		setActiveView(temp);
	};
	

	return (
		<div className="lessonunitplan">
			<Header />
			<div className="container">
				

				
				<div className="lessonunitplan-container">
				{type=="CreateLessonUnitPlan"?<p>Create Unit & Lesson Plans</p>:<p></p>}
				
					{type=="CreateLessonUnitPlan"&&<div className="views">
						
                        <p
							style={activeView.unitplan.style}
							onClick={() => changeView("unitplan")}
						>
							Unit Plan
						</p>
                        <p
							style={activeView.lessonplan.style}
							onClick={() => changeView("lessonplan")}
						>
							Lesson Plan
						</p>
                       
                        
						
					</div>}
				
					<div className="view-container">
						{activeView.unitplan.isActive && <UnitPlan type={type}/>}
						{activeView.lessonplan.isActive && <LessonPlan type={type}/>}
                        
                      
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);

	}
export default LessonUnitPlan;
