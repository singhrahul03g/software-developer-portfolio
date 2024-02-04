import React from 'react'

const data = [
    { number: 30, text: 'Projects'},
    { number: 30, text: 'tools and technologies', },
    { number: 3000, text: 'LinkedIn Followers', },
    { number: 30, text: 'Github Repositories', }
  ];

const Accomplishments = () => {
  return (
    <div>
        <div>
        <h2>Projects</h2>
        <p>some projects</p>
        </div>
        <div>
        <h2>Tools and Technologies</h2>
        <p>some projects</p>
        </div>
        <div>
        <h2>LinkedIn Followers</h2>
        <p>some projects</p>
        </div>
        <div>
        <h2>Github Repositories</h2>
        <p>some projects</p>
        </div>
    </div>
  )
}

export default Accomplishments