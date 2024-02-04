
import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoIosArrowDropupCircle } from "react-icons/io";
import './style.css'
import Link from 'next/link';
import MoveToTop from '../MoveToTop/page';

const Footer = () => {
  return (
    <div className='footer-section'>
        <p className='copyright'>© 2024 Rahul Singh.</p>
        <div className='social-icons'>
            <Link rel="noopener noreferrer" target="_blank" href={"https://www.linkedin.com/in/singhrahul03l/"}><FaLinkedin /></Link>
        <Link rel="noopener noreferrer" target="_blank" href={"https://github.com/singhrahul03g"}><FaGithubAlt/></Link>
        <Link rel="noopener noreferrer" target="_blank" href={"https://www.instagram.com/rahul_aka_sabal/"}> <FaInstagramSquare /></Link>
        <MoveToTop/>
        </div>
       
    </div>
  )
}

export default Footer
