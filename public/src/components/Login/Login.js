import React, { useState, useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Select from "react-select";
import countryList from "react-select-country-list";
import {
	login,
	signup,
	validate,
	roles,
	schools,
	auth,
} from "../../actions/auth";
import "./login.css";
import { useSelector } from "react-redux";
import pic from "./../images/login.png";
import logo from "./../images/logo.png";
import bcrypt from "bcryptjs";
import { useLocation } from "react-router-dom";
import PopUp from "./PopUp";
import { ui_logs } from "../../actions/ui_logs";
const initialState = {
	first_name: "",
	last_name: "",
	email: "",
	password: "",
	role: "",
	school_name: "",
	active: "no",
	contact_number: "",
	iep: "",
	country: "",
	address: "",
	class_year: "",
	date_of_birth: "",
	remember_me: "no",
};
function Login() {
	const [form, setForm] = useState(initialState);
	const location = useLocation();

	const [isSignup, setIsSignup] = useState(false);
	const [phone, setPhone] = useState("au");
	const [address, setAddress] = useState({
		address1: "",
		address2: "",
		address3: "",
	});
	const [validateMessage, setValidateMessage] = useState("");
	const options = useMemo(() => countryList().getData(), []);
	const [role, setRoles] = useState();
	const [school, setSchools] = useState();
	const apiData = useSelector((state) => state.auth);
	const classYear = [
		{ value: "1", label: "1" },
		{ value: "2", label: "2" },
	];
	const [popup, setPopup] = useState({ type: "", state: false });
	const handleSelectChange = (value, action) => {
		console.log(action.name, value["label"]);
		setForm({ ...form, [action.name]: value["label"] });
		if (action.name == "country") {
			setPhone(value["value"].toLowerCase());
		}

		console.log(form);
	};
	const dispatch = useDispatch();
	const history = useNavigate();
	const switchMode = () => {
		setForm(initialState);
		setIsSignup((prevIsSignup) => !prevIsSignup);
		setPasswordType("password")
	};
	useEffect(()=>{
		dispatch(ui_logs({page:"Login Page",status:"On load"}))
	},[])
	const handleSubmit = (e) => {
		e.preventDefault();

		console.log(form);
		if (isSignup && validateMessage == "") {
			dispatch(ui_logs({page:"Login Page",status:"User Registration"}))
			dispatch(signup(form, history));
			setPopup({ type: "success", state: true });
		} else {
			dispatch(ui_logs({page:"Login Page",status:"User Login"}))
			dispatch(login(form, history));
		}
	};

	const user = JSON.parse(
		localStorage.getItem("profile") != "undefined"
			? localStorage.getItem("profile")
			: '{"remember_me":"no"}'
	);
	useEffect(() => {
		if (user?.remember_me == "yes") {
			dispatch(auth({ ...user, username: user.email }, history));
		}
	}, []);
	const handleChange = async (e) => {
		// if(e.target.name=="password"){
		// 	const hashedPassword = await bcrypt.hash( e.target.value, '$2a$10$CwTycUXWue0Thq9StjUM0u');
		// 	setForm({...form,password:hashedPassword});

		// }
		// else{
		setForm({ ...form, [e.target.name]: e.target.value });
	};
	// }
	const handleAddress = (e) =>
		setAddress({ ...address, [e.target.name]: e.target.value });
	useEffect(() => {
		setForm({
			...form,
			contact_number: phone,
			address:
				address.address1 + " " + address.address2 + " " + address.address3,
		});
	}, [phone, address]);
	useEffect(() => {
		dispatch(schools({ schools: "all" }));
		const temp = [];
		console.log(apiData);
		typeof(apiData?.school?.body) != "string" &&
			apiData?.school?.body?.forEach((rol) => {
				temp.push({ value: rol.school_name, label: rol.school_name });
			});
		setSchools(temp);
		dispatch(ui_logs({page:"Login Page",status:"Fetching Active Schools"}))
	}, [isSignup]);
	useEffect(() => {
		dispatch(roles({ roles: "all" }));
		const temp = [];
		apiData?.role?.body?.forEach((rol) => {
			temp.push({ value: rol, label: rol });
		});
		setRoles(temp);
		dispatch(ui_logs({page:"Login Page",status:"Fetching Roles"}))
	}, [isSignup]);
	const validateEmail = (e) => {
		const pattern =
			"^([a-zA-Z0-9_\\-.]+)@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.)|(([a-zA-Z0-9-]+.)+))([a-zA-Z]{2,4})(]?)$";
		if (e.target.value.match(pattern)) {
			const payload = { username: e.target.value };
			dispatch(validate(payload));
			setValidateMessage("");
		} else {
			console.log("yes");
			setValidateMessage("Enter valid email address");
		}
	};
	useEffect(() => {
		if (apiData?.Status == "Duplicate") {
			setValidateMessage("Email id already exist");
		}
	});
	useEffect(()=>{
		history('/',{state:{}})
	},[])
	const [passwordType,setPasswordType]=useState("password")
	if (user?.remember_me != "yes")
	return (
		<div class="login">
			{popup.state ? (
				<PopUp setPopup={setPopup} popup={popup} setIsSignup={setIsSignup} />
			) : undefined}
			<div class="content">
				<div class="left">
					<div class="top">
						<img src={logo} />
						<p class="tagline">To (fo)llow students' learning journeys</p>
					</div>
					{isSignup ? (
						<div class="signup">
							<p style={{ fontWeight: "bold", fontSize: "18px" }}>Sign up </p>
							<button
								onClick={(e) => switchMode()}
								
								style={{
									color: "#F05D46",
										fontSize: "12px",
										border:"none",
										backgroundColor: "#FFFFFF",
										width: "auto",
										marginTop: "-1rem",
    height: "2rem",
    marginBottom: "2rem",
    fontFamily: "Arial, Helvetica, sans-serif",
    fontSize: "13px",
								}}
							>
								Already have an account?{" "}
								<span
									style={{ fontWeight: "bold", textDecoration: "underline" }}
								>
									Sign in here
								</span>{" "}
							</button>
							<form onSubmit={handleSubmit}>
								<div className="inputbox inputbox_main">
									<div>
										<div className="main__input">
											<label for="first_name">
												First Name<span class="required">*</span> :{" "}
											</label>
											<input
												type={"text"}
												id="first_name"
												name="first_name"
												placeholder={"First Name"}
												onChange={handleChange}
												required
												autoComplete="off"
												maxLength={27}
												pattern="[a-zA-Z0-9]+[a-zA-Z0-9 ]+"
												onInvalid={(e) =>
													e.target.setCustomValidity(
														"Only Alphabets and numbers are allowed"
													)
												}
											/>
										</div>
										<div className="main__input">
											<label for="last_name">
												Last Name<span class="required">*</span> :{" "}
											</label>
											<input
												type={"text"}
												id="last_name"
												name="last_name"
												placeholder={"Last Name"}
												onChange={handleChange}
												required
												autoComplete="off"
												maxLength={27}
												pattern="[a-zA-Z0-9]+[a-zA-Z0-9 ]+"
												onInvalid={(e) =>
													e.target.setCustomValidity(
														"Only Alphabets and numbers are allowed"
													)
												}
											/>
										</div>
										<div className="main__input">
											<label for="email">
												Email Id<span class="required">*</span> :{" "}
											</label>

											<input
												type={"email"}
												pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
												id="email"
												name="email"
												placeholder={"Email address"}
												onBlur={validateEmail}
												onChange={handleChange}
												required
												maxLength={45}
												autoComplete="off"
											/>
											<div style={{ fontSize: "12px" }}>{validateMessage}</div>
										</div>
										<div className="main__input">
											<label for="password">
												Password<span class="required">*</span> :{" "}
											</label>
											<input
												type={passwordType}
												id="password"
												name="password"
												placeholder={"Password"}
												onChange={handleChange}
												required
												autoComplete="off"
												maxLength={12}
												pattern="[a-zA-Z0-9]+[a-zA-Z0-9 ]+"
												onInvalid={(e) =>
													e.target.setCustomValidity(
														"Only Alphabets and numbers are allowed"
													)
												}
											/>
											<i className="bi bi-eye-slash" style={{marginLeft:"-2.5rem",marginTop:"-.3rem"}} id="togglePassword" onClick={(e)=>{if(passwordType=="password")
										{setPasswordType("text")
											e.target.className="bi-eye"}
										else
										{setPasswordType("password")
										e.target.className="bi bi-eye-slash"
									}
										}}></i>
										</div>

										<div className="main__input">
											<label for="role">
												Role<span class="required">*</span> :{" "}
											</label>
											<Select
												options={role}
												id="role"
												name="role"
												styles={{ backgroundColor: "#FFFFFF", width: "10rem" }}
												value={{ label: form.role }}
												onChange={handleSelectChange}
												required
												autoComplete="off"
											/>
										</div>

										<div className="main__input">
											<label for="school_name">
												School Name<span class="required">*</span> :{" "}
											</label>
											<Select
												options={school}
												id="school_name"
												name="school_name"
												styles={{ backgroundColor: "#FFFFFF", width: "10rem" }}
												value={{ label: form.school_name }}
												onChange={handleSelectChange}
												required
												autoComplete="off"
											/>
										</div>
									</div>
									<div>
										{form.role == "Student" && (
											<div className="main__input">
												<label for="class_year">
													Class Year<span class="required">*</span> :{" "}
												</label>
												<Select
													options={classYear}
													id="class_year"
													name="class_year"
													styles={{
														backgroundColor: "#FFFFFF",
														width: "10rem",
													}}
													value={{ label: form.class_year }}
													onChange={handleSelectChange}
													required
													autoComplete="off"
												/>
											</div>
										)}
										{/* <div className="main__input">
            <label for="date_of_birth">Date of Birth<span class="required">*</span> : </label>
            <input type={'text'} id="date_of_birth" name="date_of_birth" placeholder={"Date of Birth"} onChange={handleChange} required autoComplete="off"/>
            
            </div> */}
										<div className="main__input">
											<label for="address1">
												Address 1<span class="required">*</span> :{" "}
											</label>
											<input
												type={"text"}
												id="address1"
												name="address1"
												placeholder={"address 1"}
												onChange={handleAddress}
												required
												autoComplete="off"
												maxLength={60}
												pattern="[a-zA-Z0-9]+[a-zA-Z0-9 ]+"
												onInvalid={(e) =>
													e.target.setCustomValidity(
														"Only Alphabets and numbers are allowed"
													)
												}
											/>
										</div>
										<div className="main__input">
											<label for="address2">Address 2</label>
											<input
												type={"text"}
												id="address2"
												name="address2"
												placeholder={"address 2"}
												onChange={handleAddress}
												autoComplete="off"
												maxLength={30}
												pattern="[a-zA-Z0-9]+[a-zA-Z0-9 ]+"
												onInvalid={(e) =>
													e.target.setCustomValidity(
														"Only Alphabets and numbers are allowed"
													)
												}
											/>
										</div>
										<div className="main__input">
											<label for="address3">Address 3</label>
											<input
												type={"text"}
												id="address3"
												name="address3"
												placeholder={"address 3"}
												onChange={handleAddress}
												autoComplete="off"
												maxLength={30}
												pattern="[a-zA-Z0-9]+[a-zA-Z0-9 ]+"
												onInvalid={(e) =>
													e.target.setCustomValidity(
														"Only Alphabets and numbers are allowed"
													)
												}
											/>
										</div>
										<div className="main__input">
											<label for="country">
												Country<span class="required">*</span> :{" "}
											</label>
											<Select
												options={options}
												id="country"
												name="country"
												styles={{ backgroundColor: "#FFFFFF", width: "10rem" }}
												value={{ label: form.country }}
												onChange={handleSelectChange}
												required
												autoComplete="off"
											/>
										</div>
										<div className="main__input">
											<label for="contact_number">
												Contact Number<span class="required">*</span> :{" "}
											</label>
											<PhoneInput
												placeholder="Contact number"
												country={phone}
												id="contact_number"
												name="contact_number"
												value={phone}
												onChange={setPhone}
												required
												autoComplete="off"
											/>
										</div>
									</div>
								</div>
								{validateMessage == "Duplicate" ? (
									<button type="submit" className="left-submit" disabled={true}>
										Sign up
									</button>
								) : (
									<button type="submit" className="left-submit">
										Sign up
									</button>
								)}
							</form>
						</div>
					) : (
						<>
							<div class="middle">
								<p>
									We build individualised
									<br /> learning plans for students, <br />
									with students.{" "}
								</p>
								<hr class="line"></hr>
							</div>
							<div class="bottom">
								<p style={{ fontWeight: "bold", fontSize: "18px" }}>Log in </p>
								<button
									onClick={(e) => switchMode()}
									
									style={{
										color: "#F05D46",
										fontSize: "12px",
										border:"none",
										backgroundColor: "#FFFFFF",
										width: "auto",
										marginTop: "-1rem",
    height: "2rem",
    marginBottom: "2rem",
    fontFamily: "Arial, Helvetica, sans-serif",
    fontSize: "13px",
									}}
								>
									Don't have an account?{" "}
									<span
										style={{ fontWeight: "bold", textDecoration: "underline" }}
									>
										Sign up here
									</span>{" "}
								</button>
								<form onSubmit={handleSubmit}>
									<div class="inputbox">
										<input
											type={"text"}
											name="username"
											placeholder={"Email address"}
											onChange={handleChange}
											required
											autoComplete="off"
										/>
										<br />
										<input
											type={passwordType}
											name="password"
											placeholder={"Password"}
											onChange={handleChange}
											required
											autoComplete="off"
										/>
										 <i className="bi bi-eye-slash" style={{marginLeft:"-1.5rem"}} id="togglePassword" onClick={(e)=>{if(passwordType=="password")
										{setPasswordType("text")
											e.target.className="bi-eye"}
										else
										{setPasswordType("password")
										e.target.className="bi bi-eye-slash"
									}
										}}></i>
										
									</div>
									<p
										style={{
											marginTop: "-2rem",
											marginLeft: ".2rem",
											fontSize: "12px",
											color: "red",
										}}
									>
										{location.state?.message}
									</p>
									<button
										onClick={(e) =>
											setPopup({ type: "forgetpassword", state: true })
										}
										className="forgot-password"
										type="reset"
										style={{
											color: "#F05D46",
											fontSize: "12px",
											backgroundColor: "#FFFFFF",
											width: "auto",
											marginTop: "-1rem",
											border: "none",
										}}
									>
										Forgot Password?
									</button>
									<br />
									<label className="remember_me">
										<input
											type={"checkbox"}
											onChange={handleChange}
											value="yes"
											name="remember_me"
										/>
										<p>Remember Me</p>
									</label>
									<button type="submit" className="left-submit">
										Log in
									</button>
								</form>
							</div>
						</>
					)}
				</div>

				{/* <div class="right" style={{backgroundImage:"url(" +pic+")"}}> */}
				<div class="right">
					<img src={pic} />
				</div>
			</div>
		</div>
	);
}

export default Login;
