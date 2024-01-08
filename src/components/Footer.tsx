import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();
  return (
    <div
      className="h-[43vh] max-[450px]:h-[60vh] flex flex-col items-center
     justify-between text-white"
    >
      <div
        className="mt-20 w-[70%] flex justify-between max-[450px]:flex-col
      max-[450px]:mt-14"
      >
        <div>
          <h2 className="font-mono font-semibold text-xl">Jonathan Febraio</h2>
          <p className="max-w-[56vh] w-full font-mono text-sm">
            {t('footerApresentation')}
          </p>
        </div>
        <div className="max-[450px]:mt-8">
          <h2 className="font-mono font-semibold text-xl">Social</h2>
          <Link
            to="https://www.linkedin.com/in/jonathan-febraio-dev/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={ faLinkedin } className="h-8 m-2" />
          </Link>
          <Link to="https://github.com/JRaamos" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={ faGithub } className="h-8 m-2" />
          </Link>
        </div>
      </div>
      <div className="h-18 border-t-2 w-[70%]">
        <p className="m-6 text-center">
          © Copyright 2024. Made by
          {' '}
          <a
            href="https://jonathan-febrail-dev.vercel.app/"
            target="_blank"
            rel="noreferrer noopener"
            className="transition duration-3 underline
              font-bold font-mono"
          >
            Jonathan Febraio
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
