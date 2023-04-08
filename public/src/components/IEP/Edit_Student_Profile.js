import "./Edit_Student_Profile.css"
import { CloseIcon, InfoIcon } from "./../../assets/Icons"
import { useEffect, useRef, useState } from "react"
import Select from "react-select"
import Switch from "react-switch"
import axios from "axios"
import { apifive } from "./../../config/backend"

const EditData = ({user, setPopup, setData}) => {
    

   

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
        <div className="editdata__container">
            <div className="editdata__box">
                <CloseIcon onClick={() => setPopup(false)} />
                <div className="editdata__box_main">
                    <div className="editdata__box_message">
                        {/* {message && 
                            <span>
                                <InfoIcon />
                                {message}
                            </span>
                        } */}
                    </div>
                    <div className="editdata__box_content">
                        <h4>First Name</h4>
                        <input
                            value="{firstName}"
                            // onChange={e => setFirstName(e.target.value)}
                        />
                    </div>
                    <div className="editdata__box_content">
                        <h4>Last Name</h4>
                        <input
                            value="{lastName}"
                            // onChange={e => setLastName(e.target.value)}
                        />
                    </div>
                    <div className="editdata__box_content">
                        <h4>Date of Birth</h4>
                        <input
                            value="abc"
                            // onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="editdata__box_content">
                        <h4>NDIS Status</h4>
                        <input
                            value="abc"
                            // onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="editdata__box_content">
                        <h4>NCCD Status</h4>
                        <input
                            value="abc"
                            // onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="editdata__box_content">
                        <h4>Disability Category</h4>
                        <input
                            value="abc"
                            // onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="editdata__box_content">
                        <h4>Diagnostics</h4>
                        <input
                            value="abc"
                            // onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="editdata__box_content">
                        <h4>Disability Diagnosis</h4>
                        <input
                            value="abc"
                            // onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="editdata__box_content">
                        <h4>Outside Agencies</h4>
                        <input
                            value="abc"
                            // onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="editdata__box_content">
                        <h4>Current referrals</h4>
                        <input
                            value="abc"
                            // onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="editdata__box_content">
                        <h4>class Year</h4>
                        <Select
                            // options={roles.map(role => {
                            //     return { label: role, value: role }
                            // })}
                            // value={{label: role, value: role}}
                            // onChange={e => setRole(e.value)}
                        />
                    </div>
                    <div className="editdata__box_content">
                        <h4>Learning Coordinator</h4>
                        <Select
                            
                            // value={{label: school, value: school}}
                            // onChange={e => setSchool(e.value)}
                        />
                    </div>
                    <div className="editdata__box_content">
                        <h4>NAPLAN RESULTS</h4>
                        <input
                            value="abc"
                            // onChange={e => setContact(e.target.value)}
                        />
                    </div>
                    <div className="editdata__box_content">
                        <h4>Plan of Study</h4>
                        <input
                            value="abc"
                            // onChange={e => setContact(e.target.value)}
                        />
                    </div>
                    <div className="editdata__box_content">
                        <h4>IEP</h4>
                        <Switch
                            className="editdata__box_switch"
                            // checked={iep == "yes" ? true : false}
                            //  onChange={
                            //     () => setIep(prev => {
                            //         return prev == "yes" ? "no" : "yes"
                            //     })
                            // }
                        />
                    </div>
                    <div className="editdata__box_content">
                        <h4>Aboroginal or Torres Strait Islander Background</h4>
                        <Switch
                            className="editdata__box_switch"
                            // checked={active == "yes" ? true : false}
                            //  onChange={
                            //     () => setActive(prev => {
                            //         return prev == "yes" ? "no" : "yes"
                            //     })
                            // }
                        />
                    </div>
                    <div className="editdata__box_content">
                        <h4>English as a second language</h4>
                        <Switch
                            className="editdata__box_switch"
                            // checked={active == "yes" ? true : false}
                            //  onChange={
                            //     () => setActive(prev => {
                            //         return prev == "yes" ? "no" : "yes"
                            //     })
                            // }
                        />
                    </div>
                    <div className="editdata__box_content">
                        <h4>Ethinic Background</h4>
                        <input
                            value="abc"
                            // onChange={e => setContact(e.target.value)}
                        />
                    </div>
                    <div className="editdata__box_content">
                        <h4>Religion</h4>
                        <input
                            value="abc"
                            // onChange={e => setContact(e.target.value)}
                        />
                    </div>
                    <div className="userdetails__settings">
                        {/* Todo: make save button functional */}
                        <button
                            
                            className="settings__button"
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
