import DiscoverCard from '@/util/DiscoverCard'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Divcover = () => {
  return (
    <div className="wrapper !items-start flex-col py-16">
        <h2 className="heading2">Discover more. <span>Good things are waiting for you</span></h2>
        <div className="card-1 w-full">
            <DiscoverCard className="bg-neutral-100 hover:bg-neutral-200 w-1/4 rounded-xl p-6">
                <div className="imgbox">
                    <img src='./img-1.png' alt="" />
                </div>
                <div className="card-sub pb-3">Explore new arrivals</div>
                <div className="card-title pb-5">Shop the latest <br /> from top brands</div>
                <Link className="linkBtn !w-fit !py-2 !px-5 !btn-accent" href="#">Explore More</Link>
            </DiscoverCard>
            <DiscoverCard className="bg-orange-50 hover:bg-orange-100 w-1/4 rounded-xl p-6">
                <div className="imgbox">
                    <img src='./img-2.webp' alt="" />
                </div>
                <div className="card-sub pb-3">Digital gift cards</div>
                <div className="card-title pb-5">Give the gift <br /> of choice</div>
                <Link className="linkBtn !w-fit !py-2 !px-5 !btn-accent" href="#">Explore More</Link>
            </DiscoverCard>
            <DiscoverCard className="bg-emerald-100 hover:bg-emerald-200 w-1/4 rounded-xl p-6">
                <div className="imgbox">
                    <img src='./img-3.png' alt="" />
                </div>
                <div className="card-sub pb-3">Sale Collection</div>
                <div className="card-title pb-5">Up to <br /> 80% off retail</div>
                <Link className="linkBtn !w-fit !py-2 !px-5 !btn-accent" href="#">Explore More</Link>
            </DiscoverCard>
            <DiscoverCard className="bg-sky-100 hover:bg-sky-200 w-1/4 rounded-xl p-6">
                <div className="imgbox">
                    <img src='./img-4.png' alt="" />
                </div>
                <div className="card-sub pb-3">Sale Collection</div>
                <div className="card-title pb-5">Up to <br /> 80% off retail</div>
                <Link className="linkBtn !w-fit !py-2 !px-5 !btn-accent" href="#">Explore More</Link>
            </DiscoverCard>
        </div>
    </div>
  )
}

export default Divcover