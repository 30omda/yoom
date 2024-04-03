import React, { ReactNode } from 'react'

const rootLayout = ({children} : {children : ReactNode}) => {
  return (
    <main>
        
        {children}
        
    </main>
  )
}

export default rootLayout