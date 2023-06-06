import React from 'react'
import './about.css'
import IMG from '../../assets/IMG.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
export const About = () => {
  return (
    <section id='about'>
   <h5>Get to Know</h5>
   <h2>About Me</h2>

   <div className="container about__container">
    <div className="about__me">
      <div className="about__me-image">
        <img src={IMG}  alt="About Image" /> 
      </div>
    </div>

    <div className="about__content">
      <div className="about__cards">
        <div className="card">
        <article className='about__card'>
          <FaAward className='about__icon'/>
          <h5>Experience</h5>
          <small>2+ Years Working</small>
        </article>
        </div>
        <div className="card">
         <article className='about__card'>
          <FiUsers className='about__icon'/>
          <h5>Clients</h5>
          <small>10+ Worldwide</small>
        </article>
        </div>
        <div className="card">
         <article className='about__card'>
          <VscFolderLibrary className='about__icon'/>
          <h5>Projects</h5>
          <small>10+ Completed Projects</small>
        </article>
         </div>
      </div>
      
      <div className='text'>
      <p>
     I'm a passionate and creative front-end developer with a flair for crafting captivating user experiences. With a blend of technical expertise and a keen eye for design, I specialize in transforming ideas into visually stunning and interactive websites.
<br />
Using HTML, CSS, and JavaScript as my primary tools, I enjoy pushing the boundaries of what's possible in web development.
<br />
I pride myself on my continuous pursuit of innovation
<br />
If you're looking for a front-end developer who can bring your ideas to life and add that touch of creativity to your projects, I would love to hear from you.
Let's connect and bring your vision to the digital world!
      </p>
      </div>
      <a href="#contact" className='btn btn-primary'>Let's talk</a>
     </div>
   </div>
   </section>
  )
}
