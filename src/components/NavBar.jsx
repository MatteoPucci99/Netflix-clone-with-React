
import logo from "../assets/logo.png"
import { BiSearch, BiBell,  BiUserCircle } from 'react-icons/bi';
import {BsFillGearFill} from 'react-icons/bs'


const NavBar = ()=>{
    return (
        <nav className="navbar navbar-expand-lg" data-bs-theme="dark" style={{ backgroundColor: '#221f1f !important' }}>
          <div className="container-fluid">
            <a className="navbar-brand" href="#"><img src={logo} style={{ width: '100px' }} alt="logo"/></a>
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
                <li className="nav-item">
                  <a className="nav-link active fw-bold" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link fw-bold" href="#">TV Shows</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link fw-bold" href="#">Movies</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link fw-bold" href="#">Recently Added</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link fw-bold" href="#">My List</a>
                </li>
              </ul>
              <div className="d-flex align-items-center">
                <BiSearch className="text-white me-2" style={{fontSize: '24px'}}/>
                <div id="kids" className="fw-bold me-2"><p className="text-white mb-0">KIDS</p></div>
                <BiBell className="text-white me-2" style={{fontSize: '24px'}}/>
                <BiUserCircle className="text-white me-2" style={{fontSize: '24px'}}/>
                <BsFillGearFill className="text-white me-2" style={{fontSize: '20px'}}/>
              </div>
            </div>
          </div>
        </nav>
      );
}


export default NavBar