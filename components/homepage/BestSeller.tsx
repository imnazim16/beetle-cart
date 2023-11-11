'use server'
import React from 'react'
import NewArivalCard from '@/util/NewArivalCard'

export interface Data {
    title: string,
    id: number,
    price: number,
    image: string,
    description: string,
}
  
const BestSeller = async () => {
    const fetchApi = await fetch('https://fakestoreapi.com/products')
    const data = await fetchApi.json()
    
  return (
    <div className="wrapper !items-start flex-col py-16">
        <h2 className="heading2">Best Sellers. <span>Best selling of the month</span></h2>
        <div className="card-2 w-full">
            {data.slice(5, 9).map((item : Data) => (
                <NewArivalCard
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    description={item.description}
                />
            ))}
        </div>
    </div>
  )
}

export default BestSeller