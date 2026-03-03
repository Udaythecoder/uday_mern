import Parent from "./components/Parent"
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Service from "./Pages/Service";
import Navbar from "./Components/Navbar";
import {Routes,Route} from 'react-router-dom'
const App = () => {
  
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/><Route/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Service" element={<Service/>}/>
    </Routes>
    </>
  )
}

export default App