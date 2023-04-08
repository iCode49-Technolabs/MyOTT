import "./KeyOutcome.css";
import React,{ useState,useEffect,useMemo } from "react";
import RecommadationPopUp from "./PopUp";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Select from "react-select";
import bulb from "./../images/bulb.png";
import makeAnimated from 'react-select/animated';
import { key_outcome, strategies_adjustment, viewKeyOutcome } from "../../actions/iep_step3";

function KeyOutcome({outcome_number,student,key_outcome_id,type,key_outcome_form,setKey_OutcomeForm,setStep3Form,set3Form,key_outcome_array,setKey_Outcome,key_outcome_print,setKey_OutcomePrint}) {
	const version = type == "create" ? 0 : 1;
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
		notes_and_comments:[],
		support_need:[],
		we_currently_see:[],
		success_looks_like:[],
		frequency:[],
		level_of_adjustments:[],
		new_strategy:[],
		strategies_adjustment:[],
		outcome_column_number:outcome_number,
		lc_email:user.email,
		type:type,
		tag_teachers:[],
		...key_outcome_form?.[outcome_number-1]
	})
	const [displayForm,setDisplayForm]=useState({
		email:student?.email,
		school_name:user.school_name,
		
		outcome_column_number:outcome_number,
		lc_email:user.email,
		type:type,
		tag_teachers:[],
		notes_and_comments:false,
		support_need:false,
		we_currently_see:false,
		success_looks_like:false,
		frequency:false,
		level_of_adjustments:false,
		new_strategy:false,
		strategies_adjustment:false
	})
	const [newStratAdjust, setNewStratAdjust] = useState({
		schl_admin_email: user.email,
		school_name: user.school_name,
	});
// 	useEffect(()=>{setForm({...displayForm})
	
// },[])
	useEffect(()=>{
		dispatch(strategies_adjustment({school_name:user.school_name}));
		dispatch(viewKeyOutcome({key_outcome_id:key_outcome_id}))
	},[])
	const strategiesAdjustment=apiData.iep_step3?.view_stratergies_adjustments
	
	const [displayStrategiesAdjustment,setDisplayStrategiesAdjustment]=useState([0,1])
	
	const handleChange = async (e) =>{
		const temp=form[e.target.name]||[""]
		temp[version]=e.target.value
		setForm({ ...form, [e.target.name]: temp });
		const temp2=key_outcome_form
		if (temp2.length<=outcome_number-1)
		{
			temp2.push(form)
		}
		else
		{temp2[outcome_number-1]=form}
		setKey_OutcomeForm([...temp2])
		
	}
		const handleSelectChange = (value, action) => {
			
			if(value.constructor === Array){
				const data=value.map((value)=>value["label"])
				const temp=form[action.name]||[""]
				temp[version]=data
				setForm({ ...form, [action.name]: temp });
				
			}
			else
			{
				const temp=form[action.name]||[""]
				temp[version]=value["label"]
				setForm({ ...form, [action.name]: temp });
			}
			const temp2=key_outcome_form
		if (temp2.length<=outcome_number-1)
		{
			temp2.push(form)
		}
		else
		{temp2[outcome_number-1]=form}
		setKey_OutcomeForm([...temp2])
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
			if(type!="create"){
	setForm({...viewData,type:type})
	setDisplayForm(
		{
			notes_and_comments:viewData?.notes_and_comments?.[1]?true:false,
		support_need:viewData?.support_need?.[1]?true:false,
		we_currently_see:viewData?.we_currently_see?.[1]?true:false,
		success_looks_like:viewData?.success_looks_like?.[1]?true:false,
		frequency:viewData?.frequency?.[1]?true:false,
		level_of_adjustments:viewData?.level_of_adjustments?.[1]?true:false,
		new_strategy:viewData?.new_strategy?.[1]?true:false,
		strategies_adjustment:viewData?.strategies_adjustment?.[1]?true:false})
	
//setDisplayStrategiesAdjustment(viewData?.strategies_adjustment)
}
		},[viewData]
		)

		const handleSubmit =  (e) => {
			e.preventDefault();
			
			dispatch(key_outcome(form));
			
			
			const temp_key_outcome_id=set3Form?.key_outcome||[]
			temp_key_outcome_id.push(Number(apiData.iep_step3?.key_outcome_id)+1)
			if(apiData.iep_step3?.key_outcome_id!=undefined&&temp_key_outcome_id.includes(NaN))
			temp_key_outcome_id[0]=Number(apiData.iep_step3?.key_outcome_id)
			
			setStep3Form({...set3Form,key_outcome:temp_key_outcome_id})
			const temp=key_outcome_print
			temp.push(form)
			setKey_OutcomePrint([...temp])
			alert("Saved Successfully")
			
		};

		
		const teacherCheckbox=[]
		for(var i=0;i<6;i++){
			teacherCheckbox.push(false)
		}
		const [checked, setChecked] = useState({
			
			teacher: teacherCheckbox,
		});
		const [teachers, setTeachers] = useState([]);
		
useMemo(()=>{
const temp=form?.strategies_adjustment
strategiesAdjustment!=undefined&&strategiesAdjustment!="internal error"&&strategiesAdjustment.map((value,index)=>{
	if(temp?.includes(value.adjustment_id))
	{
		const temp1=displayStrategiesAdjustment
		temp1.push(index)
		setDisplayStrategiesAdjustment([...temp1])
	}
})
},[key_outcome_array])

	return (
		<div className="keyoutcome">
			
			{popup.state ? (
			<RecommadationPopUp key={"popup"+outcome_number} setPopup={setPopup} setForm={setForm} form={form} popup={popup} displayStrategiesAdjustment={displayStrategiesAdjustment} setDisplayStrategiesAdjustment={setDisplayStrategiesAdjustment} strategiesAdjustment={strategiesAdjustment} version={version}/>) : undefined}
			
			<div key={"keyoutcome"+outcome_number} style={{display:"flex",justifyContent:"space-between"}}>
			<p className="k_title">Key Outcome {outcome_number}</p>
			<div className="arrow" onClick={() => {
								const tempFalse = key_outcome_array
								tempFalse[outcome_number-1] = !tempFalse[outcome_number-1];
								setKey_Outcome([...tempFalse]);
					
							}}></div>
			</div>
			{type=="revise"&&<p className="version1">{form?.notes_and_comments?.[0]}</p>}
			{displayForm?.notes_and_comments?<p className="version2">{form?.notes_and_comments?.[1]}</p>:	
			<input className="notes-comments" placeholder="Please enter notes and comments." value={form?.notes_and_comments?.[version]}  name="notes_and_comments"  onChange={handleChange} type={"text"}/>
		}
			<div key={"Support Needs"} style={{width:"15rem"}}>
			<p className="k_title">Support Needs</p>
			
			
			{type=="revise"&&options.map((value)=>(<label><input style={{width:"10%",marginLeft:"0"}} type={"checkbox"} checked={form?.support_need?.[0]?.includes(value.value)} />{value.value}<br/></label>))}
			<br/>
			{displayForm?.support_need?options.map((value)=>(<label><input style={{width:"10%",marginLeft:"0"}} type={"checkbox"} checked={form?.support_need?.[1]?.includes(value.value)} />{value.value}<br/></label>)):
		
			<Select
				name="support_need"
				closeMenuOnSelect={false}
      components={animatedComponents}
				options={options}
				isMulti
				
				onChange={handleSelectChange}
				placeholder={
					<div className="select-placeholder-text">
						{form?.support_need?.[version]?.map((value)=>(<p>{value}</p>))||"Select Support Needs"}
					</div>
				}
			/>}
			
			</div>
			<div key={"grid"} className="grid-container" 
			style={{marginTop:type!="revise"?"-5.5rem":displayForm?.support_need?"-15.4rem":"-12.4rem"}}
			>
				
			<div key={"grid1"}>
			<p className="k_title">What we currently see</p>
			{type=="revise"&&<p className="version1">{form?.we_currently_see?.[0]}</p>}
			{displayForm?.we_currently_see?<p className="version2">{form?.we_currently_see?.[1]}</p>:
			<textarea placeholder="Please enter notes and comments" value={form?.we_currently_see?.[version]}  name="we_currently_see" onChange={handleChange} />
}
			</div>
			<div key={"grid2"}>
			<p className="k_title">What success looks like</p>
			{type=="revise"&&<p className="version1">{form?.success_looks_like?.[0]}</p>}
			{displayForm?.success_looks_like?<p className="version2">{form?.success_looks_like?.[1]}</p>:
			<textarea placeholder="Please enter notes and comments" value={form?.success_looks_like?.[version]} name="success_looks_like" onChange={handleChange} />}
			<div  key={"grid3"} style={{display:"flex"}}>
				<div>
				{displayForm?.frequency&&<p className="k_title">Frequency</p>}
			{type=="revise"&&<p className="version1">{form?.frequency?.[0]}&nbsp;&nbsp;&nbsp;&nbsp;</p>}
			{displayForm?.frequency?<p className="version2">{form?.frequency?.[1]}&nbsp;&nbsp;&nbsp;&nbsp;</p>:
			<Select
				name="frequency"
				options={frequencyOptions}
				onChange={handleSelectChange}
				
				placeholder={
					<div className="select-placeholder-text">
						{form?.frequency?.[version]||"Frequency"}
					</div>
				}
			/>}</div>
			<div>
			
{displayForm?.level_of_adjustments&&<p className="k_title">Level of adjustments</p>}
			{type=="revise"&&<p className="version1">{form?.level_of_adjustments?.[0]}</p>}
			{displayForm?.level_of_adjustments?<p className="version2">{form?.level_of_adjustments?.[1]}</p>:
			<Select
				name="level_of_adjustments"
				onChange={handleSelectChange}
				options={levelOfAdjustmentOptions}
				
				placeholder={
					<div className="select-placeholder-text">
						{form?.level_of_adjustments?.[version]||"Level of Adjustments"}
					</div>
				}
				
			/>}</div></div>
			</div>
			<div key={"strategies"} style={{width:"80%"}}>
				<div key={"strategies_title"} style={{display:"flex",justifyContent:"space-between"}}><p className="k_title">Strategies / Adjustments </p>
				

				{!displayForm?.strategies_adjustment&&<div  key={"view_all"} style={{display:"flex",justifyContent:"space-between"}}><p style={{marginRight:".2rem",textDecoration:"underline"}} onClick={(e) => setPopup({...popup,state:true})}>View All</p><img src={bulb}/></div>}</div>
			{type=="revise"&&
			<div className="cards version1" >
			{strategiesAdjustment!=undefined&&strategiesAdjustment!="internal error"&&
			strategiesAdjustment.map((value,index)=>(
			
				form?.strategies_adjustment?.[0]!=undefined&&form?.strategies_adjustment?.[0].includes(value?.adjustment_id)&&
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
			</div>}
			{displayForm?.strategies_adjustment?<div className="cards version2" >
			{strategiesAdjustment!=undefined&&strategiesAdjustment!="internal error"&&
			strategiesAdjustment.map((value,index)=>(
				
				form?.strategies_adjustment?.[1]!=undefined&&form?.strategies_adjustment?.[1].includes(value?.adjustment_id)&&
				
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
			</div>:<div className="cards" >
			{strategiesAdjustment!=undefined&&strategiesAdjustment!="internal error"&&
			strategiesAdjustment.map((value,index)=>(
			
				displayStrategiesAdjustment!=undefined&&displayStrategiesAdjustment.includes(index)&&
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
			</div>}
			</div>

			<div className="create-new">
					<p>Create New Strategy/Adjustment</p>
					<label>
						<p>Title</p>
						<input
							type={"text"}
							className="text"
							onChange={(e) => {
								setNewStratAdjust({ ...newStratAdjust, [e.target.name]: e.target.value });
							}}
							placeholder="Title"
							name="title"
						/>
					</label>
					<br />
					<label>
						<p>Description</p>
						<input
							type={"text"}
							className="text"
							onChange={(e) => {
								setNewStratAdjust({ ...newStratAdjust, [e.target.name]: e.target.value });
							}}
							placeholder="Sub Title"
							name="subtitle"
						/>
					</label>
					<br />

					<p className="save" style={{textAlign:"center",display:"flex",justifyContent:"center",alignContent:"center"}} onClick={(e) => {
	
		
		dispatch(strategies_adjustment({ ...newStratAdjust, type: "create" }));
		alert("New Strategy Created")
		setTimeout(() => {
			dispatch(
				strategies_adjustment({ school_name: user.school_name, type: "view" })
			);
		}, 100);
	}}>
						Save
					</p>
				</div>
			{/* <div>
			<p className="k_title">Write a new strategy</p>
			{type=="revise"&&<p className="version1">{form?.new_strategy?.[0]}</p>}
			{displayForm?.new_strategy
			?<p className="version2">{form?.new_strategy?.[1]}</p>:
			<textarea placeholder="Please enter notes" value={form?.new_strategy?.[version]} name="new_strategy"  onChange={handleChange} />}
			</div> */}


			</div>
			<br style={{clear:'both'}}/>
			{(!displayForm?.new_strategy||!displayForm?.strategies_adjustment||!displayForm?.level_of_adjustments||!displayForm?.notes_and_comments||
!displayForm?.support_need||
!displayForm?.we_currently_see||
!displayForm?.success_looks_like||
!displayForm?.frequency)&&<>
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
			{(!displayForm?.new_strategy||!displayForm?.strategies_adjustment||!displayForm?.level_of_adjustments||!displayForm?.notes_and_comments||
!displayForm?.support_need||
!displayForm?.we_currently_see||
!displayForm?.success_looks_like||
!displayForm?.frequency)&&<div className="buttons">
				
				<button className="save" onClick={handleSubmit}>Save</button>
			</div>}
			<br style={{clear:'both'}}/>
			
		</div>
	);
}

export default KeyOutcome;
