import React, { useState, useEffect, useMemo } from "react";

import { useFilter } from "@promise_learning/usefilter";
import { useDispatch } from "react-redux";
import "./DocumentRepositry.css";
// import photo from "./../images/ProfilePhoto.png";
import group from "./../images/Mask Group.png";
import Pagination from "../Pagination/Pagination";
// import logo from "./../images/logo1.png";
// import notify from "./../images/notify.png";
import { useSelector } from "react-redux";
import StudentInfo from "./../StudentInfo";
import exportFromJSON from "export-from-json";
import Select from "react-select";
import Header from "../Header";
import Footer from "../Footer";
import { document_repositry } from "../../actions/studentprofile";
import { EditIcon } from "../../assets/Icons"
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function DocumentRepositry({type}) {
    const history = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const [popup, setPopup] = useState(false)
    const [edit, setEdit] = useState(null)

    const fileName = "download1";
    const [exportType, setExportType] = useState("csv");
    const type_options = [
        { value: "csv", label: "csv" },
        { value: "xls", label: "Excel" },
    ];
    
    const apiData = useSelector((state) => state.studentprofile);
    
    const data = apiData?.document_repositry
   
    console.log(location.state?.student)
    const user = JSON.parse(localStorage.getItem("profile"))
    useEffect(() => {
        
        dispatch(document_repositry({ school_name: user.school_name,email:location.state?.student?.email,type:type }));
        
        
    }, []);
    const handleSelectChange = (value, action) => {
        setExportType(value["value"]);
    };
    const ExportToExcel = () => {
        exportFromJSON({ data, fileName, exportType });
    };

    const [currentPage, setCurrentPage] = useState(1);
    const [searchData, setSearchData] = useState({
        query: "",
        fields: ["file","uploaded_date"],
    });

    let PageSize = 10;
    const { loading, data: result } = useFilter({
        data: data,
        search: searchData,
    });
    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return result?.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, result]);
console.log(data)
    return (
        <div class="document-repositrys">
            <Header />
           
            <div class="container">

            <StudentInfo student={location.state?.student}/>
                <div class="bottom">
                    <div class="detailsTable">
                        <input
                            className="search-input"
                            onChange={(e) =>
                                setSearchData({ ...searchData, query: e.target.value })
                            }
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
<div className="change_type">
    
    <button className={type=="iep"?"active":"inactive"} onClick={()=>history("/IEPDocumentRepositry", {
												state: {student:location.state?.student},
											})}>IEP Files</button>
    <button className={type=="formal_assessment"?"active":"inactive"} onClick={()=>history("/FormalAssessmentDocumentRepositry", {
												state: {student:location.state?.student},
											})}>Formal Assessment Files</button>
</div>
                        <table>
                            <thead>
                                <tr class="table100-head">
                            
                                    <th class="column1">File</th>
                                    <th class="column2">Uploaded Date</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {typeof(currentTableData)!="string"&&currentTableData!=undefined&&currentTableData.map((data) => (
                                    <tr>
                                       {/* <td class="column1"><a href={"http://ec2-43-205-135-93.ap-south-1.compute.amazonaws.com:8080/"+data.file}>{data.file}</a> </td> */}

                                        <td class="column1"><a href={"http://127.0.0.1:8081/"+data.file}>{data.file}</a> </td>
                                        <td class="column2">{data.uploaded_date}</td>
                                        
                                       
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

export default DocumentRepositry;
