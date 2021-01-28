import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Open hardware',
    imageUrl: 'img/openhardware_2.svg',
    description: (
      <>
        Os projetos Franzininho são open hardware, ou seja, são
        disponibilizado ao público de modo que qualquer um pode construir, modificar, distribuir e utilizar a partir dos arquivos.
      </>
    ),
  },
  {
    title: 'Open Source',
    imageUrl: 'img/code_2.svg',
    description: (
      <>
        Trabalhamos com softwares open source e todo os nossos materiais seguem esse formato.
      </>
    ),
  },
  {
    title: 'Educação Aberta',
    imageUrl: 'img/community_2.svg',
    description: (
      <>
        Nossos meteriais contribuem para uma educação aberta e inclusiva. 
        São desenvolvidos de forma colaborativa e revisados pela comunidade.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Documentação ${siteConfig.title}`}
      description="Documentação do projeto Franzininho <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Explore
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
