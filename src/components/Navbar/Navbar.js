import Link from 'next/link'
import styles from './Navbar.module.css'


export const Navbar = () => {
  return (
   <div className={`${styles.Container} px-4 py-4`}>
    
    <Link className={styles.linkToPage} href="/">Home</Link>
    <Link className={styles.linkToPage} href="/about">About</Link>
    <Link className={styles.linkToPage} href="https://docs.google.com/document/d/e/2PACX-1vQaSDtEkuFJe8WqFqDI0fWukco376XHn8KQwKicMCXWfm-rU5LnLhtzRq-X4bPbPc6oQxUToMeNw4oh/pub">Resume</Link>
    <Link className={styles.linkToPage} href="/contact">Contact</Link>

   </div>

  )
}
