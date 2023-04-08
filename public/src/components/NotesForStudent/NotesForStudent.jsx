import "./NotesForStudent.css";
import React, { useState, useEffect, useMemo } from "react";
import Header from "../Header"
import Footer from "../Footer"
import { Link } from "react-router-dom";
import { ArrowLeft, CalenderIcon, DownArrow, SearchIcon } from "../../assets/Icons";
import StudentInfo from "../StudentInfo";
import { useFilter } from "@promise_learning/usefilter";

import { teachercomments,student_profile } from "../../actions/studentprofile";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Pagination from "./../Pagination/Pagination";
import { useNavigate } from "react-router-dom";

import {
	modification_for_students,
} from "./../../actions/modification_for_students";


const NotesForStudent = () => {
  const history = useNavigate();  
  const dispatch = useDispatch();
  const location = useLocation();  
  const student=location.state?.student
const apiData = useSelector((state) => state.studentprofile);
const user = JSON.parse(localStorage.getItem("profile"))
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
	useEffect(() => {
		dispatch(
		  student_profile({
			school: user?.school_name,
			email: student?.email,
		  })
		);
	  }, []);
	
  const [currentPage, setCurrentPage] = useState(1);
  const [searchData, setSearchData] = useState({
		query: "",
		fields: ["first_name","last_name","notes","created_date"],
	});
  const profiles = apiData?.student_profile?.[0]
  let PageSize = 10;
	const { loading, data: result } = useFilter({
		data: modificationforstudentComment,
		search: searchData,
	});
const currentTableData = useMemo(() => {
		const firstPageIndex = (currentPage - 1) * PageSize;
		const lastPageIndex = firstPageIndex + PageSize;
		return result?.slice(firstPageIndex, lastPageIndex);
	}, [currentPage, result]);

	console.log(modificationforstudentComment,student.email)
  return (
    <div className="student-comment">
      <Header />
      <div className="student-comment__container">
        <div className="student-comment__box">
          <StudentInfo student={student}/>
          <div className="student-comment__box_profile">
            <Link to="/">
              <ArrowLeft />
              Back to All Students
            </Link>
            <div className="student-comment__box_main">
              <div className="student-comment__box_header">
                <h1>Student Profile</h1>
                
              </div>
              <div className="student-chart__header_buttons">
                <button  onClick={()=>history("/StudentProfile",{state:{student:student}})}>Student Profile</button>
                    <button>Track Progress</button>
                    <button  onClick={()=>history("/StudentChart",{state:{student:student}})}>Map Student Views</button>
                    <button  onClick={() =>
											history("/StudentComment", {
												state: { student: student },
											})
										}>
                      {/* className="active" */}
                      Evidence Recorded
                    </button>
                    <button className="active" onClick={() =>
											history("/NotesForStudent", {
												state: { student: student },
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
                  <span>Notes for Student</span>
                  <div>
                  <input
							className="search-input"
							onChange={(e) =>
								setSearchData({ ...searchData, query: e.target.value })
							}
							placeholder="Search"
							value={searchData.query}
						/>
                    {/* <div className="learning_outcome">
                      <span className="faded">
                      
                      Search by Keyword
                      </span>
                      <DownArrow />
                    </div>
                    <div className="date">
                      <span className="faded">Search by date</span>
                      <CalenderIcon />
                    </div>
                    <div className="date">
                      <span className="faded">Sort by: Latest</span>
                      <DownArrow />
                    </div>
                    <div className="search_icon">
                      <SearchIcon />
                    </div> */}
                  </div>
                </div>
                <div className="comment_outer_container">
                <div className="comment_inner_container">
                  {typeof(currentTableData)!="string"&&currentTableData!=undefined&&
                  
                  currentTableData?.map((comments)=>
<div>
                 
                  <div className="comment_container">
                    <p>{comments?.first_name+" "+comments?.last_name} : 
                    <span>{comments?.created_date}</span>
                    </p>
                    <div className="comment">
                    <p className="comment_title"></p>
                      <p>{comments?.notes} </p>
                    </div>
                  </div>
                  <hr className="line"/>
                  </div>
                  )
                  }
                  
                 
                </div>
                </div>
                
              </div>
            </div>
          </div>
          <Pagination
						className="pagination-bar"
						currentPage={currentPage}
						totalCount={modificationforstudentComment?.length > 0 ? modificationforstudentComment?.length : 10}
						pageSize={PageSize}
						onPageChange={(page) => setCurrentPage(page)}
					/>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default  NotesForStudent;
