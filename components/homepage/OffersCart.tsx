import React from 'react'
import Logo from '../Logo'

const OffersCart = () => {
  return (
    <div className='wrapper py-16 justify-between'>
        <div className='w-2/4'>
            <div className="st-logo">
                <Logo className="logo" />
            </div>
            <h2 className='heading1'>Earn free money <br />with Ciseco</h2>
            <p>With Ciseco you will get freeship & savings combo...</p>
            <div className="btns-box">
                <a className="btn btn-primary !rounded-full !bg-slate-800 !border-0 !text-white hover:!bg-slate-900 hover:drop-shadow-lg" href="#">Savings combo</a>
                <a className="btn btn-primary !rounded-full !border-0 !bg-slate-50 hover:!bg-slate-200 hover:drop-shadow-lg" href="#">Discover more</a>
            </div>
        </div>
        <div className='w-2/4'>
            <img src="./rightLargeImg.webp" alt="" />
        </div>
    </div>
  )
}

export default OffersCart