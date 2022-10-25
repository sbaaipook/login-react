import React from 'react'
import "./Home.css"

const Home=({children})=> {
  return (
    <div className='home'>
      {children}
    </div>
  )
}

export default Home