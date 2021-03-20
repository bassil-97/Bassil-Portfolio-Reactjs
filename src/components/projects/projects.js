import React from 'react';

import './projects.css';

export default function Projects() {
    return (
        <div>
            
            <div className="container-fluid" id="my-projects">
                <div className="row mb-4">
                    <h1 className="text-center w-100">Technologies used in my projects</h1>
                </div>
                <div className="row mt-4">
                    <div className="col-lg-4 project-box">
                        <img src="https://img.icons8.com/color/100/000000/javascript-logo-1.png" data-aos="zoom-in" data-aos-duration="1000"/>
                        <h5>HTML5</h5>
                    </div>
                    <div className="col-lg-4 project-box">
                        <img src="https://img.icons8.com/color/100/000000/css3.png" data-aos="zoom-in" data-aos-duration="2000"/>
                        <h5>CSS3</h5>
                    </div>
                    <div className="col-lg-4 project-box">
                        <img src="https://img.icons8.com/color/100/000000/javascript.png" data-aos="zoom-in" data-aos-duration="3000"/>
                        <h5>JavaScript</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 project-box">
                        <img src="https://img.icons8.com/nolan/100/react-native.png" data-aos="zoom-in" data-aos-duration="4000"/>
                        <h5>Reactjs</h5>
                    </div>
                    <div className="col-lg-4 project-box">
                        <img src="https://img.icons8.com/color/100/000000/nodejs.png" data-aos="zoom-in" data-aos-duration="5000"/>
                        <h5>Nodejs</h5>
                    </div>
                    <div className="col-lg-4 project-box">
                        <img src="https://img.icons8.com/color/100/000000/bootstrap.png" data-aos="zoom-in" data-aos-duration="6000"/>
                        <h5>Bootstrap 4</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}
