import React from 'react'
import styles from './Menu.module.css'
import Link from 'next/link'
import Image from 'next/image'
export default function Menu() {
  return (
    <div className={styles.container}>
        <h2 className={styles.}>{"What's Hot"}</h2>
        <h1>Most Popular</h1>
        <div className={styles.items}>
          <Link className={styles.item}> 
            <div className={styles.imageContainer}>
              <Image src="elite (3).png" fill className={styles.image}/>
            </div>

            <div className={styles.textContainer}>
              <span className={`${styles.category} ${styles.travel}`}>Travel</span>

              <h3>
                When it all began, Take a walk doen memory lane
              </h3>
            </div>
          </Link>
        </div>
    </div>
  )
}
