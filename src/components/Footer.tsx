import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();
  return (
    <div className="h-[40vh] w-full flex flex-col items-center justify-between">
      <div className="mt-12 w-[80%] flex">
        <div>
          <h2>
            Jonathan Febraio
          </h2>
          <p>
            {t('footerApresentation')}
          </p>
        </div>
        <div>
          <h2>
            Social
          </h2>
          <Link
            to="https://www.linkedin.com/in/jonathan-febraio-dev/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={ faLinkedin }
              className=""
            />
          </Link>
          <Link to="https://github.com/JRaamos" target="_blank" rel="noreferrer">
            <FontAwesomeIcon
              icon={ faGithub }
              className=""
            />
          </Link>
        </div>
      </div>
      <div className="h-16 border-t-2 w-[80%]">
        <p className="m-4 text-center">
          © Copyright 2024. Made by
          {' '}
          <a
            href="https://jonathan-febrail-dev.vercel.app/"
            target="_blank"
            rel="noreferrer noopener"

          >
            Jonathan Febraio
          </a>
        </p>
      </div>

    </div>
  );
}

export default Footer;
