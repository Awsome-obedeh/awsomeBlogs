import React from 'react'
import Pagination from '../pagination/pagination'
import styles from './CardList.module.css'
import Card from '../card/Card'

export default function CardList() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}> Recent Posts</h1>
      <div className={styles.posts}>
        <div className={styles.post}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        </div>
      </div>
      <Pagination/>
      <p>cardlist</p>
    </div>
  )
}
