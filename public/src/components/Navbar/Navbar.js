import React from 'react'
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements'
  
const Navbar = () => {
  return(
    <div>
      <Nav>
        <Bars />
  
        <NavLink to='/' style={{marginLeft: '-5.5rem',}}>
        Tollow
        </NavLink>
        <NavMenu>
        
          <NavLink to='/LearningSupport'>
            LearningSupport
          </NavLink>
          <NavLink to='/Teachers'>
            Teachers
          </NavLink>
          <NavLink to='/CreateIEP'>
            CreateIEP
          </NavLink>
          <NavLink to='/StudentProfile'>
            StudentProfile
          </NavLink>
          
          
        </NavMenu>
        <NavLink to='/Profile' style={{marginLeft: '15.5rem',}}>
            Profile
          </NavLink>
        {/* <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn> */}
      </Nav>
    </div>
    )
  
}
  
export default Navbar