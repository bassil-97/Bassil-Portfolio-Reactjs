import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import InstagramIcon from '@material-ui/icons/Instagram';
import DoneIcon from '@material-ui/icons/Done';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';

import './aboutMe.css';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      marginTop: theme.spacing(3),
      '& > *': {
        margin: theme.spacing(0.5),
      },
    },
}));

export default function MyProjects() {

    const classes = useStyles();

    return (
        <div className="container-fluid" id="my-projects-wrapper">
            <div className="row" data-aos="zoom-in" data-aos-duration="1000">
                <div className="col-lg-6 d-flex align-items-start justify-content-center flex-column mb-4">
                    <h1 className="mb-4 global-headings">Why to choose<mark style={{background: 'none', color: '#FFFFFF'}}>Bassil Alqadi?</mark></h1>
                    <Typography variant="h6" component="h6">
                        Experienced Web Developer working in the Computer Software industry. Skilled in Soft Skills, Team Motivation, Computer Literacy, and Creativity Skills. Strong Frontend and Backend experience with a Bachelor's degree focused in Computer and Information Systems from Yarmouk University. 
                    </Typography>
                    <div className={classes.root}>
                        <Chip
                            icon={<InstagramIcon />}
                            label="bassil_qadi"
                            clickable
                            deleteIcon={<DoneIcon />}
                            style={{backgroundColor: 'white', color: '#B05DCE'}}
                            data-aos="zoom-in"
                        />
                        <Chip
                            icon={<GitHubIcon />}
                            label="bassil-97"
                            clickable
                            deleteIcon={<DoneIcon />}
                            style={{backgroundColor: 'white', color: '#B05DCE'}}
                            data-aos="zoom-in"
                        />
                        <Chip
                            icon={<TwitterIcon />}
                            label="@Bassil_Qadi"
                            clickable
                            deleteIcon={<DoneIcon />}
                            style={{backgroundColor: 'white', color: '#B05DCE'}}
                            data-aos="zoom-in"
                        />
                    </div>
                </div>
                <div className="col-lg-6 col-center">
                    <div className="row">
                        <div className="col-lg-6 col-center" data-aos="zoom-in" data-aos-duration="2000">
                            <lord-icon
                                src="https://cdn.lordicon.com//qhgmphtg.json"
                                trigger="loop"
                                delay="1000"
                                colors="primary:#B15DCE,secondary:#08a88a"
                                style={{width:"128px", height:"128px"}}>
                            </lord-icon>
                        </div>
                        <div className="col-lg-6 col-center" data-aos="zoom-in" data-aos-duration="3000">
                            <lord-icon
                                src="https://cdn.lordicon.com//nobciafz.json"
                                trigger="loop"
                                delay="1000"
                                colors="primary:#B15DCE,secondary:#08a88a"
                                style={{width:"128px", height:"128px"}}>
                            </lord-icon>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-center" data-aos="zoom-in" data-aos-duration="4000">
                            <lord-icon
                                src="https://cdn.lordicon.com//dtgezzsi.json"
                                trigger="loop"
                                delay="1000"
                                colors="primary:#B15DCE,secondary:#08a88a"
                                style={{width:"128px", height:"128px"}}>
                            </lord-icon>
                        </div>
                        <div className="col-lg-6 col-center" data-aos="zoom-in" data-aos-duration="5000">
                            <lord-icon
                                src="https://cdn.lordicon.com//jvucoldz.json"
                                trigger="loop"
                                delay="1000"
                                colors="primary:#B15DCE,secondary:#08a88a"
                                style={{width:"128px", height:"128px"}}>
                            </lord-icon>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
