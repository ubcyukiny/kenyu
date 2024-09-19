import ubcLogo from '/assets/images/universityofbc_logo.jpeg';

const SchoolCard = () => {
  return (
    <div className='flex flex-row gap-2 bg-slate-800 rounded-md p-4 hover:bg-slate-700'>
      <img src={ubcLogo} alt='' className='size-16' />
      <ul className='list-none'>
        <li>The University of British Columbia</li>
        <li>B.A., Computer Science</li>
        <li>Graduated in 2024</li>
      </ul>
    </div>
  );
};

export default SchoolCard;
