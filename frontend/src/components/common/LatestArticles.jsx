import React, { useEffect, useState } from 'react'
import constructionimg from "../../assets/images/construction2.jpg";
import { apiUrl, fileUrl } from './http';


const LatestArticles = () => {
     const [articles, setArticles] = useState([]);
      const fetchlatestArticles = async () => {
        const res = await fetch(apiUrl + "get_latest_articles?limit=4", {
          method: "GET",
        });
        const result = await res.json();
        // console.log(result);
        setArticles(result.data);
      };
      useEffect(() => {
        fetchlatestArticles();
      }, []);
  return (
    <>
    
    {/* Our projects section */}
            <section className="section-3 bg-light py-5">
              <div className="container-fluid py-5">
                <div className="section-header text-center ">
                  <span>Our Projects</span>
                  <h2>Check Out Our Recent Work</h2>
                  <p>
                    We take pride in our work and are committed to delivering
                    exceptional results for our clients.
                  </p>
                </div>
                <div className="row pt-4">
                 
                         { 
            articles &&
              articles.map((article) => {
                return(
                
                <div key={article.id} className="col-md-3 col-lg-3">
                    <div className="item">
                      <div className="service-image ">
                        <img src={`${fileUrl}uploads/articles/small/${article.image}`} className="w-100" />
                      </div>
                      <div className="service-body">
                        <div className="service-title">
                          <h3>{article.title}</h3>
                        </div>
    
                        <div className="service-content ">
                          <p>
                            {
                                article.author
                            }
                          </p>
                        </div>
                        <a href="#contact" className="btn btn-primary small mt-3">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                    )
              })}
                </div>
              </div>

            </section>
    </>
  )
}

export default LatestArticles
