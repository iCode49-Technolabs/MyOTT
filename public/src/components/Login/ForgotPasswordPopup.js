import "./PopUp.css"
import { CloseIcon, InfoIcon } from "../../assets/Icons"
import { useNavigate } from 'react-router-dom';
import React, { useState  } from 'react';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { forgotpassword } from "../../actions/forgotpassword";
const ForgotPasswordPopUp = ({setPopup,setIsSignup}) => {
    

    const history = useNavigate();
	const dispatch = useDispatch();
    const loginRedirect = () => {
        setPopup(false)
        setIsSignup(false)
        history("/")
    }
	const message=useSelector((state)=>state?.auth?.newPassword)
    const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(forgotpassword(form, history));
		setTimeout(()=>{alert(message)},200)
	};

    
    return (
        <div className="popup__container">
            <div className="popup__box">
                <div className="popup__box_main">
                    
                <form onSubmit={handleSubmit}>
									<div class="inputbox">
										<input
											type={"text"}
											name="username"
											placeholder={"Email address"}
											onChange={handleChange}
											required
											autoComplete="off"
										/>
										<br />
										
									</div>
									<p
										style={{
											marginTop: "-2rem",
											marginLeft: ".2rem",
											fontSize: "12px",
											color: "red",
										}}
									>
										{location.state?.message}
									</p>
									
									<button type="submit" className="left-submit">
										Submit
									</button>
								</form>
                    
                    
                    <div className="userdetails__settings">
                        
                        <button onClick={loginRedirect}
                            style={{marginLeft:"-.3rem"}}
                            className="settings__button"
                        >
                            Click here to login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgotPasswordPopUp
