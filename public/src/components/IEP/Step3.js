import "./Step3.css";
import React, { useState, useEffect, useMemo } from "react";
import Select from "react-select";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import KeyOutcome from "./KeyOutcome";
import {
	iep_step3,
	negotiate_goal,
	teacherTagging,
	viewIEPStep3,
} from "../../actions/iep_step3";
import { teacherNames } from "../../actions/studentvoicechoice";
import ReactToPrint from "react-to-print";
function Step3({ student, type,changeStep,comp,step3Form,setStep3Form,key_outcome_print,setKey_OutcomePrint }) {
	
	const user = JSON.parse(localStorage.getItem("profile"));
	const initialForm = {
		transitions: ["",""],
		transitions_frequency: ["",""],
		assesment_adjustment: ["",""],
		assesment_adjustment_frequency: ["",""],
		examination_adjustments: ["Additional time",""],
		duration_start_date: ["",""],
		duration_end_date: ["",""],
		adjustment_review_schedule: ["",""],
		student_discussion_schedule: ["",""],
		career_discussion_schedule: ["",""],
		lc_email: user?.email,
		email: student?.email,
		school: user?.school_name,
		type: type,
		key_outcome_id: [],
	};
	const [displayForm,setDisplayForm] = useState({
		transitions: false,
		transitions_frequency: false,
		assesment_adjustment: false,
		assesment_adjustment_frequency: false,
		examination_adjustments: false,
		duration_start_date: false,
		duration_end_date: false,
		adjustment_review_schedule: false,
		student_discussion_schedule: false,
		career_discussion_schedule: false,
		lc_email: user?.email,
		email: student?.email,
		school: user?.school_name,
		type: type,
		key_outcome_id: [],
	});
	const dispatch = useDispatch();
	const apiData = useSelector((state) => state);
	const version = type == "create" ? 0 : 1;
	// const [form, setForm] = useState(type == "create" ? initialForm : displayForm);
	const handleSubmit = (e) => {
		e.preventDefault();

		dispatch(iep_step3(step3Form));
	
		alert("Saved Successfully")
		publish(e, publishData);
	};
	useEffect(() => {
		dispatch(teacherNames({ school: user.school_name }));
		dispatch(
			negotiate_goal({ school: user.school_name, email: student?.email })
		);
		if (type != "create") {
			dispatch(
				viewIEPStep3({ email: student?.email, school: user?.school_name })
			);
		}
	}, []);
	const handleChange = async (e) => {
		const temp=step3Form[e.target.name]||[]
		temp[version]=e.target.value
		setStep3Form({ ...step3Form, [e.target.name]: temp });
	};
	const handleSelectChange = (value, action) => {
		const temp=step3Form[action.name]||[]
		temp[version]=value["label"]
		setStep3Form({ ...step3Form, [action.name]: temp });
	
	};
	const frequencyOptions = [
		{ value: "Daily", label: "Daily" },
		{ value: "Every other day", label: "Every other day" },
		{ value: "Weekly ", label: "Weekly " },
		{ value: "Fortnightly", label: "Fortnightly" },
		{ value: "Once a month", label: "Once a month" },
	];
	const levelOfAdjustmentOptions = [
		{ value: "QDTP", label: "QDTP" },
		{ value: "Supplementary", label: "Supplementary" },
		{ value: "Substantial", label: "Substantial" },
		{ value: "Extensive", label: "Extensive" },
	];

	const examination_adjustmentsOptions = [
		{ value: "Additional time", label: "Additional time" },
		{ value: "Rest Breaks", label: "Rest Breaks" },
		{ value: "Using an Interpreter", label: "Using an Interpreter" },
		{ value: "Using a Reader", label: "Using a Reader" },
		{ value: "Using a Scribe", label: "Using a Scribe" },
		{ value: "Using a Computer", label: "Using a Computer" },
		{
			value: "Flexible Time Arrangements",
			label: "Flexible Time Arrangements",
		},
		{ value: "Oral Exams", label: "Oral Exams" },
		{ value: "Take-Home Exams", label: "Take-Home Exams" },
		{ value: "Split an Exam", label: "Split an Exam" },
		{ value: "Other", label: "Other" },
	];
	const [key_outcome, setKey_Outcome] = useState([true, false, false]);
	const [key_outcome_form, setKey_OutcomeForm] = useState([]);
	const [publishData, setPublishData] = useState({
		email: student?.email,
		teachers: [],
	});

	const teacherCheckbox = [];
	for (var i = 0; i < 6; i++) {
		teacherCheckbox.push(false);
	}
	const [checked, setChecked] = useState({
		teacher: teacherCheckbox,
	});
	const [teachers, setTeachers] = useState([]);
	const publish = (e, publishData) => {
		e.preventDefault();
		dispatch(
			teacherTagging({
				email: publishData.email,
				teachers: publishData.teachers.toString(),
				view: publishData.view,
			})
		);
	};
	const goal = apiData?.iep_step3?.negotiate_goal?.negotiate_goal;
	const viewData = apiData.iep_step3?.iep_step3;
	
	const dateFormat = (date) => {
		return (
			date?.split("-")[2] +
			"-" +
			date?.split("-")[1] +
			"-" +
			date?.split("-")[0]
		);
	};

	useMemo(() => {
		if (type == "revise") {
			const temp=viewData?.[0]
			setStep3Form({...temp,type:type});
			setDisplayForm({transitions: temp?.transitions?.[1]?true:false,
			transitions_frequency: temp?.transitions_frequency?.[1]?true:false,
			assesment_adjustment: temp?.assesment_adjustment?.[1]?true:false,
			assesment_adjustment_frequency: temp?.assesment_adjustment_frequency?.[1]?true:false,
			examination_adjustments: temp?.examination_adjustments?.[1]?true:false,
			duration_start_date: temp?.duration_start_date?.[1]?true:false,
			duration_end_date: temp?.duration_end_date?.[1]?true:false,
			adjustment_review_schedule: temp?.adjustment_review_schedule?.[1]?true:false,
			student_discussion_schedule: temp?.student_discussion_schedule?.[1]?true:false,
			career_discussion_schedule: temp?.career_discussion_schedule?.[1]?true:false,
			});
			const ids = viewData?.[0]?.key_outcome_id;

			setKey_Outcome(ids?.map((value, index) => (index == 0 ? true : false)));
			
		}
	}, [viewData]);
	useMemo(() => {
		
			setStep3Form({...step3Form,goal:goal});
			
			
		
	}, [goal]);
	return (
		<div className="step3">
			<form onSubmit={handleSubmit}>
				<p className="title">Generate Plan</p>
				<p className="sub-title">Goal</p>
				{/* <p>{goal}</p> */}
				<input
							type={"text"}
							className="text"
							name="goal"
							value={step3Form?.goal}
							placeholder="Goal"
							onChange={handleChange}
						/>
				{key_outcome?.map((value, index) =>
					value ? (
						<KeyOutcome
							key={"key" + index}
							outcome_number={index + 1}
							student={student}
							type={type}
							key_outcome_id={step3Form?.key_outcome_id?.[index]}
							key_outcome_form={key_outcome_form}
							setKey_OutcomeForm={setKey_OutcomeForm}
							setStep3Form={setStep3Form}
							set3Form={step3Form}
							setKey_Outcome={setKey_Outcome}
							key_outcome_array={key_outcome}
							key_outcome_print={key_outcome_print}
							setKey_OutcomePrint={setKey_OutcomePrint}
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
				{(!displayForm?.career_discussion_schedule||!displayForm?.student_discussion_schedule||!displayForm?.transitions||
!displayForm?.assesment_adjustment||
!displayForm?.examination_adjustments||
!displayForm?.duration_start_date||
!displayForm?.duration_end_date||
!displayForm?.adjustment_review_schedule)&&<button
					className="add_more"
					onClick={() => {
						const temp = key_outcome;

						temp.push(false);
						setKey_Outcome([...temp]);
					}}
				>
					Add more
				</button>}
				<p className="sub-title">
					Transitions (between Activities / Classes, etc)
				</p>
				{type=="revise"&&
				<div className="text-select version1">
					<p style={{width:"80%"}}>{step3Form?.transitions?.[0]}</p>
					<p>{step3Form?.transitions_frequency?.[0]}</p>
				</div>}
				{displayForm?.transitions?
				<div className="text-select version2">
					<p style={{width:"80%"}}>{step3Form?.transitions?.[1]}</p>
					<p>{step3Form?.transitions_frequency?.[1]}</p>
				</div>:
				<div className="text-select">
					
					<textarea
						className="textarea"
						name="transitions"
						
						onChange={handleChange}
					/>
					<Select
						name="transitions_frequency"
						options={frequencyOptions}
						onChange={handleSelectChange}
						placeholder={
							<div className="select-placeholder-text">
								Frequency
							</div>
						}
					/>
				</div>}

				<p className="sub-title">Assessment Adjustments </p>
				{type=="revise"&&
				<div className="text-select version1">
					<p style={{width:"80%"}}>{step3Form?.assesment_adjustment?.[0]}</p>
					<p>{step3Form?.assesment_adjustment_frequency?.[0]}</p>
				</div>}
				
				{displayForm?.assesment_adjustment?
				<div className="text-select version2">
					<p style={{width:"80%"}}>{step3Form?.assesment_adjustment?.[1]}</p>
					<p>{step3Form?.assesment_adjustment_frequency?.[1]}</p>
				</div>:
				<div className="text-select">
					<textarea
						className="textarea"
						name="assesment_adjustment"
						onChange={handleChange}
					/>
					<Select
						name="assesment_adjustment_frequency"
						onChange={handleSelectChange}
						options={frequencyOptions}
						placeholder={
							<div className="select-placeholder-text">Frequency</div>
						}
					/>
				</div>}
				<p className="sub-title">Examination Adjustments </p>
				{type=="revise"&&
				<div className="text-select version1">
					<p>{step3Form?.examination_adjustments?.[0]}</p>
					
				</div>}
				{displayForm?.examination_adjustments?
				<div className="text-select version2">
					<p>{step3Form?.examination_adjustments?.[1]}</p>
					
				</div>:
				<div className="text-select">
					<Select
						name="examination_adjustments"
						options={examination_adjustmentsOptions}
						onChange={handleSelectChange}
						placeholder={
							<div className="select-placeholder-text">
								Examination Adjustments
							</div>
						}
					/>

					{(!examination_adjustmentsOptions
						.map((data) => Object.values(data)[0])
						.includes(step3Form?.examination_adjustments?.[version]) ||
						step3Form?.examination_adjustments?.[version] == "Other") && (
						<input
							type={"text"}
							className="text"
							name="examination_adjustments"
							placeholder="Examination Adjustments"
							onChange={handleChange}
						/>
					)}
				</div>}
				<div className="title-select">
					<p className="sub-title" style={{ marginRight: "3rem" }}>
						Duration of Adjustment{" "}
					</p>
					<div>
					{type=="revise"&&
				
					<p className="version1"> {step3Form?.duration_start_date?.[0]}&nbsp;&nbsp;&nbsp;</p>
					
				}
				{displayForm?.duration_start_date?
				
				<p className="version2">{step3Form?.duration_start_date?.[1]}&nbsp;&nbsp;&nbsp;</p>
				
			:
					<input
						type={"date"}
						className="date datechk"
						name="duration_start_date"
						onChange={handleChange}
						placeholder="Start Date"
					/>}
					</div>
					<div>
					{type=="revise"&&
				
					<p className="version1">{step3Form?.duration_end_date?.[0]}</p>
					
				}
				{displayForm?.duration_end_date?
				
				<p className="version2">{step3Form?.duration_end_date?.[1]}</p>
				:
			
					<input
						type={"date"}
						className="date datechk"
						name="duration_end_date"
						onChange={handleChange}
						placeholder="End Date"
					/>}
					</div>
				</div>

				<div className="title-select">
					<p className="sub-title">Adjustment Review Schedule </p>
					<div>
					{type=="revise"&&
				
					<p className="version1"> {step3Form?.adjustment_review_schedule?.[0]}</p>
					
				}
				{displayForm?.adjustment_review_schedule?
				
				<p className="version2">{step3Form?.adjustment_review_schedule?.[1]}</p>
				:
			
					<Select
						name="adjustment_review_schedule"
						onChange={handleSelectChange}
						options={frequencyOptions}
						placeholder={
							<div className="select-placeholder-text">
								Every Week
							</div>
						}
					/>}</div>
				</div>
				<div className="title-select">
					<p className="sub-title">Student Discussion Schedule </p>
					<div>
					{type=="revise"&&
				
					<p className="version1">{step3Form?.student_discussion_schedule?.[0]}</p>
					
				}
				{displayForm?.student_discussion_schedule?
				
				<p className="version2">{step3Form?.student_discussion_schedule?.[1]}</p>
				
			:
					<Select
						name="student_discussion_schedule"
						onChange={handleSelectChange}
						options={frequencyOptions}
						placeholder={
							<div className="select-placeholder-text">
								Every Week
							</div>
						}
					/>}</div>
				</div>
				<div className="title-select">
					<p className="sub-title" style={{ marginRight: "1.8rem" }}>
						Carer Discussion Schedule{" "}
					</p>
					<div>
					{type=="revise"&&
				
					<p className="version1">{step3Form?.career_discussion_schedule?.[0]}</p>
					
				}
				{displayForm?.career_discussion_schedule?
				
				<p className="version2">{step3Form?.career_discussion_schedule?.[1]}</p>
				
			:
					<Select
						name="career_discussion_schedule"
						onChange={handleSelectChange}
						options={frequencyOptions}
						placeholder={
							<div className="select-placeholder-text">
								Every Week
							</div>
						}
					/>}</div>
				</div>
				{(!displayForm?.career_discussion_schedule||!displayForm?.student_discussion_schedule||!displayForm?.transitions||
!displayForm?.assesment_adjustment||
!displayForm?.examination_adjustments||
!displayForm?.duration_start_date||
!displayForm?.duration_end_date||
!displayForm?.adjustment_review_schedule)&&<div className="buttons">
					<button className="back" onClick={()=>changeStep("step2")}>Back</button>
					<button className="save" type="submit" >
						Save
					</button>
					
					
				</div>}
			</form>
			<ReactToPrint
						trigger={() => <button
						className="publish"
						
					>
						Publish
					</button>}
						content={() => comp.current}
						
					/><br/>
			{(!displayForm?.career_discussion_schedule||!displayForm?.student_discussion_schedule||!displayForm?.transitions||
!displayForm?.assesment_adjustment||
!displayForm?.examination_adjustments||
!displayForm?.duration_start_date||
!displayForm?.duration_end_date||
!displayForm?.adjustment_review_schedule)&&<>
			<label key={"allTeacher"}>
				<input
					type={"checkbox"}
					className="checkbox"
					name="tag_all_teachers"
					onChange={(e) => {
						const temp = checked.teacher.map(function (bool) {
							return !bool;
						});

						setChecked({ ...checked, teacher: temp });
						setPublishData({
							...publishData,
							teachers: apiData.studentvoicechoice.teacherNames?.map(
								(data, index) => (temp[index] ? data.email : "")
							),
						});
					}}
				/>
				Tag all teachers
			</label>
			<div className="teachers">
				{apiData.studentvoicechoice.teacherNames?.map((value, index) => (
					<label key={value.first_name}>
						<input
							type={"checkbox"}
							className="checkbox"
							name="teacher"
							value={value.email}
							checked={checked.teacher[index]}
							onChange={(e) => {
								const temp = checked.teacher;
								temp[index] = !checked.teacher[index];
								setChecked({ ...checked, teacher: temp });
								if (
									!teachers.includes(e.target.value) &&
									checked.teacher[index]
								) {
									const temp = publishData.teachers;
									temp.push(e.target.value);
									setPublishData({ ...publishData, teachers: temp });
								} else {
									const temp = publishData.teachers;
									temp.splice(temp.indexOf(e.target.value), 1);

									setPublishData({ ...publishData, teachers: temp });
								}
							}}
						/>
						{value.first_name + " " + value.last_name}
					</label>
				))}
			</div></>}
		</div>
	);
}

export default Step3;
