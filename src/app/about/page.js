import React from 'react'
import './style.css'
import MyProjects from '@/components/MyProjects/MyProjects'

const AboutMe = () => {
  return (
    <>
    <div className="about-contact-section">
      <div className="about-section">
       
      </div>
      <div className="contact-section">
        <div >
          <h1>Rahul Singh</h1>
          <p>I am a Software Engineer who is skilled in development of web applications and mobile applications. Also I am skilled 
in working with machine learning, deep learning & artificial intelligence. I have 4+ years of experience as a 
software engineer. I worked for three years on mern stack developent and 1 years of experience on mobile 
application development and AI engineer. My key skills are MERN stack, flutter & Machine learning and AI. I have 
completed 50+ projects overall.</p>
        </div>
      </div>
    </div>
    <MyProjects/>
    <div className='how-to-develop'>
    <div><h1>01. Research</h1><p>Understand the client’s subject matter completely and build on the knowledge related to it, becoming intimately familiar with the subject matter. Determine methods to address the specific customer’s needs and requirements.</p></div>
    <div><h1>02. Design</h1><p>Misleadingly thought of as the superficial appearance of a product, design actually encompasses a lot more. It is a cross functional process that includes market research, technical research, design of a concept, and prototype mockup.</p></div>
    <div><h1>03. Develop</h1><p>Findings from the research and design phases are utilized for the production of specific products including materials, systems, and methods. Engineer utilizing the research and designs to produce commercial products for the customer.</p></div>
    </div>
    </>
  )
}

export default AboutMe

