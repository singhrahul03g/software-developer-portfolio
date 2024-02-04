import React from 'react'
import styles from './style.module.css'

const MyProjects = () => {
  return (
    <div className={styles.projectsSection}>
        <h1>2 <span>+</span></h1>
        <div className={styles.projectsDesc}>
            <h2>
                Projects Completed
            </h2>
            <p>For the last 2 months, I have learned the key concepts of NEXT.JS like Routing, Data Fetching, Rendering, Caching etc. and have applied these concepts in building a portfolio web application of a software developer. I also worked on a blog application using Next.JS.</p>
        </div>
    </div>
  )
}

export default MyProjects
