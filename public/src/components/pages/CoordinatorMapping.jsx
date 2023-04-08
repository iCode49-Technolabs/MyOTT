import "./css/CoordinatorMapping.css"
import sidePhoto from "../images/login.png"
import Logo from "../images/logo.png"
import Dropdown from "../DropDown"
import { EditPencil, SaveIcon } from "../../assets/Icons"
import { useState, useEffect, useMemo } from "react"
import Pagination from "../Pagination/Pagination"
import axios from "axios"
import {apitwelve} from "../../config/backend"

const CoordinatorMapping = () => {
    const [table, setTable] = useState([])
    const [coordinator,setCoordinator]=useState([])
    const [user, setUser] = useState(() => localStorage.getItem("profile"))
    const [value,setValue] = useState()
    useEffect(() => {
      const init = async () => {
        const response = await axios.post(`${apitwelve}/roledisplay/`, {
          schools: JSON.parse(user).body[0].school_name,
          role: "Student",
          active: "yes"
        })

        setTable(JSON.parse(response.data).body)
        
      }
      init()

    }, [])
    useEffect(() => {
      const init = async () => {
        const response = await axios.post(`${apitwelve}/roledisplay/`, {
          schools: JSON.parse(user).body[0].school_name,
          role: "Coordinator",
          active: "yes"
        })
        setCoordinator(JSON.parse(response.data).body)
        
      }
      init()

    }, [])
    
   
    let PageSize = 6

    const [currentPage, setCurrentPage] = useState(1)

    const data = useMemo(() => {
      const firstPageIndex = (currentPage - 1) * PageSize
      const lastPageIndex = firstPageIndex + PageSize
      return table && table.slice(firstPageIndex, lastPageIndex)
    }, [currentPage, table])
    return (
        <div className="_5gkw">
            <div className="_0koz">
                <img src={Logo} alt="logo" />
                <span>To (fo)llow students' learning journeys</span>
            </div>
            <div className="container">
                <div className="_4lgj">
                  <table>
                    <thead>
                      <tr>
                        <th className="_2kvj"></th>
                        <th>Student Email</th>
                        <th>Assigned Coordinator</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data && data.map((item, index) => (
                        <tr className={index % 2 == 0 ? "light" : "dark"}>
                          <td>
                            <div className="_1phf">
                              <EditPencil />
                              <SaveIcon />
                            </div>
                          </td>
                          <td>{item.email}</td>
                          <td>
                            <div className="_0mlx">
                              <Dropdown 
                                placeholder="Select Coordinator"
                                items={coordinator.map((info)=> info.email)}
                                value={value}
                                setValue={setValue}
                              />
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="_1vwm">
                    <Pagination
                      className="pagination-bar"
                      currentPage={currentPage}
                      totalCount={table ? table.length : 1}
                      pageSize={PageSize}
                      onPageChange={page => setCurrentPage(page)}
                    />
                  </div>
                </div>
            </div>
            <img className="_9wfz" src={sidePhoto} alt="" />
        </div>
    )
}

export default CoordinatorMapping
