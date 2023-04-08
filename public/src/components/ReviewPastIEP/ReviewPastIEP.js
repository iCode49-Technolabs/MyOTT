import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./ReviewPastIEP.css";
import flag_black from "./../images/waving-flag-black.png";
import AssessmentRequest from "./../images/AssessmentRequest.png";
import { useSelector } from "react-redux";
import Pagination from "../Pagination/Pagination";
import { FacebookIcon, TwitterIcon, LinkedinIcon, BellIcon } from "../../assets/Icons";
import Header from "../Header";
import exportFromJSON from "export-from-json";
import Select from "react-select";
import { review_past_iep } from "../../actions/studentprofile";
import { useLocation } from "react-router-dom";
function ReviewPastIEP() {
  const location=useLocation()
  const dispatch = useDispatch();
  const user= JSON.parse(localStorage.getItem('profile'))
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(()=>{
    // dispatch(review_past_iep(location.state?.student))
    dispatch(review_past_iep({email:location.state?.student?.email,school_name:user.school_name}))
    
  },[])
  const history = useNavigate();
  
 
 
  
  const apiData = useSelector((state) => state.studentprofile?.review_past_iep); 
  var initialstate
 
  const data = apiData
  console.log(data)
  const [search, setSearch] = useState("")
  
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
	const [uploadData,setEditData]=useState()
  return (
    <div className="review_past_iep">
      <Header />
      <div className="container">

     
        <div className="top">
          <img src={flag_black} className="flag" />
          <p style={{ marginTop: "0rem", fontSize: "larger", fontWeight: "600" }}>
          {location.state?.student?.first_name} {location.state?.student?.last_name}
            {console.log(location.state?.student)}
            
          </p>
          
        </div>
        <div className="student-search">
          <p>IEP Reviews </p>
          
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
                  
                  <th className="column2">YEAR LEVEL</th>
                  <th className="column5">CREATED DATE</th>
                  <th className="column6">REVIEW DATE</th>
                   <th className="column7">IEP STATUS</th>
                   <th className="column7">ACTIONS</th>
                 </tr>
              </thead>
              { typeof(data) != "string" &&
              <tbody>
              {results?.map((data) => (
									<tr>
                    {/* <td class="column1">{ifPic ? (
                      <img src={photo} className="pic" />
                    ) : (
                      <p className="initials">
                        {data.first_name.charAt(0) + data.last_name.charAt(0)}
                      </p>
                    )}</td> */}
                    
										<td class="column4">{data.class_year}</td>
										<td class="column5">{data.created_date}</td>
										<td class="column6">{data.review_date}</td>
                    <td class="column7" style={{textTransform:"uppercase"}}>{data.review_status}</td>
                    <td class="column8" style={{fontSize:"12px"}}>
                    <ul>
                      <li>
                        <img src={AssessmentRequest} className="list-pic" />
                        View IEP
                      </li>
                      <li>
                        <img src={AssessmentRequest} className="list-pic" />
                        Share IEP
                      </li>
                      {console.log(location.state?.student)}
                      <li onClick={()=>history("/ReviseIEP",{state:location.state?.student})}>
                        <img src={AssessmentRequest} className="list-pic" />
                        Revise IEP
                      </li>
                      
                      
                     
                      
                      
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
						
										<td class="column8" style={{fontSize:"12px"}}>
                    <ul>
                      <li>
                        <img src={AssessmentRequest} className="list-pic" />
                        View IEP
                      </li>
                      <li>
                        <img src={AssessmentRequest} className="list-pic" />
                        Share IEP
                      </li>
                      <li onClick={()=>history("/ReviseIEP",{state:{student:location.state?.student}})}>
                        <img src={AssessmentRequest} className="list-pic" />
                        Revise IEP
                      </li>
                      
                      
                     
                      
                      
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

export default ReviewPastIEP;
