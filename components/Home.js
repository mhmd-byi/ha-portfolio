import Marquee from "react-fast-marquee";

const Home = () => {
  return (
    <div className="jara_tm_section" id="home">
      <div className="jara_tm_hero">
        <div className="container">
          <div className="content">
            <div className="left">
              <div className="hello">
                <span className="hello">
                  <img className="svg" src="img/svg/hand.svg" alt="" />
                  Hello, World!
                </span>
              </div>
              <div className="title">
                <h2>I'm Jara</h2>
                <h3>UI Designer</h3>
              </div>
              <div className="subtitle">
                <p>With 10 yrs experience</p>
              </div>
              <div className="buttons">
                <div className="jara_tm_button">
                  <a className="anchor" href="#footer">
                    Say Hello
                  </a>
                </div>
                <div className="jara_tm_button_border">
                  <a className="anchor" href="#project">
                    My Works
                  </a>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="in">
                <img src="img/about/1.jpg" alt="" />
                <div className="play">
                  <img className="svg" src="img/svg/rightArrow.svg" alt="" />
                  <img className="animate_image" src="img/video/1.png" alt="" />
                  <a
                    className="jara_tm_full_link popup-youtube"
                    href="https://www.youtube.com/watch?v=u31qwQUeGuM"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="tm_partners">
            <div className="text">
              <p>
                Worked with
                <br />
                companies
              </p>
            </div>
            <div className="list">
              <Marquee className="marquee">
                <ul>
                  <li>
                    <img src="img/partners/1.png" alt="" />
                  </li>
                  <li>
                    <img src="img/partners/2.png" alt="" />
                  </li>
                  <li>
                    <img src="img/partners/3.png" alt="" />
                  </li>
                  <li>
                    <img src="img/partners/4.png" alt="" />
                  </li>
                  <li>
                    <img src="img/partners/5.png" alt="" />
                  </li>
                </ul>
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
