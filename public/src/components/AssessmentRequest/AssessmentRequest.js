import "./AssessmentRequest.css";
import React, { useState, useEffect } from "react";
import Footer from "../Footer";
import Header from "../Header";
import StudentInfo from "../StudentInfo";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import PopUp from "./PopUp";
import { useLocation } from "react-router-dom";

import {
	modification_for_students,
	updateModificationStudentStatus,
} from "./../../actions/modification_for_students";

function AssessmentRequest() {
	const location = useLocation();
	const user = JSON.parse(localStorage.getItem("profile"));
	const [popup, setPopup] = useState( false );
	const [popupData,setPopupData]= useState()
	
	const dispatch = useDispatch();
	const [form, setForm] = useState({
		email: location.state?.student?.email,
		teacher_email: user.email,
		school_name: user.school_name,
		category_of_concerns: "",
		notes: "",
	});
	useEffect(() => {
		
		dispatch(modification_for_students({ ...form, type: "view" }));
	}, []);

	const modificationforstudentComment = useSelector(
		(state) => state.modificationstudent.modificationstudent
	);
	
	
	return (
		<div className="assessment_request">
			<Header />
			{popup ? (
				<PopUp setPopup={setPopup} data={popupData}  />
			) : undefined}
			<div className="container">
				<StudentInfo student={location.state?.student} />

				<div className="nav-text">
					<div></div>
					<p>Back to All Students</p>
				</div>
				<div className="assessment_request-container">
					<p>Assessment Request</p>

					
					<div className="lower-container">
						<p className="title">Teacher's notes</p>
						{modificationforstudentComment != undefined &&
							typeof(modificationforstudentComment) != "string" &&
							modificationforstudentComment.map((data) => (
								<div className="comment-container">
									<hr className="line" />
									<div
										style={{ display: "flex", justifyContent: "space-between" }}
									>
										<p className="sub-title">
											<span style={{ color: "#f05d46" }}>
												{data?.teacher_email}
											</span>{" "}
											: {data?.created_date}
										</p>
										<p className="sub-title">
											Status :{" "}
											<span style={{ color: "#f05d46" ,textTransform:"capitalize"}}>{data?.status}</span>
										</p>
									</div>
									
									<div className="comment">
										<p className="sub-title">Lesson Modification Notes</p>
										<p className="para"> {data?.notes}</p>
									</div>
									<div className="action-buttons">
									<button style={{ backgroundColor: "#FCB730" }} className="yellow" onClick={()=>{setPopupData(data);setPopup(true)}}>Detail view</button>
									{data?.status == "open" &&
										location.state.access == "edit" && (
											<>
												<button
												className="blue"
													style={{ backgroundColor: "#69B3DD" }}
													onClick={() => {
														dispatch(
															updateModificationStudentStatus({
																modification_for_student_id:
																	data.modification_for_student_id,
																status: "actioned",
															})
														);
														setTimeout(()=>{
															dispatch(
																modification_for_students({
																	...form,
																	type: "view",
																})
															);

														},100)
													}}
												>
													Actioned
												</button>
												<button
												className="orange"
													style={{ backgroundColor: "#F05D46" }}
													onClick={() => {
														dispatch(
															updateModificationStudentStatus({
																modification_for_student_id:
																	data.modification_for_student_id,
																status: "closed",
															})
														);
														setTimeout(()=>{
															dispatch(
																modification_for_students({
																	...form,
																	type: "view",
																})
															);

														},100)
														
													}}
												>
													Closed
												</button>
											</>
										)}
										</div>
								</div>
							))}
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
export default AssessmentRequest;
