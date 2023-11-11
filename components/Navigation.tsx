'use client'
import Link from 'next/link'
import React from 'react'

const Navigation = () => {
  
  return (
    <nav>
        <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/men">Men</Link></li>
            <li><Link href="/women">Women</Link></li>
            <li><Link href="/beauty">Beauty</Link></li>
            <li><Link href="/sport">Sport</Link></li>
            <li><Link href="/contact-us">Contact Us</Link></li>
        </ul>
    </nav>
  )
}

export default Navigation