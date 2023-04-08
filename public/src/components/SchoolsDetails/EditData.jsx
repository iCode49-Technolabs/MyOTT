
import { CloseIcon, InfoIcon } from "../../assets/Icons"
import { useEffect, useRef, useState } from "react"
import Select from "react-select"
import Switch from "react-switch"
import axios from "axios"
import { apifive } from "../../config/backend"

const EditData = ({user, setPopup, setData}) => {
    const [assessment, setAssessment] = useState(user.assessment_request)
    const [iep, setIep] = useState(user.iep)
    const [active, setActive] = useState(user.active)
    const [message, setMessage] = useState("")

    const save = async (school) => {
        console.log({
            
            school_name:school,
            active:active,
            
        })
        const response = await axios.post(`https://0p0k63lc5c.execute-api.ap-south-1.amazonaws.com/default/schoolActiveModification`, {
            
            school_name:school,
            active:active,
            
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
            <div className="editdata__box" >
                
                <div className="editdata__box_main" style={{width:"100%",justifyContent:"space-evenly"}} >
                
                    <div className="editdata__box_message">
                        {message && 
                            <span>
                                <InfoIcon />
                                {message}
                            </span>
                        }
                    </div>
                   
                    <div  className="editdata__box_content">
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
                                save(user.school_name)
                                setData(prev => {
                                    console.log(prev)
                                    return prev.map(data => {
                                        return data.school_name == user.school_name ? 
                                            { ...data, active,} : data
                                    })
                                })
                                setPopup(false)
                            }}
                            className="_1oqn"
                        >
                            Save
                        </button>
                    </div>
                    <CloseIcon onClick={() => setPopup(false)} />
                </div>
            </div>
        </div>
    )
}

export default EditData
