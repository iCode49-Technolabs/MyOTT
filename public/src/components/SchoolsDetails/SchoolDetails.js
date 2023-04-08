import React, { useState, useEffect, useMemo } from "react";

import { useFilter } from "@promise_learning/usefilter";
import { useDispatch } from "react-redux";
import "./SchoolDetails.css";
import photo from "./../images/ProfilePhoto.png";
import group from "./../images/Mask Group.png";
import Pagination from "./../Pagination/Pagination";
import logo from "./../images/logo1.png";
import notify from "./../images/notify.png";
import { useSelector } from "react-redux";
import { schoolsdetails } from "../../actions/auth";
import exportFromJSON from "export-from-json";
import Select from "react-select";
import Header from "../Header";
import Footer from "../Footer";
import EditData from "./EditData"
import { EditIcon } from "../../assets/Icons"
function SchoolDetails() {
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
	useEffect(() => {
		dispatch(schoolsdetails({ schools: "all" }));
	}, []);
	const apiData = useSelector((state) => state.auth);
	
	const [data, setData] = useState(apiData.schooldetails)
	useMemo(()=>{setData(apiData.schooldetails)},[apiData.schooldetails])
	const user = JSON.parse(localStorage.getItem("profile"))

	const handleSelectChange = (value, action) => {
		setExportType(value["value"]);
	};
	

	const [currentPage, setCurrentPage] = useState(1);
	const [searchData, setSearchData] = useState({
		query: "",
		fields: ["school_name","country"],
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
	  }
	const currentTableData = useMemo(() => {
		const firstPageIndex = (currentPage - 1) * PageSize;
		const lastPageIndex = firstPageIndex + PageSize;
		return result?.slice(firstPageIndex, lastPageIndex);
	}, [currentPage, result]);

	return (
		<div class="school-details">
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
								<th class="column0"></th>
									<th class="column1">School Name</th>
									<th class="column2">Address</th>
									{/* <th class="column3">City</th>
									<th class="column4">State</th> */}
									<th class="column5">Country</th>
									<th class="column6">Postcode</th>
									<th class="column7">Contact Details</th>
									<th class="column7">Active</th>
									<th class="column7">Share Data</th>
									<th class="column7">Retention of Data</th>
								</tr>
							</thead>
							<tbody>
								{currentTableData!=undefined&&typeof(currentTableData)!="string"&&currentTableData?.map((data) => (
									<tr>
										<td class="column0" >
										<input
                              type="checkbox"
                              onChange={e => {
                                e.target.checked === true ? setCheckboxes(prev => [...prev, data]) : setCheckboxes(prev => prev.filter(item => item !== data))
                              }}
                            />
											<EditIcon onClick={() => {
                              setEdit(data)
                              setPopup(true)
                            }} /></td>
										<td class="column1">{data.school_name}</td>
										<td class="column2">{data.address}</td>
										{/* <td class="column3">{data.city}</td>
										<td class="column4">{data.state}</td> */}
										<td class="column5">{data.country}</td>
										<td class="column6">{data.pincode}</td>
										<td class="column7">{data.contact_details}</td>
										<td class="column7" style={{textTransform:"uppercase"}}>{data.active}</td>
										<td class="column7" style={{textTransform:"uppercase"}}>{data.share_data}</td>
										<td class="column7">{data.retention}</td>
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

export default SchoolDetails;
