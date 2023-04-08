import React, { useEffect } from "react";
import "./Student_Profile.css";
import Header from "../Header";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import Outdoors from "../images/Outdoors.png";
import teacherPic from "../images/teacherPic.png";
import { ArrowLeft } from "../../assets/Icons";
import StudentInfo from "../StudentInfo";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { student_profile } from "../../actions/studentprofile";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Student_Profile = () => {
  const location = useLocation();
  const history = useNavigate();
  const dispatch = useDispatch();
  const studentDat = location.state?.student;
  const user = JSON.parse(localStorage.getItem("profile"))
  const apiData = useSelector((state) => state);
  // console.log("apiData", apiData);

  useEffect(() => {
    dispatch(
      student_profile({
        school: user?.school_name,
        email: studentDat?.email,
      })
    );
  }, []);

  const profiles = apiData.studentprofile?.student_profile?.[0]
 
 
  return (
    <div className="Student_Profile">
      <div className="student-comment">
        <Header />
        <div className="student-comment__container">
          <div className="student-comment__box">
            <StudentInfo student={studentDat}/>
            <div className="student-comment__box_profile">
              <Link to="/">
                <ArrowLeft />
                Back to All Students
              </Link>
              <div className="student-comment__box_main">
                <div className="student-comment__box_header">
                  <h1>Student Profile</h1>
                  
                </div>
                <div className="student-comment__header_buttons">
                <button className="active">Student Profile</button>
                    <button>Track Progress</button>
                    <button onClick={()=>history("/StudentChart",{state:{student:studentDat}})}>Map Student Views</button>
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
                {/*-----------------------------------------------------------------------------------  */}

                <div className="profile">
                  <img
                    src={Outdoors}
                    height="500"
                    style={{
                      position: "relative",
                      float: "right",
                      top: "700px",
                      left: "150px",
                    }}
                  />

                  {/* <div className="www">
                    <div className="teacherImg">
                      <img src={teacherPic} />
                    </div>
                    <div
                      className="bannerText"
                      style={{ paddingLeft: "90px", paddingTop: "5px" }}
                    >
                      <b>{profiles?.first_name}</b>
                      <p>
                        {profiles?.plan_of_study}
                        <br></br>
                        {profiles?.email}
                        <br></br>
                        {profiles?.class_year}
                        <br></br>
                      </p>
                    </div>
                  </div> */}
                  {/* ------------------------------------------------------------------------ */}
                  <hr style={{ border: "0.1px solid #F05D46" }}></hr>

                  <div className="details" style={{ display: "flex" }}>
                    <div
                      className="information"
                      style={{ paddingLeft: "30px" }}
                    >
                      <p>
                        Name
                        <br></br>
                        <br></br>
                        Email
                        <br></br>
                        <br></br>
                        Date of Birth
                        <br></br>
                        <br></br>
                        Class Year
                        <br></br>
                        <br></br>
                        NDIS Status
                        <br></br>
                        <br></br>
                        NCCD Status
                        <br></br>
                        <br></br>
                        Disability Category
                        <br></br>
                        <br></br>
                        Diagnostics
                        <br></br>
                        <br></br>
                        Disability Diagnosis
                        <br></br>
                        <br></br>
                        Outside Agencies
                        <br></br>
                        <br></br>
                        Current Referrals
                        <br></br>
                        <br></br>
                        Learning Coordinator
                        <br></br>
                        <br></br>
                        Teacher
                        <br></br>
                        <br></br>
                        Naplan Results
                        <br></br>
                        <br></br>
                        Plan of Study
                        <br></br>
                        <br></br>
                        IEP
                        <br></br>
                        <br></br>
                        Aboroginal or Torres Strait Islander Background
                        <br></br>
                        <br></br>
                        English as a Second Language
                        <br></br>
                        <br></br>
                        Ethinic Background
                        <br></br>
                        <br></br>
                        Religion
                        <br></br>
                        <br></br>
                        Creation Date
                        <br></br>
                        <br></br>
                        Update Date
                        <br></br>
                      </p>
                    </div>
                    <div style={{ paddingLeft: "35px",fontSize:"16px" }}>
                      <p>
                        {profiles?.first_name} {profiles?.last_name}
                        <br></br>
                        <br></br>
                        {profiles?.email}
                        <br></br>
                        <br></br>
                        {profiles?.date_of_birth}
                        <br></br>
                        <br></br>
                        {profiles?.class_year}
                        <br></br>
                        <br></br>
                        {profiles?.ndis_status}
                        <br></br>
                        <br></br>
                        {profiles?.nccd_status}
                        <br></br>
                        <br></br>
                        {profiles?.disability_category}
                        <br></br>
                        <br></br>
                        {profiles?.diagnostics}
                        <br></br>
                        <br></br>
                        {profiles?.disability_diagnosis}
                        <br></br>
                        <br></br>
                        {profiles?.outside_agencies}
                        <br></br>
                        <br></br>
                        {profiles?.current_referrals}
                        <br></br>
                        <br></br>
                        {profiles?.learning_coordinator}
                        <br></br>
                        <br></br>
                        {profiles?.teacher}
                        <br></br>
                        <br></br>
                        {profiles?.naplan_results}
                        <br></br>
                        <br></br>
                        {profiles?.plan_of_study}
                        <br></br>
                        <br></br>
                        {profiles?.iep}
                        <br></br>
                        <br></br>
                        {
                          profiles?.aboroginal_or_torres_strait_islander_background
                        }
                        <br></br>
                        <br></br>
                        {profiles?.english_as_a_second_language}
                        <br></br>
                        <br></br>
                        {profiles?.ethinic_background}
                        <br></br>
                        <br></br>
                        {profiles?.religion}
                        <br></br>
                        <br></br>
                        {profiles?.created_date}
                        <br></br>
                        <br></br>
                        {profiles?.review_date}
                        <br></br>
                        <br></br>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Student_Profile;

{
  /* <button className="button">Forgot Password</button> */
}
