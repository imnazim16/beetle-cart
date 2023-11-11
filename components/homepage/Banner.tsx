import Link from 'next/link'
import React from 'react'

const Banner = () => {
  return (
    <div className="slider">  
        <div className="wrapper">
            <div className="sub-title">In this season, find the best 🔥</div>
            <h1>Exclusive collection for everyone</h1>
            <Link className="linkBtn" href="/">Explore More</Link>
        </div>
    </div>
  )
}

export default Banner