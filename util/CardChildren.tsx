import React from 'react'
export interface Props {
    children: React.ReactNode
}
const CardChildren = ({children} : Props) => {
  return (
    <div>{children}</div>
  )
}

export default CardChildren