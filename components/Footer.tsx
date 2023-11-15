'use client'
import Logo from './Logo'
import { FaFacebookSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
function Footer() {
  return (
    <footer className="border-t-2">
      <div className="wrapper w-full !items-start py-28 lg:flex-wrap md:flex-wrap">
        <div className="ft-cols">
          <Logo className="logo" />
          <a className="text-2xl font-semibold" href="https://wa.me/8130505609" target="_blank" rel="noopener noreferrer">+91 8130505609</a>
          <a className="text-orange-500" href="mailto:ansari.hasib@gmail.com" rel="noopener noreferrer">ansari.hasib@gmail.com</a>
          <div className="social">
            <a className='text-cyan-900' href="#" target="_blank" rel="noopener noreferrer"><FaFacebookSquare /></a>
            <a className='text-cyan-600' href="#" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a className='text-red-600' href="#" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          </div>
        </div>
        <div className="ft-cols">
          <h4 className='ft-heading'>Getting started</h4>
          <ul>
            <li><a href="#">Release Notes</a></li>
            <li><a href="#">Upgrade Guide</a></li>
            <li><a href="#">Browser Support</a></li>
            <li><a href="#">Dark Mode</a></li>
          </ul>
        </div>
        <div className="ft-cols">
          <h4 className='ft-heading'>Explore</h4>
          <ul>
            <li><a href="#">Prototyping</a></li>
            <li><a href="#">Design systems</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Security</a></li>
          </ul>
        </div>
        <div className="ft-cols">
          <h4 className='ft-heading'>Resources</h4>
          <ul>
            <li><a href="#">Best practices</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">Developers</a></li>
            <li><a href="#">Learn design</a></li>
          </ul>
        </div>
        <div className="ft-cols">
          <h4 className='ft-heading'>Community</h4>
          <ul>
            <li><a href="#">Discussion Forums</a></li>
            <li><a href="#">Code of Conduct</a></li>
            <li><a href="#">Contributing</a></li>
            <li><a href="#">API Reference</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer