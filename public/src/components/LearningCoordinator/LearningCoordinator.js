import React,{ useState, useEffect  } from 'react'
import { useNavigate } from 'react-router-dom';
import { Bar } from "react-chartjs-2";
import Chart from 'chart.js/auto';
import { useDispatch } from 'react-redux';
import "./LearningCoordinator.css"
import photo from "./../images/ProfilePhoto.png"
import group from "./../images/Mask Group.png"
import handshake from "./../images/handshake.png"
import flag from "./../images/waving-flag-.png"
import improve from "./../images/improve.png"
import calendar from "./../images/calendar.png"
import warning from "./../images/warning.png"
import arrow from "./../images/Arrow 1.png"
import logo from "./../images/logo1.png"
import notify from "./../images/notify.png"
import Header from '../Header';
import Footer from '../Footer';
import { useSelector } from 'react-redux';
import { newstudentcount,studentassessmentcount,userCount,populateyearlevels,barGraphCounts,studentreviewcount } from '../../actions/learningcoordinator';
import Select from 'react-select'
import api from '@fortawesome/fontawesome';



const initialState = { class_year: '',report_type:'',adjustment_type:'', date_from: '',date_to:''};
function LearningCoordinator() {
    const [form, setForm] = useState(initialState);
  const dispatch = useDispatch();
  
  const history = useNavigate();
  const apiData = useSelector((state) => state.auth); 
  const user= JSON.parse(localStorage.getItem('profile'))
  useEffect(() => {
    dispatch(newstudentcount({schools : user?.school_name,role:"student",iep:"no",assessment_request:"no",active:"yes",learning_coordinator:user?.email}))
  dispatch(studentassessmentcount({schools : user?.school_name,role:"student",assessment_request:"yes",active:"yes",learning_coordinator:user?.email}))
  dispatch(userCount({schools : user?.school_name,role:"Student"}))
  dispatch(userCount({schools : user?.school_name,role:"Teacher"}))
  dispatch(populateyearlevels())
  dispatch(studentreviewcount({school_name : user?.school_name,learning_coordinator:user?.email,type:"current"}))
  dispatch(studentreviewcount({school_name : user?.school_name,learning_coordinator:user?.email,type:"upcoming_overdue",review_status:"Upcoming Review"}))
  dispatch(studentreviewcount({school_name : user?.school_name,learning_coordinator:user?.email,type:"upcoming_overdue",review_status:"Overdue Review"}))
  dispatch(barGraphCounts({learning_coordinator_email:user?.email,school_name:user?.school_name}))
},[])
  const [ifPic,setIfPic]=useState(false)
  const [ifNotify,setIfNotify]=useState(false)
  const year_options=[
    {value:"",label:""},
  ]
  const report_options=[
    {value:"",label:""},
  ]
  const adjustment_options=[
    {value:"",label:""},
  ]
  const date_from_options=[
    {value:"",label:""},
  ]
  const date_to_options=[
    {value:"",label:""},
  ]
  const handleSelectChange = (value, action) => {
    console.log(action.name,value["label"])
    setForm({ ...form, [action.name]: value["label"] });
    
    
    console.log(form)
  }
  const barData=apiData?.bargraphcounts
  const barLabel=barData!=undefined&&JSON.parse(barData).class_year
  const barValue=barData!=undefined&&JSON.parse(barData).bar_data
  const qdtp=barData!=undefined&&barValue.map((value)=>value[0])
  const supplementary=barData!=undefined&&barValue.map((value)=>value[1])
  const extensive=barData!=undefined&&barValue.map((value)=>value[2])
  const substantial=barData!=undefined&&barValue.map((value)=>value[3])
  
  
  return (
    <div class="learning-coordinator">
      <Header/>
    <div class="container">
        <div class="top">
            
            <div class="welcome">
            <p style={{fontSize:"1.2rem",fontWeight:"700",color:"#F05D46"}}>Welcome back {user.first_name }!</p>
            <p style={{fontSize:"small",fontWeight:"500",color:"#092433"}}>Check your dashboard for a quick view of what’s pending and new updates.</p>
            </div>
            <img src={group} class="group"/>
        </div>
        <div class="bottom">
            <div class="left">
            <div class="card" >
                <img src={handshake} style={{backgroundColor:"#69B3DD"}}/>
                <div class="text" onClick={()=>history("/AllStudentDetails")}>
                  <p style={{fontSize:"1.2rem",marginTop:"1.3rem",marginBottom:"-.5rem"}}>All </p>
                  <p style={{float:"left",width:"60%"}}>Students</p>
                  <img src={arrow} style={{float:"right",marginTop:"1rem",marginRight:"1rem"}}/>
                </div>
              </div>
              <div class="card" >
                <img src={handshake} style={{backgroundColor:"#69B3DD"}}/>
                <div class="text" onClick={()=>history("/NewStudentDetails")}>
                  <p style={{fontSize:"2rem",marginTop:".5rem",marginBottom:"-.5rem"}}>{apiData.newstudentcount>0?Number(apiData.newstudentcount):0}</p>
                  <p style={{float:"left",width:"60%"}}>New Students</p>
                  <img src={arrow} style={{float:"right",marginTop:"1rem",marginRight:"1rem"}}/>
                </div>
              </div>
              <div class="card" onClick={()=>history("/AssessmentRequests")}>
                <img src={flag} style={{backgroundColor:"#FCB730"}}/>
                <div class="text">
                  <p style={{fontSize:"2rem",marginTop:".5rem",marginBottom:"-.5rem"}}>{apiData.studentassessmentcount>0?Number(apiData.studentassessmentcount):0}</p>
                  <p style={{float:"left",width:"60%"}}>Assessment Requests</p><img src={arrow} style={{float:"right",marginTop:"1rem",marginRight:"1rem"}}/>
                </div>
              </div>
              <div class="card" onClick={()=>history("/CurrentTracking")}>
                <img src={improve} style={{backgroundColor:"#889159"}}/>
                <div class="text">
                  <p style={{fontSize:"2rem",marginTop:".5rem",marginBottom:"-.5rem"}}>{apiData.allreviewcount>0?apiData.allreviewcount:0}</p>
                  <p style={{float:"left",width:"60%"}}>Current Tracking</p><img src={arrow} style={{float:"right",marginTop:"1rem",marginRight:"1rem"}}/>
                </div>
              </div>
              <div class="card" onClick={()=>history("/UpcomingReview")}>
                <img src={calendar} style={{backgroundColor:"#D3AB88"}}/>
                <div class="text">
                  <p style={{fontSize:"2rem",marginTop:".5rem",marginBottom:"-.5rem"}}>{apiData.upcomingreviewcount>0?apiData.upcomingreviewcount:0}
                  </p>
                  <p style={{float:"left",width:"60%"}}>Upcoming Reviews</p><img src={arrow} style={{float:"right",marginTop:"1rem",marginRight:"1rem"}}/>
                </div>
              </div>
              <div class="card" onClick={()=>history("/OverdueReview")}>
                <img src={warning} style={{backgroundColor:"#F05D46"}}/>
                <div class="text">
                  <p style={{fontSize:"2rem",marginTop:".5rem",marginBottom:"-.5rem"}}>{apiData.overduereviewcount>0?apiData.overduereviewcount:0}</p>
                  <p style={{float:"left",width:"60%"}}>Overdue IEP Reviews</p><img src={arrow} style={{float:"right",marginTop:"1rem",marginRight:"1rem"}}/>
                </div>
              </div>
            </div>
            <div class="right">
                <div className='quick-report'>
                    <p>Quick Report</p>
                    <form>
                    <Select options={apiData.populateyearlevels!=undefined&&typeof(apiData.populateyearlevels)!='string'&&apiData.populateyearlevels?.map((populateyearlevels)=>({value:populateyearlevels.class_year,label:populateyearlevels.class_year}))} name="class_year" placeholder={<div className="select-placeholder-text">Select Year levels</div>}  onChange={handleSelectChange} required/>
                    <Select options={report_options} name="report_type"  placeholder={<div className="select-placeholder-text">Select Report type</div>} value={form.report_type} onChange={handleSelectChange} required/>
                    <Select options={adjustment_options} name="adjustment_type"  placeholder={<div className="select-placeholder-text">Select Adjustment level</div>} value={form.adjustment_type} onChange={handleSelectChange} required/>
                    <Select options={date_from_options} name="date_from"  placeholder={<div className="select-placeholder-text">Date from:</div>} value={form.date_from} onChange={handleSelectChange} required/>
                    <Select options={date_to_options} name="date_to" placeholder={<div className="select-placeholder-text">Date to:</div>} value={form.date_to} onChange={handleSelectChange} required/>
                    <button type="submit" className="report-submit" onClick={()=>history('/ReportStudentDetails',{state:{class_year:form.class_year}})}>Generate</button>
                    </form>
                </div>
             <div class="graph">
              
            <Bar
            // data={data}
          data={{
            
            // Name of the variables on x-axies for each bar
            labels: barData!=undefined&&barLabel,
            datasets: [
             
              {
                // Label for bars
                label:"QDTP",
                // Data or value of your each variable
                data: qdtp,
                // Color of each bar
                backgroundColor: ["#F05D46"],
                // Border color of each bar
                borderColor:["#F05D46"],
                borderWidth: 0.1,
                barThickness: 10,
                borderRadius:5,
                
                
              },{
                // Label for bars
                label:"Supplementary",
                // Data or value of your each variable
                data:supplementary,
                // Color of each bar
                backgroundColor: [ "#69B3DD"],
                // Border color of each bar
                borderColor: [ "#69B3DD"],
                borderWidth: 0.1,
                barThickness: 10,
                borderRadius:5,
                barPercentage:100
                
              },
              {
                // Label for bars
                label:"Substantial",
                // Data or value of your each variable
                data:substantial,
                // Color of each bar
                backgroundColor: [ "#FCB730"],
                // Border color of each bar
                borderColor: [ "#FCB730"],
                borderWidth: 0.1,
                barThickness: 10,
                borderRadius:5,
                
                
              },
              {
                // Label for bars
                label:"Extensive",
                // Data or value of your each variable
                data: extensive,
                // Color of each bar
                backgroundColor: [ "#889159"],
                // Border color of each bar
                borderColor:[ "#889159"],
                borderWidth: 0.1,
                barThickness: 10,
                borderRadius:5,
                
                
              },
            ],
          }}
          // Height of graph
          height={400}
          width={1000}
          
          options= {
            {
              
                  
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  position:"bottom"
                }},
              scales: {
              x: {
                grid: {
                  display: false
                }
              },
              y: {
                grid: {
                  display: false
                },ticks: {
                  
                  stepSize: 2
                },
              }
            }}
          }
        />
            </div>
            </div> 
        </div>
    </div>
    <div style={{clear:'both'}}></div>
    <div style={{height:"2rem"}}></div>
    <Footer/>
    </div>
  )
}

export default LearningCoordinator