import linkedinLogo from '/assets/images/icon-linkedin.svg';
import githubLogo from '/assets/images/icon-github.svg';
import kenPFP from '/assets/images/kenPFP.jpeg';
import ParticlesComponent from './particles';
import './Home.css';

const Home = () => {
  return (
    <section className='flex flex-col justify-center h-[40rem] relative gap-8 p-8'>
      <ParticlesComponent id='particles' />
      <div className='z-10 flex justify-center pb-4'>
        <img src={kenPFP} alt='Ken PFP' className='z-10 rounded-full size-16' />
      </div>
      <p className='z-10'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga beatae
        laudantium quasi excepturi fugiat minima cupiditate? Corrupti, culpa,
        qui consequatur quam accusantium voluptatem omnis, rerum ex veniam
        quaerat adipisci soluta.
      </p>
      <div className='flex gap-5 align-center justify-evenly'>
        <a href='https://github.com/ubcyukiny' target='_blank' className='z-10'>
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
            LinkedIn
            <img className='z-10' src={linkedinLogo} alt='' />
          </button>
        </a>
      </div>
    </section>
  );
};

export default Home;
