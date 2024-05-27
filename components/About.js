"use client";
import dynamic from "next/dynamic";
const Counter = dynamic(() => import("./Counter"), {
  ssr: false,
});

const About = () => {
  return (
    <div className="jara_tm_section" id="about">
      <div className="jara_tm_about">
        <div className="container">
          <div className="about_inner">
            <div className="experience">
              <div className="in">
                <div className="inside">
                  <h3>
                    <Counter end={10} />
                  </h3>
                  <h6>
                    Years
                    <br />
                    Expercience
                  </h6>
                </div>
              </div>
            </div>
            <div className="text">
              <p>
                Over{" "}
                <span className="text_gradient">ten years of designing</span>, I
                transform concepts projects using{" "}
                <span className="text_gradient">creativity</span> and{" "}
                <span className="text_gradient">interactive design</span>{" "}
                worldwide.
              </p>
              <div className="jara_tm_button_border">
                <a href="img/dictionary.pdf" download="">
                  Download My Resume
                </a>
              </div>
            </div>
            <div className="counter">
              <div className="list">
                <ul>
                  <li>
                    <div className="list_inner">
                      <h3>
                        <Counter end={14} />
                      </h3>
                      <span className="title">Award winner</span>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <h3>
                        <Counter end={1.2} decimals={1} />k
                      </h3>
                      <span className="title">Worldwide client</span>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <h3>
                        <Counter end={3.5} decimals={1} />k
                      </h3>
                      <span className="title">Job done successfully</span>
                    </div>
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
export default About;
