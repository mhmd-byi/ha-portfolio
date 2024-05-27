"use client";
import { context } from "@/context/context";
import { useContext } from "react";
import PopContainer from "./PopupContainer";
const ProjectPopup = () => {
  const { setPortfolioModal, portfolioModal } = useContext(context);
  return (
    <PopContainer nullValue={setPortfolioModal}>
      <div className="popup_details">
        <div className="top_image">
          <img src="img/thumbs/4-2.jpg" alt />
          <div className="main" data-img-url={portfolioModal.img} />
        </div>
        <div className="portfolio_main_title">
          <h3 className="title">{portfolioModal.title}</h3>
        </div>
        <div className="main_details">
          <div className="textbox">
            <p>
              Web designing is the process of planning, conceptualizing, and
              implementing the plan for designing a website in a way that is
              functional and offers a good user experience. User experience is
              central to the web designing process. Websites have an array of
              elements presented in ways that make them easy to navigate.
            </p>
            <p>
              Web designing essentially involves working on every attribute of
              the website that people interact with, so that the website is
              simple and efficient, allows users to quickly find the information
              they need, and looks visually pleasing. All these factors, when
              combined, decide how well the website is designed.
            </p>
          </div>
          <div className="detailbox">
            <ul>
              <li>
                <span className="first">Client</span>
                <span>{portfolioModal.client}</span>
              </li>
              <li>
                <span className="first">Category</span>
                <span>
                  <a href="#">{portfolioModal.category}</a>
                </span>
              </li>
              <li>
                <span className="first">Date</span>
                <span>{portfolioModal.date}</span>
              </li>
              <li>
                <span className="first">Share</span>
                <ul className="share">
                  <li>
                    <a href="#">
                      <img
                        className="svg"
                        src="img/svg/social/facebook.svg"
                        alt
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        className="svg"
                        src="img/svg/social/twitter.svg"
                        alt
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        className="svg"
                        src="img/svg/social/instagram.svg"
                        alt
                      />
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="additional_images">
          <ul>
            <li>
              <div className="list_inner">
                <div className="my_image">
                  <img src="img/thumbs/4-2.jpg" alt />
                  <div className="main" data-img-url={portfolioModal.img} />
                </div>
              </div>
            </li>
            {portfolioModal.detailsImgs.map((img) => (
              <li key={img.id}>
                <div className="list_inner">
                  <div className="my_image">
                    <img src="img/thumbs/4-2.jpg" alt />
                    <div className="main" data-img-url={img.src} />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </PopContainer>
  );
};
export default ProjectPopup;
