import "./IEP.css";
import React, { useState, useRef,useEffect } from "react";
import {
	FacebookIcon,
	TwitterIcon,
	LinkedinIcon,
	BellIcon,
} from "../../assets/Icons";
import Header from "../Header";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import StudentInfo from "./../StudentInfo";
import { useLocation } from "react-router-dom";
import Logo from "../../assets/Images/Logo.png"
import { strategies_adjustment } from "../../actions/iep_step3";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function IEP({ type }) {
	const componentRef = useRef();
	const user = JSON.parse(localStorage.getItem("profile"))
	const dispatch = useDispatch();
	const apiData = useSelector((state) => state);
	const [activeStep, setActiveStep] = useState({
		step1: {
			isActive: true,
			style: { backgroundColor: "#69B3DD", color: "white" },
		},
		step2: {
			isActive: false,
			style: { backgroundColor: "#fff", color: "#69B3DD" },
		},
		step3: {
			isActive: false,
			style: { backgroundColor: "#fff", color: "#69B3DD" },
		},
	});
	const changeStep = (step) => {
		const temp = {
			step1: {
				isActive: false,
				style: { backgroundColor: "#fff", color: "#69B3DD" },
			},
			step2: {
				isActive: false,
				style: { backgroundColor: "#fff", color: "#69B3DD" },
			},
			step3: {
				isActive: false,
				style: { backgroundColor: "#fff", color: "#69B3DD" },
			},
		};
		temp[step] = {
			isActive: true,
			style: { backgroundColor: "#69B3DD", color: "white" },
		};
		setActiveStep(temp);
	};
	const location = useLocation();
	useEffect(()=>{
		dispatch(strategies_adjustment({school_name:user.school_name}));
		
	},[])
	const strategiesAdjustment=apiData.iep_step3?.view_stratergies_adjustments
	const [step2Form,setStep2Form]=useState({
		subject_requiring_adjustment: "",
		support_staff_member: "",
		learning_or_social_difficulties: "",
		learning_or_social_difficulties_details: "",
		assessment_type: "",
		medical_or_wellbeing_issues: "",
		student_regular_school: "",
		student_regular_school_details: "",
		lc_email: user?.email,
		email:location.state?.student?.email,
		school_name: user?.school_name,
		personal_info_iep_id: "",
		type:type
	});
	const [step3Form,setStep3Form]=useState({
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
		email: location.state?.student?.email,
		school: user?.school_name,
		type: type,
		key_outcome: [],
	});
	const options=[{value:"Communication",label:"Communication" },
	{value:"Personal",label:"Personal"},
	{value:"Physical",label:"Physical"},
	{value:"Social / Emotional",label:"Social / Emotional"},
	{value:"Sensory",label:"Sensory"},
	{value:"Cognitive",label:"Cognitive"}]
	const [step1,setStep1]=useState({
		student:{},
		studentdetails:{},
		impinfo:{},
		personalinfo:{}
	})
	const [key_outcome_print,setKey_OutcomePrint]=useState([])
	
	return (
		<div className="iep" >
			<Header />
			<div className="container">
				
				<StudentInfo student={location.state?.student} />

				<div className="nav-text">
					<div></div>
					<p>Back to All Students</p>
				</div>
				<div className="iep-container">
					<p>
						{type == "create" ? "Create" : "Revise"} Individual Education Plan
					</p>
					<div className="steps">
						<p
							style={activeStep.step1.style}
							onClick={() => changeStep("step1")}
						>
							Step 1
						</p>
						<p
							style={activeStep.step2.style}
							onClick={() => changeStep("step2")}
						>
							Step 2
						</p>
						<p
							style={activeStep.step3.style}
							onClick={() => changeStep("step3")}
						>
							Step 3
						</p>
					</div>
					<hr className="line"></hr>
					<div className="step-container">
						{activeStep.step1.isActive && (
							<Step1
								key="step1"
								student={location.state?.student}
								changeStep={changeStep}
								type={type}
								setStep1={setStep1}
							/>
						)}
						{activeStep.step2.isActive && (
							<Step2
								key="step2"
								student={location.state?.student}
								changeStep={changeStep}
								type={type}
								step2Form={step2Form}
								setStep2Form={setStep2Form}
							/>
						)}
						{activeStep.step3.isActive && (
							<Step3
								key="step3"
								student={location.state?.student}
								changeStep={changeStep}
								type={type}
								comp={componentRef}
								step3Form={step3Form}
								setStep3Form={setStep3Form}
								key_outcome_print={key_outcome_print}
								setKey_OutcomePrint={setKey_OutcomePrint}
							/>
						)}
					</div>
					
				</div>
			</div>
			<div className="footer">
				<FacebookIcon />
				<TwitterIcon />
				<LinkedinIcon />
			</div>
			
			
			<div className="iep print" ref={componentRef}>
	
			<div className="step1">
			<p className="title"> Student Details</p>
			<div className="student-details grid-container">
				<div className="detail">
					<p className="sub-title">Name</p>
					<p>{step1.student?.first_name + " " + step1.student?.last_name}</p>
				</div>
				<div className="detail">
					<p className="sub-title">DOB</p>
					<p>{step1.student?.date_of_birth}</p>
				</div>
				<div className="detail">
					<p className="sub-title">Student ID</p>
					<p>{step1.student?.user_id}</p>
				</div>
				<div className="detail">
					<p className="sub-title">Grade</p>
					<p>{step1.student?.class_year}</p>
				</div>
				<div className="detail">
					<p className="sub-title">Teachers</p>
					<p style={{ marginBottom: "-.5rem" }}>Peter Parker</p>
					<p style={{ marginBottom: "-.5rem" }}>Tony Stark</p>
					<p style={{ marginBottom: "-.5rem" }}>Bruce Wayne</p>
				</div>
				<div className="detail">
					<p className="sub-title">Date</p>
					<p>{step1.studentdetails?.creation_date}</p>
				</div>
			</div>
			<p className="title">Important Information</p>
			<div className="important-information grid-container">
				<div className="impo-info">
					<p className="sub-title">Student NDIS Status</p>
					<p>{step1.impinfo?.ndis_status||"NA"}</p>
				</div>
				<div className="impo-info">
					<p className="sub-title">Student NCCD Status</p>
					<p>{step1.impinfo?.nccd_status||"NA"}</p>
				</div>
				<div className="impo-info">
					<p className="sub-title">Disability Category</p>
					<ul>
						<li>{step1.impinfo?.disability_category||"NA"}</li>
					</ul>
				</div>
				<div className="impo-info">
					<p className="sub-title">Disgnostic</p>
					<ul>
						<li>{step1.impinfo?.diagnostics||"NA"}</li>
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
						<li>{step1.impinfo?.outside_agencies||"NA"}</li>
					</ul>
				</div>
				<div className="impo-info">
					<p className="sub-title">Current Referrals </p>
					<ul>
						<li>{step1.impinfo?.current_referrals||"NA"}</li>
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
						<li>{step1.personalinfo?.review_strength}</li>
						<li>{step1.personalinfo?.review_interest}</li>
					</ul>
				</div>
				<div className="pers-info">
					<p className="sub-title">
						Student Limiting Beliefs & Enabling Beliefs{" "}
					</p>
					<ul>
						<li>{step1.personalinfo?.review_limiting_belief}</li>
						<li>{step1.personalinfo?.review_enabling_belief}</li>
					</ul>
				</div>
				<div className="pers-info">
					<p className="sub-title">Preferred Learning Style </p>
					<ul>
						<li>{step1.personalinfo?.review_learning_style}</li>
					</ul>
				</div>
				<div className="pers-info">
					<p className="sub-title">Barriers to learning </p>
					<ul>
						<li>{step1.personalinfo?.barriers_learning}</li>
					</ul>
				</div>
				<div className="pers-info">
					<p className="sub-title">How goals can be achieved </p>
					<ul>
						<li>{step1.personalinfo?.how_goals_can_be_achieved}</li>
					</ul>
				</div>
				<div className="pers-info">
					<p className="sub-title">Teacher/s can do something additionally or differently </p>
					<ul>
						<li>{step1.personalinfo?.teachers_can_do_additionally}</li>
					</ul>
				</div>
			</div>
			
		
		</div>
		<div className="step2">
			<form >
			<p className="title">Preliminary Information</p>
			<p>
				List the Learning Support Team members that will be assigned this
				student's supervision
			</p>
		
			
					<div className="select-placeholder-text">
						{step2Form?.support_staff_member|| "Select Learning Support Members"}
					</div>
			
			
			<br />
			<p>Subjects Requiring Adjustments</p>
			<div className="subjects">
				
								{step2Form?.subject_requiring_adjustment}
						
					
					
			</div>
			<br />

			<p>
				Has the student encountered any learning or social difficulties that has
				not been diagnosed or identified as a disability?
			</p>

			<label>
				{step2Form?.learning_or_social_difficulties
					
}
			</label>
			
			{step2Form?.learning_or_social_difficulties_details}
						
			
			<br />
			<p>Has the student had any of the following assessments?</p>
			{step2Form?.assessment_type}

		
			<p>Does the student have any other medical or wellbeing issues?</p>
			{step2Form?.medical_or_wellbeing_issues}
			<br />
			<p>Is the student happy to come to school every day?</p>
			{step2Form?.student_regular_school}
			
				<div>
					<p>
						Is there anything that could help the student come to school each
						day?
					</p>
					{step2Form?.student_regular_school_details}
				</div>
			
		
			</form>
		</div>
		<div className="step3">
			<form >
				<p className="title">Generate Plan</p>
				<p className="sub-title">Goal</p>
				{step3Form?.goal}
				{step3Form?.key_outcome?.map((value, index) =>
					 (
						<div className="keyoutcome">
			
			
			<div key={"keyoutcome"+index} style={{display:"flex",justifyContent:"space-between"}}>
			<p className="k_title">Key Outcome {index+1}</p>
		
			</div>
		<p className="version1">{key_outcome_print?.[index]?.notes_and_comments?.[0]}</p>
		<p className="version2">{key_outcome_print?.[index]?.notes_and_comments?.[1]}</p>
			<div key={"Support Needs"} style={{width:"15rem"}}>
			<p className="k_title">Support Needs</p>
			
			
			{key_outcome_print?.[index]?.support_need?.[0]&&options.map((value)=>(<label><input style={{width:"10%",marginLeft:"0"}} type={"checkbox"} checked={key_outcome_print?.[index]?.support_need?.[0]?.includes(value.value)} />{value.value}<br/></label>))}
			<br/>
			{key_outcome_print?.[index]?.support_need?.[1]&&options.map((value)=>(<label><input style={{width:"10%",marginLeft:"0"}} type={"checkbox"} checked={key_outcome_print?.[index]?.support_need?.[1]?.includes(value.value)} />{value.value}<br/></label>))}
			
			</div>
			<div key={"grid"} className="grid-container" 
			
			>
				
			<div key={"grid1"}>
			<p className="k_title">What we currently see</p>
			<p className="version1">{key_outcome_print?.[index]?.we_currently_see?.[0]}</p>
			<p className="version2">{key_outcome_print?.[index]?.we_currently_see?.[1]}</p>
			</div>
			<div key={"grid2"}>
			<p className="k_title">What success looks like</p>
			<p className="version1">{key_outcome_print?.[index]?.success_looks_like?.[0]}</p>
			<p className="version2">{key_outcome_print?.[index]?.success_looks_like?.[1]}</p>
			<div  key={"grid3"} style={{display:"flex"}}>
				<div>
				<p className="k_title">Frequency</p>
			<p className="version1">{key_outcome_print?.[index]?.frequency?.[0]}&nbsp;&nbsp;&nbsp;&nbsp;</p>
			<p className="version2">{key_outcome_print?.[index]?.frequency?.[1]}&nbsp;&nbsp;&nbsp;&nbsp;</p></div>
			<div>
			<p className="k_title">Level of adjustments</p>
			<p className="version1">{key_outcome_print?.[index]?.level_of_adjustments?.[0]}</p>
			<p className="version2">{key_outcome_print?.[index]?.level_of_adjustments?.[1]}</p></div></div>
			</div>
			<div key={"strategies"} style={{width:"80%"}}>
				<div key={"strategies_title"} style={{display:"flex",justifyContent:"space-between"}}><p className="k_title">Strategies / Adjustments </p>
				

				</div>
			
			<div className="cards version1" >
			{strategiesAdjustment!=undefined&&strategiesAdjustment!="internal error"&&
			strategiesAdjustment.map((value,index1)=>(
			console.log(key_outcome_print?.[index]?.strategies_adjustment?.[0],strategiesAdjustment),
				key_outcome_print?.[index]?.strategies_adjustment?.[0]!=undefined&&key_outcome_print?.[index]?.strategies_adjustment?.[0].includes(value?.adjustment_id)&&
				<div key={value.title+index1} className="card">
				<p className="card-k_title">{value.title}</p>
				<p className="card-sub-k_title">{value.subtitle}</p>
				<div style={{display:"flex",marginTop:"-.2rem"}}><p style={{width:"2rem"}}>Efforts</p>{Array.apply(null, { length: value.effort }).map((e, i) => (
  <i class="fa fa-star" key={i} style={{marginLeft:".2rem",marginTop:".4rem",color:"#FCB730",fontSize:".5rem"}}></i>
))}</div>
				<div style={{display:"flex",marginTop:"-.2rem"}}><p style={{width:"2rem"}}>Efficiency</p>{Array.apply(null, { length: value.efficiency }).map((e, i) => (
  <i class="fa fa-star" key={i} style={{marginLeft:".2rem",marginTop:".4rem",color:"#FCB730",fontSize:".5rem"}}></i>
))}</div>
				
			</div>
			))
			}
			</div>
			<div className="cards version2" >
			{strategiesAdjustment!=undefined&&strategiesAdjustment!="internal error"&&
			strategiesAdjustment.map((value,index)=>(
				
				key_outcome_print?.[index]?.strategies_adjustment?.[1]!=undefined&&key_outcome_print?.[index]?.strategies_adjustment?.[1].includes(value?.adjustment_id)&&
				
				<div key={value.title+index} className="card">
				<p className="card-k_title">{value.title}</p>
				<p className="card-sub-k_title">{value.subtitle}</p>
				<div style={{display:"flex",marginTop:"-.2rem"}}><p style={{width:"2rem"}}>Efforts</p>{Array.apply(null, { length: value.effort }).map((e, i) => (
  <i class="fa fa-star" key={i} style={{marginLeft:".2rem",marginTop:".4rem",color:"#FCB730",fontSize:".5rem"}}></i>
))}</div>
				<div style={{display:"flex",marginTop:"-.2rem"}}><p style={{width:"2rem"}}>Efficiency</p>{Array.apply(null, { length: value.efficiency }).map((e, i) => (
  <i class="fa fa-star" key={i} style={{marginLeft:".2rem",marginTop:".4rem",color:"#FCB730",fontSize:".5rem"}}></i>
))}</div>
				
			</div>
			))
			}
			</div>
			</div>
			<div>
			<p className="k_title">Write a new strategy</p>
		<p className="version1">{key_outcome_print?.[index]?.new_strategy?.[0]}</p>
			<p className="version2">{key_outcome_print?.[index]?.new_strategy?.[1]}</p>
			</div>
			</div>
		
		
			
			
		</div>
					
				))} 
				
				<p className="sub-title">
					Transitions (between Activities / Classes, etc)
				</p>
			
				<div className="text-select version1">
					<p style={{width:"80%"}}>{step3Form?.transitions?.[0]}</p>
					<p>{step3Form?.transitions_frequency?.[0]}</p>
				</div>
				<div className="text-select version2">
					<p style={{width:"80%"}}>{step3Form?.transitions?.[1]}</p>
					<p>{step3Form?.transitions_frequency?.[1]}</p>
				</div>

				<p className="sub-title">Assessment Adjustments </p>
			
				<div className="text-select version1">
					<p style={{width:"80%"}}>{step3Form?.assesment_adjustment?.[0]}</p>
					<p>{step3Form?.assesment_adjustment_frequency?.[0]}</p>
				</div>
				<div className="text-select version2">
					<p style={{width:"80%"}}>{step3Form?.assesment_adjustment?.[1]}</p>
					<p>{step3Form?.assesment_adjustment_frequency?.[1]}</p>
				</div>
				<p className="sub-title">Examination Adjustments </p>
				
				<div className="text-select version1">
					<p>{step3Form?.examination_adjustments?.[0]}</p>
					
				</div>
				<div className="text-select version2">
					<p>{step3Form?.examination_adjustments?.[1]}</p>
					
				</div>
				<div className="title-select">
					<p className="sub-title" style={{ marginRight: "3rem" }}>
						Duration of Adjustment{" "}
					</p>
					<div>
				
				
					<p className="version1"> {step3Form?.duration_start_date?.[0]}&nbsp;&nbsp;&nbsp;</p>
					
				
				
				
				<p className="version2">{step3Form?.duration_start_date?.[1]}&nbsp;&nbsp;&nbsp;</p>
				
			
					</div>
					<div>
				
				
					<p className="version1">{step3Form?.duration_end_date?.[0]}</p>
					
			
				
				<p className="version2">{step3Form?.duration_end_date?.[1]}</p>
				
					</div>
				</div>

				<div className="title-select">
					<p className="sub-title">Adjustment Review Schedule </p>
					<div>
					
				
					<p className="version1"> {step3Form?.adjustment_review_schedule?.[0]}</p>
					
				
				
				<p className="version2">{step3Form?.adjustment_review_schedule?.[1]}</p>
				</div>
				</div>
				<div className="title-select">
					<p className="sub-title">Student Discussion Schedule </p>
					<div>
					
				
					<p className="version1">{step3Form?.student_discussion_schedule?.[0]}</p>
					
				
				
				
				<p className="version2">{step3Form?.student_discussion_schedule?.[1]}</p>
				
		</div>
				</div>
				<div className="title-select">
					<p className="sub-title" style={{ marginRight: "1.8rem" }}>
						Carer Discussion Schedule{" "}
					</p>
					<div>
					
				
					<p className="version1">{step3Form?.career_discussion_schedule?.[0]}</p>
					
				
				
				
				<p className="version2">{step3Form?.career_discussion_schedule?.[1]}</p>
				
		</div>
				</div>
							</form>
			
			
		</div>
		
	</div>
	
	
		</div>
		
	);
}

export default IEP;
