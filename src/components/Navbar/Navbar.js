import Link from 'next/link'
import styles from './Navbar.module.css'


export const Navbar = () => {
  return (
   <div className={`${styles.Container} px-4 py-4`}>
    
    <Link className={styles.linkToPage} href="/">Home</Link>
    <Link className={styles.linkToPage} href="/about">About</Link>
    <Link className={styles.linkToPage} href="https://www.canva.com/design/DAGOvEuM0m0/WbaFjCa8dbVVMI8BgIJwlQ/view?utm_content=DAGOvEuM0m0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=ha4768648cf">Resume</Link>
    <Link className={styles.linkToPage} href="/contact">Contact</Link>

   </div>

  )
}
