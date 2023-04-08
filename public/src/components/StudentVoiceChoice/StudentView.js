import "./View.css";
import React, { useState, useEffect } from "react";
import Select from "react-select";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {soft_skill_data} from "../../actions/studentvoicechoice"
function StudentView(data) {
	const apiSoftSkillData=useSelector((state)=>state.studentvoicechoice)
	const dispatch = useDispatch();


	const activeTab = data.tab;
	const apiData = data.apiData;
	const handleSubmit = data.handleSubmit;
	const publish = data.publish;
	const student = data.student;
	const soft_skill_options=data.soft_skill_options!=undefined&&data.soft_skill_options.map((value)=>({value:value.soft_skill,label:value.soft_skill}))
	const [soft_skill, setSoftSkill] = useState([0, 0, 0, 0, 0, 0]);
	const user = JSON.parse(localStorage.getItem("profile"))

	const [form, setForm] = useState({
		user_id: student?.user_id,
		email: student?.email,
		school_name: user.school_name,
		assessment_results: "",
		barriers_learning: "",
		review_learning_style: "",
		review_strength: "",
		review_interest: "",
		review_limiting_belief: "",
		review_enabling_belief: "",
		soft_name: "",
		soft_skill: "",
		negotiate_goal: "",
		how_goals_can_be_achieved: "",
		any_concerns: "",
		teachers_can_do_additionally: "",
		view: "student",
		question: "",
		answer: "",
		tab: "inform",
	});
	const [publishData, setPublishData] = useState({
		email: student?.email,
		teachers: [],
		view: "student",
	});
	const teacherCheckbox = [];
	for (var i = 0; i < 6; i++) {
		teacherCheckbox.push(false);
	}
	const [checked, setChecked] = useState({
		review_learning_style: true,
		review_strength: true,
		review_interest: true,
		review_limiting_belief: true,
		review_enabling_belief: true,
		

		teacher: teacherCheckbox,
	});
	const [soft_name, setSoftSkillName] = useState({
		soft_skill1: "",
		soft_skill2: "",
		soft_skill3: "",
		soft_skill4: "",
		soft_skill5: "",
		soft_skill6: "",
	});
	const [sub_category, setSubCategory] = useState({
		soft_skill1: "",
		soft_skill2: "",
		soft_skill3: "",
		soft_skill4: "",
		soft_skill5: "",
		soft_skill6: "",
	});
	const [root_cause, setRootCause] = useState({
		soft_skill1: "",
		soft_skill2: "",
		soft_skill3: "",
		soft_skill4: "",
		soft_skill5: "",
		soft_skill6: "",
	});
	const [teachers, setTeachers] = useState([]);
	const handleChange = (e) => {
		if (e.target.name.substring(0, 10) == "soft_skill") {
			const temp = soft_skill;
			temp[Number(e.target.name.substring(10, 11))] = Number(e.target.value);
			setSoftSkill(temp);
			setForm({
				...form,
				tab: activeTab.tab1.isActive == "block" ? "inform" : "student_review",
				soft_skill: soft_skill.join(),
			});
		} else {
			setForm({ ...form, [e.target.name]: e.target.value });
		}
	};

	useEffect(() => {
		setForm({
			...form,
			tab: activeTab.tab1.isActive == "block" ? "inform" : "student_review",
			soft_skill: soft_skill.join(),
			soft_name: Object.values(root_cause),
		});
		console.log(soft_skill, soft_name, form);
	}, [activeTab.tab1.isActive, soft_skill, root_cause]);

	const handleSoftSkillNameChange = (value, action) => {
		console.log(action.name, value["label"]);
		dispatch(soft_skill_data({type:"sub_category",soft_skill:value["label"]}))
		setSoftSkillName({ ...soft_name, [action.name]: value["label"] });
	};
	const handleSubCategoryChange = (value, action) => {
		console.log(action.name, value["label"]);
		dispatch(soft_skill_data({type:"root_cause",subcategory:value["label"]}))
		setSubCategory({ ...sub_category, [action.name]: value["label"] });
	};
	const handleRootCauseChange = (value, action) => {
		console.log(action.name, value["label"]);
		setRootCause({ ...root_cause, [action.name]: value["label"] });
	};

	const sub_category_options=apiSoftSkillData.sub_category!=undefined&&typeof(apiSoftSkillData.sub_category)!="string"&&apiSoftSkillData.sub_category.map((value)=>({value:value,label:value}))
	const root_cause_options=apiSoftSkillData.root_cause!=undefined&&typeof(apiSoftSkillData.root_cause)!="string"&&apiSoftSkillData.root_cause.map((value)=>({value:value,label:value}))
	
console.log(sub_category_options,root_cause_options,apiSoftSkillData)


	return (
		<div className="view">
			<div
				className="inform-iep-development"
				style={{ display: activeTab.tab1.isActive }}
			>
				<form onSubmit={(e) => handleSubmit(e, form)}>
					<p className="title">Conversation to Develop IEP </p>
					<div className="question">
						<p>Discuss observations / assessment results</p>
						<input
							type={"text"}
							className="text"
							onChange={handleChange}
							placeholder="Please enter notes and comments"
							name="assessment_results"
						/>
					</div>
					<br />
					{/* <div className="question">
						<p>Do you think you have any barriers to learning?</p>
						<input
							type={"text"}
							className="text"
							onChange={handleChange}
							placeholder="Please enter notes and comments"
							name="barriers_learning"
						/>
					</div> */}
					<br />

					{/* <p>Review</p> */}
					<label>
						<div className="review">
							<input
								type={"checkbox"}
								className="checkbox"
								onChange={() => {
									setChecked({
										...checked,
										review_learning_style: !checked.review_learning_style,
									});
									//setForm({ ...form, review_learning_style: "" });
								}}
							/>
							<p>
								Which learning strategies do you enjoy the most? Which are your
								least favourite?
							</p>
							<input
								type={"text"}
								className="text"
								placeholder="Please Specify"
								name="review_learning_style"
								id="review_learning_style"
								//disabled={checked.review_learning_style}
								onChange={handleChange}
								value={form.review_learning_style}
							/>
						</div>
					</label>
					<br />
					<label>
						<div className="review">
							<input
								type={"checkbox"}
								className="checkbox"
								onChange={() => {
									setChecked({
										...checked,
										review_strength: !checked.review_strength,
									});
									//setForm({ ...form, review_strength: "" });
								}}
							/>
							<p>What do you perceive yourself to be good at?</p>
							<input
								type={"text"}
								className="text"
								placeholder="Please Specify"
								name="review_strength"
								//disabled={checked.review_strength}
								onChange={handleChange}
								value={form.review_strength}
							/>
						</div>
					</label>
					<br />
					<label>
						<div className="review">
							<input
								type={"checkbox"}
								className="checkbox"
								onChange={() => {
									setChecked({
										...checked,
										review_interest: !checked.review_interest,
									});
									//setForm({ ...form, review_interest: "" });
								}}
							/>
							<p>Which topics or activities interests you the most?</p>
							<input
								type={"text"}
								className="text"
								placeholder="Please Specify"
								name="review_interest"
								//disabled={checked.review_interest}
								onChange={handleChange}
								value={form.review_interest}
							/>
						</div>
					</label>
					<br />
					<label>
						<div className="review">
							<input
								type={"checkbox"}
								className="checkbox"
								onChange={() => {
									setChecked({
										...checked,
										review_limiting_belief: !checked.review_limiting_belief,
									});
									//setForm({ ...form, review_limiting_belief: "" });
								}}
							/>
							<p>Do you think you have any barriers to learning?</p>
							<input
								type={"text"}
								className="text"
								onChange={handleChange}
								placeholder="Please enter notes and comments"
								name="barriers_learning"
								//disabled={checked.review_limiting_belief}
								value={form.barriers_learning}
							/>
						
							{/* <p>Do you have any beliefs which limit you?</p>
							<input
								type={"text"}
								className="text"
								placeholder="Please Specify"
								name="review_limiting_belief"
								//disabled={checked.review_limiting_belief}
								onChange={handleChange}
								value={form.review_limiting_belief}
							/> */}
						</div>
					</label>
					<br />
					<label>
						<div className="review">
							<input
								type={"checkbox"}
								className="checkbox"
								onChange={() => {
									setChecked({
										...checked,
										review_enabling_belief: !checked.review_enabling_belief,
									});
									//setForm({ ...form, review_enabling_belief: "" });
								}}
							/>
							<p>Which beliefs make you go forward and empower you?</p>
							<input
								type={"text"}
								className="text"
								placeholder="Please Specify"
								name="review_enabling_belief"
								//disabled={checked.review_enabling_belief}
								onChange={handleChange}
								value={form.review_enabling_belief}
							/>
						</div>
					</label>
					<br />
					<br />
					<br />
					<p>Soft Skills</p>
					<div className="soft_skill">
						<Select
							options={soft_skill_options}
							name="soft_skill1"
							onChange={handleSoftSkillNameChange}
							placeholder={
								<div className="select-placeholder-text">Select Soft Skill</div>
							}
							autoComplete="off"
						/>
						{soft_name.soft_skill1!=""&&<Select
							options={sub_category_options}
							name="soft_skill1"
							onChange={handleSubCategoryChange}
							placeholder={
								<div className="select-placeholder-text">Select Sub Category</div>
							}
							autoComplete="off"
						/>}
						{sub_category.soft_skill1!=""&&<Select
							options={root_cause_options}
							name="soft_skill1"
							onChange={handleRootCauseChange}
							placeholder={
								<div className="select-placeholder-text">Select Root Cause</div>
							}
							autoComplete="off"
						/>}
						<input
							type="range"
							min="0"
							max="5"
							defaultValue="0"
							step="1"
							className="range"
							name="soft_skill0"
							disabled={root_cause.soft_skill1==""?true:false}
							id="soft_skill1"
							onChange={handleChange}
							value={soft_skill[0]}
						/>
						{Array.apply(null, { length: soft_skill[0] }).map((e, i) => (
							<i
								class="fa fa-star"
								key={i}
								style={{
									marginLeft: "1rem",
									marginTop: "0rem",
									color: "#FCB730",
									fontSize: "20px",
								}}
							></i>
						))}
					</div>
					<div className="soft_skill">
						<Select
							options={soft_skill_options}
							name="soft_skill2"
							onChange={handleSoftSkillNameChange}
							placeholder={
								<div className="select-placeholder-text">Select Soft Skill</div>
							}
							autoComplete="off"
						/>
						{soft_name.soft_skill2!=""&&<Select
							options={sub_category_options}
							name="soft_skill2"
							onChange={handleSubCategoryChange}
							placeholder={
								<div className="select-placeholder-text">Select Sub Category</div>
							}
							autoComplete="off"
						/>}
						{sub_category.soft_skill2!=""&&<Select
							options={root_cause_options}
							name="soft_skill2"
							onChange={handleRootCauseChange}
							placeholder={
								<div className="select-placeholder-text">Select Root Cause</div>
							}
							autoComplete="off"
						/>}
						<input
							type="range"
							min="0"
							max="5"
							defaultValue="0"
							step="1"
							className="range"
							name="soft_skill1"
							disabled={root_cause.soft_skill2==""?true:false}
							id="soft_skill2"
							onChange={handleChange}
							value={soft_skill[1]}
						/>
						{Array.apply(null, { length: soft_skill[1] }).map((e, i) => (
							<i
								class="fa fa-star"
								key={i}
								style={{
									marginLeft: "1rem",
									marginTop: "0rem",
									color: "#FCB730",
									fontSize: "20px",
								}}
							></i>
						))}
					</div>
					<div className="soft_skill">
						<Select
							options={soft_skill_options}
							name="soft_skill3"
					
							onChange={handleSoftSkillNameChange}
							placeholder={
								<div className="select-placeholder-text">Select Soft Skill</div>
							}
							autoComplete="off"
						/>
						{soft_name.soft_skill3!=""&&<Select
							options={sub_category_options}
							name="soft_skill3"
							onChange={handleSubCategoryChange}
							placeholder={
								<div className="select-placeholder-text">Select Sub Category</div>
							}
							autoComplete="off"
						/>}
						{sub_category.soft_skill3!=""&&<Select
							options={root_cause_options}
							name="soft_skill3"
							onChange={handleRootCauseChange}
							placeholder={
								<div className="select-placeholder-text">Select Root Cause</div>
							}
							autoComplete="off"
						/>}
						<input
							type="range"
							min="0"
							max="5"
							defaultValue="0"
							step="1"
							className="range"
							name="soft_skill2"
							disabled={root_cause.soft_skill3==""?true:false}
							id="soft_skill3"
							onChange={handleChange}
							value={soft_skill[2]}
						/>
						{Array.apply(null, { length: soft_skill[2] }).map((e, i) => (
							<i
								class="fa fa-star"
								key={i}
								style={{
									marginLeft: "1rem",
									marginTop: "0rem",
									color: "#FCB730",
									fontSize: "20px",
								}}
							></i>
						))}
					</div>
					<div className="soft_skill">
						<Select
							options={soft_skill_options}
							name="soft_skill4"
							onChange={handleSoftSkillNameChange}
							placeholder={
								<div className="select-placeholder-text">Select Soft Skill</div>
							}
							autoComplete="off"
						/>
						{soft_name.soft_skill4!=""&&<Select
						options={sub_category_options}
						name="soft_skill4"
						onChange={handleSubCategoryChange}
						placeholder={
							<div className="select-placeholder-text">Select Sub Category</div>
						}
						autoComplete="off"
					/>}
					{sub_category.soft_skill4!=""&&<Select
						options={root_cause_options}
						name="soft_skill4"
						onChange={handleRootCauseChange}
						placeholder={
							<div className="select-placeholder-text">Select Root Cause</div>
						}
						autoComplete="off"
					/>}
						<input
							type="range"
							min="0"
							max="5"
							defaultValue="0"
							step="1"
							className="range"
							name="soft_skill3"
							id="soft_skill4"
							disabled={root_cause.soft_skill4==""?true:false}
							onChange={handleChange}
							value={soft_skill[3]}
						/>
						{Array.apply(null, { length: soft_skill[3] }).map((e, i) => (
							<i
								class="fa fa-star"
								key={i}
								style={{
									marginLeft: "1rem",
									marginTop: "0rem",
									color: "#FCB730",
									fontSize: "20px",
								}}
							></i>
						))}
					</div>
					<div className="soft_skill">
						<Select
							options={soft_skill_options}
							name="soft_skill5"
							onChange={handleSoftSkillNameChange}
							placeholder={
								<div className="select-placeholder-text">Select Soft Skill</div>
							}
							autoComplete="off"
						/>
						{soft_name.soft_skill5!=""&&<Select
							options={sub_category_options}
							name="soft_skill5"
							onChange={handleSubCategoryChange}
							placeholder={
								<div className="select-placeholder-text">Select Sub Category</div>
							}
							autoComplete="off"
						/>}
						{sub_category.soft_skill5!=""&&<Select
							options={root_cause_options}
							name="soft_skill5"
							onChange={handleRootCauseChange}
							placeholder={
								<div className="select-placeholder-text">Select Root Cause</div>
							}
							autoComplete="off"
						/>}
						<input
							type="range"
							min="0"
							max="5"
							defaultValue="0"
							step="1"
							className="range"
							name="soft_skill4"
							disabled={root_cause.soft_skill5==""?true:false}
							id="soft_skill5"
							onChange={handleChange}
							value={soft_skill[4]}
						/>
						{Array.apply(null, { length: soft_skill[4] }).map((e, i) => (
							<i
								class="fa fa-star"
								key={i}
								style={{
									marginLeft: "1rem",
									marginTop: "0rem",
									color: "#FCB730",
									fontSize: "20px",
								}}
							></i>
						))}
					</div>
					<div className="soft_skill">
						<Select
							options={soft_skill_options}
							name="soft_skill6"
							onChange={handleSoftSkillNameChange}
							placeholder={
								<div className="select-placeholder-text">Select Soft Skill</div>
							}
							autoComplete="off"
						/>
						{soft_name.soft_skill6!=""&&<Select
							options={sub_category_options}
							name="soft_skill6"
							onChange={handleSubCategoryChange}
							placeholder={
								<div className="select-placeholder-text">Select Sub Category</div>
							}
							autoComplete="off"
						/>}
						{sub_category.soft_skill6!=""&&<Select
							options={root_cause_options}
							name="soft_skill6"
							onChange={handleRootCauseChange}
							placeholder={
								<div className="select-placeholder-text">Select Root Cause</div>
							}
							autoComplete="off"
						/>}
						<input
							type="range"
							min="0"
							max="5"
							defaultValue="0"
							step="1"
							className="range"
							name="soft_skill5"
							disabled={root_cause.soft_skill6==""?true:false}
							id="soft_skill6"
							onChange={handleChange}
							value={soft_skill[5]}
						/>
						{Array.apply(null, { length: soft_skill[5] }).map((e, i) => (
							<i
								class="fa fa-star"
								key={i}
								style={{
									marginLeft: "1rem",
									marginTop: "0rem",
									color: "#FCB730",
									fontSize: "20px",
								}}
							></i>
						))}
					</div>

					
					<br />
					<br />
					<br />

					<div className="question">
						<p style={{width:"21.4rem"}}>Negotiate goal </p>
						<input
							type={"text"}
							className="text"
							placeholder="Please enter notes and comments"
							name="negotiate_goal"
							onChange={handleChange}
						/>
					</div>
					<br />
					<div className="question">
					<input
								type={"checkbox"}
								className="checkbox"
							
							/>
						<p>What can we do to achieve these goals?</p>
						<input
							type={"text"}
							className="text"
							placeholder="Please enter notes and comments"
							name="how_goals_can_be_achieved"
							onChange={handleChange}
						/>
					</div>
					<br />
					<div className="question"><input
								type={"checkbox"}
								className="checkbox"
							
							/>
						<p>Discuss any concerns.</p>
						<input
							type={"text"}
							className="text"
							placeholder="Please enter notes and comments"
							name="any_concerns"
							onChange={handleChange}
						/>
					</div>
					<br />
					
					
					<div className="question"><input
								type={"checkbox"}
								className="checkbox"
							
							/>
						<p>
							Explore whether teacher/s can do something additionally or
							differently.
						</p>
						<input
							type={"text"}
							className="text"
							placeholder="Please enter notes and comments"
							name="teachers_can_do_additionally"
							onChange={handleChange}
						/>
					</div>
					<br />
					<div className="buttons">
						<div className="left">
							<button className="save-continue" type="submit" onClick={(e) => {
									alert("Form saved successfully")
								}}>
								Save
							</button>
							{/* <button className="back">Back</button> */}
						</div>
						<div className="right">
							<button
								className="publish"
								onClick={(e) => {
									publish(e, publishData);
									alert("Form published successfully")
								}}
							>
								Publish
							</button>
						</div>
					</div>
				</form>
			</div>
			<div className="review-iep" style={{ display: activeTab.tab2.isActive }}>
				<form onSubmit={(e) => handleSubmit(e, form)}>
					<p className="title">Conversation to Review IEP</p>
					<div className="question">
						<p>Revisit goals</p>
						<input
							type={"text"}
							className="text"
							onChange={handleChange}
							placeholder="Please enter notes and comments"
							name="revisit_goal"
						/>
					</div>
					<br />
					<div className="question">
						<p>Discuss observations / assessment results</p>
						<input
							type={"text"}
							className="text"
							onChange={handleChange}
							placeholder="Please enter notes and comments"
							name="assessment_result"
						/>
					</div>
					<br />
					<div className="question">
						<p>Can you provide examples?</p>
						<input
							type={"text"}
							className="text"
							onChange={handleChange}
							placeholder="Please enter notes and comments"
							name="examples"
						/>
					</div>
					<br />

					<div className="question">
						<p>What else can we do to achieve these goals? </p>
						<input
							type={"text"}
							className="text"
							placeholder="Please enter notes and comments"
							name="achieve_goals"
							onChange={handleChange}
						/>
					</div>
					<br />
					<div className="question">
						<p>Discuss any concerns</p>
						<input
							type={"text"}
							className="text"
							placeholder="Please enter notes and comments"
							name="any_conserns"
							onChange={handleChange}
						/>
					</div>
					<br />

					<div className="question">
						
						<p>
							Explore whether teacher/s can do something additionally or
							differently.
						</p>
						<input
							type={"text"}
							className="text"
							placeholder="Please enter notes and comments"
							name="teachers_can_do_additionally"
							onChange={handleChange}
						/>
					</div>
					<br />
					<div className="buttons">
						<div className="left">
							<button className="save-continue" type="submit" >
								Save
							</button>
							{/* <button className="back">Back</button> */}
						</div>
						<div className="right">
							<button className="publish" onClick={publish}>
								Publish
							</button>
						</div>
					</div>
				</form>
			</div>
			<label>
				<input
					type={"checkbox"}
					className="checkbox"
					name="tag_all_teachers"
					onChange={(e) => {
						const temp = checked.teacher.map(function (bool) {
							return !bool;
						});

						setChecked({ ...checked, teacher: temp });
						setPublishData({
							...publishData,
							teachers: apiData.teacherNames?.map((data, index) =>
								temp[index] ? data.email : ""
							),
						});
					}}
				/>
				Tag all teachers
			</label>
			<div className="teachers">
				{apiData.teacherNames?.map((value, index) => (
					<label>
						<input
							type={"checkbox"}
							className="checkbox"
							name="teacher"
							value={value.email}
							checked={checked.teacher[index]}
							onChange={(e) => {
								const temp = checked.teacher;
								temp[index] = !checked.teacher[index];
								setChecked({ ...checked, teacher: temp });
								if (
									!teachers.includes(e.target.value) &&
									checked.teacher[index]
								) {
									const temp = publishData.teachers;
									temp.push(e.target.value);
									setPublishData({ ...publishData, teachers: temp });
								} else {
									const temp = publishData.teachers;
									temp.splice(temp.indexOf(e.target.value), 1);

									setPublishData({ ...publishData, teachers: temp });
								}
							}}
						/>
						{value.first_name + " " + value.last_name}
					</label>
				))}
			</div>
		</div>
	);
}

export default StudentView;
