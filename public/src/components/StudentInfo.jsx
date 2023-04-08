import "./css/StudentInfo.css"
import {
    PageIcon,
    ReadingBook,
    SunriseIcon,
    RiskAssessment,
    PenIcon
} from "../assets/Icons"
import { useNavigate } from "react-router-dom";


const StudentInfo = ({student}) => {
    const user = JSON.parse(localStorage.getItem("profile"));
    const history = useNavigate();
    if(user.role!="Teacher")
    return (
        <div className="studentprofile__box_info">
            <div className="studentprofile__box_image">
                <span>{student?.first_name[0]}{student?.last_name[0]}</span>
            </div>
            <div>
                <h1>{student?.first_name} {student?.last_name}</h1>
                <span>Student No: <strong>{student?.user_id}</strong></span>
                <span>Date of Birth:<strong>{student?.date_of_birth}</strong> </span>
                <span>Homeclass:<strong>{student?.teacher}, {student?.class_year}</strong> </span>
                <button>KELLY HOUSE</button>
            </div>
            {/* <div>
                <h1>Student Report</h1>
                <span>Attendance: <strong>Consistent</strong></span>
                <span>Effort: <strong>Consistent</strong></span>
            </div> */}
            <div>
                <h1>Learning Plan</h1>
                <span>Status: <strong style={{textTransform:"capitalize"}}>{ student?.iep}</strong></span>
                <span>No. of Adjustments: <strong>N/A</strong></span>
                <span>Support Level: <strong>N/A</strong></span>
                <span>Review Date: <strong>{ student?.review_date}</strong></span>
            </div>
            <div className="studentprofile__box_links">
                <div>
                    <PageIcon />
                    <span onClick={()=>history("/IndividualAssessmentRequest",{state:{student:student,access:"edit"}})}>Assessment Request</span>
                </div>
                <div >
                    <ReadingBook />
                    <span onClick={()=>history("/StudentProfile",{state:{student:student}})}>View Student Profile</span>
                </div>
                <div>
                    <SunriseIcon />
                    <span onClick={()=>history("/StudentVoiceChoice",{state:{student:student}})}>Know Student Better</span>
                </div>
                <div>
                    <RiskAssessment />
                    <span onClick={()=>history("/OrganiseFormalAssessment",{state:{student:student}})}>Organise Formal Assessment</span>
                </div>
                <div>
                    <PenIcon />
                    <span onClick={()=>history("/IEP",{state:{student:student}})}>Create IEP</span>
                </div>
            </div>
        </div>
    )
}

export default StudentInfo
