import "./ModificationForStudent.css";
import React, { useState, useEffect } from "react";
import Footer from "../Footer";
import Header from "../Header";
import StudentInfo from "../StudentInfo";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { category_of_concern } from "../../actions/setting";
import {modification_for_students} from "./../../actions/modification_for_students"

function ModificationForStudent() {
	const location=useLocation();
	const user= JSON.parse(localStorage.getItem('profile'))
	
	const apiData = useSelector((state) => state.setting.view_category_of_concern);
const dispatch = useDispatch();
useEffect(() => {
	// dispatch(category_of_concern({school_name: user.school_name, type: "view",class_year:location.state?.student?.class_year }));
	dispatch(category_of_concern({school_name: user.school_name, type: "view",student_email:location.state?.student?.email }));
}, []);
const [form,setForm]=useState({
	email:location.state?.student?.email,
	teacher_email:user.email,
	school_name:user.school_name,
	category_of_concerns:{
		category:[],
		subcategory:[],
		layer1:[],
		layer2:[]
	},
	request_assessment:false,
	notes:"",
	created_date:""
})
 const nested_list_data=(typeof(apiData)!="string"&&apiData!=undefined)?apiData.map((value)=>JSON.parse(value)):[]
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(typeof(JSON.stringify(form)));
		dispatch(modification_for_students({email:form.email,
			teacher_email:form.teacher_email,
			school_name:form.school_name,
			category_of_concerns:JSON.stringify(form.category_of_concerns),
			notes:form.notes,
			created_date:form.created_date,
			request_assessment:form.request_assessment
			,type:"create"}))
		console.log(form)
		alert("Note saved Successfully")
	};const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};
	const handleCategoryOfConcernChange = (e) => {
		const category_of_concerns=form.category_of_concerns
		if(category_of_concerns[e.target.name].includes(e.target.value))
			{
				category_of_concerns[e.target.name].splice(category_of_concerns[e.target.name].indexOf(e.target.value),1)
				if(e.target.name=="category")
				{
					nested_list_data.map((category)=>{
						if(e.target.value==category.value)
						{
							category.children.map((subcategory)=>{
								category_of_concerns["subcategory"].splice(category_of_concerns["subcategory"].indexOf(subcategory),1)
								subcategory.children.map((layer1)=>{
									category_of_concerns["layer1"].splice(category_of_concerns["layer1"].indexOf(layer1),1)
									layer1.children.map((layer2)=>{
										category_of_concerns["layer2"].splice(category_of_concerns["layer2"].indexOf(layer2),1)
										
									})
								})
							})
						}


					})
				}
				if(e.target.name=="subcategory")
				{
					nested_list_data.map((category)=>{
						
							category.children.map((subcategory)=>{
								if(e.target.value==subcategory.value)
								{

								
								subcategory.children.map((layer1)=>{
									category_of_concerns["layer1"].splice(category_of_concerns["layer1"].indexOf(layer1),1)
									layer1.children.map((layer2)=>{
										category_of_concerns["layer2"].splice(category_of_concerns["layer2"].indexOf(layer2),1)
										
									})
								})
							}})
						


					})
				}
				if(e.target.name=="layer1")
				{
					nested_list_data.map((category)=>{
						
							category.children.map((subcategory)=>{
								
								

								
								subcategory.children.map((layer1)=>{
									if(e.target.value==layer1.value)
									{
									layer1.children.map((layer2)=>{
										category_of_concerns["layer2"].splice(category_of_concerns["layer2"].indexOf(layer2),1)
										
									})
								}})
							})
						


					})
				}
			}
		else
			category_of_concerns[e.target.name].push(e.target.value)
		
		setForm({ ...form, category_of_concerns:category_of_concerns });
		
	};
	const [add_more,setAddMore]=useState([1])
	
const date=new Date()
	return (
		<div className="modificationforstudent">
			<Header />
			<div className="container">
				<StudentInfo student={location.state?.student}/>

				<div className="nav-text">
					<div></div>
					<p>Back to All Students</p>
				</div>
				<div className="modificationforstudent-container">
					<p>Notes for Student</p>
					
					{add_more.map((value)=>(<>
					<div className="category-container">
						<p className="sub-title">Category of Concern</p>
						{nested_list_data.map((category)=>(
							<>
							<label><input type={"checkbox"} name="category" onChange={handleCategoryOfConcernChange} value={category.value} className="checkbox"/>{category.label}</label><br/>
							{category.children.map((subcategory)=>(
								
								form.category_of_concerns.category.includes(category.value)&&
								<><label>&ensp;&ensp;<input type={"checkbox"} name="subcategory" onChange={handleCategoryOfConcernChange} value={subcategory.value} className="checkbox"/>{subcategory.label}</label><br/>
								{subcategory.children.map((layer1)=>(
									form.category_of_concerns.subcategory.includes(subcategory.value)&&
									<>
									<label>&emsp;&emsp;<input type={"checkbox"} name="layer1" onChange={handleCategoryOfConcernChange} value={layer1.value} className="checkbox"/>{layer1.label}</label><br/>
									{layer1.children.map((layer2)=>(
										form.category_of_concerns.layer1.includes(layer1.value)&&
										<>
										<label>&emsp;&emsp;&emsp;<input type={"checkbox"} name="layer2" onChange={handleCategoryOfConcernChange} value={layer2.value} className="checkbox"/>{layer2.label}</label><br/>
										</>
									))}
									</>
								))}
								</>
							))}
							</>
						))}
						
					</div>
					<div className="comment-container">
						<p className="sub-title">Date: <input
						type={"date"}
						className="date"
						name="created_date"
						onChange={handleChange}
					/>
					{/* <span>{date.toLocaleDateString()}</span> */}
					</p>
						<p className="sub-title">Notes:</p>
						<textarea placeholder="Please enter notes and comments." onChange={handleChange} name="notes"></textarea>
						<div className="buttons">
							<div className="left">
								{/* <button className="upload">Upload</button> */}
							</div>
							<div className="right">
								<button className="save" onClick={(e)=>handleSubmit(e)}>Save</button>
								{/* <button className="share" onClick={(e)=>handleSubmit(e)}>Share with LC</button> */}
							</div>
						</div>
					</div>
					</>))}
					<button
					className="add_more"
					onClick={() => {
						const temp = add_more;

						temp.push(1);
						setAddMore([...temp]);
					}}
				>
					Add more
				</button>
					<label><input type={"checkbox"} className="checkbox" name="request_assessment" value={true} onChange={handleChange} style={{marginBottom:"5rem"}}/>Request Assessment</label>
				</div>
			</div>
			<Footer />
		</div>
	);

	}
export default ModificationForStudent;
