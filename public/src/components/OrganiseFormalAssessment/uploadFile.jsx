
import { CloseIcon, InfoIcon } from "../../assets/Icons"
import { useEffect, useRef, useState } from "react"
import Select from "react-select"
import Switch from "react-switch"
import axios from "axios"
import { apifive } from "../../config/backend"
import  "./uploadFile.css"
import { useDispatch,useSelector } from "react-redux";

import { fileUpload } from "../../actions/assessmentrequest"
import { useMemo } from "react"
const UploadFile  = ({ setPopup,uploadData}) => {
    const dispatch = useDispatch();
    const[form,setForm]=useState({file:""})
    const filestatus=useSelector((state)=>state.auth.filestatus)

   console.log(filestatus)
   const handleSubmit = (e) => {
    e.preventDefault();
    const data=new FormData(e.target)
   
    dispatch(fileUpload(data))
    setTimeout(()=>{alert(filestatus?.body)},2000)
    
    setPopup(false)
     
};
const handleChange = (e) =>{
  
   setForm({ ...form, [e.target.name]: e.target.files[0] });    
    
}

    return (
        <div className="fileUpload">
            <div className="editdata__box">
            <CloseIcon onClick={() => setPopup(false)} />
                <div className="editdata__box_main">
                  
                   
                   
                <form method="post" onSubmit={handleSubmit}  enctype="multipart/form-data">
                <input type={"text"} name="table_name" value={uploadData.table_name} hidden/>
                        <input type={"text"} name="email" value={uploadData.email} hidden/>
                        <input type={"text"} name="school_name" value={uploadData.school_name} hidden/>
                        <label ><p>{form.file?.name?form.file?.name:"Choose file to upload"}</p>
                            <input name="file" type={"file"} onChange={handleChange}/>
                            </label>
                        
                    
                    
                    <div className="editdata__box_content">
                        <button
                        type="submit"
                          
                            className="_1oqn"
                            
                        >
                            Save
                        </button>
                    </div>
                    </form>
                </div>
                
            </div>
        </div>
    )
}

export default UploadFile
