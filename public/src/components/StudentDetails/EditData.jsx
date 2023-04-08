
import { CloseIcon, InfoIcon } from "../../assets/Icons"
import { useEffect, useRef, useState } from "react"
import Select from "react-select"
import Switch from "react-switch"
import axios from "axios"
import { apifive } from "../../config/backend"

const EditData = ({user, setPopup}) => {
    const [assessment, setAssessment] = useState(user.assessment_request)
    const [iep, setIep] = useState(user.iep)
    const [active, setActive] = useState(user.active)
    const [message, setMessage] = useState("")

    const save = async (email, school) => {
        const response = await axios.post(`https://0ojsyezeel.execute-api.ap-south-1.amazonaws.com/default/verify_userUpdate`, {
            email,
            school,
            active,
            iep,
            assessment_request: assessment
        })

        console.log(response.data)
    }

    useEffect(() => {
        setTimeout(() => { setMessage("") }, 4000)
    }, [message])

    // const validator = () => {
    //     if (!firstName || !lastName || !email || !contact) {
    //         setMessage("Fields cannot be empty")
    //         return false
    //     }
    //     if (email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ig) === null) {
    //         setMessage("Invalid email")
    //         return false
    //     }
    //     return true
    // }

    console.log(user)
    return (
        <div className="_0krw">
            <div className="editdata__box">
                <CloseIcon onClick={() => setPopup(false)} />
                <div className="editdata__box_main">
                    <div className="editdata__box_message">
                        {message && 
                            <span>
                                <InfoIcon />
                                {message}
                            </span>
                        }
                    </div>
                    <div className="editdata__box_content">
                        <h4>Assessment Request</h4>
                        <Switch
                            className="editdata__box_switch"
                            checked={assessment == "yes" ? true : false}
                            onChange={
                                () => setAssessment(prev => {
                                    return prev == "yes" ? "no" : "yes"
                                })
                            }
                        />
                    </div>
                    <div className="editdata__box_content">
                        <h4>IEP</h4>
                        <Switch
                            className="editdata__box_switch"
                            checked={iep == "yes" ? true : false}
                            onChange={
                                () => setIep(prev => {
                                    return prev == "yes" ? "no" : "yes"
                                })
                            }
                        />
                    </div>
                    <div className="editdata__box_content">
                        <h4>Active</h4>
                        <Switch
                            className="editdata__box_switch"
                            checked={active == "yes" ? true : false}
                            onChange={
                                () => setActive(prev => {
                                    return prev == "yes" ? "no" : "yes"
                                })
                            }
                        />
                    </div>
                    <div className="editdata__box_content">
                        <button
                            onClick={() => {
                                save(user.email, user.school_name)
                                // setData(prev => {
                                //     return prev.map(data => {
                                //         return data.email == user.email ? 
                                //             { ...data, iep, active, assessment_request: assessment } : data
                                //     })
                                // })
                                setPopup(false)
                            }}
                            className="_1oqn"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditData
