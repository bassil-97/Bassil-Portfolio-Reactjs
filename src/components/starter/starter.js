import React from 'react';
import './starter.css';

import BackToTop from "react-back-to-top-button";

import AboutMe from '../aboutMe/aboutMe';
import Projects from '../projects/projects';
import Navbar from '../navbar/navbar';
import Pricing from '../pricing/pricing';

export default function Starter() {

    function scrollToBassil() {
        var projectsDiv = document.getElementById("about-me");
        projectsDiv.scrollIntoView({ behavior: 'smooth', block: 'end'});
    }

    function scrollToPricing() {
        var projectsDiv = document.getElementById("pricing");
        projectsDiv.scrollIntoView({ behavior: 'smooth', block: 'end'});
    }

    return (
        <div>
            <div className="container-fluid" id="wrapper">
                <Navbar aboutMe={scrollToBassil} pricing={scrollToPricing}/>
                <div className="wrapper-content" data-aos="zoom-in" data-aos-duration="1000">
                    <h2 className="wrapper-title">I'm a</h2>
                    <h1 id="myJob-title">Web Developer <br/>& UI Designer</h1>
                    <span id="myJobSm">- Building beautiful websites and interfaces -</span>
                    
                    <lord-icon
                        src="https://cdn.lordicon.com//dtgezzsi.json"
                        trigger="loop"
                        delay="1000"
                        colors="primary:#B15DCE,secondary:#08a88a"
                        style={{width:"128px", height:"128px"}}
                        onClick={scrollToBassil}>
                    </lord-icon>
                </div>
            </div>
            <div id="about-me">
                <AboutMe />
            </div>
            <div id="projects">
                <Projects />
            </div>
            <div id="pricing">
                <Pricing />
            </div>
            <BackToTop
                showOnScrollUp
                showAt={100}
                speed={1500}
                easing="easeInOutQuint"
            >
                <img src="https://img.icons8.com/fluent/48/000000/up.png"/>
            </BackToTop>
        </div>
        
    )
}
