import { BiLogoFacebookCircle, BiLogoInstagram, BiLogoTwitter, BiLogoYoutube } from "react-icons/bi"



const Footer = ()=>{
    return(
        <footer className="pb-3">
        <div className="row justify-content-center mt-5">
          <div className="col col-6">
            <div className="row">
              <div className="col mb-2">
                <BiLogoFacebookCircle className="me-3 mb-2" style={{color:'white', fontSize:'1.3em'}}/>
                <BiLogoInstagram className="me-3 mb-2" style={{color:'white', fontSize:'1.3em'}}/>
                <BiLogoTwitter className="me-3 mb-2" style={{color:'white', fontSize:'1.3em'}}/>
                <BiLogoYoutube className="me-3 mb-2" style={{color:'white', fontSize:'1.3em'}}/>
              </div>
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-4">
              <div className="col">
                <div className="row">
                  <div className="col footer-links">
                    <p>
                      <a href="#" className="text-white text-decoration-none" alt="footer link">Audio and Subtitles</a>
                    </p>
                    <p>
                      <a href="#" className="text-white text-decoration-none" alt="footer link">Media Center</a>
                    </p>
                    <p>
                      <a href="#" className="text-white text-decoration-none" alt="footer link">Privacy</a>
                    </p>
                    <p>
                      <a href="#" className="text-white text-decoration-none" alt="footer link">Contact us</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="row">
                  <div className="col footer-links">
                    <p>
                      <a href="#" className="text-white text-decoration-none" alt="footer link">Audio Description</a>
                    </p>
                    <p>
                      <a href="#" className="text-white text-decoration-none" alt="footer link">Investor Relations</a>
                    </p>
                    <p>
                      <a href="#" className="text-white text-decoration-none" alt="footer link">Legal Notices</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="row">
                  <div className="col footer-links">
                    <p>
                      <a href="#" className="text-white text-decoration-none" alt="footer link">Help Center</a>
                    </p>
                    <p>
                      <a href="#" className="text-white text-decoration-none" alt="footer link">Jobs</a>
                    </p>
                    <p>
                      <a href="#" className="text-white text-decoration-none" alt="footer link">Cookie Preferences</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="row">
                  <div className="col footer-links">
                    <p>
                      <a href="#" className="text-white text-decoration-none" alt="footer link">Gift Cards</a>
                    </p>
                    <p>
                      <a href="#" className="text-white text-decoration-none" alt="footer link">Terms of Use</a>
                    </p>
                    <p>
                      <a href="#" className="text-white text-decoration-none" alt="footer link">Corporate Information</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col mb-2">
                <button
                  type="button"
                  className="btn btn-sm btn-outline-light rounded-0 mt-3"
                >
                  Service Code
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col mb-2 mt-2 copyright">
                © 1997-2023 Netflix, Inc.
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
}

export default Footer