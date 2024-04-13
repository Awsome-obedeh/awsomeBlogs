import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './categories.module.css'

export default function Categories() {
  
  return (
    <div className={styles.container}> 
      <h1 className={styles.title}>Popular Categorylist</h1>
      <div className={styles.categories}>
        
          <Link href="/blog/?cat=style" className={`${styles.category} ${styles.style}`}>
            <Image src='/elite (1).jpg'  width={32} height={32} alt="images" className={styles.image}/>
            Style
          </Link>  
          <Link href="/blog/?cat=style" className={`${styles.category} ${styles.travel}`}>
            <Image src='/elite (2).png'  width={32} height={32} alt="images" className={styles.image}/>
            Travel
          </Link>  
          <Link href="/blog/?cat=style" className={`${styles.category} ${styles.culture}`}>
            <Image src='/elite (3).png'  width={32} height={32} alt="images" className={styles.image}/>
            Culture
          </Link>  
          <Link href="/blog/?cat=style" className={`${styles.category} ${styles.fashion}`}>
            <Image src='/elite (4).png'  width={32} height={32} alt="images" className={styles.image}/>
            Fashion
          </Link>  
          <Link href="/blog/?cat=style" className={`${styles.category} ${styles.food}`}>
            <Image src='/elite (1).jpg'  width={32} height={32} alt="images" className={styles.image}/>
            Food
          </Link>  
          <Link href="/blog/?cat=style" className={`${styles.category} ${styles.ent}`}>
            <Image src='/elite (1).jpg'  width={32} height={32} alt="images" className={styles.image}/>
            Entertainment
          </Link>  

        </div>
      
    </div>
  )
}
