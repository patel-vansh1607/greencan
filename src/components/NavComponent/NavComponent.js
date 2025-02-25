import { Link } from "react-router"
import "./NavComponent.css"
import MainLogo from "./green-can-main-logo.png"

function NavComponent() {
    return (
        <nav className="dt-navbar navbar navbar-expand-lg navbar-light">
              <Link className="navbar-brand" to="/">
                <div className="logo"><img src={MainLogo} alt="main-logo"/></div>
              </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/services">Services</Link>
                    </li> 
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#">Blog</a>
                    </li>   
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#">About Us</a>
                    </li> 
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#">Contact</a>
                    </li> 
                </ul>
                {/* <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </li> */}
            </div>
          
            {/* <ul className="nav-links">
                <li><a href="./services.html">Services</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#about-us">About Us</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="profile">
                <img src="profile.jpg" alt="Profile Picture"/>
                <div className="dropdown">
                    <a href="#dashboard">Dashboard</a>
                    <a href="#settings">Settings</a>
                    <a href="#logout">Logout</a>
                </div>
            </div> */}
        </nav>
    )
}

export default NavComponent