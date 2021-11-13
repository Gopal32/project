import React,{ useState } from "react";
import Img1 from "../image/img1.png";
import Img2 from "../image/image2.png";
import Back from '../image/back.png';
import Vector1 from "../image/Vector1.png";
import Vector2 from "../image/Vector2.png";
import View from './View';
import Data from './MOCK_DATA.json';

const Learner = () => {

    const [slide, setSlide] = useState(false);
    const [filters, setFilters] = useState("");
    const [currentvalue, setCurrentvalue] = useState(-1)

    const showSlide = (value,index) => {
        setSlide(!slide);
        console.log(index)
        setCurrentvalue(value);
    };

    return (
        <>
        <div className="main_learner">
            <div className="main_head">
                <div className="learn">
                    <h1>Learners</h1>
                    <h3>Partners/ Learners</h3>
                </div>
                <div className="add_leraner">
                    <button >+Add Learner</button>
                </div>
                <div className="or">
                    <label>OR</label>
                </div>
                <div className="inp">
                    <input type="text" placeholder="Search by name" onChange={(event) => {setFilters(event.target.value)}} />
                </div>
                <div className="inp">
                    <input type="text" placeholder="Search by name" />
                </div>
                <div className="categories">
                    <select className="cat">
                        <option>categories</option>
                        <option>2</option>
                    </select>
                </div>
                <div>
                    <select className="status" >
                        <option>Status</option>
                        <option>2</option>
                    </select>
                </div>
                <div className="search" >
                    <button className="btn" >Search</button>
                </div>
            </div>
            <div className="main_body">
                <center>
                    <table>
                        <thead>
                            <tr className="row_head">
                                <th>User</th>
                                <th>Email</th>
                                <th>Last Login</th>
                                <th>Case manager</th>
                                <th>Tags</th>
                                <th>Intervention</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Data.filter((value) =>{
                                if(filters === ""){
                                    return value
                                }else if(value.first_name.toLowerCase().includes(filters.toLowerCase())){
                                    return value
                                }
                            }).map((value, index) => (
                                <tr className="row_body" key={index}>
                                    <td>
                                        <div className="details">
                                            <img src={Img1} className="img" alt="img" />
                                            <div className="name_details">
                                                <label className="name">{value.first_name} {value.last_name}</label><br/>
                                                <label className="moblie">+8801719441978</label>
                                            </div>
                                            <img src={Img2} className="img2" alt="img" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="email">
                                            <img src={Vector2} alt="vector" />
                                            <label>{value.email}</label>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="login">
                                            <img src={Vector1} alt="vector" />
                                            <label>Last Login: {value.join_date}</label>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="case_mag">
                                            <label>{value.case}</label>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="tag" >
                                            <label>{value.tag}</label>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="intervention">
                                            <button onClick={() => showSlide(value,index)} key={index}>View details</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </center>
                {currentvalue ? ( 
                <div className={slide ? 'panel active' : 'panel'} >
                    <div className="view_panel">
                        <div className="back">
                            <img src={Back} onClick={showSlide} alt="back"/>
                            <label onClick={showSlide} className="lab">Back to home</label>
                        </div>
                        <div className="main">
                            <View value={currentvalue}/>
                        </div>
                    </div>
                </div>
                ): ""}
            </div>
        </div>
        </>
    )
}

export default Learner;