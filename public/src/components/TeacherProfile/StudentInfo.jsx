import "./StudentInfo";
import {
  PageIcon,
  ReadingBook,
  SunriseIcon,
  RiskAssessment,
  PenIcon,
} from "./../../assets/Icons";
import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";

const StudentInfo = (props) => {
  const [searched, setSearched] = useState([]);

  const data = props.profile;
  const searchQuery = props.searchQuery;
  // console.log("data", data);

  useEffect(() => {
    if (searchQuery) {
      setSearched(
        data?.filter((item) => {
          return Object.values(item)
            .join("")
            .toLowerCase()
            .includes(searchQuery.toLowerCase());
        })
      );
    } 
  }, [searchQuery]);

  return (
    <>
      {searchQuery?.length > 0 && searched?.length === 0 && (
        <h1>Data Not Found</h1>
      )}

      {searchQuery?.length > 0
        ? searched?.map((item, index) => {
            return (
              <div
                key={index}
                className="studentprofile__box_info"
                style={{ marginBottom: "50px" }}
              >
                <div className="studentprofile__box_image">
                  <span>{item.first_name[0]}{item.last_name[0]}</span>
                </div>
                <div>
                  <h1>
                    {item.first_name} &nbsp;
                    {item.last_name}
                  </h1>
                  <span>Student No: {item.user_id}</span>
                  <span>Date of Birth: {item.date_of_birth}</span>
                  <span>Homeclass: {item.teacher}, {item.class_year}</span>
                  <button>KELLY HOUSE</button>
                </div>
                {/* <div>
                            <h1>Student Report</h1>
                            <span>Attendance: <strong>Consistent</strong></span>
                            <span>Effort: <strong>Consistent</strong></span>
                        </div> */}
                <div>
                  <h1>Learning Plan</h1>
                  <span>
                    Status: <strong>{ item.iep}</strong>
                  </span>
                  <span>
                    No. of Adjustments: <strong>N/A</strong>
                  </span>
                  <span>
                    Support Level: <strong>N/A</strong>
                  </span>
                  <span>
                    Review Date: <strong>{ item.review_date}</strong>
                  </span>
                </div>
                <div className="studentprofile__box_links">
                  <div>
                    <PageIcon />
                    <span>Assessment Request</span>
                  </div>
                  <div>
                    <ReadingBook />
                    <span>View Student Profile</span>
                  </div>
                  <div>
                    <SunriseIcon />
                    <span>Know Student Better</span>
                  </div>
                  <div>
                    <RiskAssessment />
                    <span>Organise Formal Assessment</span>
                  </div>
                  <div>
                    <PenIcon />
                    <span>Create IEP</span>
                  </div>
                </div>
              </div>
            );
          })
        : data?.map((item, index) => {
            return (
              <div
                key={index}
                className="studentprofile__box_info"
                style={{ marginBottom: "50px" }}
              >
                <div className="studentprofile__box_image">
                  <span>{item.first_name[0]}{item.last_name[0]}</span>
                </div>
                <div>
                  <h1>
                    {item.first_name} &nbsp;
                    {item.last_name}
                  </h1>
                  <span>Student No: {item.user_id}</span>
                  <span>Date of Birth: {item.date_of_birth}</span>
                  <span>Homeclass: {item.teacher}, {item.class_year}</span>
                  <button>KELLY HOUSE</button>
                </div>
                {/* <div>
                            <h1>Student Report</h1>
                            <span>Attendance: <strong>Consistent</strong></span>
                            <span>Effort: <strong>Consistent</strong></span>
                        </div> */}
                <div>
                  <h1>Learning Plan</h1>
                  <span>
                    Status: <strong>{ item.iep}</strong>
                  </span>
                  <span>
                    No. of Adjustments: <strong>N/A</strong>
                  </span>
                  <span>
                    Support Level: <strong>N/A</strong>
                  </span>
                  <span>
                    Review Date: <strong>{ item.review_date}</strong>
                  </span>
                </div>
                <div className="studentprofile__box_links">
                  <div>
                    <PageIcon />
                    <span>Assessment Request</span>
                  </div>
                  <div>
                    <ReadingBook />
                    <span>View Student Profile</span>
                  </div>
                  <div>
                    <SunriseIcon />
                    <span>Know Student Better</span>
                  </div>
                  <div>
                    <RiskAssessment />
                    <span>Organise Formal Assessment</span>
                  </div>
                  <div>
                    <PenIcon />
                    <span>Create IEP</span>
                  </div>
                </div>
              </div>
            );
          })}

      {}
    </>
  );
};

export default StudentInfo;
