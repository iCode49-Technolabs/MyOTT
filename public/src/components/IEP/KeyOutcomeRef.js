import "./KeyOutcome.css";
import React,{ useState,useEffect,useMemo } from "react";
import RecommadationPopUp from "./PopUp";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Select from "react-select";
import bulb from "./../images/bulb.png";
import makeAnimated from 'react-select/animated';
import { key_outcome, strategies_adjustment, viewKeyOutcome } from "../../actions/iep_step3";

function KeyOutcome({outcome_number,student,key_outcome,type,key_outcome_form,setKey_OutcomeForm,activeTab,setStep3Form,set3Form}) {
	const dispatch = useDispatch();
	const apiData = useSelector((state) => state);
	const animatedComponents = makeAnimated();
	const [popup, setPopup] = useState({type:[],state:false});
	const user= JSON.parse(localStorage.getItem('profile'))
	const options=[{value:"Communication",label:"Communication" },
	{value:"Personal",label:"Personal"},
	{value:"Physical",label:"Physical"},
	{value:"Social / Emotional",label:"Social / Emotional"},
	{value:"Sensory",label:"Sensory"},
	{value:"Cognitive",label:"Cognitive"}]
	const [form,setForm]=useState({
		email:student?.email,
		school_name:user.school_name,
		notes_and_comments:key_outcome_form?.[outcome_number-1]?.notes_and_comments,
		support_need:key_outcome_form?.[outcome_number-1]?.support_need,
		we_currently_see:key_outcome_form?.[outcome_number-1]?.we_currently_see,
		strategies_adjustment:key_outcome_form?.[outcome_number-1]?.strategies_adjustment,
		success_looks_like:key_outcome_form?.[outcome_number-1]?.success_looks_like,
		frequency:key_outcome_form?.[outcome_number-1]?.frequency,
		level_of_adjustments:key_outcome_form?.[outcome_number-1]?.level_of_adjustments,
		new_strategy:key_outcome_form?.[outcome_number-1]?.new_strategy,
		outcome_column_number:outcome_number,
		lc_email:user.email,
		type:type,
		tag_teachers:[]
	})
	
	
	useEffect(()=>{
		dispatch(strategies_adjustment({school_name:user.school_name}));
		dispatch(viewKeyOutcome({key_outcome:key_outcome}))
	},[key_outcome])
	const strategiesAdjustment=apiData.iep_step3?.view_stratergies_adjustments
	const [displayStrategiesAdjustment,setDisplayStrategiesAdjustment]=useState([0,1])
	
	const handleChange = async (e) =>{
		
		setForm({ ...form, [e.target.name]: e.target.value });}
		const handleSelectChange = (value, action) => {
			
			if(value.constructor === Array){
				const temp=value.map((value)=>value["label"])
				setForm({ ...form, [action.name]: temp });
				
			}
			else
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
		const viewData= apiData.iep_step3?.key_outcome
		useMemo(()=>{
			if(activeTab.tab1.isActive&&type!="create"){
	setForm({...viewData,type:type})
setDisplayStrategiesAdjustment(viewData?.strategies_adjustment)
}
		},[viewData,activeTab]
		)
		
		const handleSubmit =  (e) => {
			e.preventDefault();
			
			console.log(form)
			dispatch(key_outcome(form));
			const temp=key_outcome_form
			if (temp.length<=outcome_number-1)
			{
				temp.push(form)
			}
			else
			temp[outcome_number-1]=form
			setKey_OutcomeForm([...temp])
			
			const temp_key_outcome=set3Form.key_outcome
			temp_key_outcome.push(Number(apiData.iep_step3?.key_outcome)+1)
			if(apiData.iep_step3?.key_outcome!=undefined&&temp_key_outcome.includes(NaN))
			temp_key_outcome[0]=Number(apiData.iep_step3?.key_outcome)
			console.log(temp_key_outcome,apiData.iep_step3)
			setStep3Form({...set3Form,key_outcome:temp_key_outcome})
			
			
			
		};

		
		const teacherCheckbox=[]
		for(var i=0;i<6;i++){
			teacherCheckbox.push(false)
		}
		const [checked, setChecked] = useState({
			
			teacher: teacherCheckbox,
		});
		const [teachers, setTeachers] = useState([]);
		


	return (
		<div className="keyoutcome">
			
			{popup.state ? (
			<RecommadationPopUp key={"popup"+outcome_number} setPopup={setPopup} setForm={setForm} form={form} popup={popup} displayStrategiesAdjustment={displayStrategiesAdjustment} setDisplayStrategiesAdjustment={setDisplayStrategiesAdjustment} strategiesAdjustment={strategiesAdjustment}/>) : undefined}
			
			<div key={"keyoutcome"+outcome_number} style={{display:"flex",justifyContent:"space-between"}}>
			<p className="k_title">Key Outcome {outcome_number}</p>
			<div className="arrow"></div>
			</div>
			
			<input className="notes-comments" placeholder="Please enter notes and comments." value={form?.notes_and_comments} name="notes_and_comments" readOnly={activeTab.tab1.isActive} onChange={handleChange} type={"text"}/>
			<div key={"Support Needs"} style={{width:"15rem"}}>
			<p className="k_title">Support Needs</p>
			{activeTab.tab1.isActive?
			<>
			{options.map((value)=>(<label><input style={{width:"10%",marginLeft:"0"}} type={"checkbox"} checked={form?.support_need?.includes(value.value)} />{value.value}<br/></label>))}
			</>
			:
			<Select
				name="support_need"
				closeMenuOnSelect={false}
      components={animatedComponents}
				options={options}
				isMulti
				
				onChange={handleSelectChange}
				placeholder={
					<div className="select-placeholder-text">
						Select Support Needs
					</div>
				}
			/>}
			
			</div>
			<div key={"grid"} className="grid-container" style={{marginTop:activeTab.tab2.isActive?"-5.5rem":"-8.5rem"}}>
			<div key={"grid1"}>
			<p className="k_title">What we currently see</p>
			<textarea placeholder="Please enter notes and comments" value={form?.we_currently_see} name="we_currently_see" onChange={handleChange} readOnly={activeTab.tab1.isActive}/>
			</div>
			<div key={"grid2"}>
			<p className="k_title">What success looks like</p>
			<textarea placeholder="Please enter notes and comments" value={form?.success_looks_like} name="success_looks_like" onChange={handleChange} readOnly={activeTab.tab1.isActive}/>
			{activeTab.tab2.isActive?<div  key={"grid3"} style={{display:"flex"}}>

			<Select
				name="frequency"
				options={frequencyOptions}
				onChange={handleSelectChange}
				
				placeholder={
					<div className="select-placeholder-text">
						{form?.frequency||"Frequency"}
					</div>
				}
			/>
			<Select
				name="level_of_adjustments"
				onChange={handleSelectChange}
				options={levelOfAdjustmentOptions}
				
				placeholder={
					<div className="select-placeholder-text">
						{form?.level_of_adjustments||"level of Adjustments "}
					</div>
				}
				
			/></div>:
			<div  key={"grid3"} style={{display:"flex"}} >

			<Select
				name="frequency"
				menuIsOpen={false}
				
				
				placeholder={
					<div className="select-placeholder-text">
						{form?.frequency||"Frequency"}
					</div>
				}
			/>
			<Select
				name="level_of_adjustments"
				menuIsOpen={false}
		
				
				placeholder={
					<div className="select-placeholder-text">
						{form?.level_of_adjustments||"level of Adjustments "}
					</div>
				}
				
			/></div>
			}
			</div>
			<div key={"strategies"} style={{width:"80%"}}>
				<div key={"strategies_title"} style={{display:"flex",justifyContent:"space-between"}}><p className="k_title">Strategies / Adjustments </p>
				{activeTab.tab2.isActive&&<div  key={"view_all"} style={{display:"flex",justifyContent:"space-between"}}><p style={{marginRight:".2rem",textDecoration:"underline"}} onClick={(e) => setPopup({...popup,state:true})}>View All</p><img src={bulb}/></div>}</div>
			
			<div className="cards" >
			{strategiesAdjustment!=undefined&&strategiesAdjustment!="internal error"&&
			strategiesAdjustment.map((value,index)=>(
			
				displayStrategiesAdjustment!=undefined&&displayStrategiesAdjustment.includes(index)&&
				<div key={value.title+index} className="card">
				<p className="card-k_title">{value.title}</p>
				<p className="card-sub-k_title">{value.subtitle}</p>
				<div style={{display:"flex",marginTop:"-.2rem"}}><p style={{width:"2rem"}}>Efforts</p>{Array.apply(null, { length: value.efforts }).map((e, i) => (
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
			<textarea placeholder="Please enter notes" name="new_strategy" value={form?.new_strategy} onChange={handleChange} readOnly={activeTab.tab1.isActive}/>
			</div>
			</div>
			<br style={{clear:'both'}}/>
			{activeTab.tab2.isActive&&<>
			<label key={"allTeacher"} className="allTeachers">
				<input
					type={"checkbox"}
					className="checkbox"
					name="tag_all_teachers"
					onChange={(e) => 

						{
							const temp=checked.teacher.map(function(bool) {return !bool});
							
							setChecked({ ...checked, teacher: temp });
							setForm({...form,tag_teachers:apiData.studentvoicechoice.teacherNames?.map((data,index)=>(
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
								const temp=form.tag_teachers
								temp.push(e.target.value)
								setForm({...form,tag_teachers:temp});
							
							}
							else{
								const temp=form.tag_teachers
								temp.splice(temp.indexOf(e.target.value), 1)
								
								setForm({...form,tag_teachers:temp});
							}
							
						}}
					/>
					{value.first_name+" "+value.last_name}
					
				</label>
				))}
				
			</div></>}
			{activeTab.tab2.isActive&&<div className="buttons">
				
				<button className="save" onClick={handleSubmit}>Save to Library</button>
			</div>}
			<br style={{clear:'both'}}/>
			
		</div>
	);
}

export default KeyOutcome;
