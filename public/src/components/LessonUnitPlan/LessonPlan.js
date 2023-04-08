import "./View.css";
import React, { useState, useEffect } from "react";
import {LessonPlanCreateUpdate,viewLessonPlan} from '../../actions/unit_lesson_plan';
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

function LessonPlan({type}) {
	const dispatch = useDispatch();
	const location = useLocation();
	const apiData = useSelector((state) => state.unit_lesson_plan?.lessonplan);
const lesson_id = location.state?.lesson_id;
	const smapleForm={
		unit_topic:"unit_topic",
		key_learning_outcomes:"key_learning_outcomes",
		date:"22-03-2001",
		modelled_and_explained:"modelled_and_explained",
		practiced:"practiced",
		activity_activities:"activity_activities",
		homework:"homework",
		assessment:"assessment"
	}
	const user= JSON.parse(localStorage.getItem('profile'))
	const [form,setForm]=useState({
		email:user?.email,
		school_name:user?.school_name,
		type:"create"
	})

	useEffect(()=>{
		if(type=="ViewLessonPlan")

		{dispatch(viewLessonPlan({lesson_id:lesson_id}))}
	},[])
	const handleChange=(e)=>{
		setForm({...form,[e.target.name]:e.target.value})
	}
	const handleSubmint=(e)=>{
		e.preventDefault()
		console.log(form)
		dispatch(LessonPlanCreateUpdate(form))
		alert("Saved Successfully")
	}
	useMemo(()=>{
		if(type=="ViewLessonPlan"&&apiData!=undefined)
		setForm({...apiData?.[0],type:"update"})
	},[apiData])
	const dateFormat = (date) => {
		console.log(date)
		if(date?.split("-")[2].length==4)
		return (
			date?.split("-")[2] +
			"-" +
			date?.split("-")[1] +
			"-" +
			date?.split("-")[0]
		);
		else
		return date
	};
	console.log(form,apiData)
	return (
		<div className="view">
			
				<form onSubmit={handleSubmint}>
					<p className="title">{type=="ViewLessonPlan"?"Revise":"Create"} Lesson Plan </p>
					<div className="question textbox">
						<p>Topic</p>
						<input
							type={"text"}
							className="text"
							value={form?.topic}
							onChange={handleChange}
							placeholder="Please enter notes and comments"
							name="topic"
						/>
					</div>
					<br />
					<div className="question textbox">
						<p>Key Learning Outcomes</p>
						<input
							type={"text"}
							className="text"
							value={form?.key_learning_outcomes}
							onChange={handleChange}
							placeholder="Please enter notes and comments"
							name="key_learning_outcomes"
						/>
					</div>
					<br />
					<div className="question datebox" style={{justifyContent:"flex-start"}}>
						<div>
						<p style={{width:"11.8rem"}}>Date</p>
						<input
							type={"date"}
							className="date"
							value={dateFormat(form?.date)}
							onChange={handleChange}
							placeholder="Please enter notes and comments"
							name="date"
						/></div>
					</div>
					<div>
						<p>Prior knowledge (Assumptions and Recap)</p>
						<textarea
							className="textarea"
							value={form?.prior_knowledge}
							onChange={handleChange}
							placeholder="Please enter notes and comments"
							name="prior_knowledge"
						/></div>
					<div className="question textarea grid-container">
						<div>
						<p>How will new concepts be modelled and explained?</p>
						<textarea
							className="textarea"
							value={form?.how_will_new_concepts_be_modelled_and_expalined}
							onChange={handleChange}
							placeholder="Please enter notes and comments"
							name="how_will_new_concepts_be_modelled_and_expalined"
						/></div>
						<div style={{marginLeft:"2rem"}}>
						<p>How will concepts be practiced, or knowledge applied?</p>
						<textarea
							className="textarea"
							value={form?.how_will_concepts_be_practiced_or_knowledge_applied}
							onChange={handleChange}
							placeholder="Please enter notes and comments"
							name="how_will_concepts_be_practiced_or_knowledge_applied"
						/></div>
					</div>
					<div className="question textarea">
						<p>Activity/Activities</p>
						<textarea
							className="textarea"
							value={form?.activities}
							onChange={handleChange}
							placeholder="Please enter notes and comments"
							name="activities"
						/>
						
					</div>
					
					<div className="question textarea">
						<p>Homework:</p>
						<textarea
							className="textarea"
							value={form?.homework}
							onChange={handleChange}
							placeholder="Please enter notes and comments"
							name="homework"
						/>
						
					</div>
					<div className="question textarea">
						<p>Assessment:</p>
						<textarea
							className="textarea"
							value={form?.assessment}
							onChange={handleChange}
							placeholder="Please enter notes and comments"
							name="assessment"
						/>
						
					</div>
					<br />
					<div className="buttons">
						<div className="left">
							<button className="save-continue" type="submit">
								Save
							</button>
							
						</div>
					
					</div>
				</form>
			</div>
			
			
		
	);
}

export default LessonPlan;
