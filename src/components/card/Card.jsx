import React from 'react'
import Image from 'next/image'
import styles from './Card.module.css'
import Link from 'next/link'
export default function Card() {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src='/elite (1).jpg' className={styles.image} fill />
            </div>
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>11.02.2023</span>
                    <span className={styles.category}>CULTURE</span>
                </div>
                <Link href='/'>
                    <h1>Our first deal of 1$ , later grew to be our most block deals</h1>
                </Link>

                <p className={styles.description}>The saying, never judge a book by it's cover has never looked truer.</p>
                <Link href='/' className={styles.link}>Read More</Link>
            </div>
        </div>
    )
}
