import "./PopUp.css"
import { CloseIcon, InfoIcon } from "../../assets/Icons"
import { useNavigate } from 'react-router-dom';
import React, { useState  } from 'react';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { forgotpassword } from "../../actions/auth";
const SuccessPopUp = ({setPopup,popup,setIsSignup}) => {
    

    const history = useNavigate();
    const [username,setUsername]=useState("")
	const dispatch = useDispatch();
    const loginRedirect = () => {
        setPopup(false)
        setIsSignup(false)
        history("/")
    }
	const message=useSelector((state)=>state?.auth?.newPassword)
	console.log(message)
    const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(forgotpassword({username:username},history));
		
	};

    
    return (
		<div className="login">
        <div className="popup__container">
            <div className="popup__box">
            <CloseIcon onClick={() =>{ setPopup(false)
				message.Status=""}} />
            <br/>
                <div className="popup__box_main" >
                    {(popup.type=="success")&&(<><p >User Registered</p>
                    
                    
                    <div className="userdetails__settings">
                        
                        <button onClick={loginRedirect}
                            
                            className="settings__button"
                        >
                            Click here to login
                        </button>
                    </div></>)}
                    {(popup.type=="forgetpassword")&&(<><form onSubmit={handleSubmit}>
                        
									<div class="inputbox">
										<input
											type={"text"}
											name="username"
											placeholder={"Email address"}
											onChange={e=>setUsername(e.target.value)}
											required
											autoComplete="off"
										/>
										<br />
										
									</div>
									<p
										style={{
											marginTop: "-2rem",
											textAlign:"center",
											fontSize: "12px",
											color: "red",
										}}
									>
										{message?.Status}
									</p>

									<div className="userdetails__settings">
									<button type="submit" className="settings__button" >
										Send Email
									</button></div>
								</form></>)}
                    
                </div>
            </div>
        </div></div>
    )
}

export default SuccessPopUp
