
import React from 'react'
import Child from '../Pages/Child'

const Parent = () => {
  return (
    <div>
        <Child name="uday" age={20} isActive={true} food={["biriyani","curd"]}
        Contact={{
          mobile:8328521717,
          email:"udayrocky91@gmail.com"
        }}/>
        <Child name="chetan" age={"200000Bc"} isActive={true} food={["mamsam","Fresh Human Blood(O+)","Human Bones"]}
        Contact={{
          mobile:8328521717,
          email:"udayrocky91@gmail.com"
        }}/>
    </div>
  )
}

export default Parent