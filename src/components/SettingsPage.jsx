

const SettingsPage = ()=>{
    return (
        
            <>
              <div className="container mt-4 px-4 border-bottom border-secondary">
                <h1>Account</h1>
              </div>
              <div className="container text-secondary">
                <div className="row py-3">
                  <div className="col-12 col-md-4">
                    <p>MEMBERSHIP & BILLING</p>
                  </div>
                  <div className="col-12 col-md-8">
                    <div className="d-flex justify-content-between">
                      <p className="fw-bold">student@stri.school</p>
                      <p className="text-info">Change account email</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="text-secondary">Password: *****</p>
                      <p className="text-info">Change password</p>
                    </div>
                    <div className="d-flex justify-content-between border-secondary border-bottom">
                      <p className="text-secondary">Phone 3210441279</p>
                      <p className="text-info">Change phone number</p>
                    </div>
                  </div>
                </div>
                <div className="row py-3 border-secondary border-bottom">
                  <div className="col-12 col-md-4"></div>
                  <div className="col-12 col-md-8">
                    <div className="d-flex justify-content-between">
                      <div className="d-flex">
                        <i className="bi bi-paypal me-3 text-dark"></i>
                        <p className="fw-bold">admin@strive.school</p>
                      </div>
                      <div>
                        <p className="text-info">Update payment info</p>
                        <p className="text-info">Where yo buy gift cards</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row py-3 border-secondary border-bottom">
                  <div className="col-12 col-md-4">
                    <p>PLAN DETAILS</p>
                  </div>
                  <div className="col-12 col-md-8">
                    <div className="d-flex justify-content-between">
                      <p className="fw-bold">
                        PREMIUM <span className="border p-1 border-dark">ULTRA HD</span>
                      </p>
                      <p className="text-info">Change plan</p>
                    </div>
                  </div>
                </div>
                <div className="row py-3 border-secondary border-bottom">
                  <div className="col-12 col-md-4">
                    <p>SETTINGS</p>
                  </div>
                  <div className="col-12 col-md-8">
                    <div>
                      <p className="text-info">Parental controls</p>
                      <p className="text-info">Test participation</p>
                      <p className="text-info">Manage download devices</p>
                      <p className="text-info">Activate a device</p>
                      <p className="text-info">Recent device streaming activity</p>
                      <p className="text-info">Sign out all devices</p>
                    </div>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-12 col-md-4">
                    <p>MY PROFILE</p>
                  </div>
                  <div className="col-12 col-md-8">
                    <div className="d-flex justify-content-between">
                      <p className="fw-bold">strive student</p>
                      <div>
                        <p className="text-info">Manage profiles</p>
                        <p className="text-info">Add profile email</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row py-3">
                  <div className="col d-flex justify-content-center">
                    <div className="w-50">
                      <p className="text-info">Language</p>
                      <p className="text-info">Playback settings</p>
                      <p className="text-info">Subtitle appearance</p>
                    </div>
                    <div>
                      <p className="text-info">Viewing activity</p>
                      <p className="text-info">Ratings</p>
                    </div>
                  </div>
                </div>
              </div>
            </>
    )
}


export default SettingsPage