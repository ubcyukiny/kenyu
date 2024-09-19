const Typewriter = () => {
  const textArray = [
    'Ken Yu',
    'a software developer',
    'a proud cat owner',
    'excited to meet you!',
  ];

  return (
    <>
      <span className=' z-10 first-text'>Hello, I am</span>
      <span className='z-10 caret text-cyan-300'>Ken Yu</span>
    </>
  );
};

export default Typewriter;
