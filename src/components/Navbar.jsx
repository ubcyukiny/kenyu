const Navbar = () => {
  return (
    // make it rounded, active, hover,
    <div className='flex bg-darkGray text-white z-50 h-8 items-center justify-center'>
      <nav>
        <ul className='flex flex-row gap-4 w-[300px]'>
          <li className='hover:bg-black'>
            <a href=''>Home</a>
          </li>
          <li className='hover:bg-black'>
            <a href=''>Projects</a>
          </li>
          <li className='hover:bg-black'>
            <a href=''>Skills</a>
          </li>
          <li className='hover:bg-black'>
            <a href=''>Education</a>
          </li>
          <li className='hover:bg-black'>
            <a href=''>Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
