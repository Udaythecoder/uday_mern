
import React from 'react'
import Child from '../Pages/Child'

const Parent = () => {
  return (
    <div>
        <Child name="uday" age={20} isActive={true}/>
    </div>
  )
}

export default Parent