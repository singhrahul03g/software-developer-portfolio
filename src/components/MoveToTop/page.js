"use client"
import React from 'react'
import { IoIosArrowDropupCircle } from 'react-icons/io'
import styles from './style.module.css'

const MoveToTop = () => {
  return (
    <IoIosArrowDropupCircle onClick={()=>window.scrollTo(0, 0)} className={styles.upwardIcon} />
  )
}

export default MoveToTop