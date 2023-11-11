import React from 'react'
export interface Props {
    children: React.ReactNode
  }
const CardTestimonial = ({children}:Props)  => {
  return (
    <>{children}</>
  )
}

export default CardTestimonial