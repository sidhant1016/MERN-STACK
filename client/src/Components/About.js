import React from 'react';
import sidpic from "../images/sid.jpg";

const About = () => {
  return (
    <>
      <div className='container emp-profile'style={{backgroundColor:"#00d4ff"}} >
        <form method="">
          <div className='row'>
            <div className='col-md-4'>
            <img src={sidpic} className='img-responsive profile-pic' alt='Sid' style={{width:"128px",height:"137px"}}/>

            </div>
            <div className='col-md-6'>
              <div className='profile-head'>
                <h5>SIDDHANT GAGRANI</h5>
                <h6>Web Developer</h6>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-4'>
              <div className='profile-work'>
                <h4>PROFILE LINKS</h4>
                <a href="https://www.linkedin.com/in/sidhant-gagrani-07b816208/">LinkedIn</a> <br />
                <a href="https://instagram.com/sid_maheshwari16?igshid=ZDdkNTZiNTM=">Instagram</a> <br />
                <a href="https://github.com/sidhant1016">Github</a> <br />
              </div>
            </div>
            <div className='col-md-8'>
              <div className='tab-content profile-tab' id='myTabContent'>
                <div className='tab-pane fade show active' id='home' role='tabpanel' aria-labelledby='home-tab'>
                  <div className='row'>
                    <div className='col-md-6'>
                      <label>User Id</label>
                    </div>
                    <div className='col-md-6'>
                      <p>Sidhant_01</p>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-md-6'>
                      <label>Name</label>
                    </div>
                    <div className='col-md-6'>
                      <p>Siddhant Gagrani</p>
                    </div>
                  </div>
                
                  <div className='row'>
                    <div className='col-md-6'>
                      <label>Email</label>
                    </div>
                    <div className='col-md-6'>
                      <p>gagranirocksidhanth@gmail.com</p>
                    </div>
                    <div
                      className='tab-pane fade'
                      id='profile'
                      role='tabpanel'
                      aria-labelledby='profile-tab'
                    >


                    </div>
                    <div className='row'>
                      <div className='col-md-6'>
                        <label>Total Projects</label>
                      </div>
                      <div className='col-md-6'>
                        <p>10</p>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-md-6'>
                        <label>English Level</label>
                      </div>
                      <div className='col-md-6'>
                        <p>Fluent</p>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-md-6'>
                        <label>Experience</label>
                      </div>
                      <div className='col-md-6'>
                        <p>6 months</p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default About;
