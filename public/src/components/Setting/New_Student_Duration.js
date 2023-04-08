import "./View.css";
import React, { useState, useEffect, useMemo } from "react";
import { useFilter } from "@promise_learning/usefilter";
import Pagination from "../Pagination/Pagination";
import { EditIcon,DeleteIcon } from "../../assets/Icons";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { new_student_duration } from "../../actions/setting";
function New_Student_Duration(param) {
	const activeTab = param.tab;
	const setPopup = param.setPopup;
	
	const setEditData = param.setEditData;
	const user = JSON.parse(localStorage.getItem("profile"))
	const apiData = useSelector((state) => state.setting);
console.log(user.school_name)
	const dispatch = useDispatch();
	const [form, setForm] = useState({
		school_name: user.school_name,
		new_student_duration:""
	});console.log({ ...form, type: "view" })
	const handleSubmit = (e) => {
		e.preventDefault();
		
		dispatch(new_student_duration({ ...form, type: "edit" }));
		
	};
	useEffect(() => {
		dispatch(new_student_duration({ ...form, type: "view" }));
	}, []);
	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};
	const data = apiData?.new_student_duration;
	
	useMemo(()=>{
		data!=undefined&&data!="Data is not Found."&&setForm({...form,new_student_duration:data?.new_student_duration})
	},[data])

	return (
		<>
			<div className="view">
			
				<div className="add" style={{ display: "block" }}>
					<form onSubmit={(e) => handleSubmit(e)}>
						{/* <p className="title">Add</p> */}
						<div className="question">
							<p>New Student Duration (in days)</p>
							<input
								type={"text"}
								className="text"
								value={form?.new_student_duration}
								onChange={handleChange}
								name="new_student_duration"
							/>
						</div>
						<br />

						<div className="buttons">
							<div className="left" onClick={()=>alert("New Student Duration is Updated Sucessfully.")}>
								<button className="save-continue" type="submit">
									Save
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}

export default New_Student_Duration;
