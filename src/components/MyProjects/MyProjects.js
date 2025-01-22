import React from 'react'
import styles from './style.module.css'

const MyProjects = () => {
  return (
    <div className={styles.projectsSection}>
        <h1>50 <span>+</span></h1>
        <div className={styles.projectsDesc}>
            <h2>
                Projects Completed
            </h2>
            <p>Currently I am working as a mobile and web app developer, I have been working on mern stack and flutter.</p>
        </div>
    </div>
  )
}

export default MyProjects
