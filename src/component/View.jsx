import React from "react";
import Card from '@mui/material/Card';
import { CardMedia } from "@mui/material";
import Img2 from "../image/image2.png";
import Img3 from "../image/img3.png";
import Photo from "../image/photo.png";
import { Box } from "@mui/system";
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const View = (value) => {

    return (
        <>
        <div className="main_left">
            <div className="main_card">
                <Card sx={{ display: 'flex', backgroundColor: '#CBCBCB', border: 'none', boxShadow: 'none'}}>
                    <CardMedia
                        component="img"
                        sx={{ width: '168px', height:'168Px' }}
                        image={Photo}
                        alt="Live from space album cover"
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography className="name" component="div" variant="h5">
                                {value.value.first_name} {value.value.last_name}
                            </Typography>
                            <Typography className="mobile" variant="subtitle1" color="text.secondary" component="div">
                                +8801719441978
                            </Typography>
                            <Typography className="mobile" variant="subtitle1" color="text.secondary" component="div">
                                {value.email}
                            </Typography>
                            <Typography className="mobile" variant="subtitle1" color="text.secondary" component="div">
                                DOB: <span style={{ color:'black'}}><b>{value.value.dob}</b></span>
                            </Typography>
                            <Typography className="mobile" variant="subtitle1" color="text.secondary" component="div">
                                Gender: <span style={{ color:'black'}}><b>{value.value.select_gen}</b></span>
                            </Typography>
                            <Typography className="mobile" variant="subtitle1" color="text.secondary" component="div">
                                Adress: <span style={{ color:'black'}}><b>{value.value.address}</b></span>
                            </Typography>
                        </CardContent>
                    </Box>
                </Card>
            </div>
            <div className="info">
                <div className="tags">
                    <div className="peak">
                        <label>Peak</label>
                        <img src={Img2} className="img2" alt="img" />
                    </div>
                    <div className="cognible">
                        <label>Cognible</label>
                        <img src={Img2} className="img2" alt="img" />
                    </div>
                    <div className="research">
                        <label>Research Participant</label>
                        <img src={Img2} className="img2" alt="img" />
                    </div>
                </div>
                <div className="records">
                    <h2>Records</h2>
                    <div className="list_details">
                        <div className="bullets">
                            <ul>
                                <li><label>Height:</label></li>
                                <li><label>Weight:</label></li>
                                <li><label>SSN/Adhaar:</label></li>
                                <li><label>Language:</label></li>
                            </ul>
                        </div>
                        <div className="list_info">
                            <ul>
                                <li><label>{value.value.height}</label></li>
                                <li><label>{value.value.weight}</label></li>
                                <li><label>{value.value.adhaar}</label></li>
                                <li><label>{value.value.language}</label></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="main_right">
            <div className="main_status">
                <label>Status</label>
                <div className="s_active">
                    <img src={Img2} className="img2" alt="img" />
                    <label>active</label>
                </div>
                <button>Update info</button>
            </div>
            <div className="img">
                <img src={Img3} alt="img" />
            </div>
        </div>
        </>
    )
}

export default View;