const Footer = () => {
  return (
    <div className="jara_tm_section" id="footer">
      <div className="jara_tm_footer">
        <div className="container">
          <div className="footer_inner">
            <div className="project">
              <div className="left wow fadeInLeft" data-wow-duration=".5s">
                <h3>Got a project? Let's talk</h3>
              </div>
              <div className="right wow fadeInRight" data-wow-duration=".5s">
                <p className="text">
                  Jara is a creative web studio based in New York, USA. You can
                  call between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday
                </p>
                <div className="call">
                  <a href="tel:+770225558899">Book A Call</a>
                </div>
              </div>
            </div>
            <div className="copyright">
              <div className="year wow fadeInLeft" data-wow-duration=".5s">
                <p>© 2023 Jara All Right Reserved</p>
              </div>
              <div className="logo wow fadeInUp" data-wow-duration=".5s">
                <img src="img/logo/logo.png" alt="" />
              </div>
              <div className="social wow fadeInRight" data-wow-duration=".5s">
                <ul>
                  <li>
                    <a href="#">
                      <i className="icon-facebook-1" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon-twitter-1" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon-instagram-1" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
