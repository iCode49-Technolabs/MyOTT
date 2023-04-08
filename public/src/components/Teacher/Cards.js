import React, { useState } from "react";
import handshake from "./../images/handshake.png";
import flag from "./../images/waving-flag-.png";
import improve from "./../images/improve.png";
import calendar from "./../images/calendar.png";
import warning from "./../images/warning.png";
import arrow from "./../images/Arrow 1.png";
import { useNavigate } from "react-router-dom";
export const Cards = () => {
    const history = useNavigate();
    return (
        <div className="cards">
        <div class="card" onClick={()=>history("/Students_list")}>
            <img src={handshake} style={{ backgroundColor: "#69B3DD" }} />
            <div class="text">

                <p style={{ float: "left", width: "60%" }}>Student profiles</p>
                <img
                    src={arrow}
                    style={{

                        marginRight: "1rem",
                    }}
                />
            </div>
        </div>
        <div class="card" onClick={()=>history("/TrackStudentProgress")}>
            <img src={flag} style={{ backgroundColor: "#FCB730" }} />
            <div class="text">

                <p style={{ float: "left", width: "60%" }}>
                    Track student progress
                </p>
                <img
                    src={arrow}
                    style={{

                        marginRight: "1rem",
                    }}
                />
            </div>
        </div>
        <div class="card" 
        onClick={()=>history("/Record_Evidence_Comments")}
        >
            <img src={improve} style={{ backgroundColor: "#889159" }} />
            <div class="text">

                <p style={{ float: "left", width: "60%" }}>Record Evidence /
Comments</p>
                <img
                    src={arrow}
                    style={{

                        marginRight: "1rem",
                    }}
                />
            </div>
        </div>
        <div class="card" onClick={()=>history("/Assessment_Report_Request")}>
            <img src={calendar} style={{ backgroundColor: "#D3AB88" }} />
            <div class="text">

                <p style={{ float: "left", width: "60%" }}>Assessment Request
Report/Status</p>
                <img
                    src={arrow}
                    style={{

                        marginRight: "1rem",
                    }}
                />
            </div>
        </div>
        <div class="card" 
        onClick={()=>history("/Create_Review_Unit_Lesson_Plans")}
        >
            <img src={warning} style={{ backgroundColor: "#F05D46" }} />
            <div class="text">

                <p style={{ float: "left", width: "60%" }}>
                View
Unit & Lesson Plans
                </p>
                <img
                    src={arrow}
                    style={{

                        marginRight: "1rem",
                    }}
                />
            </div>
        </div>
        <div class="card" 
        // onClick={()=>history("/Updates_from_Learning_Coordinator")}
        >
            <img src={warning} style={{ backgroundColor: "#092433" }} />
            <div class="text">

                <p style={{ float: "left", width: "60%" }}>
                Updates from
Learning Coordinator
                </p>
                <img
                    src={arrow}
                    style={{

                        marginRight: "1rem",
                    }}
                />
            </div>
        </div>
    </div>
    );
  };