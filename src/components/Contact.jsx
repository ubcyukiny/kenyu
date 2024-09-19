const Contact = () => {
  return (
    <section className='flex flex-col gap-8 p-8'>
      <h3>Contact me</h3>
      <p>
        <a href='https://github.com/ubcyukiny' target='_blank'>
          Github
        </a>
        {' / '}
        <a href='https://www.linkedin.com/in/kenyubc/' target='_blank'>
          LinkedIn
        </a>
        {' / '}
        <a href='mailto:yukiny@alum.ubc.ca?'>yukiny@alum.ubc.ca</a>
      </p>
    </section>
  );
};

export default Contact;
