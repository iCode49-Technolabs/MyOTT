import "./css/TrackProgress.css"
import Header from "../Header"
import Footer from "../Footer"
import StudentInfo from "../StudentInfo"
import { Line } from "react-chartjs-2"
import { Link } from "react-router-dom"
import { ArrowLeft, CalenderIcon, DownArrow, SearchIcon } from "../../assets/Icons"

const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Interacting with others",
        data: [33, 53, 85, 41, 44, 65],
        borderColor: "rgb(113, 124, 54)"
      },
      {
        label: "Expressing Ideas",
        data: [33, 25, 35, 51, 54, 76],
        borderColor: "rgb(105, 179, 221)"
      }
    ]
};

const TrackProgress = () => {
    return (
        <>
            <Header />
            <div className="studentprofile__container">
                <div className="studentprofile__box">
                    <StudentInfo />
                    <div className="studentprofile__box_profile">
                        <Link to="/">
                            <ArrowLeft />
                            Back to All Students
                        </Link>
                        <div className="studentprofile__box_main">
                            <div className="studentprofile__box_header">
                                <h1>Student Profile</h1>
                                <div className="studentprofile__header_buttons">
                                    <button className="active">Track Progress</button>
                                    <button>Map Student Views</button>
                                    <button>Adjustments & Modification Log</button>
                                    <button>Review Past IEPs</button>
                                </div>
                            </div>
                            <div className="trackbox__container">
                                <div className="header">
                                    <span>Track Progress</span>
                                    <div>
                                        <div className="learning_outcome">
                                            <span className="faded">Enter Targeted Learning Outcomes</span>
                                            <DownArrow />
                                        </div>
                                        <div className="date">
                                            <span>1/10/2022</span>
                                            <CalenderIcon />
                                        </div>
                                        <div className="date">
                                            <span className="faded">End Date</span>
                                            <CalenderIcon />
                                        </div>
                                        <div className="search_icon">
                                            <SearchIcon />
                                        </div>
                                    </div>
                                </div>
                                <div className="trackbox_chart">
                                    <Line data={data} />
                                </div>
                                <div className="trackbox_ideas">
                                    <div>
                                        <h2>600</h2>
                                        <span>Expressing and Developing Ideas</span>
                                    </div>
                                    <div>
                                        <h2>700</h2>
                                        <span>Interacting with Others</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default TrackProgress
