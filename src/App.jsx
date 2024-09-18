import linkedinLogo from '/assets/images/icon-linkedin.svg';
import githubLogo from '/assets/images/icon-github.svg';
import kenPFP from '/assets/images/kenPFP.jpeg';
import Navbar from './components/Navbar';
import ParticlesComponent from './components/particles';
import ProjectCard from './components/ProjectCard';
import SchoolCard from './components/SchoolCard';

function App() {
  return (
    <div className='bg-slate-950 flex flex-col justify-center font-redHatDisplay font-regular'>
      <Navbar />
      <main className='text-white min-h-screen  gap-8'>
        <section className='flex flex-col justify-center h-[40rem] relative gap-8 p-8'>
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
          <div className='flex gap-4 align-center justify-evenly gap-5'>
            <a
              href='https://github.com/ubcyukiny'
              target='_blank'
              className='z-10'
            >
              <button className='z-10 flex align-center justify-center gap-2'>
                Github
                <img className='z-10' src={githubLogo} alt='' />
              </button>
            </a>
            <a
              href='https://www.linkedin.com/in/kenyubc/'
              target='_blank'
              className='z-10'
            >
              <button className='z-10 flex align-center justify-center gap-2'>
                Linkedin
                <img className='z-10' src={linkedinLogo} alt='' />
              </button>
            </a>
          </div>
        </section>

        <section className='flex flex-col gap-8 p-8'>
          <h2>My Projects</h2>
          <div className='flex flex-col gap-8'>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        </section>
        <section className='flex flex-col gap-8 p-8'>
          <h2>My Skills</h2>
        </section>
        <section className='flex flex-col gap-8 p-8'>
          <h3>Education</h3>
          <SchoolCard />
        </section>
        <section className='flex flex-col gap-8 p-8'>Contact form</section>
      </main>
    </div>
  );
}

export default App;
