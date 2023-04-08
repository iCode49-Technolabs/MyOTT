import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./TeacherCardPages.css";
import flag_black from "./../images/waving-flag-black.png";
import AssessmentRequest from "./../images/AssessmentRequest.png";
import { useSelector } from "react-redux";
import Pagination from "../Pagination/Pagination";
import {
	FacebookIcon,
	TwitterIcon,
	LinkedinIcon,
	BellIcon,
} from "../../assets/Icons";
import Header from "../Header";
import exportFromJSON from "export-from-json";
import Select from "react-select";
import { review_past_iep } from "../../actions/studentprofile";
import { useLocation } from "react-router-dom";
import { teacherassessmentrequest,ListRecordEvidence } from "../../actions/teacherdashboard";
import { modification_for_students } from "../../actions/modification_for_students";
import {ListingOfLessonPlan} from '../../actions/unit_lesson_plan';
function TeacherCardPages({ type }) {
	const location = useLocation();
	const dispatch = useDispatch();
	const user = JSON.parse(localStorage.getItem("profile"));
	const [currentPage, setCurrentPage] = useState(1);

	const history = useNavigate();
	useEffect(()=>{
		if(type=="Assessment Report Request")
		dispatch(modification_for_students({school_name:user?.school_name,teacher_email:user?.email,type:"teacher_view"}))
		if(type=="Create/Review Unit & Lesson Plans")
		dispatch(ListingOfLessonPlan({school_name:user?.school_name,email:user?.email}))
		if(type=="Record Evidence/Comments")
		dispatch(ListRecordEvidence({school_name:user?.school_name,teacher:user?.email}))
		else
		dispatch(teacherassessmentrequest({email:user?.email,school:user?.school_name}))
		
		
		
		
	},[])
	const apiData=useSelector((state) => state)
	var student
	useMemo(()=>{
		
		if(type=="Assessment Report Request")
		student=apiData?.modificationstudent?.modificationstudent
		if(type=="Create/Review Unit & Lesson Plans")
		student=apiData?.unit_lesson_plan?.lessonplan
		if(type=="Record Evidence/Comments")
		student=apiData?.teacher_dashboard?.recordevidence
		if(type=="Student List")
		student=apiData?.teacher_dashboard?.teacherassessmentrequest
	},[apiData])
	const [data, setData] = useState([]);
	useMemo(()=>{
		if (typeof(student)!="string"&&student!=undefined)
		{	
			console.log(student,"1st")
			setData([...student])
		}
		if (typeof(student)=="string")
		{
			console.log(student,"2nd")
			setData([])
		}
		
	},[student])
	
	const count = data.length;
	const [search, setSearch] = useState("");
	const [isReadMore,setIsReadMore]=useState([])
	useMemo(()=>{
		const temp=Array.apply(null, { length: count }).map((value)=>(true))
		setIsReadMore([...temp])
	},[count])
	
	let PageSize = 10;
	const currentTableData = useMemo(() => {
		const firstPageIndex = (currentPage - 1) * PageSize;
		const lastPageIndex = firstPageIndex + PageSize;
		return data && data.slice(firstPageIndex, lastPageIndex);
	}, [currentPage, data]);
	let results;

	if (search) {
		results = data.filter((item) => {
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

	return (
		<div className="teacher_card_pages">
			<Header />
			<div className="container">
				<div className="top">
					<div style={{ display: "flex" }}>
						<img src={flag_black} className="flag" />
						<p
							style={{
								marginTop: "0rem",
								fontSize: "larger",
								fontWeight: "600",
							}}
						>
							{type}
						</p>
					</div>
					<p
						style={{ marginTop: "0rem", fontSize: "larger", fontWeight: "600" }}
					>
						{count}
					</p>
				</div>
				<div className="student-search">
					<p>Quick Search</p>

					<input
						className="search-input"
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						placeholder="Search"
					/>
					<div className="download-right">
						<Select
							options={type_options}
							name="date_from"
							placeholder={
								<div className="select-placeholder-text">Select file type</div>
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
						</button>
					</div>
				</div>
				<div className="bottom">
					<div className="student-table">
						<table>
							<thead>
								{type == "Create/Review Unit & Lesson Plans" && (
									<tr className="table100-head">
										<th className="column2">PRIOR KNOWLEDGE</th>
										<th className="column5">HOMEWORK</th>
										<th className="column6">KEY LEARNING OUTCOMES</th>
										<th className="column7">TOPIC</th>
										<th className="column3">SCHEDULED DATE</th>
										<th className="column8">ACTIONS</th>
									</tr>
								)}
								{type == "Student List" && (
									<tr className="table100-head">
										<th className="column2">NAME</th>
										<th className="column3">STUDENT ID</th>
										<th className="column4">YEAR LEVEL</th>
										<th className="column5" style={{textTransform:"capitalize"}}>ASSESSMENT REQUESTED</th>
										<th className="column6">LESSON MODIFICATIONS</th>
										<th className="column7" style={{textTransform:"capitalize"}}>IEP STATUS</th>
										<th className="column8">ACTIONS</th>
									</tr>
								)}
							
                {type == "Assessment Report Request" && (
									<tr className="table100-head">
										<th className="column2">NAME</th>
										<th className="column3">STUDENT ID</th>
										<th className="column4">YEAR LEVEL</th>
										<th className="column5">SUBMISSION DATE</th>
										<th className="column6">RESPONSE STATUS</th>
										<th className="column8">ACTIONS</th>
									</tr>
								)}
                {type == "Updates from Learning Coordinator" && (
									<tr className="table100-head">
										<th className="column2">NAME</th>
										<th className="column3">STUDENT ID</th>
										<th className="column4">YEAR LEVEL</th>
										<th className="column5">CREATION DATE</th>
										
                    <th className="column7">IEP STATUS</th>
										<th className="column8">ACTIONS</th>
									</tr>
								)}
                {type == "Record Evidence/Comments" && (
									<tr className="table100-head">
											<th className="column2">NAME</th>
										<th className="column3">Evidence Recorded</th>
										<th className="column4">File</th>
										{/* <th className="column5">ASSESSMENT TASK</th> */}
										<th className="column6">DATE</th>
										{/* <th className="column8">ACTIONS</th> */}
										
									</tr>
								)}
							</thead>
							{typeof(data) != "string" && (
								<tbody>
									{type == "Student List" &&
										results?.map((data) => (
											<tr>
												<td class="column2">{data?.first_name} {data?.last_name}</td>
												<td class="column3">{data?.user_id}</td>
												<td class="column4">{data?.class_year}</td>
												<td class="column5" style={{textTransform:"capitalize"}}>{data?.assessment_request}</td>
												<td class="column6">{data?.lesson_modifications}</td>
												<td class="column7" style={{textTransform:"capitalize"}}>{data?.iep}</td>
												<td class="column8" style={{ fontSize: "12px" }}>
													<ul>
														<li style={{marginRight:"0rem"}} onClick={()=>history("/IndividualAssessmentRequest",{state:{student:data,access:"view"}})}>
															<img
																src={AssessmentRequest}
																className="list-pic"
															/>
															View/Request Assessment
														</li>
														<li style={{marginRight:"0rem"}} onClick={()=>history("/StudentProfile",{state:{student:data}})}>
															<img
																src={AssessmentRequest}
																className="list-pic"
															/>
															View Student Profile
														</li>
														<li style={{marginRight:"0rem"}} onClick={()=>history("/StudentVoiceChoice",{state:{student:data}})}>
															<img
																src={AssessmentRequest}
																className="list-pic"
															/>
															Explore Student Voice & Choice
														</li>
														<li style={{marginRight:"0rem"}} onClick={()=>history("/ConversationTeacherParent",{state:{student:data}})}>
															<img
																src={AssessmentRequest}
																className="list-pic"
															/>
															Further Conversations with Carers/Teachers
														</li>
														<li style={{marginRight:"0rem"}}>
															<img
																src={AssessmentRequest}
																className="list-pic"
															/>
															Create IEP
														</li>

														<li style={{marginRight:"0rem"}}>
															<img
																src={AssessmentRequest}
																className="list-pic"
															/>
															Record Evidence
														</li>
														<li style={{marginRight:"0rem"}}>
															<img
																src={AssessmentRequest}
																className="list-pic"
															/>
															Message Learning Coordinator
														</li>
														<li style={{marginRight:"0rem"}}>
															<img
																src={AssessmentRequest}
																className="list-pic"
															/>
															View Updates from Learning Coordinator
														</li>
													</ul>
												</td>
											</tr>
										))}
									{type == "Create/Review Unit & Lesson Plans" &&
										results?.map((data) => (
											<tr>
												<td class="column2">{data?.prior_knowledge}</td>
												<td class="column5">{data?.homework}</td>
												<td class="column6">{data?.key_learning_outcomes}</td>
												<td class="column7">{data?.topic}</td>
												<td class="column3">{data?.date}</td>
												<td class="column8" style={{ fontSize: "12px" }}>
													<ul>
														<li>
															<img
																src={AssessmentRequest}
																className="list-pic"
															/>
															Create
														</li>
														<li onClick={(e) => history("/ViewLessonPlan",{state:{lesson_id:data?.lesson_id}})}>
															<img
																src={AssessmentRequest}
																className="list-pic"
															/>
															Edit
														</li>
														<li>
															<img
																src={AssessmentRequest}
																className="list-pic"
															/>
															Share
														</li>
														<li>
															<img
																src={AssessmentRequest}
																className="list-pic"
															/>
															Publish
														</li>
														<li>
															<img
																src={AssessmentRequest}
																className="list-pic"
															/>
															Upload Resources
														</li>
													</ul>
												</td>
											</tr>
										))}
									
                    {type == "Assessment Report Request" &&
										results?.map((data) => (
											<tr>
												<td class="column2">{data?.first_name} {data?.last_name}</td>
												<td class="column3">{data?.user_id}</td>
												<td class="column4">{data?.class_year}</td>
												<td class="column5">{data?.created_date}</td>
												<td class="column6" style={{textTransform:"capitalize"}}>{data?.status}</td>
												<td class="column8" style={{ fontSize: "12px" }}>
												<ul>
														<li style={{marginRight:"-4rem"}} onClick={()=>history("/IndividualAssessmentRequest",{state:{student:data,access:"view"}})}>
															<img
																src={AssessmentRequest}
																className="list-pic"
															/>
															View/Request Assessment
														</li>
														<li style={{marginRight:"-4rem"}} onClick={()=>history("/StudentProfile",{state:{student:data}})}>
															<img
																src={AssessmentRequest}
																className="list-pic"
															/>
															View Student Profile
														</li>
														<li style={{marginRight:"-4rem"}} onClick={()=>history("/StudentVoiceChoice",{state:{student:data}})}>
															<img
																src={AssessmentRequest}
																className="list-pic"
															/>
															Explore Student Voice & Choice
														</li>
														<li style={{marginRight:"-4rem"}} onClick={()=>history("/ConversationTeacherParent",{state:{student:data}})}>
															<img
																src={AssessmentRequest}
																className="list-pic"
															/>
															Further Conversations with Carers/Teachers
														</li>
														<li style={{marginRight:"-4rem"}}>
															<img
																src={AssessmentRequest}
																className="list-pic"
															/>
															Create IEP
														</li>

														<li style={{marginRight:"-4rem"}}>
															<img
																src={AssessmentRequest}
																className="list-pic"
															/>
															Record Evidence
														</li>
														<li style={{marginRight:"-4rem"}}>
															<img
																src={AssessmentRequest}
																className="list-pic"
															/>
															Message Learning Coordinator
														</li>
														<li style={{marginRight:"-4rem"}}>
															<img
																src={AssessmentRequest}
																className="list-pic"
															/>
															View Updates from Learning Coordinator
														</li>
													</ul>
												</td>
											</tr>
										))}
                    {type == "Updates from Learning Coordinator" &&
										results?.map((data) => (
											<tr>
												<td class="column2">{data?.first_name} {data?.last_name}</td>
												<td class="column3">{data?.user_id}</td>
												<td class="column4">{data?.class_year}</td>
                        <td class="column5">{data?.creation_date}</td>
											
												<td class="column6">{data?.iep}</td>
												<td class="column8" style={{ fontSize: "12px" }}>
                        <ul>
														<li>
															<img
																src={AssessmentRequest}
																className="list-pic"
															/>
															View & Respond to Message
														</li>
														<li>
															<img
																src={AssessmentRequest}
																className="list-pic"
															/>
															Complete Teacher Views Form
														</li>
														<li>
															<img
																src={AssessmentRequest}
																className="list-pic"
															/>
															View New Conversation Records
														</li>
														<li>
															<img
																src={AssessmentRequest}
																className="list-pic"
															/>
															Further Conversations with Carers/Teachers
														</li>
														<li>
															<img
																src={AssessmentRequest}
																className="list-pic"
															/>
															View IEP

														</li>

														
													</ul>
												</td>
											</tr>
										))}
                    {type == "Record Evidence/Comments" &&
										results?.map((data,index) => (
											<tr>
											<td class="column2">{data?.first_name+" "+data?.last_name}</td>
											
											<td class="column3">{data?.record_evidence?.length>150?isReadMore?.[index] ? data?.record_evidence.slice(0, 150): data?.record_evidence: data?.record_evidence }
											{data?.record_evidence.length>150&&<span style={{color:'#135eff',display:"block"}}onClick={()=>{
												const temp=isReadMore
												temp[index]=!temp[index]
												setIsReadMore([...temp])
}}>
          {isReadMore?.[index] ? '...read more' : ' ...show less'}
        </span>}</td>
											<td class="column4">{data?.file}</td>
											<td class="column5">{data?.creation_date}</td>
											
											
										</tr>
										))}
								</tbody>
							)}
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

export default TeacherCardPages;
