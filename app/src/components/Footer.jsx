import './Footer.css'

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <a href="#top">
          <h2><b>ONLINE</b> STORE</h2>
        </a>
        <hr />
        <br />
        <div className="flex">
          <div>
            <p className="main-text-2">Follow us</p>
            <div className="flex-center">
              <div className="flex-center">
                <a href="#top" className="sm-container flex-center">
                  <i className="fa-brands fa-facebook-f" />
                </a>
              </div>
              <div className="flex-center">
                <a href="#top" className="sm-container flex-center">
                  <i className="fa-brands fa-linkedin-in" />
                </a>
              </div>
              <div className="flex-center">
                <a href="#top" className="sm-container flex-center">
                  <i className="fa-brands fa-youtube" />
                </a>
              </div>
            </div>
          </div>
          <div>
            <p className="main-text-2">Sign up for our newsletter:</p>
            <div className="flex-news">
                <input className="input-small" type="email" name="" id="" />
                <button className="btn-sm-white">Sign up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;