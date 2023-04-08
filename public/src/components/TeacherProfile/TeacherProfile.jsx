import React, { useEffect, useMemo, useState } from "react";
import "./TeacherProfile.css";
import Header from "../Header";
import Footer from "../Footer";
import teacherPic from "../images/teacherPic.png";
import addButton from "../images/addButton.png";
import Vector1 from "../images/Vector (1).png";
import searchBlack from "../images/searchBlack.png";
import calendarInterface from "../images/calendarInterface.png";
import { ArrowLeft } from "./../../assets/Icons";
import StudentInfo from "./StudentInfo";
import { useDispatch } from "react-redux";
import { teacherassessmentrequest } from "../../actions/teacherdashboard"
import { useSelector } from "react-redux";

// import pagination from "../images/pagination.png";
// import Pagination from "./../Pagination/Pagination";
// import { useFilter } from "@promise_learning/usefilter";

const TeacherProfile = () => {

   const [searchQuery, setSearch] = useState("");

  const apiData = useSelector((state) => state);
  console.log('apiData', apiData);
  const user = JSON.parse(localStorage.getItem("profile"));
  console.log('user', user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      teacherassessmentrequest({
        school: user?.school_name,
        email: "Mira.Gupta@test.com",
      })
    );
  }, []);

  const profile = apiData.teacher_dashboard?.teacherassessmentrequest;
  console.log('profile', profile);

  //   const [currentPage, setCurrentPage] = useState(1);
  //   const [searchData, setSearchData] = useState({
  //     query: "",
  //     fields: ["school_name"],
  // });

  //   let PageSize = 10;
  //   const { loading, data: result } = useFilter({
  //     data: data,
  //     search: searchData,
  //   });

  //   const currentTableData = useMemo(() => {
  //     const firstPageIndex = (currentPage - 1) * PageSize;
  //     const lastPageIndex = firstPageIndex + PageSize;
  //     return result?.slice(firstPageIndex, lastPageIndex);
  //   }, [currentPage, result]);
  //   console.log(data);

  //   const [data, setData] = useState("");
  //   useEffect(() => {
  //     setData("");
  //   }, []);

  return (
    <>
      <Header />
      <section className="teacherClass">
        {/*--------------------------------------------------------------------------- */}
        <section className="teacherBanner">
          <div className="www">
            <div className="teacherImg">
              <img src={teacherPic} />
            </div>

            <div className="bannerText" style={{ paddingLeft: "40px" }}>
              <b>{user.first_name} {user.last_name}</b>
              <p>
                PPA001 <br></br>
                Wollongong Campus<br></br>
                Year 6 Teacher<br></br>
              </p>
              <button>KELLY HOUSE</button>
            </div>
          </div>

          <div className="teacherButton">
            <button className="Adjustment">Adjustment</button>
            <br></br>
            <button className="Reports">Reports</button>
            <br></br>
            <button>Document repository</button>
            <img src={addButton} />
          </div>
        </section>
        {/* --------------------------------------------------------------------------- */}
        <section className="techerPagesButton">
          <div>
            <p style={{ fontWeight: "700" }}>
              <ArrowLeft />
              &#160; Back to dashboard
            </p>
          </div>
          <div className="teacherPage">
            <p>25 students</p>
            <p className="pageNumber" style={{ fontWeight: "700" }}>
              Page 1 of 3 &#160;
              <img src={Vector1} />
            </p>
          </div>
        </section>
        {/* ------------------------------------------------------------------------------- */}
        <div
          style={{
            boxShadow: "-4px 4px 20px rgba(0, 0, 0, 0.1)",
            borderRadius: "16px",
            background: "#FFFFFF",
          }}
        >
          <section
            className="serachTeacher"
            style={{
              background: "#FFE4AF",
              borderRadius: "16px 16px 0px 0px",
              padding: "21px 30px",
            }}
          >
            <div style={{ paddingRight: "191px" }}>
              <div style={{ display: "flex" }}>
                <p
                  style={{
                    fontWeight: "700",
                    fontSize: "20px",
                    marginTop: "8px",
                  }}
                >
                  All students requiring adjustments for:
                </p>
                <p
                  style={{
                    color: "#F05D46",
                    fontWeight: "700",
                    marginLeft: "30px",
                  }}
                >
                  Year 6 | English | <img src={calendarInterface} /> Thursday
                </p>
              </div>
              <div
                style={{
                  fontWeight: "700",
                  fontSize: "12px",
                  marginBottom: "10px",
                }}
              >
                Change details
              </div>
              <div>
                <select>
                  <option value="year">Year</option>
                </select>
                <select style={{ marginLeft: "30px" }}>
                  <option value="Subject">Subject</option>
                </select>
                <select style={{ marginLeft: "30px" }}>
                  <option value="Date">Date</option>
                </select>
              </div>
            </div>
            <div className="qqqqqq">
              <input
                placeholder="Student quick search"
                style={{
                  color: "#8A8A8A",
                  background: "#FFFFFF",
                  border: "1px solid #E1E1E1",
                  borderRadius: "8px",
                  padding: "8px 20px",
                }}
                 type="search" onChange={(e) => setSearch(e.target.value)}
              />
              <img
                style={{ position: "relative", right: "30px", top: "5px" }}
                src={searchBlack}
              />
            </div>
          </section>

          {/* ---------------------------------------------------------------------------------------- */}

          <section
            style={{
              marginTop: "50px",
              padding: "0px 30px",
              paddingBottom: "250px",
              marginBottom: "140px",
              
            }}
          >
            <StudentInfo searchQuery={searchQuery}  profile={profile} />
            {/* <img
              style={{
                width: "220px",
                position: "relative",
                top: "130px",
                left: "42%",
              }}
              src={pagination}
            /> */}
            {/* <Pagination
              className="pagination-bar"
              currentPage={currentPage}
              totalCount={data?.length > 0 ? data?.length : 10}
              pageSize={PageSize}
              onPageChange={(page) => setCurrentPage(page)}
            /> */}
          </section>
        </div>
        {/* -------------------------------------------------------------------------------------------- */}
      </section>
      <Footer />
    </>
  );
};

export default TeacherProfile;
