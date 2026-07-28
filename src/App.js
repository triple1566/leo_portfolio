import Home from './components/Home';
import NavBar from './components/NavBar';
import SocialLinks from './components/SocialLinks';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="site-shell relative min-h-screen bg-transparent text-slate-100 antialiased">
      <NavBar />
      <main className="relative z-10">
        <Home />
        <About />
        <Portfolio />
        <Experience />
        <Contact />
      </main>
      <SocialLinks />
    </div>
  );
}

export default App;