import Header from "../common/Header";
import Footer from "../common/Footer";
import Hero from "../common/Hero";
import { apiUrl, fileUrl } from "../common/http";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAnimationReveal from "../../hooks/useAnimation";

const Blogs = () => {
  const [articles, setArticles] = useState([]);
  useAnimationReveal();

  const fetchAllArticles = async () => {
    const res = await fetch(apiUrl + "get_articles", {
      method: "GET",
    });
    const result = await res.json();
    setArticles(result.data);
  };
  useEffect(() => {
    fetchAllArticles();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero
          preHeading="Quality . Integrity . Value"
          heading="Blogs & News"
          text="We are a team of dedicated professionals committed to delivering exceptional construction services."
        />
        <section className="section-6 bg-light py-5 blogs-page">
          <div className="container">
            <div className="section-header text-center" data-reveal="fade-up">
              <span>Blog & News</span>
              <h2>Articles & blog posts</h2>
              <p>
                Explore practical insights on project planning, structural
                quality, and smart building decisions that help clients move
                from concept to completion with confidence.
              </p>
            </div>
            <div className="row pt-3">
              {articles &&
                articles.map((article, index) => {
                  return (
                    <div
                      key={article.id}
                      className="col-md-4 mb-4"
                      data-reveal="fade-up"
                      style={{ transitionDelay: `${(index % 3) * 0.15}s` }}
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
      </main>
      <Footer />
    </>
  );
};

export default Blogs;
