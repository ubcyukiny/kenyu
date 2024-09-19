import tailwindIcon from '/assets/images/Tailwind_CSS_Logo.svg';
import jsIcon from '/assets/images/js-svgrepo-com.svg';
import htmlIcon from '/assets/images/html-5-svgrepo-com.svg';
import cssIcon from '/assets/images/css-svgrepo-com.svg';
import d3Icon from '/assets/images/d3.svg';
import reactIcon from '/assets/images/react.svg';
import cPlusIcon from '/assets/images/icons8-c++.svg';
import pythonIcon from '/assets/images/icons8-python.svg';
import javaIcon from '/assets/images/icons8-java.svg';
import gitIcon from '/assets/images/icons8-git.svg';
import phpIcon from '/assets/images/new-php-logo.svg';
import oracleIcon from '/assets/images/AppDev_sql_detailed.svg';
import viteIcon from '/assets/images/vite.svg';

const Skills = () => {
  return (
    <section className='flex flex-col gap-8 p-8'>
      <h2>My Skills</h2>
      <div className='grid grid-cols-3 grid-rows-4'>
        <div className='skill-item'>
          <img src={htmlIcon} className='skill-icon' />
          <p>HTML</p>
        </div>
        <div className='skill-item'>
          <img src={cssIcon} className='skill-icon' />
          <p>CSS</p>
        </div>
        <div className='skill-item'>
          <img src={jsIcon} className='skill-icon' />
          <p>JavaScript</p>
        </div>
        <div className='skill-item'>
          <img src={viteIcon} className='skill-icon' />
          <p>Vite</p>
        </div>
        <div className='skill-item'>
          <img src={reactIcon} className='skill-icon' />
          <p>React</p>
        </div>
        <div className='skill-item'>
          <img src={tailwindIcon} className='skill-icon' />
          <p>CSS Tailwind</p>
        </div>
        <div className='skill-item'>
          <img src={pythonIcon} className='skill-icon' />
          <p>Python</p>
        </div>
        <div className='skill-item'>
          <img src={javaIcon} className='skill-icon' />
          <p>Java</p>
        </div>
        <div className='skill-item'>
          <img src={cPlusIcon} className='skill-icon' />
          <p>C++</p>
        </div>
        <div className='skill-item'>
          <img src={gitIcon} className='skill-icon' />
          <p>Git</p>
        </div>
        <div className='skill-item'>
          <img src={phpIcon} className='skill-icon' />
          <p>PHP</p>
        </div>
        <div className='skill-item'>
          <img src={oracleIcon} className='skill-icon' />
          <p>Oracle SQL</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
