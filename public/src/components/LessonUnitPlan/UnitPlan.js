import "./View.css";
import React, { useState, useEffect } from "react";

import { useMemo } from "react";

function UnitPlan({type}) {
	const smapleForm={
		unit_topic:"unit_topic",
		key_learning_outcomes:"key_learning_outcomes",
		start_date:"22-03-2001",
		end_date:"24-03-2001",
		modelled_and_explained:"modelled_and_explained",
		practiced:"practiced",
		lesson_activity_1:"activity_activities",
		lesson_activity_2:"activity_activities",
		homework:"homework",
		assessment:"assessment"
	}

	
	const user= JSON.parse(localStorage.getItem('profile'))
	const [form,setForm]=useState({
		email:user?.email,
		school_name:user?.school_name,
		
	})

	
	const handleChange=(e)=>{
		setForm({...form,[e.target.name]:e.target.value})
	}
	const handleSubmint=(e)=>{
		e.preventDefault()
		console.log(form)
	}
	useMemo(()=>{
		if(type=="ViewUnitPlan")
		setForm(smapleForm)
	},[])
	const dateFormat = (date) => {
		return (
			date?.split("-")[2] +
			"-" +
			date?.split("-")[1] +
			"-" +
			date?.split("-")[0]
		);
	};
	return (
		<div className="view">
			
				<form onSubmit={handleSubmint}>
					<p className="title">{type=="ViewUnitPlan"?"Revise":"Create"} Unit Plan </p>
					<div className="question textbox">
						<p>Unit Topic</p>
						<input
							type={"text"}
							className="text"
							value={form?.unit_topic}
							onChange={handleChange}
							placeholder="Please enter notes and comments"
							name="unit_topic"
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
					<div className="question datebox">
						<div>
						<p>Start Date</p>
						<input
							type={"date"}
							className="date"
							value={dateFormat(form?.start_date)}
							onChange={handleChange}
							placeholder="Please enter notes and comments"
							name="start_date"
						/></div><div>
						<p>End Date</p>
						<input
							type={"date"}
							className="date"
							value={dateFormat(form?.end_date)}
							onChange={handleChange}
							placeholder="Please enter notes and comments"
							name="end_date"
						/></div>
					</div>
					<div className="question textarea grid-container">
						<div>
						<p>How will new concepts be modelled and explained?</p>
						<textarea
							className="textarea"
							value={form?.modelled_and_explained}
							onChange={handleChange}
							placeholder="Please enter notes and comments"
							name="modelled_and_explained"
						/></div>
						<div style={{marginLeft:"2rem"}}>
						<p>How will concepts be practiced, or knowledge applied?</p>
						<textarea
							className="textarea"
							value={form?.practiced}
							onChange={handleChange}
							placeholder="Please enter notes and comments"
							name="practiced"
						/></div>
					</div>
					<div className="question textarea">
						<p>Lesson Activity 1:</p>
						<textarea
							className="textarea"
							value={form?.lesson_activity_1}
							onChange={handleChange}
							placeholder="Please enter notes and comments"
							name="lesson_activity_1"
						/>
						
					</div>
					<div className="question textarea">
						<p>Lesson Activity 2:</p>
						<textarea
							className="textarea"
							value={form?.lesson_activity_2}
							onChange={handleChange}
							placeholder="Please enter notes and comments"
							name="lesson_activity_2"
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

export default UnitPlan;
