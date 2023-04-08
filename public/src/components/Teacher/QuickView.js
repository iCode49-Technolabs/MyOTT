import React, { useState, useEffect, useMemo } from "react";
import { useDispatch,useSelector } from "react-redux";
export const QuickView = () => {
    const apiData=useSelector((state) => state.teacher_dashboard)
    const student=apiData?.teacherassessmentrequest
	const studentconversationdata=apiData?.studentconvodata
    const backgroundColor=["#61C4FC"," #f4cf4f","rgb(128, 162, 120)","#D3AB88","#F05D46"]
	console.log(studentconversationdata,"studentconversationdata")
	return (
		<div className="quick-view">
			<p className="sub-sub-title">Student Quick View</p>
			<div className="profile-container">
				{studentconversationdata != undefined &&
					studentconversationdata != "DATA NOT FOUND." &&
					studentconversationdata.map((student, index) => (
						<div className="profile-card">
							<p
								className="profile-pic"
								style={{ backgroundColor: backgroundColor[index % 5] }}
							>
								{student?.first_name?.charAt(0)}
								{student?.last_name?.charAt(0)}
							</p>
							<div className="profile-details">
								<p className="student-name">
									{student?.first_name} {student?.last_name}
								</p>
								<label style={{ marginBottom: "-1rem" }}>
									<p>Barriers:</p>
									<input value={student?.barriers_learning} disabled />
								</label>
								<br />
								<label style={{ marginBottom: "-1rem" }}>
									<p>Strengths:</p>
									<input value={student?.review_strength} disabled />
								</label>
								<br />
								<label style={{ marginLeft: ".1rem" }}>
									<p style={{ width: "1.7rem" }}>Interests:</p>
									<input value={student?.review_interest} disabled />
								</label>
							</div>
						</div>
					))}

				{student != "no records found" &&
					student != undefined &&
					student.map(
						(student, index) =>
							studentconversationdata != undefined &&
							(studentconversationdata == "DATA NOT FOUND." ||
								!studentconversationdata
									.map((student) => student.email)
									.includes(student.email)) && (
								<div className="profile-card">
									<p
										className="profile-pic"
										style={{ backgroundColor: backgroundColor[index % 5] }}
									>
										{student?.first_name?.charAt(0)}
										{student?.last_name?.charAt(0)}
									</p>
									<div className="profile-details">
										<p className="student-name">
											{student?.first_name} {student?.last_name}
										</p>
										<label style={{ marginBottom: "-1rem" }}>
											<p>Barriers:</p>
											<input value={"Yet to be explored"} disabled />
										</label>
										<br />
										<label style={{ marginBottom: "-1rem" }}>
											<p>Strengths:</p>
											<input value={"Yet to be explored"} disabled />
										</label>
										<br />
										<label style={{ marginLeft: ".1rem" }}>
											<p style={{ width: "1.7rem" }}>Interests:</p>
											<input value={"Yet to be explored"} disabled />
										</label>
									</div>
								</div>
							)
					)}
			</div>
			{/* <p
				style={{
					marginTop: "-1rem",
					float: "right",
					textDecoration: "underline",
					fontSize: "12px",
					fontWeight: "700",
					marginBottom: "1.5rem",
				}}
			>
				See All
			</p> */}
		</div>
	);
};
