import "./css/CurriculumSelection.css"
import sidePhoto from "../images/login.png"
import Logo from "../images/logo.png"
import { useEffect, useState } from "react"
import Dropdown from "../DropDown"
import axios from "axios"
import {apiseven} from "../../config/backend"
import {useLocation} from 'react-router-dom';

const CurriculumSelection = () => {
    const [category, setCategory] = useState("")
    const [subcategory, setSubcategory] = useState("")
    const [subcategories, setSubcategories] = useState([])
    const [categories, setCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [defaultSubcategory, setDefaultSubcategory] = useState("")
    const [refreshCategory, setRefreshCategory] = useState(false)

    const location = useLocation()

    useEffect(() => {
        const init = async () => {
            const response = await axios.post(`${apiseven}/categorydetails/`, {
                curriculum_name: location.state.curriculum,
                school_name: location.state.school_name
            })

            if (response.status === 200 && JSON.parse(response.data).statusCode == 200) {                
                setCategories(JSON.parse(response.data).body)
            }
        }
        init()
    }, [refreshCategory])

    useEffect(() => {
        setSubcategories(
            categories.filter(item =>  item.category_name == selectedCategory))
    }, [selectedCategory])

    // useEffect(() => {
    //     const init = async () => {
    //         const response = await axios.post(`${apiseven}/`)
    //     }
    //     init()
    // }, [category])

    const addCategory = async () => {
        const response = await axios.post(`${apiseven}/addcategory/`, {
            category_name: category,
            sub_category_name: defaultSubcategory,
            curricullum_name: location.state.curriculum,
            school_name: location.state.school_name
        })
    }

    return (
        <div className="_1uir">
            <div className="_0koz">
                <img src={Logo} alt="logo" />
                <span>To (fo)llow students' learning journeys</span>
            </div>
            <div className="container">
                <h1>Create and modify categories</h1>
                <div className="_7wje">
                    <div>
                        <span>School Name</span>
                        <span className="curriculum">
                            {location.state && location.state.school_name}
                        </span>
                    </div>
                    <div>
                        <span>Curriculum</span>
                        <span className="curriculum">
                            {location.state && location.state.curriculum}
                        </span>
                    </div>
                    <span>Add a new category</span>
                    <div  className="_3rkt">
                        <span>Category</span>
                        <input
                            value={category}
                            placeholder="Category"
                            onChange={e => setCategory(e.target.value)}
                        />
                    </div>
                    <div className="_3rkt">
                        <span>Default Subcategory</span>
                        <input
                            value={defaultSubcategory}
                            placeholder="Default Subcategory"
                            onChange={e => setDefaultSubcategory(e.target.value)}
                        />
                        <button onClick={
                            () => {
                                addCategory()
                                setRefreshCategory(prev => !prev)
                        }}>Add</button>
                    </div>
                    <span>Add a new sub category</span>
                    <div>
                        <span>Category</span>
                        <Dropdown 
                            value={selectedCategory}
                            setValue={setSelectedCategory}
                            items={categories.map(item => item.category_name)}
                            placeholder="Select Category"
                        />
                    </div>
                    <div className="subcategories">
                        <span>Subcategories</span>
                        <div>
                            {subcategories.map(item => {
                                return <span>{item.sub_category_name}</span>
                            })}
                        </div>
                    </div>
                    <div className="_3rkt">
                        <span>Subcategory</span>
                        <input
                            value={subcategory}
                            placeholder="Subcategory"
                            onChange={e => setSubcategory(e.target.value)}
                        />
                        <button>
                            Add
                        </button>
                    </div>
                </div>
            </div>
            <img className="_9wfz" src={sidePhoto} alt="" />
        </div>
    )
}

export default CurriculumSelection
