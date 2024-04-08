import React, { useContext } from 'react'
import styles from './navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import AuthLinks from '../authLinks/authLinks'
import ThemeToogle from '../ThemeToogle/themeToogle'


export default function Navbar() {

  return (
    <div className={styles.container}>

      <div className={styles.social}>
        <Image src="/facebook.svg" width={15} height={15} alt="socials"/>
        <Image src="/whatsapp.svg" width={15} height={15} alt="socials" />
        <Image src="/x.svg" width={15} height={15} alt="socials" />
        <Image src="/tiktok.svg" width={15} height={15} alt="socials" />

      </div>
      <div className={styles.logo}>AwsomeBlogs</div>
      <div className={styles.links}>
        {/* toggle swithch */}

        <ThemeToogle />
        <Link className={styles.link} href="/">Homepage</Link>
        <Link className={styles.link} href="/">Contact</Link>
        <Link className={styles.link} href="/">About</Link>

        {/* auth links */}
        <AuthLinks />

      </div>


    </div>




  )
}
