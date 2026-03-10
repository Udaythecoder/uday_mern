
import Languagecontext from './Languagecontext'
import React,{useState} from 'react';
const Languageprovider = ({children}) => {
    const [language,setLanguage]=useState("en");
    const changeLanguage=(lang)=>{
        setLanguage(lang);
    }
  return (
    <Languagecontext.Provider value={{language,changeLanguage}}>
        {children}
    </Languagecontext.Provider>
  )
}

export default Languageprovider