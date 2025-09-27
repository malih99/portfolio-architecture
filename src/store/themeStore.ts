import React, { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext({
dark: false,
toggle: () => {}
})


export const ThemeProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
const [dark, setDark] = useState<boolean>(() => {
const stored = localStorage.getItem('theme')
if (stored) return stored === 'dark'
return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
})


useEffect(() => {
const root = document.documentElement
if (dark) root.classList.add('dark')
else root.classList.remove('dark')
localStorage.setItem('theme', dark ? 'dark' : 'light')
}, [dark])


return <ThemeContext.Provider value={{dark, toggle: () => setDark(d => !d)}}>{children}</ThemeContext.Provider>
}