import "./InformationRecords.css";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { informationRecords } from "../../actions/studentvoicechoice";

function InformationRecords({studentData}) {

    const dispatch = useDispatch();
	const apiData = useSelector((state) => state.studentvoicechoice);
    const user = JSON.parse(localStorage.getItem("profile"))
    console.log(studentData)
	useEffect(() => {
		
			dispatch(
                informationRecords({
                    user_id:studentData.user_id,
    	email:studentData.email,
    	school:user.school_name,
                    
                    view:"parent",
			}))
			dispatch(
                informationRecords({
                    user_id:studentData.user_id,
                    email:studentData.email,
                    school:user.school_name,
                    
                    view:"teacher",
			})
		);
	}, []);
	
	
	const teacher = apiData.teacher;
	const parent = apiData.parent;
    
    const [data,setData]=useState()
    useEffect(()=>{
        setData(teacher)
    },[teacher])
  
    const [activeButton,setActiveButton]=useState({
        
        button2:{className:"active"},
        button3:{className:""},
    })
    const changeButton = (view) => {
		const temp = {
            
			button2:{className:""},
        button3:{className:""},}
			temp[view] = {
                className:"active"
		};
        
        if (view=="button3"){
            setData(parent)
        }
        if (view=="button2"){
            setData(teacher)
        }
		setActiveButton(temp);
	};
console.log(apiData,data)

    return (
        <div className="informationRecords">
            <div>
                <h2>Conversation Record</h2>
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> */}
            </div>

            <div>
                <p className="conversation">Conversation with</p>
            </div>

            <div className="allButton">
                
                <button className={activeButton.button2.className} onClick={() => changeButton("button2")}>Teacher</button>
                <button className={activeButton.button3.className} onClick={() => changeButton("button3")}>Carer</button>
            </div>

            <div className="date">
                <p>Date: {data?.created_date}</p>
                <p>Record of conversation with <b>{studentData?.first_name+" "+studentData?.last_name}</b></p>
            </div>
            <section >
                <div >
                    <p className="headings">Observations / Assessment Results</p>
                    <p>{data?.assessment_results}</p>
                </div>
                <div>
                    <p className="headings">Barriers to Learning</p>
                    <p>{data?.barriers_learning}</p>
                </div>
                <div>
                    <p className="headings">Preferred Learning Styles</p>
                    <p>{data?.review_learning_style}</p>
                </div>
                <div>
                    <p className="headings">Strengths</p>
                    <p>{data?.review_strength}</p>
                </div>
                <div>
                    <p className="headings">Interests</p>
                    <p>{data?.review_interest}</p>
                </div>
                <div>
                    <p className="headings">Enabling Beliefs </p>
                    <p>{data?.review_enabling_belief}</p>
                </div>
                <div>
                    <p className="headings">Limiting Beliefs </p>
                    <p>{data?.review_limiting_belief}</p>
                </div>
                <div>
                    <p className="headings">Next Steps (including Goal Selection)</p>
                    <p>{data?.negotiate_goal}</p>
                </div>
                <div>
                    <p className="headings">Concerns Regarding Next Steps</p>
                    <p>{data?.any_concerns}</p>
                </div>
                <div className="lowerHeading">
                    <p className="headings ">What teachers can do additionally/differently</p>
                    <p>{data?.teachers_can_do_additionally}</p>
                </div>

            </section>
        </div>
    );
}

export default InformationRecords;
