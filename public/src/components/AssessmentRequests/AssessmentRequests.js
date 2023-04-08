import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./AssessmentRequests.css";
import flag_black from "./../images/waving-flag-black.png";
import handshake from "./../images/handshake.png";
import improve from "./../images/improve.png";
import calendar from "./../images/calendar.png";
import warning from "./../images/warning.png";
import pen from "./../images/pen.png";
import knowstudentbetter from "./../images/knowstudentbetter.png";
import AssessmentRequest from "./../images/AssessmentRequest.png";
import reading_book from "./../images/reading-book.png";
import risk_assessment from "./../images/risk-assessment.png";
import { useSelector } from "react-redux";
import { studentdetails,newstudentcount,studentassessmentcount,viewUpcomingOverdueReview,viewAllReview } from "../../actions/assessmentrequest";

import {newstudentdetails} from "../../actions/learningcoordinator"
import Pagination from "./../Pagination/Pagination";
import { FacebookIcon, TwitterIcon, LinkedinIcon, BellIcon } from "../../assets/Icons";
import Header from "../Header";
import moment from 'moment';
import { useFilter } from "@promise_learning/usefilter";
import exportFromJSON from "export-from-json";
import Select from "react-select";
import UploadFile  from "./uploadFile"
function AssessmentRequests({type}) {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(newstudentcount({schools : user?.school_name,role:"student",iep:"no",assessment_request:"no",active:"yes",learning_coordinator:user?.email}))
  dispatch(studentassessmentcount({schools : user?.school_name,role:"student",assessment_request:"yes",active:"yes",learning_coordinator:user?.email}))
  },[])
  const [currentPage, setCurrentPage] = useState(1);
  
  const history = useNavigate();
  
  const user= JSON.parse(localStorage.getItem('profile'))
 
  useEffect(() => {
    if (type=="all")
    {
      dispatch(studentdetails({ school: user?.school_name,learning_coordinator:user?.email }));
    }
    else if (type=="assessment_request")
    {
      dispatch(studentdetails({ school: user?.school_name,learning_coordinator:user?.email }));
    }
		
    else if (type=="new"){
      dispatch(newstudentdetails({ school: user.school_name,learning_coordinator:user.email}));
  }
  else if (type=="current_tracking"){
    dispatch(viewAllReview ({ school_name: user.school_name,learning_coordinator:user.email}));
}
else if (type=="upcoming_review"){
  dispatch(viewUpcomingOverdueReview({ school_name: user.school_name,learning_coordinator:user.email,review_status:"Upcoming Review"}));
}
else if (type=="overdue_review"){
  dispatch(viewUpcomingOverdueReview({ school_name: user.school_name,learning_coordinator:user.email,review_status:"Overdue Review"}));
}
	}, []);
  const apiData = useSelector((state) => state.auth); 
  var initialstate
  if (type=="assessment_request"){
    initialstate=apiData?.studentdetails
}
else if (type=="all"){
  initialstate=apiData?.studentdetails
}
else if( type=="new"){
    initialstate=apiData?.newstudentdetails
}
else if (type=="current_tracking"){
  initialstate=apiData?.studentdetails
}
else if (type=="upcoming_review"){
  initialstate=apiData?.studentdetails
}
else if (type=="overdue_review"){
  initialstate=apiData?.studentdetails
}
  const data = initialstate
  console.log(apiData)
  const [search, setSearch] = useState("")
  // const [searchData, setSearchData] = useState({
	// 	query: "",
	// 	// fields: ["first_name","last_name","user_id","class_year","disability_category"],
  //   fields:["class_year"]
	// });
 
	// const { loading, data: result } = useFilter({
	// 	data: data,
	// 	search: searchData,
	// });
  let PageSize = 10;
	const currentTableData = useMemo(() => {
		const firstPageIndex = (currentPage - 1) * PageSize;
		const lastPageIndex = firstPageIndex + PageSize;
		return data && data.slice(firstPageIndex, lastPageIndex)
	}, [currentPage, data]);
  let results

  if (search) {
    results = data.filter(item => {
      let found = false
      Object.entries(item).map(([key, value]) => {
        if (String(value).toLowerCase().includes(search.toLowerCase())) {
          found = true
        }
      })
      return found
    })
    results.length = PageSize
  } else {
    results = currentTableData
  }
  const [exportType, setExportType] = useState("csv");
	const type_options = [
		{ value: "csv", label: "csv" },
		{ value: "xls", label: "Excel" },
	];
  const fileName = "download1";
const ExportToExcel = () => {
		exportFromJSON({ data, fileName, exportType });
	};
  const handleSelectChange = (value, action) => {
    
		setExportType(value["value"]);
    
	};
  const [popup, setPopup] = useState(false)
	const [uploadData,setUploadData]=useState()
  return (
    <div className="assessment-requests">
      <Header />
      {popup ? <UploadFile  setPopup={setPopup}  uploadData={uploadData}/> : undefined}
      <div className="container">

        <div className="dashboard-right">
          <div className="card" style={{ backgroundColor: "#69B3DD" }}>
            <img src={handshake} />
            <div className="text">
              <p
                style={{
                  fontSize: "1.2rem",
                  marginTop: "0rem",
                  marginLeft: "-.5rem",
                  marginBottom: "-.7rem",
                  color: "white",
                }}
              >
                {apiData?.newstudentcount>0?apiData?.newstudentcount:0}
              </p>
              <p
                style={{
                  marginLeft: "-2rem",
                  fontSize: ".5rem",
                  textAlign: "center",
                  padding: "0 .1rem",
                  color: "white",
                }}
              >
                New Students
              </p>
            </div>
          </div>

          <div className="card" style={{ backgroundColor: "#889159" }}>
            <img src={improve} />
            <div className="text">
              <p
                style={{
                  fontSize: "1.2rem",
                  marginTop: ".0rem",
                  marginLeft: "-.5rem",
                  marginBottom: "-.7rem",
                  color: "white",
                }}
              >
                0
              </p>
              <p
                style={{
                  marginLeft: "-2rem",
                  fontSize: ".5rem",
                  textAlign: "center",
                  padding: "0 .1rem",
                  color: "white",
                }}
              >
                Track Progress
              </p>
            </div>
          </div>
          <div className="card" style={{ backgroundColor: "#D3AB88" }}>
            <img src={calendar} />
            <div className="text">
              <p
                style={{
                  fontSize: "1.2rem",
                  marginTop: "0rem",
                  marginLeft: "-.5rem",
                  marginBottom: "-.7rem",
                  color: "white",
                }}
              >
                0
              </p>
              <p
                style={{
                  marginLeft: "-2rem",
                  fontSize: ".5rem",
                  textAlign: "center",
                  padding: "0 .1rem",
                  color: "white",
                }}
              >
                Upcoming reviews
              </p>
            </div>
          </div>
          <div className="card" style={{ backgroundColor: "#F05D46" }}>
            <img src={warning} />
            <div className="text">
              <p
                style={{
                  fontSize: "1.2rem",
                  marginTop: "0rem",
                  marginLeft: "-.5rem",
                  marginBottom: "-.7rem",
                  color: "white",
                }}
              >
                0
              </p>
              <p
                style={{
                  marginLeft: "-2rem",
                  fontSize: ".5rem",
                  textAlign: "center",
                  padding: "0 .1rem",
                  color: "white",
                }}
              >
                Overdue IEP reviews
              </p>
            </div>
          </div>
        </div>
        <div className="top">
          <img src={flag_black} className="flag" />
          <p style={{ marginTop: "0rem", fontSize: "larger", fontWeight: "600" }}>
          {type=="assessment_request"&&"Assessment requests"}
            {type=="new"&&"New Students"}
            {type=="all"&&"All Students"}
            {type=="current_tracking"&&"Current Tracking"}
            {type=="upcoming_review"&&"Upcoming Review"}
            {type=="overdue_review"&&"Overdue Review"}
            
            
          </p>
          <p style={{textAlign: "right", width: "75%", marginTop: "0rem", fontSize: "larger", fontWeight: "600"}}>
          {type=="all"&&(apiData.allstudentcount>0?Number(apiData.allstudentcount):0)}
            {type=="assessment_request"&&(apiData.studentassessmentcount>0?Number(apiData.studentassessmentcount):0)}
            {type=="new"&&(apiData.newstudentcount>0?Number(apiData.newstudentcount):0)}
            {type=="current_tracking"&&(apiData.allreviewcount>0?apiData.allreviewcount:0)}
            {type=="upcoming_review"&&(apiData.upcomingreviewcount>0?apiData.upcomingreviewcount:0)}
            {type=="overdue_review"&&(apiData.overduereviewcount>0?apiData.overduereviewcount:0)}
            
          </p>
        </div>
        <div className="student-search">
          <p>Student Search </p>
          
          <input
							className="search-input"
							value={search}
                  onChange={e => setSearch(e.target.value)}
							placeholder="Search"
							
						/>
           <div className="download-right">
							<Select
								options={type_options}
								name="date_from"
								placeholder={
									<div className="select-placeholder-text">
										Select file type
									</div>
								}
								value={exportType["value"]}
								onChange={handleSelectChange}
								required
							/>
							<button
								className="download-button"
								type="button"
								onClick={ExportToExcel}
							>
								Export
							</button></div> 
          
        </div>
        <div className="bottom">
          <div className="student-table">
            <table>
              <thead>
                <tr className="table100-head">
                  {/* <th className="column1">PROFILE</th> */}
                  
                  <th className="column2">NAME</th>
                  <th className="column3">STUDENT ID</th>
                  <th className="column4">YEAR LEVEL</th>
                  <th className="column5">CREATED DATE</th>
                  {type!="new"&&<th className="column6">REVIEW DATE</th>}
                  
                  <th className="column9">DISABILITY CATEGORY</th>
                  <th className="column7">IEP STATUS</th>
                  <th className="column10">DURATION</th>
                  <th className="column8">ACTIONS</th>
                </tr>
              </thead>
              { data != "no records found" && data!=undefined&&
              <tbody>
              {typeof(results) != "string" && results!=undefined&&results?.map((data) => (
                (type!="assessment_request"||data?.assessment_request=="yes")&&
									<tr>
                    {/* <td class="column1">{ifPic ? (
                      <img src={photo} className="pic" />
                    ) : (
                      <p className="initials">
                        {data.first_name.charAt(0) + data.last_name.charAt(0)}
                      </p>
                    )}</td> */}
                    
										<td class="column2">{data?.first_name +" "+ data?.last_name}</td>
										<td class="column3" style={{textAlign:"center"}}>{data?.user_id}</td>
										<td class="column4">{data?.class_year}</td>
										<td class="column5">{data?.created_date}</td>
										{type!="new"&&<td class="column6">{data?.review_date}</td>}
                    <td class="column9" >{data?.disability_category}</td>
										<td class="column7" style={{textTransform:"uppercase"}}>{data?.iep}{console.log(data?.assessment_request)}</td>
                    <td className="column10">{data?.created_date&&moment(moment(data?.created_date?.replaceAll("-","/"), "DD/MM/YYYY").toDate()).fromNow()}</td>
										<td class="column8" style={{fontSize:"12px"}}>
                    <ul>
                      <li onClick={()=>history("/IndividualAssessmentRequest",{state:{student:data,access:"edit"}})}>
                        <img src={AssessmentRequest} className="list-pic"  />
                        Assesment Requests
                      </li>
                      <li onClick={()=>history("/StudentProfile",{state:{student:data}})}>
                        <img src={reading_book} className="list-pic" />
                        View Student Profile
                      </li>
                      <li onClick={()=>history("/StudentVoiceChoice",{state:{student:data}})}>
                        <img src={knowstudentbetter} className="list-pic" />
                        Conversation with Student
                      </li>
                      <li onClick={()=>history("/ConversationTeacherParent",{state:{student:data}})}>
                        <img src={knowstudentbetter} className="list-pic" />
                        Conversation with Teacher and Parent
                      </li>
                      <div className="upload_file">
                      <li onClick={()=>history("/OrganiseFormalAssessment",{state:{student:data}})}>
                        <img src={risk_assessment} className="list-pic" />
                        Organise Formal Assessment
                      </li>
                      <span onClick={() => {
													
													setPopup(true);
													setUploadData({
															email:data?.email,
                              school_name:user?.school_name,
                              table_name:"past_formal_assessment_files"

														
														
														
													});
													
													
												}}>&#43;</span>
                      </div>
                      {(type=="assessment_request"||type=="new"||type=="all")?<div className="upload_file">
                      <li onClick={()=>history("/IEP",{state:{student:data}})}>
                        <img src={pen} className="list-pic" />
                        Create IEP
                        
                      </li>
                      <span onClick={() => {
													
													setPopup(true);
													setUploadData({
                            email:data?.email,
                            school_name:user?.school_name,
                            table_name:"past_iep_files"
														
													});
													
													
												}}>&#43;</span>
                      </div>:<div className="upload_file">
                      <li onClick={()=>history("/ReviseIEP",{state:{student:data}})}>
                        <img src={pen} className="list-pic" />
                        Revise IEP
                        
                      </li>
                     
                      </div>}
                      
                    </ul>
                    </td>
									</tr>
								))}
                
              </tbody>}
              
              {/* <tbody>
              
									<tr>
                    
                    
										<td class="column2">ABC DEF</td>
										<td class="column3" style={{textAlign:"center"}}>ABC DEF</td>
										<td class="column4">ABC DEF</td>
										<td class="column5">ABC DEF</td>
										<td class="column6"></td>
                    <td class="column9" >ABC DEF</td>
										<td class="column7" style={{textTransform:"uppercase"}}>ABC DEF</td>
                    <td className="column10">ABC DEF</td>
										<td class="column8" style={{fontSize:"12px"}}>
                    <ul>
                      <li onClick={()=>history("/IndividualAssessmentRequest",{state:{student:{email:data?.email,class_year:data?.class_year}}})}>
                        <img src={AssessmentRequest}  className="list-pic" />
                        Assesment Requests
                      </li>
                      <li onClick={()=>history("/StudentProfile",{state:{student:data}})}>
                        <img src={reading_book} className="list-pic" />
                        View Student Profile
                      </li>
                      <li onClick={()=>history("/StudentVoiceChoice",{state:{student:data}})}>
                        <img src={knowstudentbetter} className="list-pic" />
                        Student Voice & Choice
                      </li>
                      <div className="upload_file">
                      <li>
                        <img src={risk_assessment} className="list-pic" />
                        Organise Formal Assessment
                      </li>
                      <span onClick={() => {
													
													setPopup(true);
													setUploadData({
                            email:"suneel.stones@test.com",
                            school_name:"School B",
                            table_name:"past_formal_assessment_files"
													});
													
													
												}}>&#43;</span>
                      </div>
                      
                      {(type=="assessment_request"||type=="new")?<div className="upload_file">
                      <li onClick={()=>history("/IEP",{state:{student:data}})}>
                        <img src={pen} className="list-pic" />
                        Create IEP
                        
                      </li>
                      <span onClick={() => {
													
													setPopup(true);
													setUploadData({
														email:"suneel.stones@test.com",
                            school_name:"School B",
                            table_name:"past_iep_files"
														
													});
													
													
												}}>&#43;</span>
                      </div>:<div className="upload_file">
                      <li onClick={()=>history("/ReviseIEP",{state:{student:data}})}>
                        <img src={pen} className="list-pic" />
                        Revise IEP
                        
                      </li>
                     
                      </div>}
                    </ul>
                    </td>
									</tr>
								
                
              </tbody> */}

            </table>
          </div>
          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={data?.length > 0 ? data?.length : 10}
            pageSize={PageSize}
            onPageChange={(page) => setCurrentPage(page)}
          />{" "}
        </div>
      </div>
      <div className="footer">
        <FacebookIcon />
        <TwitterIcon />
        <LinkedinIcon />
      </div>
    </div>
  );
}

export default AssessmentRequests;
