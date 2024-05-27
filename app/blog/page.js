"use client";
import { context } from "@/context/context";
import Layout from "@/layouts/Layout";
import { useContext } from "react";
const Page = () => {
  const blogs = [
    {
      id: 1,
      img: "img/news/1.jpg",
      title: "Why your client needs a responsive website",
      date: "Sep 22, 2023",
      animation: "fadeInLeft",
    },
    {
      id: 2,
      img: "img/news/2.jpg",
      title: "Best design books for increase design knowledge",
      date: "Sep 11, 2023",
      animation: "fadeInRight",
    },
    {
      id: 3,
      img: "img/news/3.jpg",
      title: "How to successfully design for mobile web",
      date: "August 20, 2023",
      animation: "fadeInLeft",
    },
    {
      id: 4,
      img: "img/news/4.jpg",
      title: "Essential tips for modern website design",
      date: "August 07, 2023",
      animation: "fadeInRight",
    },
  ];
  const { modalToggle, setBlogModal } = useContext(context);
  return (
    <Layout>
      <div className="jara_tm_blog_page">
        <div className="jara_tm_news">
          <div className="container">
            <div className="news_inner">
              <div className="jara_tm_title" data-text-align="left">
                <h3>Recent Blog</h3>
              </div>
              <div className="list">
                <ul>
                  {blogs.map((blog) => (
                    <li
                      className={`wow ${blog.animation}`}
                      data-wow-duration=".5s"
                      key={blog.id}
                    >
                      <div className="list_inner">
                        <div className="image">
                          <img src="img/thumbs/57-32.jpg" alt="" />
                          <div className="main" data-img-url={blog.img} />
                          <a
                            className="jara_tm_full_link"
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              modalToggle(true);
                              setBlogModal(blog);
                            }}
                          />
                        </div>
                        <div className="details">
                          <span className="date">{blog.date}</span>
                          <h3 className="title">
                            <a
                              className="text_hover_gradient"
                              href="#"
                              onClick={(e) => {
                                e.preventDefault();
                                modalToggle(true);
                                setBlogModal(blog);
                              }}
                            >
                              {blog.title}
                            </a>
                          </h3>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Page;
