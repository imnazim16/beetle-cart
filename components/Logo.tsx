"use client"
import Image from 'next/image'
import LogoSvg from '../public/logo.svg'
import { GiScarabBeetle } from 'react-icons/gi';
import Link from 'next/link';
export interface Logo {
  className: string;
}
const Logo = ({ className="" } : Logo) => {
  return (
    <div className={`${className}`}>
      <Link href="/">
        <Image src={LogoSvg} alt="BlueBee" priority />
      </Link>
        {/* <GiScarabBeetle /> */}
    </div>
  )
}

export default Logo