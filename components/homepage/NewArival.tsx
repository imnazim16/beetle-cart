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
  
const NewArival = async () => {
    const fetchApi = await fetch('https://fakestoreapi.com/products')
    const data = await fetchApi.json()
  return (
    <div className="wrapper !items-start flex-col py-16">
        <h2 className="heading2">New Arrivals. <span>REY backpacks & bags</span></h2>
        <div className="card-2 w-fullx">
            {data.slice(0, 4).map((item : Data) => (
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

export default NewArival