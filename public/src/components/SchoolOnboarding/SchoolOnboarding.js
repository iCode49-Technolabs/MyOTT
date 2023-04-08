import React, { useState, useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Select from "react-select";
import countryList from "react-select-country-list";
// import { schoolOnboarding } from '../../actions/auth';
import { curriculum,schoolonboarding } from "../../actions/auth";
import "./SchoolOnboarding.css";
import pic from "./../images/login.png";
import logo from "./../images/logo.png";
import { useSelector } from "react-redux";
import Switch from "react-switch";
import { Country, State, City } from "country-state-city";
import { MultiSelect } from "react-multi-select-component";
import { CloseIcon } from "../../assets/Icons.jsx"
import SuccessPopUp from './SuccessPopUp';
const initialState = {
  school_name: "",
  address: "",
  city: "",
  state: "",
  country: "Australia",
  pincode: "",
  contact_details: "",
  curriculum_name: "",
  share_data: "",
  retention: "",
  email:""
};
function SchoolOnboarding() {
  const [form, setForm] = useState(initialState);
  const [curriculums, setCurriculums] = useState();
//   const [schoolSelect, setSchoolSelect] = useState([]);
  const [phone, setPhone] = useState("au");
  const [address, setAddress] = useState({
    address1: "",
    address2: "",
    address3: "",
  });
  const user = JSON.parse(localStorage.getItem("profile"))
  const [popup, setPopup] = useState(false)
  const apiData = useSelector((state) => state.auth);
  const optionsCountry = Country.getAllCountries().map((data) => ({
    value: data.isoCode,
    label: data.name,
  }));
  const [optionsStates, setOptionsStates] = useState(
    State.getStatesOfCountry("AU").map((data) => ({
      value: data.isoCode,
      label: data.name,
      ccode: "AU",
    }))
  );
  const [optionsCity, setOptionsCity] = useState(
    City.getCitiesOfCountry("AU").map((data) => ({
      value: data.isoCode,
      label: data.name,
    }))
  );
  const [checked, setChecked] = useState(false)

  
  
  const years = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "6", label: "6" },
    { value: "7", label: "7" },
    { value: "8", label: "8" },
    { value: "9", label: "9" },
    { value: "10", label: "10" },
  ];

  const handleSelectChange = (value, action) => {
    setForm({ ...form, [action.name]: value["label"] });
    if (action.name == "country") {
      setPhone(value["value"].toLowerCase());
      setOptionsStates(
        State.getStatesOfCountry(value["value"]).map((data) => ({
          value: data.isoCode,
          label: data.name,
          ccode: data.countryCode,
        }))
      );
      console.log(optionsStates);
    }
    if (action.name == "state") {
      setOptionsCity(
        City.getCitiesOfState(value["ccode"], value["value"]).map((data) => ({
          value: data.isoCode,
          label: data.name,
        }))
      );
      console.log(value["ccode"], value["value"], optionsCity);
    }
  };
//   const handleSelectSchool = (value, action) => {
//     const temp = schoolSelect;
//     if (temp.includes(value)) {
//     } else {
//       temp.push(value);
//     }
//     setSchoolSelect(temp);
//     console.log(schoolSelect);
//   };
  const dispatch = useDispatch();
  const history = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(form);

    dispatch(schoolonboarding(form, history));
	setPopup(true)
  };
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  const handleAddress = (e) =>
    setAddress({ ...address, [e.target.name]: e.target.value });
	useEffect(()=>{setForm({ ...form, contact_details: phone,address:address.address1+" "+address.address2+" "+address.address3,share_data:checked?"yes":"no" ,email:user?.email});},[phone,address,checked])
  useEffect(() => {
    dispatch(curriculum({ curriculum: "all" }));
    
  }, []);
  useMemo(()=>{
	const temp = [];
    apiData?.curriculums?.body?.forEach((rol) => {
      temp.push({ value: rol, label: rol});
    });
	console.log(temp)
    setCurriculums(temp);
  },[apiData?.curriculums])

  return (
    <div class="schoolOnboarding">
		
		{popup ? <SuccessPopUp  setPopup={setPopup}  /> : undefined}
      <div class="content">
	  
        <div class="left">
		<button className="back-button" onClick={() => history(-1)}><div></div></button>
          <div class="top">
			
            <img src={logo} />
            <p class="tagline">To (fo)llow students' learning journeys</p>
          </div>

          <div class="signup">
            <p style={{ fontWeight: "bold", fontSize: "18px" }}>
              School Onboard
            </p>

            <form onSubmit={handleSubmit}>
							<div className="inputbox inputbox_main">
								<div>
									<div className="main__input">
										<label for="school_name">School Name<span class="required">*</span> : </label>
										<input
											type="text"
											id="school_name"
											name="school_name"
											placeholder="School Name"
											onChange={handleChange}
											required
											maxLength={69}
												pattern="[a-zA-Z0-9]+[a-zA-Z0-9 ]+"
												onInvalid={(e)=>e.target.setCustomValidity('Only Alphabets and numbers are allowed')}
											autoComplete="off"
										/>
									</div>
									<div className="main__input">
										<label for="address1">Address 1<span class="required">*</span>:</label>
										<input
											type="text"
											id="address1"
											name="address1"
											placeholder="Address 1"
											onChange={handleAddress}
											required
											maxLength={60}
												pattern="[a-zA-Z0-9]+[a-zA-Z0-9 ]+"
												onInvalid={(e)=>e.target.setCustomValidity('Only Alphabets and numbers are allowed')}
											autoComplete="off"
										/>
									</div>
									<div className="main__input">
										<label for="address2">Address 2:</label>
										<input
											type={"text"}
											id="address2"
											name="address2"
											placeholder={"Address 2"}
											maxLength={40}
												pattern="[a-zA-Z0-9]+[a-zA-Z0-9 ]+"
												onInvalid={(e)=>e.target.setCustomValidity('Only Alphabets and numbers are allowed')}
											onChange={handleAddress}
											autoComplete="off"
										/>
									</div>
									<div className="main__input">
										<label for="address3">Address 3:</label>
										<input
											type="text"
											id="address3"
											name="address3"
											placeholder="Address 3"
											maxLength={20}
												pattern="[a-zA-Z0-9]+[a-zA-Z0-9 ]+"
												onInvalid={(e)=>e.target.setCustomValidity('Only Alphabets and numbers are allowed')}
											onChange={handleAddress}
											autoComplete="off"
										/>
									</div>
									<div className="main__input">
										<label for="country">Country<span class="required">*</span> : </label>
										<Select
											className="select__drop"
											options={optionsCountry}
											id="country"
											name="country"
											value={{ label: form.country }}
											onChange={handleSelectChange}
											required
											autoComplete="off"
										/>
									</div>
									<div className="main__input">
										<label for="state">State<span class="required">*</span> : </label>
										<Select
											
											className="select__drop"
											options={optionsStates}
											id="state"
											name="state"
											value={{ label: form.state }}
											onChange={handleSelectChange}
											required
											autoComplete="off"
										/>
									</div>
									<div className="main__input">
										<label for="city">City<span class="required">*</span> : </label>
										<Select
											className="select__drop"
											options={optionsCity}
											id="city"
											name="city"
											
											
											value={{ label: form.city }}
											onChange={handleSelectChange}
											required
											autoComplete="off"
										/>
									</div>
									
								</div>
								<div>
									<div className="main__input">
										<label for="pincode">Postcode<span class="required">*</span> : </label>
										<input
											type={"text"}
											id="pincode"
											name="pincode"
											placeholder={"Postcode"}
											onChange={handleChange}
											style={{textTransform:"uppercase"}}
											pattern="[a-zA-Z0-9]+"
											maxLength={12}
												
											required
											autoComplete="off"
										/>
									</div>
									<div className="main__input">
										<label for="contact_details">Contact details<span class="required">*</span> : </label>
										<PhoneInput
											placeholder="Contact details"
											country={phone}
											id="contact_details"
											name="contact_details"
											value={phone}
											onChange={setPhone}
											required
											autoComplete="off"
										/>
									</div>
									<div className="main__input">
										<label for="curriculum_name">Curriculum<span class="required">*</span> : </label>
										<Select
											className="select__drop"
											options={curriculums}
											id="curriculum_name"
											name="curriculum_name"
											value={{ label: form.curriculum_name }}
											onChange={handleSelectChange}
											required
											autoComplete="off"
										/>
									</div>
									<div className="main__input">
										<label for="share_data">
											Would you like to share the adjustments repository with other schools?<span class="required">*</span>
										</label>
										<div className="select__school">
											<Switch
														onChange={() => setChecked(prev => !prev)}
														id="share_data"
														name="share_data"
														checked={checked}
											/>
											{/* {checked ? (
												<MultiSelect 
													className="select__drop"	
													options={school} 
													id="school_name" 
													name="school_name" 
													value={schoolSelect} 
													onChange={setSchoolSelect} 
													labelledBy="Select"
												/>
											
										) : undefined} */}
									</div>								
									</div>
									<div className="main__input">
										<label for="retention">
											How many years would you like your records to be stored?<span class="required">*</span>{" "}
										</label>
										<Select
											options={years}
											id="retention"
											name="retention"
											styles={{ backgroundColor: "#F5F5F5", width: "10rem" }}
											value={{ label: form.retention }}
											onChange={handleSelectChange}
											required
											autoComplete="off"
										/>
									</div>
								</div>
							</div>
							<button type="submit" className="left-submit">
                		Submit
              		</button>
            </form>
          </div>
        </div>

        <div class="right">
          <img src={pic} />
        </div>
        <br style={{ clear: "both" }} />
      </div>
    </div>
  );
}

export default SchoolOnboarding;
