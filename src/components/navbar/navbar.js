import React, {useState} from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import logo from '../../Assets/blog-logo.png';
import Contact from '../contact/contact';

export default function Navbar(props) {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="/">
                    <img src={logo} width="30px" height="30px" className="img-fluid" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" onClick={props.aboutMe}>About Bassil <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Work</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={props.pricing}>Pricing</a>
                        </li>
                        <button className="btn" id="navbar-hire-btn" onClick={()=>setIsOpen(true)} >Hire Me</button>
                    </ul>
                    <span className="navbar-text">
                        <GitHubIcon  
                            fontSize="large"
                            onClick={ ()=> window.open(
                                'https://github.com/bassil-97/',
                                '_blank' 
                            ) }
                        />
                    </span>
                </div>
            </nav>
            <Contact open={isOpen} close={()=>setIsOpen(false)}/>
        </div>
    )
}
