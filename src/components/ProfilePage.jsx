import logo from '../assets/avatar.png'

const ProfilePage = ()=> {
    return (
        
     
  
        <main>
          <div className="container px-5">
            <h1>Edit Profile</h1>
  
            <div className="row mb-4 border-secondary border-top">
              <div className="col-4 col-lg-2 py-4">
                <img src={logo} alt="avatar-img" className="w-100 w-md-50" />
              </div>
              <div className="col border-secondary border-bottom py-4">
                <p className="fs-4 bg-secondary p-1">Strive Students</p>
                <p className="fs-5 mb-1 text-secondary">Language</p>
                <div className="dropdown">
                  <button className="btn rounded-0 dropdown-toggle text-white border-white" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    English
                  </button>
                  <ul className="dropdown-menu bg-dark">
                    <li>
                      <a className="text-white dropdown-item" href="#">Italian</a>
                    </li>
                    <li>
                      <a className="text-white dropdown-item" href="#">Spanish</a>
                    </li>
                    <li><a className="text-white dropdown-item" href="#">German</a></li>
                  </ul>
                </div>
              </div>
            </div>
  
            <div className="row">
              <div className="col-4 col-lg-2"></div>
              <div className="col border-secondary border-bottom pb-4 pe-0">
                <p className="fs-4 text-secondary">Maturity Settings:</p>
                <span className="fw-bold bg-secondary p-1">ALL MATURITY RATINGS</span>
                <p className="text-secondary mt-2">
                  Show titles of
                  <span className="fw-bold">all maturity ratings</span> for this profile
                </p>
                <button type="button" className="btn btn-outline-secondary rounded-0 me-5">
                  EDIT
                </button>
              </div>
            </div>
  
            <div className="row mt-4 border-secondary border-bottom pb-4">
              <div className="col-4 col-lg-2"></div>
              <div className="col">
                <p className="mb-1 fs-5 text-secondary">Autoplay controls</p>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1" />
                  <label className="form-check-label text-secondary" htmlFor="flexCheckDefault1">
                    Autoplay next episode in a series on all devices.
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2" />
                  <label className="form-check-label text-secondary" htmlFor="flexCheckDefault2">
                    Autoplay previews while browsing on all devices.
                  </label>
                </div>
              </div>
            </div>
  
            <div className="row mt-4 mb-5">
              <div className="col-6 col-md-3">
                <button type="button" className="btn btn-light rounded-0 w-100">
                  SAVE
                </button>
              </div>
              <div className="col-6 col-md-3">
                <button type="button" className="btn btn-outline-secondary rounded-0 w-100">
                  CANCEL
                </button>
              </div>
              <div className="col-12 mt-3 mt-md-0 col-md">
                <button type="button" className="btn btn-outline-secondary rounded-0 w-100">
                  DELETE PROFILE
                </button>
              </div>
            </div>
          </div>
        </main>
      
    )
}


export default ProfilePage