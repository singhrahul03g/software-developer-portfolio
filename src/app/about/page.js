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
          <p>I am a  software developer who has been learning the key concepts of NEXT.JS like Routing, Data Fetching, Rendering, Caching etc. and have applied these concepts in building a portfolio web application of a software developer. I also worked on a blog application using Next.JS.</p>
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

