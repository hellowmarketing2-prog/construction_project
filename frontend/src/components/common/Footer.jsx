import React from 'react'

const Footer = () => {
  return (
   <footer>
        <div className="container py-5">
          <div className="row">
            <div className="col-md-3">
              <h3 className='mb-3'>UrbanEdge Constructions</h3>
              <div className="pe-5">

              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur sequi nobis odit spiciatis, ?</p>
              </div>
            </div>
             <div className="col-md-3">
              <h3 className="mb-3">Our Services</h3>
              <ul>
                <li><a href="#home" >Specialized Construction</a></li>
                <li><a href="#about" >Residential Construction</a></li>
                <li><a href="#services" >Commercial Construction</a></li>
                <li><a href="#projects" >Industrial Construction</a></li>
              </ul>
            </div>

            <div className="col-md-3">
              <h3 className="mb-3">Quick Links</h3>
              <ul>
                <li><a href="#home" >Home</a></li>
                <li><a href="#about" >About Us</a></li>
                <li><a href="#services" >Services</a></li>
                <li><a href="#projects" >Projects</a></li>
                <li><a href="#blogs" >Blogs</a></li>
                <li><a href="#contact" >Contact Us</a></li>
              </ul>
            </div>
           

            <div className="col-md-3">
              <h3 className="mb-3">Contact Us</h3>
              <p>Email: info@urbanedgeconstructions.com</p>
              <p>Phone: +1 (123) 456-7890</p>
            </div>
          </div>
          <hr />
          <p className="text-center mt-3">© 2024 UrbanEdge Constructions. All rights reserved.</p>
        </div>
      </footer>
  )
}

export default Footer
