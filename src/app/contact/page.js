"use client"

import React,{ useState } from 'react'
import styles from './contact.module.css'

const Contact = () => { 

    const [formvalues,setFormValues] = useState({
        "name":"",
        "email":"",
        "subject":"",
        "message":""
    })

    const handleSubmit =(e)=>{
        e.preventDefault()
        console.log(formvalues)

    }

    const handleChange =(e)=>{
        const name = e.target.name
        const value = e.target.value

        setFormValues({
            ...formvalues,
            [name]:value
        })

    }

  return (
    <div className={styles.contactSection}>
        <h1 className={styles.contact}>Contact</h1>
        <hr className={styles.hrLine}></hr>
        <form onSubmit={handleSubmit} className={styles.formStyle}>
            <label className={styles.textColor}>Your Name(Required)</label>
            <input name='name' onChange={handleChange} className={styles.inputStyle} type='text' placeholder='Enter Your Name' />
            <label className={styles.textColor}>Your Email(Required)</label>
            <input name='email' onChange={handleChange} className={styles.inputStyle} type='email' placeholder='Enter Your Email' />
            <label  className={styles.textColor}>Subject</label>
            <input name='subject' onChange={handleChange} className={styles.inputStyle} type='text' placeholder='Enter Your Subject' />
            <label  className={styles.textColor}>Message</label>
            <textarea name='message' onChange={handleChange} className={styles.textareaStyle} type='text' placeholder='Enter Your Message' />
            <button className={styles.btnStyle} type='submit'>Send</button>

        </form>
    </div>
  )
}

export default Contact