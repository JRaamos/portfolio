import React, { useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { projectsDetails } from '../utils/projectsDetails';

function ProjectDetails() {
  const location = useLocation();
  const { id } = useParams();
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div>
      <header>
        <Header />
      </header>
      <main className="h-[100vh]">
        <div className="flex justify-center items-center flex-col">
          <p className="text-2xl font-bold">{projectsDetails[Number(id)].title}</p>
          <p>
            {t('detailsInto')}
          </p>
          <Link to={ projectsDetails[Number(id)].linkSite }>
            <button type="button">
              {t('visitSite')}
            </button>
          </Link>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
export default ProjectDetails;
