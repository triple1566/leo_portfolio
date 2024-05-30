import Home from './components/Home';
import NavBar from './components/NavBar';
import SocialLinks from './components/SocialLinks';
import About from './components/About';
import Portfolio from './components/Portfolio';


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
      <Portfolio />

      <SocialLinks />
    </div>
  );
}

export default App;