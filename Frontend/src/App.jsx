import Parent from "./Components/Parent"
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Service from "./Pages/Service";
import Navbar from "./Components/Navbar";
import State from './hooks/State'
import {Routes,Route} from 'react-router-dom'
const App = () => {
  
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>}/><Route/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Service" element={<Service/>}/>
      <Route path="/useState" element={<State/>}/>
    </Routes>
    </>
  )
}

export default App