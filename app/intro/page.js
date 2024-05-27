const Page = () => {
  return (
    <div className="intro">
      <div className="logo">
        <div className="image">
          <img src="img/intro/logo.svg" alt="" />
        </div>
        <h5>Personal Portfolio React NextJS Template</h5>
      </div>
      <div className="demo">
        <img src="img/intro/1.png" alt="" />
        <h4>View Demo</h4>
        <a className="jara_tm_full_link" target="_blank" href="/" />
      </div>
      <div className="jara_tm_intro_fixed_price">
        <span className="anim" />
        <span className="anim" />
        <span className="anim" />
        <a
          href="https://themeforest.net/user/codeefly/portfolio"
          target="_blank"
          className="pricing-info anim"
        >
          -80%
        </a>
      </div>
    </div>
  );
};
export default Page;
