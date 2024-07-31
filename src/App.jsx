import Header from "./components/Header";
import Banner from './components/Banner'
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import ContactUs from "./components/ContactUs";
import Footer from './components/Footer'
import TeamMembers from "./components/TeamMembers";
import FAQ from "./components/FAQ";
import { useContext } from "react";
import { ThemeContext } from "./util/ThemeContext";

function App() {
const {theme, themes} = useContext(ThemeContext)
  return (
   <div className={` overflow-hidden will-change-bg`}>
  
    <Header/>
    <Banner/>
     <AboutUs/>
    <Navbar/>
    <Services/>
    <TeamMembers/> 
    <FAQ/>
    <ContactUs/>
    <Footer/>
  
   </div>

  )
}

export default App
