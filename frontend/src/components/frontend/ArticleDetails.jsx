import React, { useEffect, useState } from "react";
import Footer from "../common/Footer";
import ShowTestimonial from "../common/ShowTestimonials";
import Header from "../common/Header";
import Hero from "../common/Hero";
import { apiUrl, fileUrl } from "../common/http";
import { Link, useParams } from "react-router-dom";
import useAnimationReveal from "../../hooks/useAnimation";

const articleDetails = () => {
  const params = useParams();
  const [article, setArticle] = useState([]);
  const [articles, setarticles] = useState([]);
  useAnimationReveal();

  const fetcharticles = async () => {
    const res = await fetch(`${apiUrl}get_articles`, {
      method: "GET",
    });
    const result = await res.json();
    setarticles(result.data);
  };
  const fetcharticle = async () => {
    const res = await fetch(`${apiUrl}get_article/${params.id}`, {
      method: "GET",
    });

    const result = await res.json();
    setArticle(result.data);
  };

  useEffect(() => {
    fetcharticles();
    fetcharticle();
  }, [params.id]);

  return (
    <>
      <Header />
      <main>
        <Hero
          preHeading="Quality . Integrity . Value"
          heading={`${article.title}`}
          text=" "
        />
        <section className="section-11 article-details-section">
          <div className="container py-5">
            <div className="row">
              <div className="col-md-8" data-reveal="fade-up">
                <h2>{article.title}</h2>

                <div className="pb-3 article-meta">
                  <i className="bi bi-person-circle me-2"></i>
                  <strong>{article.author}</strong> on {article.created_at}
                </div>
                <div className="pe-md-5 pb-3 article-detail-image">
                  <img
                    className="w-100"
                    src={`${fileUrl}uploads/articles/large/${article.image}`}
                    alt={article.title}
                  />
                </div>
                <div
                  className="article-detail-content"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                ></div>
              </div>
              <div className="col-md-4" data-reveal="fade-left">
                <div className="card shadow border-0 sidebar">
                  <div className="card-body px-4 py-4">
                    <h3 className="mt-2 mb-3">Latest Blogs</h3>

                    {articles &&
                      articles.map((art) => {
                        return (
                          <div
                            className="d-flex align-items-center mb-3 border-bottom pb-2"
                            key={art.id}
                          >
                            <div className="pe-3 image-div flex-shrink-0">
                              <img
                                className="w-100"
                                style={{
                                  width: "80px",
                                  height: "60px",
                                  objectFit: "cover",
                                }}
                                src={`${fileUrl}uploads/articles/small/${art.image}`}
                                alt=""
                              />
                            </div>

                            <Link
                              to={`/article/${art.id}`}
                              className="title"
                              style={{
                                minWidth: 0,
                                overflowWrap: "break-word",
                              }}
                            >
                              {art.title}
                            </Link>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-11 bg-light py-5">
          <ShowTestimonial />
        </section>
      </main>

      <Footer />
    </>
  );
};

export default articleDetails;