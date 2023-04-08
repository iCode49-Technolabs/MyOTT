import "./Step1.css";
import React, { useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
	iep_step_1_impInfo,
	iepid,
	iep_step_1_studentDetails,
	iep_step_1_personalInfo,
} from "../../actions/iep_step1";

function Step1({student,type,changeStep,setStep1}) {
	const dispatch = useDispatch();
	const apiData = useSelector((state) => state.iep_step1);
	// useEffect(() => {
		
	// 	dispatch(
	// 		iep_step_1_studentDetails({
	// 			email: "Ashley.Williams@test.com",
	// 			school_name: "Devian International",
	// 		})
	// 	)
	// 	dispatch(
	// 		iep_step_1_impInfo({
	// 			email: "Ashley.Williams@test.com",
	// 			school_name: "Devian International",
	// 		})
	// 	)
	// 	dispatch(
	// 		iep_step_1_personalInfo({
	// 			email: "Ashley.Williams@test.com",
	// 			school_name: "Devian International",
	// 		})
	// 	);
		
	// },[dispatch]);
	const user= JSON.parse(localStorage.getItem('profile'))
	useEffect(()=>{
		dispatch(
			iep_step_1_studentDetails({
			email: student?.email,
			school_name: user.school_name,
		})
	)
	dispatch(
		iep_step_1_impInfo({
			email: student?.email,
			school_name: user.school_name,
		})
	)
	dispatch(
		iep_step_1_personalInfo({
			email: student?.email,
			school_name: user.school_name,
		})
	);
	// dispatch(
	// 	iepid({
	// 		email: student.email,
	// 		school_name: user.school_name,
	// 	})
	// );
	},[])
	
	const iepId = apiData?.iepid;
	const studentdetails = apiData?.iep_step_1_studentdetails;
	const impinfo = apiData?.iep_step_1_impinfo;
	const personalinfo = apiData?.iep_step_1_personalinfo;
	useMemo(()=>{
		setStep1({
			student:student,
			studentdetails:studentdetails,
			impinfo:impinfo,
			personalinfo:personalinfo,
		})
	},[studentdetails,impinfo,personalinfo])
	return (
		<div className="step1">
			<p className="title"> Student Details</p>
			<div className="student-details grid-container">
				<div className="detail">
					<p className="sub-title">Name</p>
					<p>{student?.first_name + " " + student?.last_name}</p>
				</div>
				<div className="detail">
					<p className="sub-title">DOB</p>
					<p>{student?.date_of_birth}</p>
				</div>
				<div className="detail">
					<p className="sub-title">Student ID</p>
					<p>{student?.user_id}</p>
				</div>
				<div className="detail">
					<p className="sub-title">Grade</p>
					<p>{student?.class_year}</p>
				</div>
				<div className="detail">
					<p className="sub-title">Teachers</p>
					<p style={{ marginBottom: "-.5rem" }}>Peter Parker</p>
					<p style={{ marginBottom: "-.5rem" }}>Tony Stark</p>
					<p style={{ marginBottom: "-.5rem" }}>Bruce Wayne</p>
				</div>
				<div className="detail">
					<p className="sub-title">Date</p>
					<p>{studentdetails?.creation_date}</p>
				</div>
			</div>
			<p className="title">Important Information</p>
			<div className="important-information grid-container">
				<div className="impo-info">
					<p className="sub-title">Student NDIS Status</p>
					<p>{impinfo?.ndis_status||"NA"}</p>
				</div>
				<div className="impo-info">
					<p className="sub-title">Student NCCD Status</p>
					<p>{impinfo?.nccd_status||"NA"}</p>
				</div>
				<div className="impo-info">
					<p className="sub-title">Disability Category</p>
					<ul>
						<li>{impinfo?.disability_category||"NA"}</li>
					</ul>
				</div>
				<div className="impo-info">
					<p className="sub-title">Disgnostic</p>
					<ul>
						<li>{impinfo?.diagnostics||"NA"}</li>
					</ul>
				</div>
				<div className="impo-info">
					<p className="sub-title">School Based Professional Assessments</p>
					<ul>
						<li>NA</li>
					</ul>
				</div>
				<div className="impo-info">
					<p className="sub-title">Outside Agencies Involved </p>
					<ul>
						<li>{impinfo?.outside_agencies||"NA"}</li>
					</ul>
				</div>
				<div className="impo-info">
					<p className="sub-title">Current Referrals </p>
					<ul>
						<li>{impinfo?.current_referrals||"NA"}</li>
					</ul>
				</div>
				<div className="impo-info">
					<p className="sub-title">Evidence of Functional Impact</p>
					<ul>
						<li>NA</li>
					</ul>
				</div>
			</div>
			<p className="title">Personal Information</p>
			<div className="personal-information">
				<div className="pers-info">
					<p className="sub-title">Student Strengths & Interests</p>
					<ul>
						<li>{personalinfo?.review_strength}</li>
						<li>{personalinfo?.review_interest}</li>
					</ul>
				</div>
				<div className="pers-info">
					<p className="sub-title">
						Student Limiting Beliefs & Enabling Beliefs{" "}
					</p>
					<ul>
						<li>{personalinfo?.review_limiting_belief}</li>
						<li>{personalinfo?.review_enabling_belief}</li>
					</ul>
				</div>
				<div className="pers-info">
					<p className="sub-title">Preferred Learning Style </p>
					<ul>
						<li>{personalinfo?.review_learning_style}</li>
					</ul>
				</div>
				<div className="pers-info">
					<p className="sub-title">Barriers to learning </p>
					<ul>
						<li>{personalinfo?.barriers_learning}</li>
					</ul>
				</div>
				<div className="pers-info">
					<p className="sub-title">How goals can be achieved </p>
					<ul>
						<li>{personalinfo?.how_goals_can_be_achieved}</li>
					</ul>
				</div>
				<div className="pers-info">
					<p className="sub-title">Teacher/s can do something additionally or differently </p>
					<ul>
						<li>{personalinfo?.teachers_can_do_additionally}</li>
					</ul>
				</div>
			</div>
			
		<div className="buttons">
				{/* <button className="back">Back</button> */}
				<button className="save-continue" onClick={()=>changeStep("step2")}>Continue</button>
			</div>
		</div>
	);
}

export default Step1;
