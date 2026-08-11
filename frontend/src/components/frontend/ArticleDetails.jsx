import React, { useEffect, useState } from "react";
import Footer from "../common/Footer";
import ShowTestimonial from "../common/ShowTestimonials";
import Header from "../common/Header";
import Hero from "../common/Hero";
import { apiUrl, fileUrl } from "../common/http";
import { Link, useParams } from "react-router-dom";
import LatestArticles from "../common/LatestArticles";

const articleDetails = () => {
  const params = useParams();
  const [article, setArticle] = useState([]);
  const [articles, setarticles] = useState([]);
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
  const fetchlatestArticles = async () => {
    const res = await fetch(apiUrl + "get_latest_articles?limit=5", {
      method: "GET",
    });
    const result = await res.json();
    // console.log(result);
    setArticle(result.data);
  };

  useEffect(() => {
    fetchlatestArticles();

    fetcharticles();
    fetcharticle();
  }, [params.id]);

  return (
    <>
      <Header />
      <main>
        <Hero
          preHeading="Quality . Itigrity . Value"
          heading={`${article.title}`}
          text=" "
        />
        <section className="section-11 ">
          <div className="container py-5">
            <div className="row">
              <div className="col-md-8">
                <h2>{article.title}</h2>

                <div className="pb-3">
                  by <strong>{article.author}</strong> on {article.created_at}
                </div>
                <div className="pe-md-5 pb-3">
                  <img
                    className="w-100"
                    src={`${fileUrl}uploads/articles/large/${article.image}`}
                    alt=""
                  />
                </div>
                <div
                  dangerouslySetInnerHTML={{ __html: article.content }}
                ></div>
              </div>
              <div className="col-md-4">
                <div className="card shadow border-0 sidebar">
                  <div className="card-body px-5 py-4">
                    <h3 className="mt-2 mb-3">Latest Blogs</h3>

                    {articles &&
                      articles.map((article) => {
                        return (
                          <div
                            className="d-flex align-items-center mb-3 border-bottom mb-3 pb-2"
                            key={article.id}
                          >
                            <div className="pe-3 image-div flex-shrink-0">
                              <img
                                className="w-100 "
                                  style={{
                                  width: "100px",
                                  height: "70px",
                                  objectFit: "cover",
                                }}
                                src={`${fileUrl}uploads/articles/small/${article.image}`}
                                alt=""
                              />
                            </div>

                            <Link
                              to={`/article/${article.id}`}
                              className="title"
                              style={{
                                minWidth: 0,
                                overflowWrap: "break-word",
                              }}
                            >
                              {article.title}
                            </Link>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
              <section className="section-11 bg-light py-5">
                <ShowTestimonial />
              </section>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default articleDetails;
