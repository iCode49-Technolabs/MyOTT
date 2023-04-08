import "./SuccessPopUp.css"
import { CloseIcon, InfoIcon } from "../../assets/Icons"
// import { useNavigate } from 'react-router-dom';
import React, { useState  } from 'react';

const SuccessPopUp = ({setPopup}) => {
    

    // const history = useNavigate();

    // const loginRedirect = () => {
    //     setPopup(false)
        
    //     history("/")
    // }

    
    return (
        <div className="successpopup__container">
            <div className="successpopup__box">
            <CloseIcon onClick={() => setPopup(false)} />
                <div className="successpopup__box_main">
                    
                    <p style={{textAlign:"center",marginBottom:"-.5rem",marginTop:"0rem"}}>Please proceed to activate school</p>
                    
                    
                    {/* <div className="userdetails__settings">
                        
                        <button onClick={loginRedirect}
                            style={{marginLeft:"-.8rem"}}
                            className="settings__button"
                        >
                            Click here to login
                        </button>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default SuccessPopUp
