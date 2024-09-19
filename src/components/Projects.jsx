import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <section className='flex flex-col gap-8 p-8'>
      <h2>My Projects</h2>
      <div className='flex flex-col gap-8'>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
};

export default Projects;
