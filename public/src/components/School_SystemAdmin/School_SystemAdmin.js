import React,{ useState, useEffect  } from 'react'
import { useNavigate } from 'react-router-dom';
import { Bar } from "react-chartjs-2";
import Chart from 'chart.js/auto';
import { useDispatch } from 'react-redux';
import "./School_SystemAdmin.css"
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
import Footer from '../Footer'
import { useSelector } from 'react-redux';
import { activeStudent,userCount } from '../../actions/school_systemadmin';
import Select from 'react-select'



const initialState = { year_level: '',report_type:'',adjustment_type:'', date_from: '',date_to:''};
function School_SystemAdmin() {
    const [form, setForm] = useState(initialState);
  const dispatch = useDispatch();
  
  const history = useNavigate();
  const apiData = useSelector((state) => state.auth); 
  const user= JSON.parse(localStorage.getItem('profile'))
  useEffect(() => {
    dispatch(userCount({schools : user?.school_name,role:"Student"}))
    dispatch(userCount({schools : user?.school_name,role:"Parent"}))
    dispatch(userCount({schools : user?.school_name,role:"Teacher"}))
  dispatch(activeStudent({schools : user?.school_name}))},[])
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
  const CoordinatorMapping=()=>{
    history("/Assignation")
  }
  return (
    <div class="school-sysAdmin">
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
              <div class="card" onClick={()=>history("/TotalStudentDetails")}>
                <img src={handshake} style={{backgroundColor:"#69B3DD"}}/>
                <div class="text">
                  <p style={{fontSize:"2rem",marginTop:".5rem",marginBottom:"-.5rem"}}>{apiData.totalStudent>0?apiData.totalStudent:0}</p>
                  <p style={{float:"left",width:"60%"}}>All Students</p>
                  <img src={arrow} style={{float:"right",marginTop:"1rem",marginRight:"1rem"}}/>
                </div>
              </div>
              <div class="card" onClick={()=>history("/ActiveStudentDetails")}>
                <img src={flag} style={{backgroundColor:"#FCB730"}}/>
                <div class="text">
                  <p style={{fontSize:"2rem",marginTop:".5rem",marginBottom:"-.5rem"}}>{apiData.activeStudent>0?apiData.activeStudent:0}</p>
                  <p style={{float:"left",width:"60%"}}>Active Student</p><img src={arrow} style={{float:"right",marginTop:"1rem",marginRight:"1rem"}}/>
                </div>
              </div>
              <div class="card" onClick={CoordinatorMapping}>
                <img src={improve} style={{backgroundColor:"#889159"}}/>
                <div class="text">
                  {/* <p style={{fontSize:"2rem",marginTop:".5rem",marginBottom:"-.5rem"}}></p> */}
                  <p style={{float:"left",width:"60%",marginTop:"1.5rem"}}>Student-Teacher Mapping</p><img src={arrow} style={{float:"right",marginTop:"1rem",marginRight:"1rem"}}/>
                </div>
              </div>
              <div class="card" >
                <img src={improve} style={{backgroundColor:"#D3AB88"}}/>
                <div class="text" onClick={()=>history("/Setting")}>
                  {/* <p style={{fontSize:"2rem",marginTop:".5rem",marginBottom:"-.5rem"}}></p> */}
                  <p style={{float:"left",width:"60%",marginTop:"2rem"}}>Setting</p><img src={arrow} style={{float:"right",marginTop:"1rem",marginRight:"1rem"}}/>
                </div>
              </div>
              
            </div>
            <div class="right">
               
             <div class="graph">
              
            <Bar
          data={{
            
            // Name of the variables on x-axies for each bar
            labels: ["All Students", "Active Students", "Teachers"
            // , "Parents"
          ],
            datasets: [
              {
                // Label for bars
                
                
                // Data or value of your each variable
                data: [apiData.totalStudent>0?apiData.totalStudent:0, apiData.activeStudent>0?apiData.activeStudent:0, apiData.teacher>0?apiData.teacher:0
                  // , apiData.parent>0?apiData.parent:0
                ],
                // Color of each bar
                backgroundColor: ["#69B3DD", "#FCB730", "#889159","#D3AB88","#F05D46"],
                // Border color of each bar
                borderColor: ["#69B3DD", "#FCB730", "#889159","#D3AB88","#F05D46"],
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
              plugins:{
                legend:{display:false},
              },
              
              responsive: true,
              maintainAspectRatio: false,
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
    <Footer/>
    </div>
  )
}

export default School_SystemAdmin