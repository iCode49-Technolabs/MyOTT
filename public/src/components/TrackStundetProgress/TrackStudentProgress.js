import React, { useState, useEffect, useMemo } from "react";

import { useDispatch, useSelector } from "react-redux";
import "./TrackStudentProgress.css";

import { viewAllProgress } from "../../actions/track_progress";
import Pagination from "./../Pagination/Pagination";

import Header from "../Header";
import Footer from "../Footer";
import { Top } from "./Top";
import { StudentSearch } from "./StudentSearch";
import {Graph} from "./Graph"

function TrackStudentProgress() {
  const user= JSON.parse(localStorage.getItem('profile'))
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(viewAllProgress({teacher:user?.email,school_name:user?.school_name}))
  },[])
  const [currentPage, setCurrentPage] = useState(1);
  
  const data= useSelector((state) => state.track_progress?.progressdata);
  
  
 
 
  const [search, setSearch] = useState("")
  

  
	
  // const data=[
  //   {student:"Jack",dates:["01-02-2023","02-02-2023","14-02-2023","15-02-2023"],values:[1,3,8,7]},
  //   {student:"Jill",dates:["14-02-2023","15-02-2023","14-02-2023","15-02-2023"],values:[2,8,3,5]},
  //   {student:"Shawn",dates:["01-02-2023","02-02-2023","14-02-2023","15-02-2023"],values:[1,3,6,7]},
  //   {student:"Paul",dates:["14-02-2023","15-02-2023","14-02-2023","15-02-2023"],values:[2,8,9,1]},
  //   {student:"Jack",dates:["01-02-2023","02-02-2023","14-02-2023","15-02-2023"],values:[1,3,8,7]},
  //   {student:"Jill",dates:["14-02-2023","15-02-2023","14-02-2023","15-02-2023"],values:[2,8,3,5]},
  //   {student:"Shawn",dates:["01-02-2023","02-02-2023","14-02-2023","15-02-2023"],values:[1,3,6,7]},
  //   {student:"Paul",dates:["14-02-2023","15-02-2023","14-02-2023","15-02-2023"],values:[2,8,9,1]},
  //   {student:"Shawn",dates:["01-02-2023","02-02-2023","14-02-2023","15-02-2023"],values:[1,3,6,7]},
  //   {student:"Paul",dates:["14-02-2023","15-02-2023","14-02-2023","15-02-2023"],values:[2,8,9,1]},
  //   {student:"Jack",dates:["01-02-2023","02-02-2023","14-02-2023","15-02-2023"],values:[1,3,8,7]},
  //   {student:"Jill",dates:["14-02-2023","15-02-2023","14-02-2023","15-02-2023"],values:[2,8,3,5]},
  //   {student:"Shawn",dates:["01-02-2023","02-02-2023","14-02-2023","15-02-2023"],values:[1,3,6,7]},
  //   {student:"Paul",dates:["14-02-2023","15-02-2023","14-02-2023","15-02-2023"],values:[2,8,9,1]},
    
  // ]
 const color=["#61C4FC"," #f4cf4f","rgb(128, 162, 120)","#D3AB88","#F05D46"]
    let PageSize = 8;
	const currentTableData = useMemo(() => {
		const firstPageIndex = (currentPage - 1) * PageSize;
		const lastPageIndex = firstPageIndex + PageSize;
		return data && data.slice(firstPageIndex, lastPageIndex)
	}, [currentPage, data]);
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
    results = currentTableData
  }
  return (
    <div className="track-student-progress">
      <Header />
      
      <div className="container">

        
        <Top number={data!=undefined&&typeof(data)!="string"&&data.length}/>
        <StudentSearch search={search} setSearch={setSearch} />
       
        <div className="bottom">
          <div className="student-table">
            {results!=undefined&&typeof(results)!="string"&&results.map((value,index)=>(<div className="graph-container"><Graph data={value} color={color[index%5]}/></div>))}
            
          </div>
          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={data?.length > 0 ? data?.length : 10}
            pageSize={PageSize}
            onPageChange={(page) => setCurrentPage(page)}
          />{" "}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default TrackStudentProgress;
