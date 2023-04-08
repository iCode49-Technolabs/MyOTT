import "./StudentChart.css";
import React, { useState, useEffect, useMemo } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import {
	ArrowLeft,
	CalenderIcon,
	DownArrow,
	SearchIcon,
} from "./../../assets/Icons";
import StudentInfo from "./../StudentInfo";
import {
	Chart as ChartJS,
	RadialLinearScale,
	PointElement,
	LineElement,
	Filler,
	Tooltip,
	Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import { mapstudentviews,student_profile } from "../../actions/studentprofile";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { saveAs } from 'file-saver';
ChartJS.register(
	RadialLinearScale,
	PointElement,
	LineElement,
	Filler,
	Tooltip,
	Legend
);



const StudentChart = () => {
	const dispatch = useDispatch();
	const location = useLocation();
	const history = useNavigate();
	const studentDat = location.state?.student;

	const user = JSON.parse(localStorage.getItem("profile"))
	const apiData = useSelector((state) => state.studentprofile);
	useEffect(() => {
		dispatch(
			mapstudentviews({
				email: studentDat?.email,
				school_name: user.school_name,
				active: "yes",
				view: "student",
			})
		);
		dispatch(
			mapstudentviews({
				email: studentDat?.email,
				school_name: user.school_name,
				active: "yes",
				view: "parent",
			})
		);
		dispatch(
			mapstudentviews({
				email: studentDat?.email,
				school_name: user.school_name,
				active: "yes",
				view: "teacher",
			})
		);
	}, []);
	useEffect(() => {
		dispatch(
		  student_profile({
			school: user?.school_name,
			email: studentDat?.email,
		  })
		);
	  }, []);
	const student = apiData.student;
	const teacher = apiData.teacher;
	const parent = apiData.parent;
	const mapstudentviewsData = apiData?.student;
	var studentData;
	if (student?.soft_skill != undefined) {
		studentData = student.soft_skill.split(",").map((point) => Number(point));
	}
	var teacherData;
	if (teacher?.soft_skill != undefined) {
		teacherData = teacher.soft_skill.split(",").map((point) => Number(point));
	}
	var parentData;
	if (parent?.soft_skill != undefined) {
		parentData = parent.soft_skill.split(",").map((point) => Number(point));
	}

	const div2PDF = (e) => {
		/////////////////////////////
		// Hide/show button if you need
		/////////////////////////////

		const canvasSave = document.getElementById('stackD');
    canvasSave.style.color="white"
    console.log(canvasSave.style.backgroundColor)

       canvasSave.toBlob(function (blob) {
           saveAs(blob, "chart.png")
       })
	};
const data={
  labels: eval(student?.soft_name),
  datasets: [
    {
      label: "Student",
      data: studentData != undefined && studentData,
      backgroundColor: "rgba(255, 255, 255, 0)",
      borderColor: "#F05D46",
      borderWidth: 4,
      pointStyle: "rect",
      radius: 10,
      pointBackgroundColor: "#F05D46",
    },
    {
      label: "Teacher",
      data: studentData != undefined && teacherData,
      backgroundColor: "rgba(255, 255, 255, 0)",
      borderColor: "#69B3DD",
      borderWidth: 4,
      pointStyle: "rectRot",
      radius: 10,
      pointBackgroundColor: "#69B3DD",
    },
    {
      label: "Carer",
      data: parentData != undefined && parentData,
      backgroundColor: "rgba(255, 255, 255, 0)",
      borderColor: "#889159",
      borderWidth: 4,
      pointStyle: "rectRot",
      radius: 10,
      pointBackgroundColor: "#889159",
    },
  ],
}
const profiles = apiData?.student_profile?.[0]
	return (
		<div className="">
			<Header />
			<div className="student-chart__container">
				<div className="student-chart__box">
					<StudentInfo student={studentDat}/>
					<div className="student-chart__box_profile">
						<Link to="/">
							<ArrowLeft />
							Back to All Students
						</Link>
						<div className="student-chart__box_main">
							<div className="student-chart__box_header">
								<h1>Student Profile</h1>
								
							</div>
							<div className="student-chart__header_buttons">
                <button  onClick={()=>history("/StudentProfile",{state:{student:studentDat}})}>Student Profile</button>
                    <button>Track Progress</button>
                    <button className="active" onClick={()=>history("/StudentChart",{state:{student:studentDat}})}>Map Student Views</button>
                    <button onClick={() =>
											history("/StudentComment", {
												state: { student: studentDat },
											})
										}>
                      {/* className="active" */}
                      Evidence Recorded
                    </button>
					<button onClick={() =>
											history("/NotesForStudent", {
												state: { student: studentDat },
											})
										}>
                      {/* className="active" */}
                      Notes for Student
                    </button>
                    <button onClick={() =>
											history("/ReviewPastIEP", {
												state: { student: profiles },
											})
										}>Review Past IEPs</button>
                    <button onClick={() =>
											history("/IEPDocumentRepositry", {
												state: { student: profiles },
											})
										}>Document Repository</button>
                    
                  </div>
							
							<div className="trackbox__container">
								<div className="header">
									<span>Map Student Views</span>
									<div>
										<div className="learning_outcome">
											<span className="faded">Enter Soft skills</span>
											<DownArrow />
										</div>
										<div className="date">
											<span className="faded">Start Date</span>
											<CalenderIcon />
										</div>
										<div className="date">
											<span className="faded">End Date</span>
											<CalenderIcon />
										</div>
										<div className="search_icon">
											<SearchIcon />
										</div>
									</div>
								</div>
								<div className="trackbox_chart" id="trackbox_chart">
									<Radar
                  id="stackD"
										options={{
											maintainAspectRation: false,
											scales: {
												r: {
													grid: {
														color: "black",
													},
													angleLines: {
														color: "black",
													},
													beginAtZero: true,
													min: 0,
													max: 5,
													pointLabels: {
														font: {
															size: 14,
															weight: 700,
															color: "black",
														},
													},
													ticks: {
														display: false,
														font: {
															size: 20,
															weight: 700,
															color: "black",
															callback: (value) => `  ${value} `,
														},
													},
												},
											},
											ticks: {
												stepSize: 1, // the number of step
											},
										}}
										data={data}
									/>
									
								</div>
								<div className="trackbox_ideas">
									<p>1 = Not yet</p>
									<p>2 = Occassionally</p>
									<p>3 = Sometimes</p>
									<p>4 = Frequently</p>
									<p>5 = Always</p>
								</div>
                <div style={{
                  display:"flex",
                  justifyContent:"center"
                }
                }> <button onClick={(e) => div2PDF(e)} className="download-button">Download</button>{" "}</div>
               
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default StudentChart;
