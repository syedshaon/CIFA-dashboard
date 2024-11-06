import React from 'react'
import { useTheme } from './contexts/ThemeContext'; 

function TopCards() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className=' w-100 border border-light ' style={{ borderWidth:"1px", minHeight:"140px"}}>TopCards</div>
  )
}

export default TopCards