import React, { useState, useEffect, useMemo } from "react";

import "./Teacher.css";
import KeyOutcome from "./KeyOutcome";

import { useDispatch, useSelector } from "react-redux";

import {
	teacherassessmentrequest,
	CreateRecordEvidence,
	CreateTargetedOutcome,
	FindStrategiesAdjustments,
	studentconvodata,
	LessonModification,
	ViewKeyOutcome,
} from "../../actions/teacherdashboard";
import makeAnimated from "react-select/animated";
import Header from "../Header";
import Footer from "../Footer";
import { CalenderIcon, PencilIcon } from "../../assets/Icons";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import { negotiate_goal } from "../../actions/iep_step3";

import { QuickView } from "./QuickView";
import { Cards } from "./Cards";
import { Top } from "./Top";
import { RateStrategyAdjustment } from "./RateStrategyAdjustment";
import UploadFile  from "./uploadFile"

function Teacher() {
	const animatedComponents = makeAnimated();
	const history = useNavigate();
	const dispatch = useDispatch();
	const user = JSON.parse(localStorage.getItem("profile"));
	const [studentSelected,setStudentSelected]=useState()
	const apiData = useSelector((state) => state.teacher_dashboard);

	useEffect(() => {
		dispatch(
			teacherassessmentrequest({
				email: user?.email,
				school: user?.school_name,
			})
		);

		dispatch(studentconvodata({ teacher_email: user?.email }));
		
	}, []);

	const handleLessonModificationSubmit = (e) => {
		e.preventDefault();

		console.log(form);
		dispatch(LessonModification(form))
		alert("Saved Successfully")
	};
	const handleRecordMoreEvidenceSubmit = (e) => {
		e.preventDefault();

		console.log(form);
		dispatch(CreateRecordEvidence(form))
		alert("Saved Successfully")
	};
	const handleAssessmentTargetedOutomeSubmit = (e) => {
		e.preventDefault();

		console.log(form);
		dispatch(CreateTargetedOutcome(form))
		alert("Saved Successfully")
	};
	const handleChange = async (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const student = apiData?.teacherassessmentrequest;

	const [form, setForm] = useState({
		student: "",
		teacher: user.email,
		other_students:[],
		assessment_result:"",
		assessment_related_to_targeted_outcome:"",
		record_evidence:"",
		lesson_modifications:"",
		school_name: user.school_name,
	});
	

	const handleSelectChange = (value, action) => {
		if(value.constructor === Array){
			const temp = value.map((value) => value["value"].email);
			setForm({
				...form,
				[action.name]: temp,
			});}
			else
			setForm({
				...form,
				[action.name]: value.value,
			});
		
	};
	const handleSelectClick = (value, action) => {
		
		history("/ModificationForStudent", { state: { student: value["value"] } });
	};
	const dateFormat = (date) => {
		return (
			date?.split("-")[2] +
			"-" +
			date?.split("-")[1] +
			"-" +
			date?.split("-")[0]
		);
	};

	const studentOptions =
		student != "no records found" &&
		student != undefined &&
		student.map((student) => ({
			value: student,
			label: student.first_name + " " + student.last_name,
		}));

	
	const goal = useSelector(
		(state) => state?.iep_step3?.negotiate_goal?.negotiate_goal
	);
	const handleStudentChange = (value, action) => {
		setForm({...form,student:value.value.email})
		dispatch(
			negotiate_goal({ school: user.school_name, email: value.value.email })
		);
		dispatch(FindStrategiesAdjustments({email:value.value.email}))
		setStudentSelected(value.value.email)
		dispatch(ViewKeyOutcome({tag_teachers:user?.email,email:value.value.email}))
	};
	const handleStudentTabChange = (student) => {
		setStudentSelected(student)
		setForm({...form,student:student})
		dispatch(
			negotiate_goal({ school: user.school_name, email: student })
		);
		dispatch(FindStrategiesAdjustments({email:student}))
		
		dispatch(ViewKeyOutcome({tag_teachers:user?.email,email:student}))
	};
	const strategiesAdjustment=apiData?.strategiesadjustment?.map((value)=>({...value,teacher:user.email,student:studentSelected,effort:0,efficiency:0,strategy_id:value.adjustment_id}))
	const [key_outcome, setKey_Outcome] = useState([true, false, false]);
	
	const viewkeyoutcome=apiData?.viewkeyoutcome
	useMemo(()=>{
		if(viewkeyoutcome!=undefined&&viewkeyoutcome!="no records found")
		{
			console.log(viewkeyoutcome)
			const temp=viewkeyoutcome?.map((value,index)=>index==0)
			
		setKey_Outcome([...temp])}
		else{
			setKey_Outcome([true, false, false])
		}
	},[viewkeyoutcome])
	const [popup, setPopup] = useState(false)
	const [uploadData,setUploadData]=useState()

	return (
		<div class="teacher">
			<Header />
			{popup ? <UploadFile  setPopup={setPopup}  uploadData={uploadData}/> : undefined}
			<div class="container">
				<Top first_name={user?.first_name} />

				<div class="bottom">
					<div class="left">
						<div className="text-select-flex">
							<p className="title">Lesson Plans</p>
							<input placeholder="Quick Lesson Search" />
						</div>
						<div
							style={{
								width: "100%",
								display: "flex",
								justifyContent: "space-between",
							}}
						>
							<Select
								placeholder={
									<div className="select-placeholder-text">Year</div>
								}
							/>
							<Select
								placeholder={
									<div className="select-placeholder-text">Subject</div>
								}
							/>
							<Select
								placeholder={
									<div className="select-placeholder-text">Date</div>
								}
							/>
						</div>
						<p className="day">
							<CalenderIcon
								stroke={"#84C1E3"}
								style={{ marginRight: ".2rem" }}
							/>
							Thursday
						</p>
						<div style={{display:"flex",justifyContent:"space-between",alignContent:"center"}}>
						<p className="sub-title">
							Year 6 <span>English</span>
						</p>
						
						<button className="lesson_unit_plan" onClick={(e) => history("/CreateLessonUnitPlan")}>Create Unit/Lesson Plan</button></div>
						<hr className="line" />
						<div className="text-select-flex">
							<p className="sub-sub-title" style={{ marginTop: "-.3rem" }}>
								Notes for Students
							</p>
							<Select
								options={studentOptions}
								placeholder={
									<div className="select-placeholder-text">Select: Student</div>
								}
								onChange={handleSelectClick}
							/>
						</div>
						<hr className="line" />
						<p className="sub-sub-title">Students requiring adjustments</p>
						<div className="student-adjustment">
							{/* <Select
								options={studentOptions}
								
								onChange={handleStudentChange}
								placeholder={
									<div className="select-placeholder-text">Select: Student</div>
								}
							/> */}
						<div className="tabs">
						{typeof(student) != "string" &&
		student != undefined &&
		student.map((student) => (
			student.iep=="yes"&&<p className="tab" style={{backgroundColor:studentSelected==student.email&&"#FFF4DE"}} onClick={()=>handleStudentTabChange(student.email)}>{student.first_name+" "+student.last_name}</p>
		))}
							
						</div>
							<div className="tab-container">
								<div className="tab-content">
									<p className="sub-sub-title">
										<span>Goal</span>
									</p>
									<p className="para">{goal}</p>
									{key_outcome != undefined &&
										key_outcome.map((value, index) =>
											value ? (
												<KeyOutcome
													key={"key" + index}
													outcome_number={index + 1}
													viewkeyoutcome={viewkeyoutcome?.[index]}
													setKey_Outcome={setKey_Outcome}
							key_outcome={key_outcome}
												/>
											) : (
												<div
													key={"key" + index}
													className="dummmy-keyoutcome"
													onClick={() => {
														const tempFalse = key_outcome
														tempFalse[index] = !tempFalse[index];
														setKey_Outcome([...tempFalse]);
													}}
												>
													<p className="sub-title">Key Outcome {index + 1}</p>
													<div className="arrow"></div>
												</div>
											)
										)}

									<hr className="line" />
									<p className="sub-sub-title">
										<span
											style={{
												display: "flex",
												alignItems: "center",
												justifyContent: "space-between",
											}}
										>
											Lesson Modifications
										</span>
									</p>
									<textarea
										placeholder="Please enter notes and comments."
										name="lesson_modifications"
										onChange={handleChange}
									/>
									<button className="save" onClick={(e) => handleLessonModificationSubmit(e)}>
										Save
									</button>
									<hr className="line" />

									<Select
										closeMenuOnSelect={false}
										components={animatedComponents}
										isMulti
										name="other_students"
										
										onChange={handleSelectChange}
										options={studentOptions}
										placeholder={
											<div
												className="select-placeholder-text"
												style={{ fontSize: "12px" }}
											>
												Replicate for another student
											</div>
										}
									/>
									<br />

									{/* <label className="sub-sub-title" style={{ fontSize: "14px", display: "flex", alignItems: "center" }}>
										<input type={"checkbox"} style={{ margin: "1rem .2rem" }} />
										<span style={{ margin: "0rem .2rem" }}>Adjustment Implemented</span>
									</label> */}
									<hr className="line" />
									<div className="record-rate">
										<div className="record">
											<p className="sub-sub-title">Record More Evidence</p>
											<textarea placeholder="Please enter notes and comments" name="record_evidence" onChange={handleChange}/>
											<button className="upload" onClick={() => {
													
													setPopup(true);
													setUploadData({
														email:studentSelected,
														teacher:user?.email,
														school_name:user?.school_name,
														table_name:"record_evidence"
							  
													  
													  
													  
													});
													
													
												  }}>Upload File</button>
											<button className="save" onClick={(e) => handleRecordMoreEvidenceSubmit(e)}>Save</button>
										</div>
										<RateStrategyAdjustment strategiesAdjustmentList={strategiesAdjustment}/>
									</div>
									<hr className="line" />
									<p className="sub-sub-title">
										Assessment Related to Targeted Outome
									</p>
									<textarea placeholder="Please enter notes and comments" name="assessment_related_to_targeted_outcome" onChange={handleChange}/>
									<button className="save" onClick={(e) => handleAssessmentTargetedOutomeSubmit(e)}>Save</button>
									<hr className="line" />
									<p className="sub-sub-title">Assessment Result</p>
									<Select
									name="assessment_result"
									onChange={handleSelectChange}
									options={[...Array(10)].map((star, index) =>({value:index+1,label:index+1}))}
										placeholder={
											<div className="select-placeholder-text">1</div>
										}
									/>
								</div>
							</div>
						</div>
					</div>
					<div class="right">
						<QuickView />

						<div style={{ clear: "both" }}></div>
						<Cards />
					</div>
				</div>
			</div>
			<div style={{ clear: "both" }}></div>
			<div style={{ height: "2rem" }}></div>
			<Footer />
		</div>
	);
}

export default Teacher;
