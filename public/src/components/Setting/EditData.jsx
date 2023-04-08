
import { CloseIcon, InfoIcon } from "../../assets/Icons"
import { useEffect, useRef, useState } from "react"
import Select from "react-select"
import Switch from "react-switch"
import axios from "axios"
import { apifive } from "../../config/backend"
import  "./EditData.css"
import { useDispatch } from "react-redux";
const EditData = ({ setPopup,editData}) => {
    const dispatch = useDispatch();
    const[form,setForm]=useState({...editData.form,type:"edit"})
    const label=editData.label
    const value=Object.values(editData.data)
    const name=Object.keys(editData.data)
   const editFunction=editData.function
   
   const handleSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(form));
     dispatch(editFunction(form))
     setTimeout(()=>dispatch(editData.reload),100)
     
};
const handleChange = (e) =>{
  
   setForm({ ...form, [e.target.name]: e.target.value });    
    
}
    return (
        <div className="settingEdit">
            <div className="editdata__box">
            <CloseIcon onClick={() => setPopup(false)} />
                <div className="editdata__box_main">
                  
                   
                   
                    {value.map((data,index)=>(
                        
                        <label htmlFor={name[index]}><p>{label[index]}</p>
                            <input defaultValue={data} name={name[index]} id={name[index]} onChange={handleChange}/>
                            </label>
                        
                    ))}
                    
                    <div className="editdata__box_content">
                        <button
                        type="submit"
                            onClick={(e) => {
                               
                               
                                setPopup(false)
                                handleSubmit(e)
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
