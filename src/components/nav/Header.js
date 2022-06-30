import React from 'react';
import Typical from 'react-typical'
import Drawers from './Drawer';
import './header.css';

const Header = () => {
  return (
    <div>
      <nav className='nav'>
        <div className="nav-name">
          <h2>Saphal Subedi</h2>
        </div>
        <Drawers />
        <ul>
          <li className='header-option header-option-seperator selected-header-option '><a href="# " ><span>Home</span></a></li>
          <li className='header-option header-option-seperator '><a href="#about"><span>About Me</span></a></li>
          <li className='header-option header-option-seperator '><a href="#resume"><span>Resume</span></a></li>
          <li className='header-option header-option-seperator '><a href="#contact"><span>Contact Me</span></a></li>
        </ul>
      </nav>
      <div className="hero-section pb-5">
        <div className="container">
          <div className="col-md-10 offset-md-1">
            <div className="contains">
              <div className="col-md-6 pt-md-5">
                <div className="social-icons pt-md-5">
                  <div className="icon">
                    <i className="fab fa-facebook-f"></i>
                  </div>
                  <div className="icon">
                    <i className="fab fa-instagram"></i>
                  </div>
                  <div className="icon">
                    <i className="fab fa-linkedin-in"></i>
                  </div>
                  <div className="icon">
                    <i className="fab fa-whatsapp"></i>
                  </div>
                </div>
                <div className="name pt-2">
                  <h3 className='hello'>Hello! I'm <span>Saphal Subedi</span></h3>
                </div>
                <div className="my-position pt-2">
                  <h1 className='typicals'>
                    <Typical
                      loop={Infinity}
                      steps={[
                        'Full Stack Developer',
                        1000,
                        'MERN Stack Developer',
                        1000,
                        'React Developer',
                        1000,
                      ]}
                    />
                  </h1>
                  <p className='parg'>Good at building websites front, back end and deployment.</p>
                </div>
                <div className="buttons mt-4 pt-4 pb-5">
                  <button>
                    <a href="#contact" className='text-white'>Hire me</a>
                  </button>
                  <button className='resume'>
                    <a href="./images/resume.pdf" target="_blank" className="text-white">Get Resume</a>
                  </button>
                </div>
              </div>
              <div className="col-md-6 mimage pb-5 pt-5">
                <center className='pb-5'>
                  <div className="my-image ">
                    <img src="./images/saphal.jpg" alt="" />
                  </div>
                </center>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-footer">
          <img src="./images/foot_img.png" className='w-100' alt="" />
        </div>
      </div>
    </div>
  )
}

export default Header