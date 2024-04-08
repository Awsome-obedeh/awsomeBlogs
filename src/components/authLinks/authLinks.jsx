
"use client"
import React, { useState } from 'react'
import styles from './authLinks.module.css'
import Link from 'next/link'



export default function AuthLinks() {
  const [open, setOpen] = useState(false)
  
  return (
    <div className={styles.container}>
      <p>
        {!status ? <Link href='/login'>Login</Link> : (<>
          <Link href='/'>Write</Link>
          <span style={{ cursor: 'pointer', paddingLeft: '4px' }}>logoout</span>
        </>)} </p>

      <div className={styles.burger} onClick={()=>setOpen(!open)} >
        <div className={styles.line}> </div>
        <div className={styles.line}> </div>
        <div className={styles.line}> </div>


      </div>

      {open && (
        <div className={styles.responsiveMenu}>

          <Link href='/'>Homepage</Link>
          <Link href='/'>About</Link>
          <Link href="/">Contact</Link>

          {!status ? <Link href='/login'>Login</Link> : (<>
          <Link href='/'>Write</Link>
          <span style={{ cursor: 'pointer', paddingLeft: '4px' }}>logoout</span>
        </>)} 

        </div>
      )}
    </div>

  )
}
