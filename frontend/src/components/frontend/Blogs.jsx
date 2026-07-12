import Header from '../common/Header'
import Footer from '../common/Footer'
import Hero from '../common/Hero';
import constructionimg from "../../assets/images/construction3.jpg";
import { apiUrl, fileUrl } from '../common/http';
import { useEffect, useState } from 'react';
const Blogs = () => {
   const [articles, setArticles] = useState([]);
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
          preHeading="Quality . Itigrity . Value"
          heading="Blogs & News"
          text=" We are a team of dedicated professionals committed to
                  delivering exceptional
                    <br/>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel,
                  consectetur officiis?"
        />
        <section className="section-6 bg-light py-5">
                  <div className="container">
                    <div className="section-header text-center ">
                      <span>Blog & News</span>
                      <h2>Articles & blog posts</h2>
                      <p>
                        We offer a wide range of construction services to meet all your
                        needs.
                      </p>
                    </div>
                    <div className="row pt-3">
                      <div className="col-md-4">
                        <div className="card shadow border-0">
                          <div className="card-img-top">
                            <img src={Blogimg} alt="" className="w-100"/>
                          </div>
                          <div className="card-body p-3">
                            <div className="mb-3">
                            <a href="#" className="title">Dummy Blog title</a>
        
                            </div>
                            <div>
                              <a href="" className="btn btn-primary small">Read More</a>
                            </div>
        
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="card shadow border-0">
                          <div className="card-img-top">
                            <img src={Blogimg} alt="" className="w-100"/>
                          </div>
                          <div className="card-body p-3">
                            <div className="mb-3">
                            <a href="#" className="title">Dummy Blog title</a>
        
                            </div>
                            <div>
                              <a href="" className="btn btn-primary small">Read More</a>
                            </div>
        
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="card shadow border-0">
                          <div className="card-img-top">
                            <img src={Blogimg} alt="" className="w-100"/>
                          </div>
                          <div className="card-body p-3">
                            <div className="mb-3">
                            <a href="#" className="title">Dummy Blog title</a>
        
                            </div>
                            <div>
                              <a href="" className="btn btn-primary small">Read More</a>
                            </div>
        
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
      </main>
      <Footer />
    </>
  );
};

export default Blogs;
