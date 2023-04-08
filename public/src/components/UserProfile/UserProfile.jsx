import React from "react";
import "./UserProfile.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import group from "./../images/Mask Group.png";
import Header from "../Header";
import teacherPic from "../images/teacherPic.png";
import Footer from "../Footer";
import Groupiep from "../images/Groupiep.png";
import Outdoors from "../images/Outdoors.png";
import { user_profile_data } from "../../actions/user_profile_data";
import { useEffect } from "react";
const UserProfile = () => {
  const dispatch = useDispatch();
  const apiData = useSelector((state) => state);
  console.log("apiData", apiData);
  const user = JSON.parse(localStorage.getItem("profile"));

  useEffect(() => {
    dispatch(
      user_profile_data({
        school_name: user?.school_name,
        email: user?.email,
      })
    );
  }, []);

  const profile = apiData.user_profile_data?.userProfile?.[0];
  console.log("profile", profile);

  return (
    <>
      <Header />
      <div className="UserProfile">
        <div className="top">
          <div className="welcome">
            <p
              style={{
                fontSize: "1.2rem",
                fontWeight: "700",
                color: "#F05D46",
              }}
            >
              Welcome back {profile?.first_name}!
            </p>
            <p
              style={{ fontSize: "small", fontWeight: "500", color: "#092433" }}
            >
              Visit your profile for more information and new updates.
            </p>
          </div>
          <img src={group} className="group" />
        </div>
        {/* ---------------------------------------------------------------------------------------- */}
        <div className="profile">
          <img
            src={Outdoors}
            height="500"
            style={{
              position: "relative",
              float: "right",
              top: "30px",
              left: "150px",
            }}
          />

          <div className="www">
            <div className="teacherImg">
              <img src={teacherPic} />
            </div>
            <div
              className="bannerText"
              style={{ paddingLeft: "90px", paddingTop: "5px" }}
            >
              <b>
                {profile?.first_name} {profile?.last_name}
              </b>
              <p>
                {profile?.address}
                <br></br>
                {profile?.email}
                <br></br>
                {profile?.role}
                <br></br>
              </p>
            </div>
          </div>
          {/* --------------------------------------------------------- */}
          <hr style={{ border: "1px solid #F05D46" }}></hr>

          <div className="details" style={{ display: "flex" }}>
            <div className="information" style={{ paddingLeft: "30px" }}>
              <p>School Name</p>
              <p>Email</p>
              <p>Date of Birth</p>
              <p>Address</p>
              <p>Contact</p>
              <p>Creation Date</p>
              <p>Update Date</p>
            </div>
            <div style={{ paddingLeft: "115px" }}>
              <p>{profile?.school_name}</p>
              <p>{profile?.email}</p>
              <p>{profile?.date_of_birth}</p>
              <p>{profile?.address}</p>
              <p>{profile?.contact_number}</p>
              <p>{profile?.creation_date}</p>
              <p>{profile?.updation_date}</p>
            </div>
          </div>

          <button className="button">Forgot Password</button>
        </div>
        {/* ------------------------------------------------------------------------------------------- */}
        <div className="NextStepIEP">
          <div className="lorem">
            <p
              style={{
                fontSize: "1.2rem",
                fontWeight: "700",
                color: "#F05D46",
              }}
            >
              Have a great journey with TOLLOW
            </p>
            <p>
              Home is not where you are from, it is where you belong. Some of us
              travel the whole world to find it. Others, find it in a person
            </p>
          </div>
          <img src={Groupiep} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserProfile;
