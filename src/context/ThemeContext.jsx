// "use client"

// import  { createContext,useState } from 'react'

// export const ThemeContext=createContext();

// function getFromLocalStorage(){
  
//     // by default next js is a server side rendering, so irrespective of the use clien we use, at forst it's still a server component
//     // so it won't see our local storage

//     if(typeof window !=undefined){
//       const value= localStorage.getItem("theme");
//       return value || "light"

//     }
// }



// export  const  ThemeContextProvider=({children})=> {
//     // we will store our light/dark mode in the local storage, to prevent when the user refreshes the browser

//     const {theme, setTheme}=useState(()=>{
//       return getFromLocalStorage()
//     })
//     // const [theme, setTheme]=useState('light')

//   return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  
       
// }
// // export default ThemeContext
"use client"
import { createContext,useEffect,useState } from "react"

export const ThemeContext= createContext()

const getFromLocalStorage=()=>{
  if(typeof window !== "undefined"){

    const value=localStorage.getItem("theme")
    return value ||  "light"
  }
}


export const ThemeContextProvider= ({children})=>{
  const [theme,setTheme]=useState(()=>{
    return getFromLocalStorage()
  })

  const toggle=()=>{
    setTheme(theme==="light"? "dark":"light")
  }

  // whenever out theme chnages we should update our localstorage
  useEffect(()=>{
    localStorage.setItem("theme",theme)
  },[theme])

  return <ThemeContext.Provider value={{theme,toggle}}>{children}</ThemeContext.Provider>
}
