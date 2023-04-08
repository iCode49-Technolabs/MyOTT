import "./View.css";
import React, { useState, useEffect, useMemo } from "react";
import { useFilter } from "@promise_learning/usefilter";
import Pagination from "../Pagination/Pagination";
import { EditIcon,DeleteIcon } from "../../assets/Icons";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { review_name } from "../../actions/setting";
function Review(param) {
	const activeTab = param.tab;
	const setPopup = param.setPopup;
	
	const setEditData = param.setEditData;
	const user = JSON.parse(localStorage.getItem("profile"))
	const apiData = useSelector((state) => state.setting);

	const dispatch = useDispatch();
	const [form, setForm] = useState({
		school_name: user.school_name,
	});
	const handleSubmit = (e) => {
		e.preventDefault();
		
		dispatch(review_name({ ...form, type: "create" }));
		
	};
	useEffect(() => {
		dispatch(review_name({ ...form, type: "view" }));
	}, [activeTab]);
	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};
	const data = apiData?.view_review;
	const [currentPage, setCurrentPage] = useState(1);
	let PageSize = 10;
	const [searchData, setSearchData] = useState({
		query: "",
		fields: ["review_name"],
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
									<th class="column1">Review Question</th>
								</tr>
							</thead>
							<tbody>
								{currentTableData!=undefined&&currentTableData!="No records"&&
								
								currentTableData?.map((data) => (
									<tr>
										<td class="column0">
										<DeleteIcon
												onClick={ () => {
													
													dispatch(review_name({...data,type:"delete"}))
													
													setTimeout(()=>dispatch(review_name({ ...form, type: "view" })),100)
													
													
												}}
												
											/></td><td class="column0">
											<EditIcon
												onClick={() => {
													
													setPopup(true);
													setEditData({
														data: { review_name: data.review_name },
														label: ["Review"],
														form: data,
														function: review_name,
														reload:review_name({ ...form, type: "view" })
													});
													
													
												}}
											/>
										</td>
										<td class="column1">{data.review_name}</td>
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
							<p>Review Question</p>
							<input
								type={"text"}
								className="text"
								onChange={handleChange}
								placeholder="Review Question"
								name="review_name"
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

export default Review;
