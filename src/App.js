import Home from './components/Home';
import NavBar from './components/NavBar';
import SocialLinks from './components/SocialLinks';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Contacts from './components/Contacts';
//import Three from './Three';


function App() {
  return (
    <div>
      <NavBar />
      <br />
      <Home />
      <br />
      <About />
      <br />
      <Portfolio />
      <br />
      <Experience />
      <SocialLinks />
      <Contacts />
    </div>
  );
}

export default App;