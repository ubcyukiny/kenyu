import githubIcon from '/assets/images/icon-github.svg';
import linkIcon from '/assets/images/icons8-external-link.svg';
import tailwindIcon from '/assets/images/Tailwind_CSS_Logo.svg';
import jsIcon from '/assets/images/js-svgrepo-com.svg';
import htmlIcon from '/assets/images/html-5-svgrepo-com.svg';
import cssIcon from '/assets/images/css-svgrepo-com.svg';
import d3Icon from '/assets/images/d3.svg';
import reactIcon from '/assets/images/react.svg';

const ProjectCard = () => {
  return (
    <div className='flex flex-col gap-2 bg-slate-800 rounded-md p-4 hover:bg-slate-700'>
      <h3>Project Name</h3>
      <div className='flex flex-row gap-1'>
        <p>Made with: </p>
        <div className='flex flex-row gap-1'>
          <img className='size-5' src={htmlIcon} alt='' />
          <img className='size-5' src={cssIcon} alt='' />
          <img className='size-5' src={jsIcon} alt='' />
          <img className='size-5' src={tailwindIcon} alt='' />
          <img className='size-5' src={d3Icon} alt='' />
          <img className='size-5' src={reactIcon} alt='' />
        </div>
      </div>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
        maiores, velit in voluptatibus non similique delectus iste omnis eum,
        culpa ea. Explicabo sit dolorem quisquam odio voluptatum illo
        perspiciatis dolorum.
      </p>
      <div className='flex flex-row gap-5'>
        <a>
          <button className='flex flex-row gap-1 align-center justify-center'>
            <img className='' src={linkIcon} alt='' />
            Live
          </button>
        </a>
        <a>
          <button className='flex flex-row gap-1'>
            <img className='' src={githubIcon} alt='' />
            View Code
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
