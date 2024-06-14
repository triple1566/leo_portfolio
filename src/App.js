import Home from './components/Home';
import NavBar from './components/NavBar';
import SocialLinks from './components/SocialLinks';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
//import Three from './Three';


function App() {
  return (
    <div>
      <NavBar />
      <br />
      <br />
      <br />
      <Home />
      <div className='h-full md:h-0'>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <About />
      <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      <Portfolio />
      <Experience />
      <SocialLinks />
    </div>
  );
}

export default App;