import "./css/DropDown.css"
import { DownArrow } from "../assets/Icons"
import { useState,useEffect } from "react"

const DropDown = ({placeholder="Select", items=[], value=null, setValue=undefined}) => {
    const [open, setOpen] = useState(false)
    // useEffect(() => {
        if (value) { placeholder = value }
//   console.log(value)
//       }, [value])
   

    return (
        <div 
            onClick={() => setOpen(prev => !prev)}
            className="_3foc"
        >
            <span>{placeholder}</span>
            <DownArrow />
            {open &&
                <div className="dropdown">
                    {items.map((item, index) => {
                        return (
                            <div 
                                className={index % 2 == 0 ? "light" : "dark"}
                                onClick={() => setValue(item)}
                            >
                                {item}
                            </div>
                        )
                    })}
                </div>
            }
        </div>
    )
}

export default DropDown
