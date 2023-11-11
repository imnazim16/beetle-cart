'use client'
import Logo from './Logo'
import { FaFacebookSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
function Footer() {
  return (
    <footer className="border-t-2">
      <div className="wrapper justify-center items-center py-14">
        <div className="ft-section">
          <Logo className="logo" />
          <a className="text-stone-950" href="https://wa.me/8130505609" target="_blank" rel="noopener noreferrer">+91 8130505609</a>
          <a className="text-orange-500" href="mailto:ansari.hasib@gmail.com" rel="noopener noreferrer">ansari.hasib@gmail.com</a>
          <div className="social">
            <a className='text-cyan-900' href="#" target="_blank" rel="noopener noreferrer"><FaFacebookSquare /></a>
            <a className='text-cyan-600' href="#" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a className='text-red-600' href="#" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer