import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { useDispatch } from "react-redux";
import "./Application_SystemAdmin.css";
import photo from "./../images/ProfilePhoto.png";
import group from "./../images/Mask Group.png";
import handshake from "./../images/handshake.png";
import flag from "./../images/waving-flag-.png";
import arrow from "./../images/Arrow 1.png";
import logo from "./../images/logo1.png";
import notify from "./../images/notify.png";
import { useSelector } from "react-redux";
import { schoolscount, userscount } from "../../actions/auth";
import Header from "../Header";
import Footer from "../Footer";
function SystemAdmin() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(schoolscount({ schools: "all" }));
		dispatch(userscount({ users: "all" }));
		dispatch(userscount({ users: "Student" }));
		dispatch(userscount({ users: "Teacher" }));
		dispatch(userscount({ users: "Coordinator" }));
	}, []);
	const history = useNavigate();
	const apiData = useSelector((state) => state.auth);
	const user = JSON.parse(localStorage.getItem("profile"));
	const SchoolsDetails = () => {
		history("/SchoolsDetails");
	};
	const UserDetails = () => {
		history("/UserDetails");
	};
	const Onboard = () => {
		history("/SchoolOnboarding");
	};

	return (
		<div class="sysAdmin">
			<Header />
			<div class="container">
				<div class="top">
					{/* <img src={photo} class="pic"/> */}
					<div class="welcome">
						<p
							style={{
								fontSize: "1.2rem",
								fontWeight: "700",
								color: "#F05D46",
							}}
						>
							Welcome back {user.first_name}!
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
					<div class="left">
						<div class="card" onClick={SchoolsDetails}>
							<img src={handshake} style={{ backgroundColor: "#69B3DD" }} />
							<div class="text">
								<p
									style={{
										fontSize: "2rem",
										marginTop: "1.3rem",
										marginBottom: "-.5rem",
									}}
								>
									{typeof(apiData.schoolscount)!="string"?apiData.schoolscount:0}
								</p>
								<p style={{ float: "left", width: "60%" }}>Active Schools</p>
								<img
									src={arrow}
									style={{
										float: "right",
										marginTop: "1.3rem",
										marginRight: "1rem",
									}}
								/>
							</div>
						</div>
						<div class="card" onClick={UserDetails}>
							<img src={flag} style={{ backgroundColor: "#FCB730" }} />
							<div class="text">
								<p
									style={{
										fontSize: "2rem",
										marginTop: "1.3rem",
										marginBottom: "-.5rem",
									}}
								>
									{apiData.userscount > 0 ? apiData.userscount : 0}
								</p>
								<p style={{ float: "left", width: "60%" }}>Users</p>
								<img
									src={arrow}
									style={{
										float: "right",
										marginTop: "1.3rem",
										marginRight: "1rem",
									}}
								/>
							</div>
						</div>
						<div class="card" onClick={Onboard}>
							<img src={handshake} style={{ backgroundColor: "#69B3DD" }} />
							<div class="text">
								<p
									style={{
										fontSize: "1.5rem",
										marginTop: "1.8rem",
										marginBottom: "-.5rem",
									}}
								>
									School
								</p>
								<p style={{ float: "left", width: "60%" }}>Onboard</p>
								<img
									src={arrow}
									style={{
										float: "right",
										marginTop: "1.3rem",
										marginRight: "1rem",
									}}
								/>
							</div>
						</div>
					</div>
					<div class="right">
						<Bar
							data={{
								// Name of the variables on x-axies for each bar
								labels: [
									"Schools",
									"Students",
									"Teachers",
									"Coordinator",
									"Users",
								],
								datasets: [
									{
										// Label for bars

										// Data or value of your each variable
										data: [
											apiData.schoolscount > 0 ? apiData.schoolscount : 0,
											apiData.studentscount > 0 ? apiData.studentscount : 0,
											apiData.teacherscount > 0 ? apiData.teacherscount : 0,
											apiData.coordinatorscount > 0
												? apiData.coordinatorscount
												: 0,
											apiData.userscount > 0 ? apiData.userscount : 0,
										],
										// Color of each bar
										backgroundColor: [
											"#69B3DD",
											"#FCB730",
											"#889159",
											"#D3AB88",
											"#F05D46",
										],
										// Border color of each bar
										borderColor: [
											"#69B3DD",
											"#FCB730",
											"#889159",
											"#D3AB88",
											"#F05D46",
										],
										borderWidth: 0.1,
										barThickness: 10,
										borderRadius: 5,
									},
								],
							}}
							// Height of graph
							height={400}
							width={1000}
							options={{
								plugins: {
									legend: { display: false },
								},

								responsive: true,
								maintainAspectRatio: false,
								scales: {
									x: {
										grid: {
											display: false,
										},
									},
									y: {
										grid: {
											display: false,
										},
										ticks: {
											stepSize: 5,
										},
									},
								},
							}}
						/>
					</div>
				</div>
			</div>
			<div style={{ clear: "both" }}></div>
			<Footer />
		</div>
	);
}

export default SystemAdmin


