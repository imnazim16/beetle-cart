'use server'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export interface Data {
    title: string,
    id: number,
    price: number,
    image: string,
    description: string,
}
const NewArivalCard = ({image, title, id, description, price }: Data) => {
    function createMarkup(st:string){
        return {__html: st + '...'}
    }
  return (
    <div className="card-insd" key={id}>
        <div className="imgbox">
            <Image src={image} alt="" width={200} height={200} priority />
        </div>
        <div className="card-title" title={title}>{title.substring(0, 23) + '...'}</div>
        <div dangerouslySetInnerHTML={createMarkup(description.substring(0, 90))} />
        <div className="price">{'Rs '+price}</div>
        <Link className="linkBtn !w-fit !py-2 !px-5 !btn-accent" href="/">Read More</Link>
    </div>
  )
}

export default NewArivalCard