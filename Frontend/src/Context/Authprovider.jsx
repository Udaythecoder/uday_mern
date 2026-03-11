
import React from 'react'
import Authcontext from './Authcontext'

const Authprovider = ({children}) => {
    const user={
        id:1,
        name:"muk",
        email:"muk@gmail.com"
    }
  return (
    <Authcontext.Provider value={user}>
        {children}
    </Authcontext.Provider>
  )
}

export default Authprovider