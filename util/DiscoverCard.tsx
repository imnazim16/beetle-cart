import React from 'react'

export interface props {
    className: string,
    children: React.ReactNode
}

const DiscoverCard = ({className, children}: props) => {
  return (
    <div className={`${className}`}>
        {children}
    </div>
  )
}

export default DiscoverCard