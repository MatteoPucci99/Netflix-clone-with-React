import logo from "../assets/logo.png"
import { BiSearch, BiBell,  BiUserCircle } from 'react-icons/bi';
import {BsFillGearFill} from 'react-icons/bs'
import { Link, useNavigate } from "react-router-dom";


const NavBar = ()=>{

  const navigate = useNavigate()

    return (
        <nav className="navbar navbar-expand-lg" data-bs-theme="dark" style={{ backgroundColor: '#221f1f !important' }}>
          <div className="container-fluid">
            <Link className="navbar-brand" to={'/'}><img src={logo} style={{ width: '100px' }}   alt="logo"/></Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <Link className="nav-link" to={'/'}>
                Home
                </Link>
                <Link className="nav-link" to={'/tvshows'}>
                TvShows
                </Link>
                <li className="nav-item">
                  <a className="nav-link fw-bold" >Movies</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link fw-bold" >Recently Added</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link fw-bold" >My List</a>
                </li>
              </ul>
              <div className="d-flex align-items-center">
                <BiSearch className="text-white me-2" style={{fontSize: '24px'}}/>
                <div id="kids" className="fw-bold me-2"><p className="text-white mb-0">KIDS</p></div>
                <BiBell className="text-white me-2" style={{fontSize: '24px'}}/>
                <BiUserCircle className="text-white me-2" onClick={()=>{navigate('/profilepage')}} style={{fontSize: '24px', cursor: 'pointer'}}/>
                <BsFillGearFill className="text-white me-2" onClick={()=>{navigate('/settingspage')}} style={{fontSize: '20px', cursor: 'pointer'}}/>
              </div>
            </div>
          </div>
        </nav>
      );
}


export default NavBar