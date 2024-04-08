"use client"
import React, { useContext } from 'react'
import styles from './themeToogle.module.css'
import { IoIosSunny, IoMdMoon } from "react-icons/io";
import { MdOutlineNightlightRound } from "react-icons/md";
import {ThemeContext} from '@/context/ThemeContext';

export default function ThemeToogle() {
  const {theme,toggle}=useContext(ThemeContext)
  console.log(theme)
  return (
    <div className={styles.container} style={theme=="dark" ? {backgroundColor:"white"}: {backgroundColor:"#0f1721a"}}>
        <IoIosSunny style={theme==='dark' ? {color:'gold'}:""}/>
        <div className={styles.ball} onClick={toggle} style={theme=='dark'? {right:'2px',background:'white'}: {left:'2px',background:'#0f172a'}}></div>
        <IoMdMoon/>
    </div>
  )
}
