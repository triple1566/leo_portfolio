import Home from './components/Home';
import NavBar from './components/NavBar';
import SocialLinks from './components/SocialLinks';


function App() {
  return (
    <div>
      <NavBar />
      <div className=''>
      <Home />
      
      <SocialLinks />
      </div>
    </div>
  );
}

export default App;