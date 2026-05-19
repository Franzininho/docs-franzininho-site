import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import Translate, { translate } from "@docusaurus/Translate";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: (
      <Translate id="homepage.features.openHardware.title">
        Open hardware
      </Translate>
    ),
    imageUrl: "img/openhardware_2.svg",
    description: (
      <Translate id="homepage.features.openHardware.description">
        Nossas placas e projetos são open hardware, com acesso completo aos
        arquivos para estudo, reprodução e modificação. Você entende como o
        hardware foi projetado, adapta às suas necessidades e cria novos
        produtos a partir dessa base.
      </Translate>
    ),
  },
  {
    title: (
      <Translate id="homepage.features.openSource.title">Open Source</Translate>
    ),
    imageUrl: "img/code_2.svg",
    description: (
      <Translate id="homepage.features.openSource.description">
        Desenvolvemos e utilizamos softwares open source, de bibliotecas e
        exemplos a firmwares e integrações completas. O código é parte
        fundamental do aprendizado, com transparência para explorar, modificar e
        evoluir cada solução.
      </Translate>
    ),
  },
  {
    title: (
      <Translate id="homepage.features.openEducation.title">
        Educação aberta
      </Translate>
    ),
    imageUrl: "img/community_2.svg",
    description: (
      <Translate id="homepage.features.openEducation.description">
        Criamos materiais e exemplos práticos que acompanham sua evolução, do
        primeiro projeto aos desafios reais do desenvolvimento. Tudo é
        construído de forma colaborativa, com apoio da comunidade.
      </Translate>
    ),
  },
];

const paths = [
  {
    title: (
      <Translate id="homepage.paths.wifi.title">Franzininho WiFi</Translate>
    ),
    description: (
      <Translate id="homepage.paths.wifi.description">
        Comece com conectividade, ESP-IDF, Arduino, MicroPython e CircuitPython.
      </Translate>
    ),
    to: "docs/franzininho-wifi/franzininho-wifi",
  },
  {
    title: (
      <Translate id="homepage.paths.lab01.title">
        Franzininho WiFi LAB01
      </Translate>
    ),
    description: (
      <Translate id="homepage.paths.lab01.description">
        Experimente IoT e sistemas embarcados com sensores, interfaces e
        recursos integrados para laboratório.
      </Translate>
    ),
    to: "docs/franzininho-wifi-lab01",
  },
  {
    title: (
      <Translate id="homepage.paths.stm32.title">Franzininho C0</Translate>
    ),
    description: (
      <Translate id="homepage.paths.stm32.description">
        Explore a família STM32C0 com exemplos para Arduino e STM32CubeIDE.
      </Translate>
    ),
    to: "docs/franzininho-c0/franzininho-c0-board",
  },
];

const highlights = [
  {
    label: (
      <Translate id="homepage.highlights.openSource">Open Source</Translate>
    ),
  },
  {
    label: <Translate id="homepage.highlights.maker">Maker</Translate>,
  },
  {
    label: <Translate id="homepage.highlights.iot">IoT</Translate>,
  },
  {
    label: (
      <Translate id="homepage.highlights.embeddedSystems">
        Sistemas Embarcados
      </Translate>
    ),
  },
  {
    label: (
      <Translate id="homepage.highlights.ai">Inteligência Artificial</Translate>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <article className={styles.feature}>
      {imgUrl && (
        <div className={styles.featureMedia}>
          <img className={styles.featureImage} src={imgUrl} alt="" />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}

function PathCard({ title, description, to }) {
  return (
    <Link className={styles.pathCard} to={useBaseUrl(to)}>
      <span className={styles.pathEyebrow}>
        <Translate id="homepage.paths.eyebrow">Documentação</Translate>
      </span>
      <h3>{title}</h3>
      <p>{description}</p>
      <span className={styles.pathAction}>
        <Translate id="homepage.paths.action">Abrir guia</Translate>
      </span>
    </Link>
  );
}

function Home() {
  const { siteConfig = {} } = useDocusaurusContext();
  const logoUrl = useBaseUrl("img/logo.svg");
  const docsUrl = useBaseUrl("docs/");
  const highlightsLabel = translate({
    id: "homepage.highlights.ariaLabel",
    message: "Destaques",
  });
  const title = translate({
    id: "homepage.meta.title",
    message: `Documentação ${siteConfig.title}`,
  });
  const description = translate({
    id: "homepage.meta.description",
    message:
      "Documentação do projeto Franzininho para aprender sistemas embarcados, IoT e inteligência artificial na prática.",
  });

  return (
    <Layout title={title} description={description}>
      <header className={styles.heroBanner}>
        <div className={clsx("container", styles.heroInner)}>
          <div className={styles.heroContent}>
            <span className={styles.heroKicker}>
              <Translate id="homepage.hero.kicker">
                Ecossistema open source para hardware educacional
              </Translate>
            </span>
            <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
            <p className={styles.heroSubtitle}>
              <Translate id="homepage.hero.subtitle">
                Um ecossistema aberto para aprender, criar e evoluir em sistemas
                embarcados, IoT e inteligência artificial na prática.
              </Translate>
            </p>
            <div className={styles.buttons}>
              <Link
                className={clsx(
                  "button button--primary button--lg",
                  styles.heroCta
                )}
                to={docsUrl}
              >
                <Translate id="homepage.hero.primaryCta">
                  Explorar documentação
                </Translate>
              </Link>
              <Link
                className={clsx("button button--lg", styles.heroCtaSecondary)}
                href="https://discord.gg/H5kENmWGaz"
              >
                <Translate id="homepage.hero.secondaryCta">
                  Comunidade
                </Translate>
              </Link>
            </div>
          </div>

          <div className={styles.heroVisual} aria-hidden="true">
            <img src={logoUrl} alt="" className={styles.heroLogo} />
          </div>
        </div>
      </header>

      <main>
        <section className={styles.statsSection} aria-label={highlightsLabel}>
          <div className={clsx("container", styles.statsGrid)}>
            {highlights.map((highlight, idx) => (
              <div className={styles.statItem} key={idx}>
                <strong>{highlight.label}</strong>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span>
                <Translate id="homepage.paths.kicker">
                  Comece por aqui
                </Translate>
              </span>
              <h2>
                <Translate id="homepage.paths.title">
                  Escolha uma placa, abra os exemplos e coloque a mão na massa.
                </Translate>
              </h2>
            </div>
            <div className={styles.pathGrid}>
              {paths.map((props, idx) => (
                <PathCard key={idx} {...props} />
              ))}
            </div>
            <div className={styles.pathsFooter}>
              <Link to={docsUrl}>
                <Translate id="homepage.paths.seeAll">
                  Ver toda a documentação
                </Translate>
                {" →"}
              </Link>
            </div>
          </div>
        </section>

        <section className={clsx(styles.section, styles.featuresSection)}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span>
                <Translate id="homepage.features.kicker">Nossa base</Translate>
              </span>
              <h2>
                <Translate id="homepage.features.title">
                  Tecnologia aberta para aprender fazendo.
                </Translate>
              </h2>
            </div>
            <div className={styles.features}>
              {features.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>

        <section className={styles.communitySection}>
          <div className={clsx("container", styles.communityInner)}>
            <div>
              <span>
                <Translate id="homepage.community.kicker">Comunidade</Translate>
              </span>
              <h2>
                <Translate id="homepage.community.title">
                  Aprenda, compartilhe projetos e evolua junto.
                </Translate>
              </h2>
              <p>
                <Translate id="homepage.community.description">
                  A documentação é viva: exemplos, placas e ideias crescem com
                  contribuições de quem usa, ensina e cria com Franzininho.
                </Translate>
              </p>
            </div>
            <div className={styles.communityActions}>
              <Link
                className="button button--primary button--lg"
                href="https://github.com/franzininho"
              >
                GitHub
              </Link>
              <Link
                className="button button--outline button--secondary button--lg"
                href="https://discord.gg/H5kENmWGaz"
              >
                Discord
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
