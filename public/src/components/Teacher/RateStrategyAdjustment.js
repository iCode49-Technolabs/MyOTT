import React, { useState,useMemo } from "react";
import { StarRating } from "./StarRating";
import RecommadationPopUp from "./PopUp";
import "./RateStrategyAdjustment.css";
import { CreateTeacherStrategyRating } from "../../actions/teacherdashboard";
import { useDispatch } from "react-redux";
export const RateStrategyAdjustment = ({strategiesAdjustmentList}) => {
	
	const dispatch = useDispatch();
	const [strategiesAdjustment,setStrategiesAdjustment] = useState(strategiesAdjustmentList)
	const [popup, setPopup] = useState({ type: [], state: false });
	useMemo(()=>{
		
		setStrategiesAdjustment(strategiesAdjustmentList)
	},[strategiesAdjustmentList])
	console.log(strategiesAdjustment)
	return (
		<div key={"strategies"} className="rate">
			
			{popup.state ? (
			<RecommadationPopUp key={"popup"} setPopup={setPopup}  popup={popup} strategiesAdjustment={strategiesAdjustment} setStrategiesAdjustment={setStrategiesAdjustment}/>) : undefined}
			
			<div
				key={"strategies_title"}
				style={{ display: "flex", justifyContent: "space-between" }}
			>
				<p className="sub-sub-title">Rate Strategies / Adjustments </p>
				<div
					key={"view_all"}
					style={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					<p
						className="k_title"
						style={{ marginRight: ".2rem", textDecoration: "underline" }}
						onClick={(e) => setPopup({ ...popup, state: true })}
					>
						View All
					</p>
				</div>
			</div>

			<div className="rate-cards">
				{strategiesAdjustment != undefined &&
					typeof(strategiesAdjustment) != "string" &&
					strategiesAdjustment.map((value, index) => (
						<div key={value.title + index} className="rate-card">
							<p className="card-k_title">{value.title}</p>
							<p className="card-sub-k_title">{value.subtitle}</p>
							<div style={{ display: "flex", marginTop: "0rem" }}>
								<p style={{ width: "4rem" }}>Ease</p>
								<StarRating rating={strategiesAdjustment} setRating={setStrategiesAdjustment} stratNum={index} type="Ease"/>
							</div>
							<div style={{ display: "flex", marginTop: "0rem" }}>
								<p style={{ width: "4rem" }}>Efficiency</p>
								<StarRating rating={strategiesAdjustment} setRating={setStrategiesAdjustment} stratNum={index} type="Efficiency"/>
							</div>
						</div>
					))}
			</div>
			<button className="save" onClick={()=>{console.log(strategiesAdjustment)
			dispatch(CreateTeacherStrategyRating(strategiesAdjustmentList))
			console.log(strategiesAdjustmentList)
			alert("Saved Successfully")
			}}>Save</button>
		</div>
	);
};
