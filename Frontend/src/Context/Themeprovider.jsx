import Themecontext from './Themecontext'
import React,{useState} from 'react';
const Themeprovider = ({children}) => {
    const [theme,setTheme]=useState("dark");
    const changeTheme=(mode)=>{
        setTheme(mode);
    }
  return (
    <Themecontext.Provider value={{theme,changeTheme}}>
        {children}
    </Themecontext.Provider>
  )
}

export default Themeprovider