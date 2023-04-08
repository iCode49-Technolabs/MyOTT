import "./PopUp.css";

import { CloseIcon } from "../../assets/Icons";
import { StarRating } from "./StarRating";
import React from "react";


const RecommadationPopUp = ({
	setPopup,
	popup,
	setStrategiesAdjustment,
	strategiesAdjustment,
	
}) => {
	
	return (
		<div className="recommended-adjustments">
			<div className="popup__box">
				<div style={{ display: "flex", justifyContent: "space-between" }}>
					<div style={{ display: "flex", justifyContent: "space-between" }}>
						
						<p style={{ marginLeft: ".5rem", textDecoration: "underline" }}>
							Recommended Adjustments
						</p>
					</div>
					<CloseIcon onClick={() => setPopup(false)} />
				</div>
				
				
				<div className="rate-cards">
				{strategiesAdjustment != undefined &&
					strategiesAdjustment != "internal error" &&
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
					
		
				<button style={{marginTop:"1rem"}} className="confirm" onClick={() => setPopup(false)}>
					Confirm Selection
				</button>
				<br />

				
			</div>
		</div>
	);
};

export default RecommadationPopUp;
