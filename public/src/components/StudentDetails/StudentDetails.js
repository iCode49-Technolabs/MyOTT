import React, { useState, useEffect, useMemo } from "react";

import { useFilter } from "@promise_learning/usefilter";
import { useDispatch } from "react-redux";
import "./StudentDetails.css";
// import photo from "./../images/ProfilePhoto.png";
import group from "./../images/Mask Group.png";
import Pagination from "./../Pagination/Pagination";
// import logo from "./../images/logo1.png";
// import notify from "./../images/notify.png";
import { useSelector } from "react-redux";
import { studentDetails } from "../../actions/school_systemadmin";
import {yearleveldata,newstudentdetails} from "../../actions/learningcoordinator"
import exportFromJSON from "export-from-json";
import Select from "react-select";
import Header from "../Header";
import Footer from "../Footer";
import EditData from "./EditData"
import { EditIcon } from "../../assets/Icons"
import { useLocation } from "react-router-dom";

function StudentDetails({type}) {
    const location = useLocation();
    const dispatch = useDispatch();
    const [popup, setPopup] = useState(false)
    const [edit, setEdit] = useState(null)
    const [checkboxes, setCheckboxes] = useState([])
    const fileName = "download1";
    const [exportType, setExportType] = useState("csv");
    const type_options = [
        { value: "csv", label: "csv" },
        { value: "xls", label: "Excel" },
    ];
    var initialstate
    const apiData = useSelector((state) => state);
    if (type=="report"){
        initialstate=apiData.auth?.yearleveldata
    }
    else if( type=="new"){
        initialstate=apiData.auth?.newstudentdetails
    }
    else{
        initialstate=apiData.school_systemadmin?.studentdetails
    }
    const [data, setData] = useState(initialstate)
    useMemo(()=>{
        setData(initialstate)
    },[initialstate]
    )
    
    console.log(data,initialstate)
    const user = JSON.parse(localStorage.getItem("profile"))
    useEffect(() => {
        if (type=="report"){
            dispatch(yearleveldata({ school: user.school_name,class_year:location.state?.class_year }));
        }
        else if (type=="new"){
            dispatch(newstudentdetails({ school: user.school_name,learning_coordinator:user.email,duration:"30" }));
        }
        else
        dispatch(studentDetails({ school: user.school_name,type:type }));

        console.log("Sx")
    }, [popup]);
    useMemo(()=>{
        setTimeout((
            
        )=>{if (type=="report"){
            dispatch(yearleveldata({ school: user.school_name,class_year:location.state?.class_year }));
        }
        else if (type=="new"){
            dispatch(newstudentdetails({ school: user.school_name,learning_coordinator:user.email,duration:"30" }));
        }
        else
        dispatch(studentDetails({ school: user.school_name,type:type }));},200)
        
    },[popup])
    const handleSelectChange = (value, action) => {
        setExportType(value["value"]);
    };
    
    const [currentPage, setCurrentPage] = useState(1);
    const [searchData, setSearchData] = useState({
        query: "",
        fields: ["email","first_name","date_of_birth","class_year"],
    });

    let PageSize = 10;
    const { loading, data: result } = useFilter({
        data: data,
        search: searchData,
    });
    const ExportToExcel = () => {
        var data
		if(checkboxes!=null){
		  data=checkboxes
		}
		else
		data=result
		
		exportFromJSON({ data, fileName, exportType })
    };

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return result?.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, result]);
console.log(data)
    return (
        <div class="student-details">
            <Header />
            {popup ? <EditData user={edit} setPopup={setPopup} setData={setData} /> : undefined}
            <div class="container">

                <div class="top">
                    {/* <img src={photo} class="pic" /> */}
                    <div class="welcome">
                        <p
                            style={{
                                fontSize: "1.2rem",
                                fontWeight: "700",
                                color: "#F05D46",
                            }}
                        >
                            Welcome back {user?.first_name}!
                        </p>
                        <p
                            style={{ fontSize: "small", fontWeight: "500", color: "#092433" }}
                        >
                            Check your dashboard for a quick view of what’s pending and new
                            updates.
                        </p>
                    </div>
                    <img src={group} class="group" />
                </div>
                <div class="bottom">
                    <div class="detailsTable">
                        <input
                            className="search-input"
                            onChange={(e) =>
                                setSearchData({ ...searchData, query: e.target.value })
                            }
                            maxLength={120}
                            placeholder="Search"
                            value={searchData.query}
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
                                value={exportType["label"]}
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

                        <table>
                            <thead>
                                <tr class="table100-head">
                                    <th></th>
                                    <th class="column1">Name</th>
                                    <th class="column2">Email</th>
                                    <th class="column3">Date of Birth</th>
                                    
                                    <th class="column4">Class Year</th>
                                    {type!="report"&&<th class="column5">Assessment Request</th>}
                                    {type!="report"&&<th class="column6">IEP</th>}
                                    {type!="report"&&<th class="column7">ACTIVE</th>}
                                </tr>
                            </thead>
                            <tbody>
                                {typeof(currentTableData)!="string"&&currentTableData!=undefined&&currentTableData.map((data) => (
                                    <tr>
                                       
                                        <td class="column0"> <input
                              type="checkbox"
                              onChange={e => {
                                e.target.checked === true ? setCheckboxes(prev => [...prev, data]) : setCheckboxes(prev => prev.filter(item => item !== data))
                              }}
                            /><EditIcon onClick={() => {
                                            setEdit(data)
                                            setPopup(true)
                                        }} user={data} setPopup={setPopup} /></td>
                                        <td class="column1">{data.first_name} {data.last_name}</td>
                                        <td class="column2">{data.email}</td>
                                        
                                       
                                        <td class="column3">{data.date_of_birth}</td>
                                       
                                        <td class="column4">{data.class_year}</td>
                                        {type!="report"&&<td className="column5">{data.assessment_request=="yes"?<span style={{fontSize:"18px",fontWeight:"900",color:"green"}}>&#10003;</span>:<span>&#10060;</span>}</td>}
                                        {type!="report"&&<td className="column6">{data.iep=="yes"?<span style={{fontSize:"18px",fontWeight:"900",color:"green"}}>&#10003;</span>:<span>&#10060;</span>}</td>}
                                        {type!="report"&&<td className="column6">{data.active=="yes"?<span style={{fontSize:"18px",fontWeight:"900",color:"green"}}>&#10003;</span>:<span>&#10060;</span>}</td>}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <Pagination
                        className="pagination-bar"
                        currentPage={currentPage}
                        totalCount={data?.length > 0 ? data?.length : 10}
                        pageSize={PageSize}
                        onPageChange={(page) => setCurrentPage(page)}
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default StudentDetails;
