import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className='bg-slate-950 flex flex-col justify-center font-redHatDisplay font-regular'>
      {/* <Navbar /> */}
      <main className='text-white min-h-screen  gap-8'>
        <Home />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
    </div>
  );
}

export default App;
