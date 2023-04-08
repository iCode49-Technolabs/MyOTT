import "./KeyOutcome.css";
import React, { useState, useEffect, useMemo } from "react";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Select from "react-select";

import makeAnimated from "react-select/animated";
import {
	
	strategies_adjustment,
	
} from "../../actions/iep_step3";

function KeyOutcome({
	outcome_number,
	key_outcome_id,
	viewkeyoutcome,key_outcome,setKey_Outcome
	
}) {
	const dispatch = useDispatch();
	const apiData = useSelector((state) => state);
	

	const user = JSON.parse(localStorage.getItem("profile"));
	const options=[{value:"Communication",label:"Communication" },
	{value:"Personal",label:"Personal"},
	{value:"Physical",label:"Physical"},
	{value:"Social / Emotional",label:"Social / Emotional"},
	{value:"Sensory",label:"Sensory"},
	{value:"Cognitive",label:"Cognitive"}]
	const [form, setForm] = useState();

	useEffect(()=>{
		dispatch(strategies_adjustment({school_name:user.school_name}));
		
	},[])
	const strategiesAdjustment = apiData.iep_step3?.view_stratergies_adjustments
	useMemo(()=>{
		
		setForm({...viewkeyoutcome})
		
	},[viewkeyoutcome])

	return (
		<div className="keyoutcome">
			<div
				key={"keyoutcome" + outcome_number}
				style={{ display: "flex", justifyContent: "space-between" }}
			>
				<p className="k_title">Key Outcome {outcome_number}</p>
				<div className="arrow" onClick={() => {
								const tempFalse = key_outcome
								tempFalse[outcome_number-1] = !tempFalse[outcome_number-1];
								setKey_Outcome([...tempFalse]);
								console.log(key_outcome)
							}}></div>
			</div>

			<p className="version1">{form?.notes_and_comments?.[0]}</p>
			<p className="version2">{form?.notes_and_comments?.[1]}</p>
			<div key={"Support Needs"} style={{ width: "15rem" }}>
				<p className="k_title">Support Needs</p>

				{options.map((value)=>(<label><input style={{width:"10%",marginLeft:"0"}} type={"checkbox"} checked={form?.support_need?.[0]?.includes(value.value)} />{value.value}<br/></label>))}
				<br/>
				{form?.support_need?.[1]&&options.map((value)=>(<label><input style={{width:"10%",marginLeft:"0"}} type={"checkbox"} checked={form?.support_need?.[1]?.includes(value.value)} />{value.value}<br/></label>))}
			</div>
			<div
				key={"grid"}
				className="grid-container"
				style={{marginTop:form?.support_need?.[1]?"-14.4rem":"-9.2rem"}}
			>
				<div key={"grid1"}>
					<p className="k_title">What we currently see</p>
					<p className="version1">{form?.we_currently_see?.[0]}</p>
					<p className="version2">{form?.we_currently_see?.[1]}</p>
				</div>
				<div key={"grid2"}>
					<p className="k_title">What success looks like</p>
					<p className="version1">{form?.success_looks_like?.[0]}</p>
					<p className="version2">{form?.success_looks_like?.[1]}</p>
					<div key={"grid3"} style={{ display: "flex" }}>
						<div>
						<p className="k_title">Frequency&nbsp;&nbsp;&nbsp;&nbsp;</p>
					<p className="version1">{form?.frequency?.[0]}&nbsp;&nbsp;&nbsp;&nbsp;</p>
					<p className="version2">{form?.frequency?.[1]}&nbsp;&nbsp;&nbsp;&nbsp;</p></div>
					<div>
					<p className="k_title">Level of adjustments</p>
					<p className="version1">{form?.level_of_adjustments?.[0]}</p>
					<p className="version2">{form?.level_of_adjustments?.[1]}</p></div>
					</div>
				</div>
				<div key={"strategies"} style={{ width: "80%" }}>
					<div
						key={"strategies_title"}
						style={{ display: "flex", justifyContent: "space-between" }}
					>
						<p className="k_title">Strategies / Adjustments </p>
						
					</div>

					<div className="rate-cards version1">
						{strategiesAdjustment != undefined &&
							strategiesAdjustment != "internal error" &&
							strategiesAdjustment.map(
								(value, index) =>
									 (form?.strategies_adjustment?.[0]?.includes(value.adjustment_id)&&
										<div key={value.title + index} className="rate-card">
											<p className="card-k_title">{value.title}</p>
											<p className="card-sub-k_title">{value.subtitle}</p>
											<div style={{ display: "flex", marginTop: "-.2rem" }}>
												<p style={{ width: "2rem" }}>Efforts</p>
												{Array.apply(null, { length: value.effort }).map(
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
										</div>
										
									)
							)}
					</div>
					{form?.strategies_adjustment?.[1]&&<div className="rate-cards version2">
						{strategiesAdjustment != undefined &&
							strategiesAdjustment != "internal error" &&
							strategiesAdjustment.map(
								(value, index) =>
									 (form?.strategies_adjustment?.[1]?.includes(value.adjustment_id)&&
										<div key={value.title + index} className="rate-card">
											<p className="card-k_title">{value.title}</p>
											<p className="card-sub-k_title">{value.subtitle}</p>
											<div style={{ display: "flex", marginTop: "-.2rem" }}>
												<p style={{ width: "2rem" }}>Efforts</p>
												{Array.apply(null, { length: value.effort }).map(
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
										</div>
										
									)
							)}
					</div>}
				</div>
				<div>
					<p className="k_title">Write a new strategy</p>
					<p className="version1">{form?.new_strategy?.[0]}</p>
					<p className="version2">{form?.new_strategy?.[1]}</p>
				</div>
			</div>
		
			
			<br style={{ clear: "both" }} />
		</div>
	);
}

export default KeyOutcome;
