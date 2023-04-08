import "./css/UserDetails.css"
import { useState, useEffect, useMemo } from "react"
import photo from "../images/ProfilePhoto.png"
import group from "../images/Mask Group.png"
import exportFromJSON from "export-from-json"
import axios from "axios"
import {apifive} from "../../config/backend.js"
import Pagination from './../Pagination/Pagination'
import { EditIcon } from "../../assets/Icons"
import EditData from "../Modals/EditData"
import Header from "../Header"
import Footer from "../Footer"

const UserDetails = () => {
  const fileName = "download1"
  const exportType = "csv"

  const [data, setData] = useState(null)
  const [search, setSearch] = useState("")
  const [checkboxes, setCheckboxes] = useState([])
  const [popup, setPopup] = useState(false)
  const [edit, setEdit] = useState(null)
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('profile')))

  useEffect(() => {
    document.title = "Tollow • User Details"

    const init = async () => {
      const response = await axios.post(`https://4ik4motyek.execute-api.ap-south-1.amazonaws.com/default/sysadmin_userDetails`, { users: "all" })

      if (response.status === 200) {
        setData(JSON.parse(response.data).body)
      }
    }
    init()
  }, [])



  // Pagination
  let PageSize = 10

  const [currentPage, setCurrentPage] = useState(1)

  const table = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize
    const lastPageIndex = firstPageIndex + PageSize
    return data && data.slice(firstPageIndex, lastPageIndex)
  }, [currentPage, data])

  // Search filtering
  let results

  if (search) {
    results = data.filter(item => {
      let found = false
      Object.entries(item).map(([key, value]) => {
        if (String(value).toLowerCase().includes(search.toLowerCase())) {
          found = true
        }
      })
      return found
    })
    results.length = PageSize
  } else {
    results = table
  }
  const ExportToExcel = () => {
    var data
    if(checkboxes!=null){
      data=(results.map((value)=>checkboxes.includes(value.email)&&value)).filter(element => ![false].includes(element));
    }
    else
    data=results
    
    exportFromJSON({ data, fileName, exportType })
  }
  const deleteUsers = async (users) => {
    
    await axios.post(`https://3o3kqx5dp6.execute-api.ap-south-1.amazonaws.com/default/sysadmin_deleteUser`, {
      users: users.join(",")
    })
  }

  return (
    <>
      <Header />
      <div className="sysAdmin">
        {popup ? <EditData user={edit} setPopup={setPopup} setData={setData} /> : undefined}
        <div className="container">
          <div className="top">
            
            <div className="welcome">
              <p
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "700",
                  color: "#F05D46",
                }}
              >
                Welcome back {user?.first_name}!
              </p>
              <p
                style={{ fontSize: "small", fontWeight: "500", color: "#092433" }}
              >
                Check your dashboard for a quick view of what’s pending and new
                updates.
              </p>
            </div>
            <img src={group} className="group" />
          </div>
          <div className="bottom">
            <div className="detailsTable userdetails__table">
              <div className="userdetails__settings">
                <input
                  placeholder="Search"
                  value={search}
                  maxLength={120}
                  onChange={e => setSearch(e.target.value)}
                />
                <div>
                  <button className="settings__button"
                    onClick={() => {
                      deleteUsers(checkboxes)
                      const datacopy = data.filter(item => !checkboxes.includes(item.email))
                      setData([...datacopy])
                      setCheckboxes([])
                    }}
                  >
                    Delete
                  </button>
                  <button className="settings__button"
                    onClick={ExportToExcel}
                  >
                    Export To Excel
                  </button>
                </div>
              </div>
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>School Name</th>
                    <th>Contact Details</th>
                    <th>Class Year</th>
                    <th>Assessment Request</th>
                    <th>IEP</th>
                    <th>Active</th>
                  </tr>
                </thead>
                <tbody>
                  {results && results.map((data, index) => {
                    return (
                      <tr key={data.email} className={index % 2 == 0 ? "light" : "dark"}>
                        <td className="userdetails__checkbox">
                          <div className="_1phf">
                            <input
                              type="checkbox"
                              onChange={e => {
                                e.target.checked === true ? setCheckboxes(prev => [...prev, data.email]) : setCheckboxes(prev => prev.filter(item => item !== data.email))
                              }}
                            />
                            <EditIcon onClick={() => {
                              setEdit(data)
                              setPopup(true)
                            }} />
                          </div>
                        </td>
                        <td>{data.first_name}</td>
                        <td>{data.last_name}</td>
                        <td>{data.email}</td>
                        <td>{data.role}</td>
                        <td>{data.school_name}</td>
                        <td>{data.contact_number}</td>
                        <td>{data.class_year}</td>
                        <td style={{textTransform:"uppercase"}}>{data.role=="Student"&&data.assessment_request}</td>
                        <td style={{textTransform:"uppercase"}}>{data.role=="Student"&&data.iep}</td>
                        <td style={{textTransform:"uppercase"}}>{data.active}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <Pagination
              className="pagination-bar"
              currentPage={currentPage}
              totalCount={data ? data.length : 1}
              pageSize={PageSize}
              onPageChange={page => setCurrentPage(page)}
            />
        </div>
      </div>
      <Footer />
    </>
    
  )
}

export default UserDetails
