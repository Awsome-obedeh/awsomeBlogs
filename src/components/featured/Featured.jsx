import React from 'react'
import Image from 'next/image'
import styles from './featured.module.css'

export default function Featured() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}> <b>Hey!!!</b> A place to tarde your crypto currency at good rates, get paid swiftly and exchange faster </h1>
      
      <div className={styles.post}>
        <div className={styles.imgCon}>
          <Image src='/Elite.png' fill className={styles.img} />
        </div>

        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Hey ELite is active</h1>
          <p className={styles.postDesc}>Tarde your giftcards, cryptocurrency of all kinds with Elite vendors and get paid Instantly
            Buying crypto currency have never ben easier. Trad with Elite becuase Elite is always Active
          </p>
          <button className={styles.btn}>Read More</button>

        </div>
      </div>
    </div>
  )
}
