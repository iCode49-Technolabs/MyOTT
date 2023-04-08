import "./PopUp.css"
import { CloseIcon, InfoIcon } from "../../assets/Icons"
import { useNavigate } from 'react-router-dom';
import React, { useState,useEffect  } from 'react';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { category_of_concern } from "../../actions/setting";
const SuccessPopUp = ({setPopup,data}) => {
    

	const apiData = useSelector((state) => state.setting.view_category_of_concern);
	const dispatch = useDispatch();
	useEffect(() => {
		// dispatch(category_of_concern({school_name: user.school_name, type: "view",class_year:location.state?.student?.class_year }));
		dispatch(category_of_concern({school_name: data.school_name, type: "view",student_email:data.email }));
	}, []);
	const nested_list_data=(typeof(apiData)!="string"&&apiData!=undefined)?apiData.map((value)=>JSON.parse(value)):[]
	const category_of_concerns=JSON.parse(data.category_of_concerns)
    
    return (
		<div className="assesssment_request">
        <div className="popup__container">
            <div className="popup__box">
            <CloseIcon onClick={() => setPopup(false)} />
            <br/>
                <div className="popup__box_main" >
                   
				<div className="comment-container">
				<div className="category-container">
						<p className="sub-title">Category of Concern</p>
						{nested_list_data!=undefined&&nested_list_data.map((category)=>(
							<div className="category">
							<label><input type={"checkbox"} name="category" checked={category_of_concerns.category.includes(category.value)}  className="checkbox"/>{category.label}</label><br/>
							{category.children.map((subcategory)=>(
								
								category_of_concerns.category.includes(category.value)&&category_of_concerns.subcategory.includes(subcategory.value)&&
								<div className="subcategory"><label>&ensp;&ensp;<input type={"checkbox"} name="subcategory" checked={category_of_concerns.subcategory.includes(subcategory.value)} className="checkbox"/>{subcategory.label}</label><br/>
								{subcategory.children.map((layer1)=>(
									category_of_concerns.subcategory.includes(subcategory.value)&&category_of_concerns.layer1.includes(layer1.value)&&
									<div className="layer1">
									<label>&emsp;&emsp;<input type={"checkbox"} name="layer1" checked={category_of_concerns.layer1.includes(layer1.value)} className="checkbox"/>{layer1.label}</label><br/>
									{layer1.children.map((layer2)=>(
										category_of_concerns.layer1.includes(layer1.value)&&category_of_concerns.layer2.includes(layer2.value)&&
										<div className="layer2">
										<label>&emsp;&emsp;&emsp;<input type={"checkbox"} name="layer2" checked={category_of_concerns.layer2.includes(layer2.value)} className="checkbox"/>{layer2.label}</label><br/>
										</div>
									))}
									</div>
								))}
								</div>
							))}
							</div>
						))}
						
					</div>
									<div
										style={{ display: "flex", justifyContent: "space-between" }}
									>
										<p className="sub-title">
											<span style={{ color: "#f05d46" }}>
												{data?.teacher_email}
											</span>{" "}
											: {data?.created_date}
										</p>
										<p className="sub-title">
											Status :{" "}
											<span style={{ color: "#f05d46" }}>{data?.status}</span>
										</p>
									</div>
									
									<div className="comment">
										<p className="sub-title">Lesson Modification Notes</p>
										<p className="para"> {data?.notes}</p>
									</div>
									

								</div>
                    
                </div>
            </div>
        </div></div>
    )
}

export default SuccessPopUp
