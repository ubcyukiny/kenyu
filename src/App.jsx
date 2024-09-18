import linkedinLogo from '/assets/images/icon-linkedin.svg';
import githubLogo from '/assets/images/icon-github.svg';
import kenPFP from '/assets/images/kenPFP.jpeg';
import Navbar from './components/Navbar';
import ParticlesComponent from './components/particles';

function App() {
  return (
    <div className='bg-black flex flex-col justify-center'>
      <Navbar />
      <main className='text-white min-h-screen font-spaceGrotesk'>
        <section className='flex flex-col justify-center h-[600px] relative p-5 '>
          <ParticlesComponent id='particles' />
          <div className='z-10 flex justify-center pb-4'>
            <img
              src={kenPFP}
              alt='Ken PFP'
              className='z-10 rounded-full size-16'
            />
          </div>
          <p className='z-10'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga beatae
            laudantium quasi excepturi fugiat minima cupiditate? Corrupti,
            culpa, qui consequatur quam accusantium voluptatem omnis, rerum ex
            veniam quaerat adipisci soluta.
          </p>
        </section>

        <section className=''>projects</section>
        <section>skills</section>
        <section>education</section>
        <section>contact form</section>
      </main>
    </div>
  );
}

export default App;
