import React from 'react'

const blogLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
        <h1>BLog Header</h1>
        {children}
    </div>
  )
}

export default blogLayout