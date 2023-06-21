import { NETWORKING } from '../common/const';
import { findObjectByKeyValueInArray } from '../utils/arrayUtils';

const Contact = () => {
  const linkedIn = findObjectByKeyValueInArray(NETWORKING, 'name', 'linkedIn');
  const email = findObjectByKeyValueInArray(
    NETWORKING,
    'name',
    'jrbernabe@gmail.com'
  );

  return (
    <section className="mx-auto flex min-h-[calc(100vh-4rem)] w-full flex-col justify-center gap-6 text-center">
      <h2>Get In Touch</h2>
      <p className="mx-auto max-w-lg">
        If you have any questions that I can help with, please feel free to
        reach out on{' '}
        <a href={linkedIn?.route} className="text-primary-main">
          {linkedIn?.name}
        </a>{' '}
        or contact me directly at{' '}
        <a href={email?.route} className="text-primary-main">
          {email?.name}
        </a>
        . I look forward to speaking with you!
      </p>
    </section>
  );
};

export default Contact;
