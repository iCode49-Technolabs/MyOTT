import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./Assignation.css";
import flag_black from "./../../images/waving-flag-black.png";
import Footer from "../../Footer";
import { useSelector } from "react-redux";
import {
	assignteachercoordinator,roledisplay
} from "../../../actions/school_systemadmin";
import Pagination from "../../Pagination/Pagination";

import Header from "../../Header";

import Select from "react-select";
function Assignation() {
	const dispatch = useDispatch();
	
	const [currentPage, setCurrentPage] = useState(1);

	const history = useNavigate();
	
	const user = JSON.parse(localStorage.getItem("profile"))
	const apiData = useSelector((state) => state.school_systemadmin);
	useEffect(() => {
		dispatch(
			roledisplay({
				role:"Coordinator",
				schools: user?.school_name,
				active: "yes",
			}))
			dispatch(
			roledisplay({
				role:"Student",
				schools: user?.school_name,
				active: "yes",
			}))
			dispatch(
			roledisplay({
				role:"Teacher",
				schools: user?.school_name,
				active: "yes",
			})
		);
	}, []);
	
	const student = apiData?.student
	
	const teacher = apiData.teacher;
	const coordinator = apiData.coordinator;
	const [teacherOptions,setTeacherOptions]=useState()
	useMemo(()=>{
		if(teacher!=undefined&&typeof(teacher)!="string")
		{
			const Options=teacher?.map((teacher)=>({value:teacher.email,label:teacher.first_name+" "+teacher.last_name}))
			setTeacherOptions([...Options])
		}
	},[teacher])
	const [studentOptions,setStudentOptions]=useState()
	useMemo(()=>{
		if(student!=undefined&&typeof(student)!="string")
		{
			const Options=student?.map((student)=>({value:student.email,label:student.first_name+" "+student.last_name}))
			setStudentOptions([...Options])
		}
	},[student])
	const [coordinatorOptions,setCoordinatorOptions]=useState()
	useMemo(()=>{
		console.log("test",coordinator)
		if(coordinator!=undefined&&typeof(coordinator)!="string")
		{
			const Options=coordinator?.map((coordinator)=>({value:coordinator.email,label:coordinator.first_name+" "+coordinator.last_name}))
			setCoordinatorOptions([...Options])
		}
	},[coordinator])
	const [search, setSearch] = useState("");

	let PageSize = 10;
	const currentTableData = useMemo(() => {
		const firstPageIndex = (currentPage - 1) * PageSize;
		const lastPageIndex = firstPageIndex + PageSize;
		return student && student.slice(firstPageIndex, lastPageIndex);
	}, [currentPage, student]);
	let results;

	if (search) {
		results = student.filter((item) => {
			let found = false;
			Object.entries(item).map(([key, value]) => {
				if (String(value).toLowerCase().includes(search.toLowerCase())) {
					found = true;
				}
			});
			return found;
		});
		results.length = PageSize;
	} else {
		results = currentTableData;
	}
	console.log(student,results)
	
	
	
	const handleSubmit = () => {
		console.log(form)
		dispatch(
			assignteachercoordinator(
				form
			)
		);
		setTimeout(()=>{dispatch(
			roledisplay({
				role:"Student",
				schools: user?.school_name,
				active: "yes",
			}))},200)
		
		console.log(form)
		// window.location.reload(false)
	};
	const handleSelectChange = (value, action) => {
		setForm({...form,[action.name]:value["value"]});
	};
	
	const [form, setForm] = useState({
		students: [],
		role:"Student",
		school: user.school_name,
		coordinator: "",
		teacher: "",
	});
	return (
		<div className="assignation">
			<Header />
			<div className="container">
				<div className="top">
					<img src={flag_black} className="flag" />
					<p
						style={{ marginTop: "0rem", fontSize: "larger", fontWeight: "600" }}
					>
						Assignation
					</p>
				</div>
				<div className="student-search">
					<input
						className="search-input"
						value={search}
						maxLength={120}
						onChange={(e) => setSearch(e.target.value)}
						placeholder="Search"
					/>
					<div className="assign-right">
						
						<Select
							options={coordinatorOptions}
							name="coordinator"
							placeholder={
								<div className="select-placeholder-text">Select Coordinator</div>
							}
							
							onChange={handleSelectChange}
							required
						/>
						<Select
							options={teacherOptions}
							name="teacher"
							placeholder={
								<div className="select-placeholder-text">Select Teacher</div>
							}
							
							onChange={handleSelectChange}
							required
						/>
						<button
							className="assign-button"
							type="button"
							onClick={handleSubmit}
						>
							Assign
						</button>
					</div>
				</div>
				<div className="bottom">
					
					<div className="student-cards">
                        
						{student != "no records found" && (
							<div className="profile-container">
								{/* {student_details?.map((student) => (
									<div
										className={
											form.students.includes(student.email)
												? "profile-card selected"
												: "profile-card"
										}
										onClick={() => {
											const temp = form.students;
											if (temp.includes(student.email)) {
												temp.splice(temp.indexOf(student.email), 1);
											} else {
												temp.push(student.email);
											}
											setForm({ ...form, students: temp });
										}}
									>
										<p className="profile-pic">
											{" "}
											{student.first_name.charAt(0) + student.last_name.charAt(0)}
										</p>
										<div className="profile-details">
											<p className="student-name">
												{student.first_name + " " + student.last_name}
											</p>
											<label>
												Grade:
												<input value={student.class_year} disabled />
											</label>
											<br />
											<label>
												Coordinator:
												<input value={student.learning_coordinator} disabled />
											</label>
											<br />
											<label style={{ marginLeft: ".1rem" }}>
												Teacher:
												<input value={student.teachers} disabled />
											</label>
										</div>
									</div>
								))} */}
								{results?.map((student) => (
									<div className={
										form.students.includes(student.email)
											? "profile-card selected"
											: "profile-card"
									}
									onClick={() => {
										const temp = form.students;
										if (temp.includes(student.email)) {
											temp.splice(temp.indexOf(student.email), 1);
										} else {
											temp.push(student.email);
										}
										setForm({ ...form, students: temp });
									}}>
										<p className="profile-pic">
											{" "}
											{student.first_name.charAt(0) + student.last_name.charAt(0)}
										</p>
										<div className="profile-details">
											<p className="student-name">
												{student.first_name + " " + student.last_name}
											</p>
											<label>
												Grade:
												<input value={student.class_year} disabled />
											</label>
											<br />
											<label>
												Coordinator:
												
										{coordinatorOptions?.map((coordinator)=>(
													
													(coordinator.value==student.learning_coordinator)&&
													<input value={coordinator.label} disabled />
))}
											</label>
											<br />
											<label style={{ marginLeft: ".1rem" }}>
												Teacher:
												{teacherOptions?.map((coordinator)=>(
													
													(coordinator.value==student.teacher)&&
													<input value={coordinator.label} disabled />
))}
											</label>
										</div>
									</div>
								))}
							</div>
						)}
						<div style={{display:"flex",justifyContent:"center"}}>
                        <button className="select-all" onClick={()=>{
                            const temp=student.map((student)=>student.email)
                            
                            if (JSON.stringify(temp)==JSON.stringify(form.students))
                            {setForm({ ...form, students: [] })}
                            else{
                            setForm({ ...form, students: temp });}
                        }}>Select All</button>
						<button className="select-all" onClick={() => history(-1)}>Continue</button></div>
					</div>
					<Pagination
						className="pagination-bar"
						currentPage={currentPage}
						totalCount={student?.length > 0 ? student?.length : 10}
						pageSize={PageSize}
						onPageChange={(page) => setCurrentPage(page)}
					/>{" "}
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Assignation;
