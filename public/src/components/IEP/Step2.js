import "./Step2.css";
import React, { useState, useEffect, useMemo } from "react";
import Select from "react-select";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { supportstaff, assessment_type,iep_step2, viewIEPStep2 } from "../../actions/iep_step2";
import { view_subject } from "../../actions/subject_requiring_adjustment";
function Step2({student,type,changeStep,step2Form,setStep2Form}) {
	
	const [happy, sethappy] = useState(false);
	const [dificulties, setdificulties] = useState(false);
	const user = JSON.parse(localStorage.getItem("profile"))
	const dispatch = useDispatch();
	const apiData = useSelector((state) => state);
	useEffect(() => {
		dispatch(
			supportstaff({
				role: "Support Staff",
				schools: user?.school_name,
				active: "yes",
			})
		);
		dispatch(
			assessment_type({
				role: "Support Staff",
				schools: user?.school_name,
				active: "yes",
			})
		);
		dispatch(
			view_subject({
				school: user?.school_name,
			})
		);
		if(type!="create"){
		dispatch(
			viewIEPStep2({email:student?.email,
				school: user?.school_name})
		)}
	}, []);
	// const [form, setForm] = useState({
	// 	subject_requiring_adjustment: "",
	// 	support_staff_member: "",
	// 	learning_or_social_difficulties: "",
	// 	learning_or_social_difficulties_details: "",
	// 	assessment_type: "",
	// 	medical_or_wellbeing_issues: "",
	// 	student_regular_school: "",
	// 	student_regular_school_details: "",
	// 	lc_email: user?.email,
	// 	email:student?.email,
	// 	school_name: user?.school_name,
	// 	personal_info_iep_id: "",
	// 	type:type
	// });

	const handleSubmit =   (e) => {
		e.preventDefault();
		
		
			dispatch(iep_step2(step2Form));
			alert("Saved Successfully")
	};
	const handleChange = async (e) =>{
		
		setStep2Form({ ...step2Form, [e.target.name]: e.target.value });}
		const handleSelectChange = (value, action) => {
			
			setStep2Form({ ...step2Form, [action.name]: value["label"] });
			
		};
	const support = apiData.iep_step2?.support;
	const assessment_name = apiData.iep_step2?.assessment_type;
	const subjects = apiData.subject_requiring_adjustment?.view_subject;
	const viewData= apiData.iep_step2?.iep_step2
	
	useMemo(()=>{
		if(type!="create"){
setStep2Form({...viewData,type:type})
sethappy(viewData?.student_regular_school=="yes")
setdificulties(viewData?.learning_or_social_difficulties=="yes")
}
	},[viewData]
	)
	return (
		<div className="step2">
			<form onSubmit={handleSubmit}>
			<p className="title">Preliminary Information</p>
			<p>
				List the Learning Support Team members that will be assigned this
				student's supervision
			</p>
			{type=="create"?<Select
				options={support != undefined &&
					typeof(support) != "string" &&support?.map((support) => ({
					value: support.email,
					label: support.first_name + " " + support.last_name,
				}))}
				
				name="support_staff_member"
				value={step2Form?.support_staff_member}
				placeholder={
					<div className="select-placeholder-text">
						{step2Form?.support_staff_member|| "Select Learning Support Members"}
					</div>
				}
				onChange={handleSelectChange}
			/>:
			<Select
				isSearchable={false}
				menuIsOpen={false}
				
				name="support_staff_member"
				
				placeholder={
					<div className="select-placeholder-text">
						{step2Form?.support_staff_member|| "Select Learning Support Members"}
					</div>
				}
				onChange={handleSelectChange}
			/>
			}
			<br />
			<p>Subjects Requiring Adjustments</p>
			<div className="subjects">
				{subjects != undefined &&
					typeof(subjects) != "string" &&
					subjects?.map((subject) => (
						
							type=="create"?<label>
								<input type={"checkbox"} onChange={handleChange} checked={step2Form?.subject_requiring_adjustment==subject.subject_name} className="checkbox" name="subject_requiring_adjustment" value={subject.subject_name} />
								{subject.subject_name}<br />
							</label>
							:
							<label>
								<input type={"checkbox"}  checked={step2Form?.subject_requiring_adjustment==subject.subject_name} className="checkbox" />
								{subject.subject_name} <br />
							</label>
					
					))}
			</div>
			<br />

			<p>
				Has the student encountered any learning or social difficulties that has
				not been diagnosed or identified as a disability?
			</p>

			<label>
				<input
					type={"radio"}
					className="checkbox"
					name="learning_or_social_difficulties"
					value="yes"
					onChange={handleChange}
					onClick={() => setdificulties(true)}
					checked={step2Form?.learning_or_social_difficulties=="yes"}
					
				/>
				Yes
			</label>
			<br />
			<label>
				<input
					type={"radio"}
					className="checkbox"
					value="no"
					onChange={handleChange}
					name="learning_or_social_difficulties"
					onClick={() => setdificulties(false)}
					checked={step2Form?.learning_or_social_difficulties=="no"}
					
				/>
				No
			</label>
			<br />
			{(dificulties||step2Form?.learning_or_social_difficulties=="yes") && (
				<div>
					<input
						type={"text"}
						className="text"
						value={step2Form?.learning_or_social_difficulties_details}
						onChange={handleChange}
						name="learning_or_social_difficulties_details"
						placeholder="Please enter notes and comments"
						readOnly={type!="create"}
					/>
				</div>
			)}
			<br />
			<p>Has the student had any of the following assessments?</p>
			{assessment_name != undefined &&
				assessment_name != "no records found" &&
				assessment_name?.map((assessment_type) => (
				
						type=="create"?<label>
							<input type={"checkbox"} onChange={handleChange} checked={step2Form?.assessment_type==assessment_type.assessment_type} className="checkbox" name="assessment_type" value={assessment_type.assessment_type} />
							{assessment_type.assessment_type}<br />
						</label>:
						<label>
						<input type={"checkbox"}  checked={step2Form?.assessment_type==assessment_type.assessment_type} className="checkbox" name="assessment_type"  />
						{assessment_type.assessment_type}<br />
					</label>
						
					
				))}

			<label>
				<input type={"checkbox"} name="assessment_type" className="checkbox" />
				Other
			</label>
			<br />
			<input
				type={"text"}
				style={{ width: "15rem" }}
				className="text"
				name="assessment_type"
				value={step2Form?.assessment_type}
				placeholder="Specify other"
				onChange={handleChange}
				readOnly={type!="create"}
			/>
			<p>Does the student have any other medical or wellbeing issues?</p>
			<input
				type={"text"}
				className="text"
				name="medical_or_wellbeing_issues"
				value={step2Form?.medical_or_wellbeing_issues}
				onChange={handleChange}
				placeholder="Please enter notes and comments"
				readOnly={type!="create"}
			/>
			<br />
			<p>Is the student happy to come to school every day?</p>
			<label>
				<input
					type={"radio"}
					className="checkbox"
					name="student_regular_school"
					checked={step2Form?.student_regular_school=="yes"}
					value="yes"
					onChange={handleChange}
					onClick={() => sethappy(false)}
					
				/>
				
				Yes
			</label>
			<br />
			<label>
				<input
					type={"radio"}
					className="checkbox"
					name="student_regular_school"
					value="no"
					checked={step2Form?.student_regular_school=="no"}
					onChange={handleChange}
					onClick={() => sethappy(true)}
					
				/>
				No
			</label>
			<br />
			{(happy||step2Form?.student_regular_school=="no") && (
				<div>
					<p>
						Is there anything that could help the student come to school each
						day?
					</p>
					<input
						type={"text"}
						className="text"
						value={step2Form?.student_regular_school_details}
						name="student_regular_school_details"
						onChange={handleChange}
						placeholder="Please enter notes and comments"
						readOnly={type!="create"}
					/>
				</div>
			)}
			{type=="create"&&<div className="buttons">
			<button className="back" onClick={()=>changeStep("step1")}>Back</button>
				<button className="save-continue" type="submit">Save</button>
				<button className="save-continue" onClick={()=>changeStep("step3")}>Next</button>
			</div>}
			</form>
		</div>
	);
}

export default Step2;
