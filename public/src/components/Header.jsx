import "./css/Header.css"
import Logo from "../assets/Images/Logo.png"
import { useState,useEffect } from "react"
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BellIcon, NotificationIcon } from "../assets/Icons"
import * as actionType from './../constants/actionTypes';

import { useMemo } from "react";
const Header = ({notification=false}) => {
    const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('profile')))
    
    const dispatch = useDispatch();
    const history = useNavigate();
    const [dropdown,setDropDown]=useState("none")
    
    useEffect(()=>
    {if (user==undefined){
        
        history('/');
        
    }},[]
    )
    
    const logout = () => {
        user.remember_me="no"
        localStorage.setItem("profile", JSON.stringify(user))
        dispatch({ type: actionType.LOGOUT });
        
        history('/');
    
        
      };
      
    //   useEffect(()=>{
        
    //     setTimeout(()=>{
    //         alert("Session Timeout")
    //         dispatch({ type: actionType.LOGOUT });
    //         history('/')
        
    //     },1000*60*60)
    //   },[])
      useEffect(()=>{
        setUser(JSON.parse(localStorage.getItem('profile')))
      },[user])
      const logoLink=(user?.role=="Teacher"&&"/Teacher")||(user?.role=="Coordinator"&&"/LearningCoordinator")||(user?.role=="School Admin"&&"/School_SystemAdmin")||(user?.role=="Super Admin"&&"/Application_SystemAdmin")
    return (
        <div className="header">
        <div className="header__main">
            <div>
                <img src={Logo} alt="Logo" onClick={() => history(logoLink)}/>
                <div className="header__navigation_menu">
                    {/* <span>LEARNING SUPPORT</span>
                    <span>TEACHERS</span>
                    <span>CREATE IEP</span>
                    <span>STUDENT PROFILE</span> */}
                </div>
                <div className="header__profile_notification">
                    
                    <button className="header__profile_blank" onClick={()=> dropdown=="none"?setDropDown("block"):setDropDown("none")} >
                        <span>{user?.first_name[0]}{user?.last_name[0]}</span>
                        
                    </button>
                    
                        
                    {/* { notification ? <NotificationIcon /> : <BellIcon /> } */}
                    
                    
                </div>
            </div>
            
        </div>
        <div className="dropdown" style={{display:dropdown}}>
        <p  className='log-out'>{user?.first_name +" "+user?.last_name}</p>
        <p  className='log-out'>{user?.email}</p>
        <p className='log-out'style={{textTransform:"capitalize"}} onClick={(e)=>{
            if(user.remember_me=="no")
            user.remember_me="yes"
            else
            user.remember_me="no"

            console.log(user.remember_me)
            localStorage.setItem("profile", JSON.stringify(user))
            }
            }>Remember me : {user.remember_me}</p>
                            {/* <p  className='log-out'>Change Password</p> */}
                                {user.remember_me=="no"&&<p onClick={()=>
                                    logout()} className='log-out'>Log out</p>}
                           
                        </div>
        <button className="back-button" onClick={() => history(-1)}><div></div></button>
        {/* <IdleMonitor/> */}
        </div>
    )
}

export default Header
