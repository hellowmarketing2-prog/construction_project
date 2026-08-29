import React, { useEffect, useState } from "react";
import { apiUrl, fileUrl } from "./http";
import { Link } from "react-router-dom";
import useAnimationReveal from "../../hooks/useAnimation";

const LatestArticles = () => {
  const [articles, setArticles] = useState([]);
  useAnimationReveal();

  const fetchlatestArticles = async () => {
    const res = await fetch(apiUrl + "get_latest_articles?limit=4", {
      method: "GET",
    });
    const result = await res.json();
    setArticles(result.data);
  };
  useEffect(() => {
    fetchlatestArticles();
  }, []);

  return (
    <>
      <section className="articles-section section-6 bg-light py-5">
        <div className="container-fluid py-5">
          <div className="section-header text-center" data-reveal="fade-up">
            <span>Blog & News</span>
            <h2>Articles & blog posts</h2>
            <p>
              We offer a wide range of construction services to meet all your
              needs.
            </p>
          </div>
          <div className="row pt-4">
            {articles &&
              articles.map((article, index) => {
                return (
                  <div
                    key={article.id}
                    className="col-md-3 col-lg-3"
                    data-reveal="fade-up"
                    style={{ transitionDelay: `${index * 0.1}s` }}
                  >
                    <div className="card shadow border-0">
                      <div className="card-img-top">
                        <img
                          src={`${fileUrl}uploads/articles/small/${article.image}`}
                          className="w-100"
                          alt={article.title}
                        />
                      </div>
                      <div className="card-body p-3">
                        <div className="mb-3">
                          <Link
                            to={`/article/${article.id}`}
                            className="title blog-title"
                          >
                            {article.title}
                          </Link>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                          <span className="article-author">
                            <i className="bi bi-person-circle me-1"></i>
                            {article.author}
                          </span>
                          <Link
                            to={`/article/${article.id}`}
                            className="btn btn-primary small"
                          >
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
};

export default LatestArticles;