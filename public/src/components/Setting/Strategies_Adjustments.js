import "./View.css";
import React, { useState, useEffect, useMemo } from "react";
import { useFilter } from "@promise_learning/usefilter";
import Pagination from "../Pagination/Pagination";
import { EditIcon,DeleteIcon } from "../../assets/Icons";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { strategies_adjustment } from "../../actions/setting";
function Strategies_Adjustment(param) {
	const activeTab = param.tab;
	const setPopup = param.setPopup;
	
	const setEditData = param.setEditData;
	const user = JSON.parse(localStorage.getItem("profile"))
	const apiData = useSelector((state) => state.setting);

	const dispatch = useDispatch();
	const [form, setForm] = useState({
		schl_admin_email:user.email,
		school_name: user.school_name,
	});
	const handleSubmit = (e) => {
		e.preventDefault();
		
		dispatch(strategies_adjustment({ ...form, type: "create" }));
		
	};
	useEffect(() => {
		dispatch(strategies_adjustment({ ...form, type: "view" }));
	}, [activeTab]);
	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};
	const data = apiData?.view_stratergies_adjustments;
	const [currentPage, setCurrentPage] = useState(1);
	let PageSize = 10;
	const [searchData, setSearchData] = useState({
		query: "",
		fields: ["title","subtitle","efforts","efficiency"],
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

	return (
		<>
			<div className="view">
				<div className="view" style={{ display: activeTab.tab1.isActive }}>
					<div class="detailsTable">
						<input
							className="search-input"
							onChange={(e) =>
								setSearchData({ ...searchData, query: e.target.value })
							}
							placeholder="Search"
							value={searchData.query}
						/>

						<table>
							<thead>
								<tr class="table100-head">
									<th class="column0">Delete</th>
									<th class="column0">Edit</th>
									<th class="column1">Title</th>
									<th class="column1">Sub Title</th>
									<th class="column1">Efforts</th>
									<th class="column1">Efficiency</th>
								</tr>
							</thead>
							<tbody>
								{currentTableData!=undefined&&currentTableData!="No records"&&
								
								currentTableData?.map((data) => (
									<tr>
										<td class="column0">
										<DeleteIcon
												onClick={ () => {
													
													dispatch(strategies_adjustment({...data,type:"delete"}))
													
													setTimeout(()=>dispatch(strategies_adjustment({ ...form, type: "view" })),100)
													
													
												}}
												
											/></td><td class="column0">
											<EditIcon
												onClick={() => {
													
													setPopup(true);
													setEditData({
														data: { title: data.title,subtitle:data.subtitle,efforts:data.efforts,efficiency:data.efficiency },
														label: ["Title","Sub Title","Efforts","Efficiency"],
														form: data,
														function: strategies_adjustment,
														reload:strategies_adjustment({ ...form, type: "view" })
													});
													
													
												}}
											/>
										</td>
										
										<td class="column1">{data.title}</td>
										<td class="column1">{data.subtitle}</td>
										<td class="column1">{data.efforts}</td>
										<td class="column1">{data.efficiency}</td>
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
					
				</div>
				<div className="add" style={{ display: activeTab.tab2.isActive }}>
					<form onSubmit={(e) => handleSubmit(e)}>
						<p className="title">Add</p>
						<div className="question">
							<p>Title</p>
							<input
								type={"text"}
								className="text"
								
								onChange={handleChange}
								placeholder="Title"
								name="title"
							/>
						</div>
						<br />
						<div className="question">
							<p>Sub Title</p>
							<input
								type={"text"}
								className="text"
								onChange={handleChange}
								placeholder="Sub Title"
								name="subtitle"
							/>
						</div>
						<br />
						<div className="question">
							<p>Efforts</p>
							<input
								type={"text"}
								className="text"
								onChange={handleChange}
								placeholder="Efforts"
								name="efforts"
							/>
						</div>
						<br />
						<div className="question">
							<p>Efficiency</p>
							<input
								type={"text"}
								className="text"
								onChange={handleChange}
								placeholder="Efficiency"
								name="efficiency"
							/>
						</div>
						<br />

						<div className="buttons">
							<div className="left">
								<button className="save-continue" type="submit">
									Save
								</button>
							</div>
						</div>
						
					</form>
				</div>
			</div>
		</>
	);
}

export default Strategies_Adjustment;
