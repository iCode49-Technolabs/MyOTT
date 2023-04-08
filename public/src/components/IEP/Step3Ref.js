import "./Step3.css";
import React, { useState, useEffect,useMemo } from "react";
import Select from "react-select";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import KeyOutcome from "./KeyOutcome";
import { iep_step3, negotiate_goal,teacherTagging,viewIEPStep3 } from "../../actions/iep_step3";
import {teacherNames} from "../../actions/studentvoicechoice"

function Step3({student,type}) {
	const user = JSON.parse(localStorage.getItem("profile"))
	const initialForm={
		transitions: "",
		transitions_frequency: "",
		assesment_adjustment: "",
		assesment_adjustment_frequency: "",
		examination_adjustments: "Additional time",
		duration_start_date: "",
		duration_end_date: "",
		adjustment_review_schedule: "",
		student_discussion_schedule: "",
		career_discussion_schedule: "",
		lc_email:user?.email,
		email: student?.email,
		school: user?.school_name,
		type:type,
		key_outcome_id:[],
		version:type=="create"?1:2
	}
	const dispatch = useDispatch();
	const apiData = useSelector((state) => state);
	
	const [form, setForm] = useState(initialForm);
	const handleSubmit =   (e) => {
		e.preventDefault();
		

			dispatch(iep_step3(form));
			console.log(form)
		
	};
	useEffect(() => {
		dispatch(teacherNames({ school: user.school_name }))
		dispatch(negotiate_goal({ school: user.school_name,email: student?.email }))
		if(type!="create"){
			dispatch(
				viewIEPStep3({email:student?.email,
					school: user?.school_name})
			)}
		
		},[])
	const handleChange = async (e) =>{
		
		setForm({ ...form, [e.target.name]: e.target.value });}
		const handleSelectChange = (value, action) => {
			
			setForm({ ...form, [action.name]: value["label"] });
			
		};
		const frequencyOptions=[{value:"Daily",label:"Daily"},
		{value:"Every other day",label:"Every other day"},
		{value:"Weekly ",label:"Weekly "},
		{value:"Fortnightly",label:"Fortnightly"},
		{value:"Once a month",label:"Once a month"},
	]
		const levelOfAdjustmentOptions=[{value:"QDTP",label:"QDTP"},
		{value:"Supplementary",label:"Supplementary"},
		{value:"Substantial",label:"Substantial"},
		{value:"Extensive",label:"Extensive"}]

		
		const examination_adjustmentsOptions=[{value:"Additional time",label:"Additional time"},
		{value:"Rest Breaks",label:"Rest Breaks"},
		{value:"Using an Interpreter",label:"Using an Interpreter"},
		{value:"Using a Reader",label:"Using a Reader"},
		{value:"Using a Scribe",label:"Using a Scribe"},
		{value:"Using a Computer",label:"Using a Computer"},
		{value:"Flexible Time Arrangements",label:"Flexible Time Arrangements"},
		{value:"Oral Exams",label:"Oral Exams"},
		{value:"Take-Home Exams",label:"Take-Home Exams"},
		{value:"Split an Exam",label:"Split an Exam"},
		{value:"Other",label:"Other"}]
		const [key_outcome,setKey_Outcome]=useState([true,false,false])
		const [key_outcome_form,setKey_OutcomeForm]=useState([])
		const [publishData,setPublishData] = useState({
			email:student?.email,
			teachers:[],
		})

		const teacherCheckbox=[]
		for(var i=0;i<6;i++){
			teacherCheckbox.push(false)
		}
		const [checked, setChecked] = useState({
			
			teacher: teacherCheckbox,
		});
		const [teachers, setTeachers] = useState([]);
		const publish = (e,publishData) => {
			e.preventDefault();
			dispatch(teacherTagging({email:publishData.email,teachers:publishData.teachers.toString(),view:publishData.view}))
			
		};
		const goal=apiData?.iep_step3?.negotiate_goal?.negotiate_goal
		const viewData= apiData.iep_step3?.iep_step3
	
	
	
	const dateFormat=(date)=>{
		return date?.split("-")[2]+"-"+date?.split("-")[1]+"-"+date?.split("-")[0]
	}
	const [activeTab, setActiveTab] = useState({
		tab1: {
			isActive: type=="revise",
			style: { backgroundColor: " #FFE4AF", color: "#092433" },
		},
		tab2: {
			isActive: type=="create",
			style: { backgroundColor: "#fff", color: "#092433" },
		}
	});
	const changeTab = (view) => {
		const temp = {
			tab1: {
				isActive: false,
				style: { backgroundColor: "#fff", color: "#092433" },
			},
			tab2: {
                isActive: false,
                style: { backgroundColor: "#fff", color: "#092433" },
            }}
			temp[view] = {
			isActive: true,
			style: { backgroundColor: " #FFE4AF", color: "#092433" },
		};
		setActiveTab(temp);
	};
	useMemo(()=>{
		if(viewData?.length==2)
		{
			if (activeTab.tab1.isActive&&type!="create"&&viewData!=undefined)
		{
			setForm({...viewData?.[0],type:type})
			
			
			const ids=JSON.parse(viewData?.[0]?.key_outcome_id)
			
			setKey_Outcome(ids?.map((value,index)=>(index==0? true: false)))
		}
		if (activeTab.tab2.isActive&&type!="create"&&viewData!=undefined)
		{
			setForm({...viewData?.[1],type:type})
			
			
			const ids=JSON.parse(viewData?.[1]?.key_outcome_id)
			
			setKey_Outcome(ids?.map((value,index)=>(index==0? true: false)))
		}
		}
		else if (activeTab.tab2.isActive)
		{setForm(initialForm)
			setKey_Outcome([true,false,false])
		
		}
		else if (activeTab.tab1.isActive&&type!="create"&&viewData!=undefined)
		{
			setForm({...viewData?.[0],type:type})
			
			
			const ids=JSON.parse(viewData?.[0]?.key_outcome_id)
			
			setKey_Outcome(ids?.map((value,index)=>(index==0? true: false)))
		}
		
	},[activeTab,viewData])

	return (
		<div className="step3">
			{type=="revise"&&<div className="tabs">
						<p
							style={activeTab.tab1.style}
							onClick={() => changeTab("tab1")}
						>
							{viewData?.length==1?"View Existing Plan":"Version 1"}
						</p>
                        <p
							style={activeTab.tab2.style}
							onClick={() => changeTab("tab2")}
						>
							{viewData?.length==1?"Create new plan":"Version 2"}
							
						</p>
                        
						
					</div>}
					{activeTab.tab1.isActive&&<>
			<form onSubmit={handleSubmit}>
			<p className="title">Existing Plan</p>
            <p className="sub-title">Goal</p>
			<p>{goal}</p>
			
			
			{key_outcome!=undefined&&key_outcome.map((value,index)=>(
				value?<KeyOutcome key={"key"+index} outcome_number={index+1} activeTab={activeTab} student={student} type={type} key_outcome_id={form?.key_outcome_id.length>=1&&JSON.parse(form?.key_outcome_id)[index]} key_outcome_form={key_outcome_form} setKey_OutcomeForm={setKey_OutcomeForm} setStep3Form={setForm} set3Form={form}/>:
				<div key={"key"+index} className="dummmy-keyoutcome" onClick={()=>{
					const tempFalse=key_outcome.map((key)=>false)
					tempFalse[index]=true
					setKey_Outcome(tempFalse)}}>
					<p className="sub-title">Key Outcome {index+1}</p>
					<div className="arrow"></div>
				</div>
			))}
			
            <p className="sub-title">Transitions (between Activities / Classes, etc)</p>
            <div className="text-select">
            <textarea className="textarea" name="transitions" value={form?.transitions}  readOnly/>
			
            <Select
				name="transitions_frequency"
				
				menuIsOpen={false}
				isSearchable={false}
				
				placeholder={
					<div className="select-placeholder-text">
						{form?.transitions_frequency||"Frequency"}
					</div>
				}
				

			/>
            </div>
            
			
			<p className="sub-title">Assessment Adjustments </p>
            <div className="text-select">
            <textarea className="textarea" name="assesment_adjustment" value={form?.assesment_adjustment} readOnly/>
            <Select
				name="assesment_adjustment_frequency"
				menuIsOpen={false}
				isSearchable={false}
				placeholder={
					<div className="select-placeholder-text">
						{form?.assesment_adjustment_frequency||"Frequency"}
					</div>
				}
			/>
            </div>
			<p className="sub-title">Examination Adjustments  </p>
            <div className="text-select">
			<Select
				name="examination_adjustments"
				menuIsOpen={false}
				isSearchable={false}
				
				placeholder={
					<div className="select-placeholder-text">
						{form?.examination_adjustments|| "Examination Adjustments"}
						
					</div>
				}
				

			/>
			
			
            </div>
            <div className="title-select">
            <p className="sub-title" style={{marginRight:"3rem"}}>Duration of Adjustment   </p>
            <input type={"date"} className="date" value={dateFormat(form?.duration_start_date)} name="duration_start_date" readOnly placeholder="Start Date"/>
			<input type={"date"} className="date" value={dateFormat(form?.duration_end_date)} name="duration_end_date" readOnly placeholder="End Date"/>
            </div>
            
            <div className="title-select">
            <p className="sub-title">Adjustment Review Schedule   </p>
            <Select
				name="adjustment_review_schedule"
				menuIsOpen={false}
				isSearchable={false}
				placeholder={
					<div className="select-placeholder-text">
						{form?.adjustment_review_schedule||"Every Week"}
					</div>
				}
			/>
            
            </div>
            <div className="title-select">
            <p className="sub-title">Student Discussion Schedule   </p>
            <Select
				name="student_discussion_schedule"
				menuIsOpen={false}
				isSearchable={false}
				placeholder={
					<div className="select-placeholder-text">
						{form?.student_discussion_schedule||"Every Week"}
					</div>
				}
			/>
            
            </div>
            <div className="title-select">
            <p className="sub-title" style={{marginRight:"1.8rem"}}>Carer Discussion Schedule   </p>
            <Select
				name="career_discussion_schedule"
				menuIsOpen={false}
				isSearchable={false}
				placeholder={
					<div className="select-placeholder-text">
						{form?.career_discussion_schedule||"Every Week"}
					</div>
				}
			/>
            
            </div>
			
			</form></>}
			{activeTab.tab2.isActive&&viewData?.length==2&&<>
			<form onSubmit={handleSubmit}>
			<p className="title">Existing Plan</p>
            <p className="sub-title">Goal</p>
			<p>{goal}</p>
			
			
			{key_outcome!=undefined&&key_outcome.map((value,index)=>(
				value?<KeyOutcome key={"key"+index} outcome_number={index+1} activeTab={activeTab} student={student} type={type} key_outcome_id={form?.key_outcome_id.length>=1&&JSON.parse(form?.key_outcome_id)[index]} key_outcome_form={key_outcome_form} setKey_OutcomeForm={setKey_OutcomeForm} setStep3Form={setForm} set3Form={form}/>:
				<div key={"key"+index} className="dummmy-keyoutcome" onClick={()=>{
					const tempFalse=key_outcome.map((key)=>false)
					tempFalse[index]=true
					setKey_Outcome(tempFalse)}}>
					<p className="sub-title">Key Outcome {index+1}</p>
					<div className="arrow"></div>
				</div>
			))}
			
            <p className="sub-title">Transitions (between Activities / Classes, etc)</p>
            <div className="text-select">
            <textarea className="textarea" name="transitions" value={form?.transitions}  readOnly/>
			
            <Select
				name="transitions_frequency"
				
				menuIsOpen={false}
				isSearchable={false}
				
				placeholder={
					<div className="select-placeholder-text">
						{form?.transitions_frequency||"Frequency"}
					</div>
				}
				

			/>
            </div>
            
			
			<p className="sub-title">Assessment Adjustments </p>
            <div className="text-select">
            <textarea className="textarea" name="assesment_adjustment" readOnly/>
            <Select
				name="assesment_adjustment_frequency"
				menuIsOpen={false}
				isSearchable={false}
				placeholder={
					<div className="select-placeholder-text">
						{form?.assesment_adjustment_frequency||"Frequency"}
					</div>
				}
			/>
            </div>
			<p className="sub-title">Examination Adjustments  </p>
            <div className="text-select">
			<Select
				name="examination_adjustments"
				menuIsOpen={false}
				isSearchable={false}
				
				placeholder={
					<div className="select-placeholder-text">
						{form?.examination_adjustments|| "Examination Adjustments"}
						
					</div>
				}
				

			/>
			
			
            </div>
            <div className="title-select">
            <p className="sub-title" style={{marginRight:"3rem"}}>Duration of Adjustment   </p>
            <input type={"date"} className="date" value={dateFormat(form?.duration_start_date)} name="duration_start_date" readOnly placeholder="Start Date"/>
			<input type={"date"} className="date" value={dateFormat(form?.duration_end_date)} name="duration_end_date" readOnly placeholder="End Date"/>
            </div>
            
            <div className="title-select">
            <p className="sub-title">Adjustment Review Schedule   </p>
            <Select
				name="adjustment_review_schedule"
				menuIsOpen={false}
				isSearchable={false}
				placeholder={
					<div className="select-placeholder-text">
						{form?.adjustment_review_schedule||"Every Week"}
					</div>
				}
			/>
            
            </div>
            <div className="title-select">
            <p className="sub-title">Student Discussion Schedule   </p>
            <Select
				name="student_discussion_schedule"
				menuIsOpen={false}
				isSearchable={false}
				placeholder={
					<div className="select-placeholder-text">
						{form?.student_discussion_schedule||"Every Week"}
					</div>
				}
			/>
            
            </div>
            <div className="title-select">
            <p className="sub-title" style={{marginRight:"1.8rem"}}>Carer Discussion Schedule   </p>
            <Select
				name="career_discussion_schedule"
				menuIsOpen={false}
				isSearchable={false}
				placeholder={
					<div className="select-placeholder-text">
						{form?.career_discussion_schedule||"Every Week"}
					</div>
				}
			/>
            
            </div>
			
			</form></>}
			{activeTab.tab2.isActive&&viewData?.length==1&&<>
			<form onSubmit={handleSubmit}>
			<p className="title">Generate Plan</p>
            <p className="sub-title">Goal</p>
			<p>{goal}</p>
			
			
			{key_outcome.map((value,index)=>(
				value?<KeyOutcome key={"key"+index} outcome_number={index+1} student={student} activeTab={activeTab} type={type} key_outcome_id={form?.key_outcome_id?.[index]} key_outcome_form={key_outcome_form} setKey_OutcomeForm={setKey_OutcomeForm} setStep3Form={setForm} set3Form={form}/>:
				<div key={"key"+index} className="dummmy-keyoutcome" onClick={()=>{
					const tempFalse=key_outcome.map((key)=>false)
					tempFalse[index]=true
					setKey_Outcome(tempFalse)}}>
					<p className="sub-title">Key Outcome {index+1}</p>
					<div className="arrow"></div>
				</div>
			))}
			<button className="add_more" onClick={()=>{
				const temp = key_outcome
				
				temp.push(false)
				setKey_Outcome([...temp])
				
				
				}}>Add more</button>
            <p className="sub-title">Transitions (between Activities / Classes, etc)</p>
            <div className="text-select">
            <textarea className="textarea" name="transitions" value={form?.transitions} onChange={handleChange}/>
            <Select
				name="transitions_frequency"
				options={frequencyOptions}
				onChange={handleSelectChange}
				placeholder={
					<div className="select-placeholder-text">
						{form?.transitions_frequency|| "Frequency"}
					</div>
				}
				

			/>
            </div>
            
			
			<p className="sub-title">Assessment Adjustments </p>
            <div className="text-select">
            <textarea className="textarea" name="assesment_adjustment" onChange={handleChange}/>
            <Select
				name="assesment_adjustment_frequency"
				onChange={handleSelectChange}
				options={frequencyOptions}
				placeholder={
					<div className="select-placeholder-text">
						Frequency
					</div>
				}
			/>
            </div>
			<p className="sub-title">Examination Adjustments  </p>
            <div className="text-select">
			<Select
				name="examination_adjustments"
				options={examination_adjustmentsOptions}
				onChange={handleSelectChange}
				
				placeholder={
					<div className="select-placeholder-text">
						{form?.examination_adjustments|| "Examination Adjustments"}
						
					</div>
				}
				

			/>
			
			{(!(examination_adjustmentsOptions.map((data)=>Object.values(data)[0]).includes(form.examination_adjustments))||form.examination_adjustments=="Other")&&<input type={"text"} className="text" name="examination_adjustments" placeholder="Examination Adjustments" onChange={handleChange}/>}
            
            </div>
            <div className="title-select">
            <p className="sub-title" style={{marginRight:"3rem"}}>Duration of Adjustment   </p>
            <input type={"date"} className="date"  name="duration_start_date" onChange={handleChange} placeholder="Start Date"/>
			<input type={"date"} className="date" name="duration_end_date" onChange={handleChange} placeholder="End Date"/>
            </div>
            
            <div className="title-select">
            <p className="sub-title">Adjustment Review Schedule   </p>
            <Select
				name="adjustment_review_schedule"
				onChange={handleSelectChange}
				options={frequencyOptions}
				placeholder={
					<div className="select-placeholder-text">
						{form?.adjustment_review_schedule||"Every Week"}
					</div>
				}
			/>
            
            </div>
            <div className="title-select">
            <p className="sub-title">Student Discussion Schedule   </p>
            <Select
				name="student_discussion_schedule"
				onChange={handleSelectChange}
				options={frequencyOptions}
				placeholder={
					<div className="select-placeholder-text">
						{form?.student_discussion_schedule||"Every Week"}
					</div>
				}
			/>
            
            </div>
            <div className="title-select">
            <p className="sub-title" style={{marginRight:"1.8rem"}}>Carer Discussion Schedule   </p>
            <Select
				name="career_discussion_schedule"
				onChange={handleSelectChange}
				options={frequencyOptions}
				placeholder={
					<div className="select-placeholder-text">
						{form?.career_discussion_schedule||"Every Week"}
					</div>
				}
			/>
            
            </div>
			<div className="buttons">
				<button className="back">Back</button>
				<button className="save" type="submit">Save</button>
                <button className="publish" onClick={e=>{publish(e,publishData)}}>Publish</button>
			</div>
			</form>
            <label key={"allTeacher"}>
				<input
					type={"checkbox"}
					className="checkbox"
					name="tag_all_teachers"
					onChange={(e) => 

						{
							const temp=checked.teacher.map(function(bool) {return !bool});
							
							setChecked({ ...checked, teacher: temp });
							setPublishData({...publishData,teachers:apiData.studentvoicechoice.teacherNames?.map((data,index)=>(
							(temp[index])? data.email:""
							
						))})
						}
						}
				/>
				Tag all teachers
			</label>
			<div className="teachers">
				
				{apiData.studentvoicechoice.teacherNames?.map((value,index)=>(
					<label key={value.first_name}>
					<input
						type={"checkbox"}
						className="checkbox"
						name="teacher"
						value={value.email}
						checked={checked.teacher[index]}
						onChange={(e) => {
							
							const temp=checked.teacher;
							temp[index]=!checked.teacher[index];
							setChecked({ ...checked, teacher : temp });
							if (!teachers.includes(e.target.value) && checked.teacher[index]){
								const temp=publishData.teachers
								temp.push(e.target.value)
								setPublishData({...publishData,teachers:temp});
							
							}
							else{
								const temp=publishData.teachers
								temp.splice(temp.indexOf(e.target.value), 1)
								
								setPublishData({...publishData,teachers:temp});
							}
							
						}}
					/>
					{value.first_name+" "+value.last_name}
					
				</label>
				))}
				
			</div></>}
		</div>
	);
}

export default Step3;





