import React, { useRef } from 'react';
import Header from '../components/nav/Header'
import './style.css'
import { Tabs } from 'antd';
import ScrollButton from '../components/scroll/ScrollButton';
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';
const { TabPane } = Tabs;

const Home = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_on0426a', 'template_02twcnq', form.current, '6zzcYvywJH8w813Pj')
      .then((result) => {
        swal({
          title: "Success",
          text: "Your message has been sent!",
          icon: "success",
          dangerMode: 'ok!',
        })
        window.location.reload('');
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div>
      <Header />
      <div className="about-me pt-4" id='about'>
        <div className="about-title pt-4">
          <h2 className='about'>About Me</h2>
        </div>
        <div className="col-md-10 offset-md-1">
          <div className="about-content">
            <div className="col-lg-6 p-md-5 p-3">
              <p className='about-paragraph'>
                I have been doing Fullstack Development with MERN Stack for 2 years now. I am a self
                learned developer who has been honing his skills with working on different projects. I am passionate
                about Web Applications, I’ve always been someone who has both a creative and a logical side.
                I'm quietly confident, naturally curious, and perpetually working on improving my chops one design
                problem at a time.
              </p>
              <div className="buttons mt-md-4 pt-md-4 pb-md-5">
                <button>
                  <a href="#contact" className='text-white'>Hire me</a>
                </button>
                <button className='resume'>
                  <a href="./images/resume.pdf" target="_blank" className="text-white">Get Resume</a>
                </button>
              </div>
            </div>
            <div className="col-lg-6 pt-3 p-md-5">
              <img src="./images/about.jpg" className='w-100' alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="my-resume pb-md-5 pt-5 mb-3" id='resume'>
        <div className="resume-title pt-4">
          <h2 className='resume'>Resume</h2>
        </div>
        <div className="col-md-10 offset-md-1">
          <div className="resume-content p-lg-5">
            <Tabs tabPosition={'left'}>
              <TabPane tab="Education" key="1">
                <div className="education p-md-4 p-3 p-lg-4 mt-lg-4 pt-md-5">
                  <ul className='university'>
                    <li>Tribhuvan University, Nepal</li>
                    <div className="button">
                      <button>2075-2079</button>
                    </div>
                  </ul>
                  <p className='parags ps-5'>BSc. Computer Science And Information Technology</p>
                </div>
                <div className="education ps-md-4 pe-md-4 pt-2 p-3">
                  <ul className='university'>
                    <li>High School</li>
                    <div className="button">
                      <button>2072-2074</button>
                    </div>
                  </ul>
                  <p className='parags ps-5'>Udayasi Higher Secondary School</p>
                </div>
              </TabPane>
              <TabPane tab="Work Experience" key="2">
                <div className="education p-md-4 p-3 p-lg-4 mt-lg-4 pt-md-5">
                  <ul className='university'>
                    <li>Durshikshya</li>
                    <div className="button">
                      <button>2077/10/9-2078/19</button>
                    </div>
                  </ul>
                  <p className='parags ps-5'>Full Stack Developer(MERN) Intern</p>
                </div>
                <div className="education ps-md-4 pe-md-4 pt-2 p-3">
                  <ul className='university'>
                    <li>Smart Innovation Nepal</li>
                    <div className="button">
                      <button>2078-present</button>
                    </div>
                  </ul>
                  <p className='parags ps-5'>Full Stack Developer(MERN)</p>
                </div>
              </TabPane>
              <TabPane tab="Programming Skills" key="3">
                <div className='skill-flex'>
                  <div className="fskill ps-md-4">
                    <div className="skill-progress">
                      <ul className='university pt-5'>
                        <li>Java Script</li>
                      </ul>
                      <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{ width: '85%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                    </div>
                    <div className="skill-progress">
                      <ul className='university pt-4'>
                        <li>React Js</li>
                      </ul>
                      <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{ width: '90%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                    </div>
                    <div className="skill-progress">
                      <ul className='university pt-4'>
                        <li>Node Js</li>
                      </ul>
                      <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{ width: '80%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                    </div>
                    <div className="skill-progress">
                      <ul className='university pt-4'>
                        <li>Express Js</li>
                      </ul>
                      <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{ width: '85%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                    </div>
                  </div>
                  <div className="sskills ps-md-5">
                    <div className="skill-progress">
                      <ul className='university pt-5'>
                        <li>React Native</li>
                      </ul>
                      <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{ width: '85%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                    </div>
                    <div className="skill-progress">
                      <ul className='university pt-4'>
                        <li>Mongo Db</li>
                      </ul>
                      <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{ width: '85%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                    </div>
                    <div className="skill-progress">
                      <ul className='university pt-4'>
                        <li>Html</li>
                      </ul>
                      <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{ width: '85%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                    </div>
                    <div className="skill-progress">
                      <ul className='university pt-4'>
                        <li>CSS</li>
                      </ul>
                      <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{ width: '85%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                    </div>
                  </div>
                </div>
              </TabPane>
              <TabPane tab="Projects" key="4">
                <div className="projects">
                  <div className="education pt-4">
                    <ul className='university'>
                      <li>Bishal Foundation</li>
                    </ul>
                    <p className="slink">
                      <a href="https://bishalfoundation.org/" target='_blank' rel="noopener noreferrer" ><i class="fal fa-globe"></i> website</a>
                    </p>
                    <p className='technology ps-4'>Technologies Used: React Js,Node Js,Express Js, MongoDb,Bootstrap.</p>
                  </div>
                  <div className="education">
                    <ul className='university'>
                      <li>Hello World Tours And Travels</li>
                    </ul>
                    <p className="slink">
                      <a href="http://helloworld.com.np/" target='_blank' rel="noopener noreferrer" ><i class="fal fa-globe"></i> website</a>
                    </p>
                    <p className='technology ps-4'>Technologies Used: React Js,Node Js,Express Js, MongoDb,Bootstrap,Material UI,Ant Design,Redux.</p>
                  </div>
                  <div className="education">
                    <ul className='university'>
                      <li>Trends Fashion</li>
                    </ul>
                    <p className="slink">
                      <a href="http://trendsfashion.com.np/" target='_blank' rel="noopener noreferrer" ><i class="fal fa-globe"></i> website</a>
                    </p>
                    <p className='technology ps-4'>Technologies Used: React Js,Node Js,Express Js, MongoDb,Bootstrap,Material UI,Ant Design,Redux.</p>
                  </div>
                  <div className="education">
                    <ul className='university'>
                      <li>Bytes E-Magazine</li>
                    </ul>
                    <p className="slink">
                      <a href="http://bytes-8.herokuapp.com/" target='_blank' rel="noopener noreferrer" ><i class="fal fa-globe"></i> website</a>
                    </p>
                    <p className='technology ps-4'>Technologies Used: React Js,Bootstrap.</p>
                  </div>
                  <div className="education">
                    <ul className='university'>
                      <li>Airawati Prakashan</li>
                    </ul>
                    <p className="slink">
                      <a href="http://airawatiprakashan.com/" target='_blank' rel="noopener noreferrer" ><i class="fal fa-globe"></i> website</a>
                    </p>
                    <p className='technology ps-4'>Technologies Used:  React Js,Node Js,Express Js, MongoDb,Bootstrap,Material UI,Ant Design,Redux.</p>
                  </div>
                  <div className="education">
                    <ul className='university'>
                      <li>Theme Maker</li>
                    </ul>
                    <p className="slink">
                      <a href="http://thememaker.com.np/" target='_blank' rel="noopener noreferrer"><i class="fal fa-globe"></i> website</a>
                    </p>
                    <p className='technology ps-4'>Technologies Used:  React Js,Node Js,Express Js, MongoDb,Bootstrap,Material UI,Ant Design,Redux.</p>
                  </div>
                  <div className="education">
                    <ul className='university'>
                      <li>JALTAN</li>
                    </ul>
                    <p className="slink">
                      <a href="http://www.jaltan.org.np/" target='_blank' rel="noopener noreferrer" ><i class="fal fa-globe"></i> website</a>
                    </p>
                    <p className='technology ps-4'>Technologies Used:  React Js,Node Js,Express Js, MongoDb,Bootstrap,Material UI,Ant Design,Redux.</p>
                  </div>
                </div>
              </TabPane>
              <TabPane tab="Interest" key="5">
                <div className="education pt-4">
                  <ul className='university'>
                    <li>Technology</li>
                  </ul>
                  <ul className='university'>
                    <li>Books</li>
                  </ul>
                  <ul className='university'>
                    <li>Travel</li>
                  </ul>
                  <ul className='university'>
                    <li>Music</li>
                  </ul>
                  <ul className='university'>
                    <li>Movie</li>
                  </ul>
                  <ul className='university'>
                    <li>Sport</li>
                  </ul>
                </div>
              </TabPane>
            </Tabs>
          </div>
        </div>
      </div>
      <div className="contact-me" id='contact'>
        <div className="col-md-10 offset-md-1 pb-5">
          <div className="contact-title pt-4">
            <h2 className='contact'>Contact Me</h2>
          </div>
          <div className="row pb-5">
            <div className="col-md-6 touch ps-md-5 pt-4">
              <div className="get-touch">
                <h2>Get In Touch!</h2>
              </div>
              <div className="social-iconss">
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-linkedin-in"></i>
                <i className="fab fa-whatsapp"></i>
              </div>
              <div className="email pt-4">
                <p><i className="far fa-envelope"></i> &nbsp; subedisaphal099@gmail.com</p>
              </div>
              <div className="email pt-1">
                <p><i className="fas fa-phone-alt"></i> &nbsp; +977-9866457226</p>
              </div>
            </div>
            <div className="col-md-6">
              <center>
                <div className="contactForm mt-4">
                  <form ref={form} onSubmit={sendEmail}>
                    <h2>Send Message</h2>
                    <div className="inputBox">
                      <input type="text" name="name" required="required" />
                      <span>Full Name</span>
                    </div>
                    <div className="inputBox">
                      <input type="text" name="user_email" required="required" />
                      <span>Email</span>
                    </div>
                    <div className="inputBox">
                      <textarea name="message" required="required" cols="auto" rows="auto" defaultValue={""} />
                      <span>Type your Messgae</span>
                    </div>
                    <div className="inputBox">
                      <input type="submit" value="Send" />
                    </div>
                  </form>
                </div>
              </center>
            </div>
          </div>
        </div>
        <div className="footimage">
          <img src="./images/foot_img.png" className='w-100' alt="" />
        </div>
      </div>
      <div className="footer">
        <p className='footers p-4'>&copy;2022 Saphal Subedi</p>
      </div>
      <ScrollButton />
    </div>
  )
}

export default Home