import "./OrganiseFormalAssessment.css";
import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import StudentInfo from "../StudentInfo";
import { useState } from "react";
import { organise_formal_assessment } from "../../actions/organise_formal_assessment";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import UploadFile  from "./uploadFile"
function OrganiseFormalAssessment() {
  const location=useLocation()
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"))
  const apiData = useSelector(
    (state) => state?.organise_formal_assessmentReducer
  );
  console.log("apiData", apiData);

  const [click, setClick] = useState([]);
  // console.log('click', click);
  const [save, setSave] = useState("");

  const [item, setItem] = useState({
    date: "",
    assessment_kind: "",
    next_steps: "",
  });

  const handleClick = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;
    // console.log(value, checked);
    if (checked) {
      setClick([...click, value]);
    } else {
      setClick(
        click.filter((e) => {
          return e !== value;
        })
      );
    }
  };
  const handleInput = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    // console.log(name, value);
    setItem({ ...item, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(item, click)
    const finalData = {
      assessment_type: click[0]!="other"?click:save.assessment_type,
      ...item,
    };
    setSave(finalData);
   console.log("finalData", finalData);

    dispatch(
      organise_formal_assessment({
        assessment_type: save?.assessment_type,
        assessment_kind: save?.assessment_kind,
        next_steps: save?.next_steps,
        school_name: user?.school_name,
        email:location.state?.student?.email
      })
    );
    alert("Saved Successfully")
  };
  const [popup, setPopup] = useState(false)
	const [uploadData,setUploadData]=useState()
  return (
    <div className="organiseformalassessment">
      <Header />{popup ? <UploadFile  setPopup={setPopup}  uploadData={uploadData}/> : undefined}
      <div className="container">
        <StudentInfo student={location.state?.student}/>
        <div className="nav-text" style={{ marginTop: "100px" }}>
          <div></div>
          <p>Back to All Students</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="organiseformalassessment-container">
            <p>Organise Formal Assessment</p>
            <div className="view-container">
              <div className="chechInput">
                <p style={{ fontSize: "14px" }}>Type of Assessment</p>
                <input
                  type="checkbox"
                  value="Psychologist"
                  onChange={handleClick}
                />
                <label htmlFor="check1">Psychologist</label>
                <input
                  type="checkbox"
                  value="Speech pathologist"
                  onChange={handleClick}
                />
                <label htmlFor="check2">Speech pathologist</label>
                <input
                  type="checkbox"
                  value="Occupational Therapist"
                  onChange={handleClick}
                />
                <label htmlFor="check3">Occupational Therapist</label>
                <br></br>
                <input
                  type="checkbox"
                  value="Audiologist"
                  onChange={handleClick}
                />
                <label htmlFor="check4">Audiologist</label>
                <input
                  value="Vision Therapist"
                  onChange={handleClick}
                  style={{ marginLeft: "58px" }}
                  type="checkbox"
                />
                <label htmlFor="check5">Vision Therapist</label>
                <input
                  value="other"
                  onChange={handleClick}
                  style={{ marginLeft: "67px" }}
                  type="checkbox"
                />
                <label htmlFor="check6"  >Other</label>
              </div>
              {click[0]=="other"&&<div
                className="inputData"
                style={{ marginLeft: "20px",marginTop:"10px" }}
              >
                  
                  <input
                  style={{width:"10rem"}}
                    type="text"
                    name="assessment_type"
                    placeholder="Assessment type"
                    autoComplete={false}
                    onChange={handleInput}
                  />
                </div>}
              <div
                className="inputData"
                style={{ marginTop: "30px", marginBottom: "30px" }}
              >
                <div style={{ display: "flex" }}>
                  <p>Date assessment is scheduled :</p>
                  <input
                    type="date"
                    name="date"
                    value={item.date}
                    onChange={handleInput}
                  />
                </div>
                <div style={{ display: "flex", marginTop: "10px" }}>
                  <p>Details on kind of assessment :</p>
                  <input
                    name="assessment_kind"
                    value={item.assessment_kind}
                    onChange={handleInput}
                    placeholder="Please enter"
                  />
                </div>
                <div style={{ display: "flex", marginTop: "10px" }}>
                  <p>Recommended next steps :</p>
                  <input
                    style={{ marginLeft: "55px" }}
                    name="next_steps"
                    value={item.next_steps}
                    onChange={handleInput}
                    placeholder="Please enter"
                  />
                </div>
                <div>
                  <br></br>
                  <button
                    type="submit"
                    style={{
                      background: "#F05D46",
                      borderRadius: "47px",
                      border: "#F05D46",
                      color: "white",
                      width: "124px",
                      height: "41px",
                      fontSize:"12px"
                    }}
                  >
                    Save
                  </button>
                 
                  <button
                  style={{
                    background: "#69B3DD",
                    borderRadius: ".2rem",
                    border: "#69B3DD",
                    color: "white",
                    width: "124px",
                    height: "41px",
                    marginLeft:"1rem",
                    fontSize:"12px"
                  }}
                     onClick={() => {
													
                      setPopup(true);
                      setUploadData({
                          email:location.state?.student?.email,
                          school_name:user?.school_name,
                          table_name:"past_formal_assessment_files"

                        
                        
                        
                      });
                      
                      
                    }}
                  >
                    Upload
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
export default OrganiseFormalAssessment;
