import "./View.css";
import React, { useState, useEffect, useMemo } from "react";
import { useFilter } from "@promise_learning/usefilter";
import Pagination from "../Pagination/Pagination";
import { EditIcon,DeleteIcon } from "../../assets/Icons";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
	
	schools,
	
} from "../../actions/auth";
import { share_school_data } from "../../actions/setting";

function Share_Library_School() {
	
	const user = JSON.parse(localStorage.getItem("profile"))
	const active_schools = useSelector((state) => state?.auth?.school?.body);
	const shared_schools = useSelector((state) => state?.setting?.share_school);
	const dispatch = useDispatch();
	const [form, setForm] = useState({
		source: user.school_name,
		destinations:[]
	});
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(form)
		dispatch(share_school_data({ ...form, type: "create" }));
		setTimeout(()=>dispatch(share_school_data({source:user?.school_name,type:"view"})),300)
		alert("Update Successful")
	};
	useEffect(() => {
		dispatch(share_school_data({source:user?.school_name,type:"view"}))
		dispatch(schools({ schools: "all" }));
},[]);

	const handleChange = (e) => {
		
		const temp=form.destinations
		if(temp.includes(e.target.value))
		{
			temp.splice(temp.indexOf(e.target.value), 1)
			dispatch(share_school_data({source: user.school_name,destination:e.target.value,type:"delete"}))
		}
		else{
			temp.push(e.target.value)
		}
		console.log(temp,temp.includes(e.target.value))
		setForm({ ...form, [e.target.name]: temp });
	};
	const data = shared_schools;
	
	const [currentPage, setCurrentPage] = useState(1);
	let PageSize = 10;
	const [searchData, setSearchData] = useState({
		query: "",
		fields: ["source","destinations"],
	});

	const { loading, data: result } = useFilter({
		data: data,
		search: searchData,
	});
	const currentTableData = useMemo(() => {
		const firstPageIndex = (currentPage - 1) * PageSize;
		const lastPageIndex = firstPageIndex + PageSize;
		
		return result?.slice(firstPageIndex, lastPageIndex);
	}, [currentPage, result]);
	//console.log(data,result,currentTableData)
	useMemo(()=>{
		if(data!=undefined&&typeof(data)!="string")
		
		{
			const temp=data.map((value)=>value.destination)
			setForm({...form,destinations:temp})
		}
	},[data])
	console.log(data,form)
	return (
		<>
			<div className="view">
			<div className="view" style={{ display: "block" }}>
					<div class="detailsTable">
						<input
							className="search-input"
							onChange={(e) =>
								setSearchData({ ...searchData, query: e.target.value })
							}
							placeholder="Search"
							value={searchData.query}
						/>

						{/* <table>
							<thead>
								<tr class="table100-head">
									<th class="column0">Delete</th>
									
									<th class="column1">School</th>
								</tr>
							</thead>
							<tbody>
								{console.log(currentTableData)}
								{currentTableData!=undefined&&typeof(currentTableData)!='string'&&
								
								currentTableData?.map((data) => (
									<tr>
										<td class="column0">
										<DeleteIcon
												onClick={ () => {
													
													dispatch(share_school_data({...data,type:"delete"}))
													
													setTimeout(()=>dispatch(share_school_data({type:"view",source:user?.school_name})),100)
													
													
												}}
												
											/></td>
										<td class="column1">{data.destination}</td>
									</tr>
								))}
							</tbody>
						</table> */}
						<table>
							<thead>
								<tr class="table100-head">
									<th class="column0">Delete</th>
									
									<th class="column1">School</th>
									<th class="column1">Address</th>
								</tr>
							</thead>
							<tbody>
								
								{active_schools!=undefined&&typeof(active_schools)!='string'&&
								
								active_schools?.map((data) => (
									data.school_name!=user?.school_name&&<tr>
										<td class="column0">
										<input type={"checkbox"} onChange={handleChange} value={data.school_name} checked={form.destinations.includes(data.school_name)} name="destinations"/></td>
										<td class="column1">{data.school_name}</td>
										<td class="column1">{data.address}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
					{currentTableData!=undefined&&currentTableData!="No records"&&
					<Pagination
						className="pagination-bar"
						currentPage={currentPage}
						totalCount={data?.length > 0 ? data?.length : 1}
						pageSize={PageSize}
						onPageChange={(page) => setCurrentPage(page)}
					/>}
					
				</div><div className="left" >
								<button className="save-continue" onClick={(e)=>handleSubmit(e)}>
									Save
								</button>
							</div>
				{/* <div className="add" style={{ display: "block" }}>
					<form onSubmit={(e) => handleSubmit(e)}>
						
						<div className="schools">
							{active_schools!=undefined&&typeof(active_schools)!='string'&&active_schools.map((value)=>
							value.school_name!=user?.school_name&&(typeof(data)=='string'||data==undefined||!data.map((value)=>value.destination).includes(value.school_name))&&
							<>
							<label><input type={"checkbox"} value={value.school_name} onChange={handleChange}  name="destinations"/>{value.school_name}</label>
							
							</>)}
							
							
						</div>
						<br />
					 {console.log(active_schools.length,data.length,data,!(active_schools.length-1==data.length))} 
						{(!(active_schools?.length-1==data?.length))&&<div className="buttons">
							<div className="left" >
								<button className="save-continue" type="submit">
									Save
								</button>
							</div>
						</div>}
					</form>
				</div> */}
			</div>
		</>
	);
}

export default Share_Library_School;
