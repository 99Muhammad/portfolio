
import styles from './App.module.css'
import { Hero } from './components/Hero/Hero';
import { Navbar } from './components/Navbar/Navbar';
import{About} from './components/About/About';
import {Experience}from './components/Experience/Experience';
import { Projects } from './Projects/Projects';
import { Introduction } from './components/Introduction/Introduction';
import Skills from "./components/Skills/Skills";
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer';
function App() {
  
  return (
    <div className={styles.App}>
        <Navbar/>
        <Hero/>
        <Introduction/>
        <Experience/>
        <Projects/>
        <Skills/>
      <Contact/>
        {/* <About/> */}
       <Footer/>
        
       
    </div>
   
  );
}

export default App
