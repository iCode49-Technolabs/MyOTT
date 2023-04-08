import "./PopUp.css";

import { CloseIcon } from "../../assets/Icons";
import bulb from "./../images/bulb.png";
import React, { useState, useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import { strategies_adjustment } from "../../actions/setting";
import { share_school_data } from "../../actions/setting";
import { useSelector } from "react-redux";
import { useFilter } from "@promise_learning/usefilter";
const RecommadationPopUp = ({
	setPopup,
	popup,
	setDisplayStrategiesAdjustment,
	strategiesAdjustment,
	displayStrategiesAdjustment,
	setForm,
	form,
	version
}) => {
	const user = JSON.parse(localStorage.getItem("profile"));
	const [newStratAdjust, setNewStratAdjust] = useState({
		schl_admin_email: user.email,
		school_name: user.school_name,
	});
	const dispatch = useDispatch();
	const handleSubmit = (e) => {
		e.preventDefault();
		
		dispatch(strategies_adjustment({ ...newStratAdjust, type: "create" }));
		setTimeout(() => {
			dispatch(
				strategies_adjustment({ school_name: user.school_name, type: "view" })
			);
		}, 100);
	};
	const handleChange = (e) => {
		setNewStratAdjust({ ...newStratAdjust, [e.target.name]: e.target.value });
	};

	useEffect(() => {
		dispatch(share_school_data({ type: "view", source: user?.school_name }));
	}, []);
	const apiData=useSelector(
		(state) => state?.setting?.share_school
	);
	//const shared_schools = [{school_name:user?.school_name,isActive:true}].concat(apiData?.map((value) =>( {school_name:value?.destination,isActive:false})))
	
	const [shared_schools,setSharedSchools]=useState([{school_name:user?.school_name,isActive:true}])
	
	useMemo(()=>{
		const temp=shared_schools
		apiData!=undefined&&apiData!="no records found"&&apiData?.map((value,index)=>{
			(!temp.find(e => e?.school_name==value.destination))&&temp.push({school_name:value?.destination,isActive:false})
			
		})
		
		setSharedSchools(temp)
	},[apiData])
	const [searchData, setSearchData] = useState({
		query: "",
		fields: ["title","subtitle"],
	});

	
	const { loading, data: result } = useFilter({
		data: strategiesAdjustment,
		search: searchData,
	});
	return (
		<div className="recommended-adjustments">
			<div className="popup__box">
				<div style={{ display: "flex", justifyContent: "space-between" }}>
					<div style={{ display: "flex", justifyContent: "space-between" }}>
						<img src={bulb} style={{ width: "2rem",height:"2rem" }} />
						<p style={{ marginLeft: ".5rem", textDecoration: "underline" }}>
							Recommended Adjustments
						</p>
					</div>
					<CloseIcon onClick={() => setPopup(false)} />
				</div>
				<div className="school_tabs">
				{shared_schools?.map((school,index) => (<p className="school_tab" style={{backgroundColor:school?.isActive&&"#000",color:school?.isActive&&"#fff"}}
				onClick={()=>{
					const temp=shared_schools
					temp.map((value,value_index)=>{if(value?.isActive){shared_schools[value_index].isActive=false}})
					temp[index].isActive=true
					setSharedSchools([...temp])
				
				}}
				>{school?.school_name}</p>))}
				</div>
				<input
							className="search-input"
							onChange={(e) =>
								setSearchData({ ...searchData, query: e.target.value })
							}
							placeholder="Search"
							value={searchData.query}
						/>
				{shared_schools?.map((school) => (
					
						school?.isActive&&
						<div className="cards">
							{strategiesAdjustment != undefined &&
								strategiesAdjustment != "internal error" &&
								result.map((value, index) => (
									// const flag=true;
									value.school_name==school.school_name&&
									<div
										className="card"
										onClick={() => {
											if (displayStrategiesAdjustment.includes(index)) {
												const temp = displayStrategiesAdjustment;
												temp.splice(temp.indexOf(index), 1);

												setDisplayStrategiesAdjustment(temp);

												document.getElementById(index + "plus").style.display =
													"block";
												document.getElementById(index + "minus").style.display =
													"none";
											} else {
												const temp = displayStrategiesAdjustment;
												temp.push(index);
												setDisplayStrategiesAdjustment(temp);

												document.getElementById(index + "plus").style.display =
													"none";
												document.getElementById(index + "minus").style.display =
													"block";
											}
											const data = displayStrategiesAdjustment.map(
												(value) => strategiesAdjustment[value]?.adjustment_id
											);
											
											const temp=form?.strategies_adjustment||[""]
											temp[version]=data
											setForm({ ...form, strategies_adjustment: temp });
										}}
									>
										<p className="card-k_title">{value.title}</p>
										<p className="card-sub-k_title">{value.subtitle}</p>
										<div style={{ display: "flex", marginTop: "-.2rem" }}>
											<p style={{ width: "2rem" }}>Efforts</p>
											{Array.apply(null, { length: value.efforts }).map(
												(e, i) => (
													<i
														class="fa fa-star"
														key={i}
														style={{
															marginLeft: ".2rem",
															marginTop: ".4rem",
															color: "#FCB730",
															fontSize: ".5rem",
														}}
													></i>
												)
											)}
										</div>
										<div style={{ display: "flex", marginTop: "-.2rem" }}>
											<p style={{ width: "2rem" }}>Efficiency</p>
											{Array.apply(null, { length: value.efficiency }).map(
												(e, i) => (
													<i
														class="fa fa-star"
														key={i}
														style={{
															marginLeft: ".2rem",
															marginTop: ".4rem",
															color: "#FCB730",
															fontSize: ".5rem",
														}}
													></i>
												)
											)}
										</div>
										<p
											key={index + "plus"}
											id={index + "plus"}
											className="selector"
											style={{
												display: !displayStrategiesAdjustment.includes(index)
													? "block"
													: "none",
											}}
										>
											-
										</p>
										:
										<p
											key={index + "minus"}
											id={index + "minus"}
											className="selected"
											style={{
												display: displayStrategiesAdjustment.includes(index)
													? "block"
													: "none",
											}}
										>
											+
										</p>
									</div>
								))}
						</div>
					
				))}
				<button style={{marginTop:"1rem"}} className="confirm" onClick={() => setPopup(false)}>
					Confirm Selection
				</button>
				<br />

				{shared_schools[0].isActive&&
				<div className="create-new">
					<p>Create New Strategy/Adjustment</p>
					<label>
						<p>Title</p>
						<input
							type={"text"}
							className="text"
							onChange={handleChange}
							placeholder="Title"
							name="title"
						/>
					</label>
					<br />
					<label>
						<p>Description</p>
						<input
							type={"text"}
							className="text"
							onChange={handleChange}
							placeholder="Sub Title"
							name="subtitle"
						/>
					</label>
					<br />

					<button className="save-continue" onClick={(e) => handleSubmit(e)}>
						Save
					</button>
				</div>}
			</div>
		</div>
	);
};

export default RecommadationPopUp;
