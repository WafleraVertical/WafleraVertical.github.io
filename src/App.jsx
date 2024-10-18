import './App.css'
import Profile from './Sections/Profile/Profile';
import Projects from './Sections/Projects/Projects';
import Skills from './Sections/Skills/Skylls';
import Contact from './Sections/Contact/Contact';
import Footer from './Sections/Footer/Footer';

function App(){
  return(
    <main style={{padding:'1rem'}}>
      <Profile/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
    </main>
  );

}

export default App;