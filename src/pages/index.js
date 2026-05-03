import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import cardStyles from '../css/projectCard.module.css';
import ProjectCard from '../components/ProjectCard';

// Images
import MicrophoneImage from '../../static/img/landingPage/EigenmikWide.jpg';
import SaliencyGIF from '../../static/img/landingPage/SkateboardingHeatmaps.gif';
import MansionGeometry from '../../static/img/cgi/mansion/mansion_simplifiedMesh.png';
import MansionSplash from '../../static/img/landingPage/lightingComp.png';


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
        <h3 className={styles.heroSubtitle}>
            Evaluation content and exploration data for audiovisual interactive virtual environments
        </h3>
        <p className={styles.heroTagline}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className={clsx(
              'button button--primary button--lg',
              styles.buttonRounder,
            )}
            to="/docs/intro">
            Documentation
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`The ${siteConfig.title}`}
      description="Quality of Experience evaluation content for interactive audiovisual virtual environments.">
      <HomepageHeader />
      <main>
        <section className={cardStyles.datasetsSection}>
          <ProjectCard
            eyebrow="Interactive · CGI · 6-DoF"
            title="6-DoF interactive CGI scenes"
            description={
              <>
                Three CGI scenes: <strong>Cave, Cinema,</strong> and{' '}
                <strong>Mansion</strong>. Made in Unity for 6-degrees-of-freedom
                exploration and interaction. Features{' '}
                <strong>acoustic geometry models</strong> for bespoke audio
                rendering, audio files for continuous and event-based playback,
                and ships with the <strong>MetaXR Audio SDK</strong> for
                plug-and-play audio.
              </>
            }
            imageUrl={MansionSplash}
            docLink="/docs/cgi"
            docLabel="CGI Scenes Dataset"
            badges={['Unity', 'MetaXR', '6-DoF', 'Acoustic Models']}
          />
          <ProjectCard
            eyebrow="360° · Ambisonics"
            title="360° audiovisual content"
            description={
              <>
                Up to <strong>4th-order Ambisonics</strong> audio along with 8K
                360° video, for perceptual, cognitive, and behavioral research.
                Available as audio only (.wav), video only (.mkv), or muxed
                1st-order Ambisonics and video (.mp4), using{' '}
                <strong>ACN channel ordering and SN3D normalization (AmbiX)</strong>.
              </>
            }
            imageUrl={MicrophoneImage}
            docLink="/docs/scenes"
            docLabel="360 Scenes Dataset"
            badges={['4th-Order Ambisonics', 'AmbiX', '8K 360°', '24 recordings']}
          />
          <ProjectCard
            eyebrow="Ambisonics · Saliency · 3-DoF"
            title="3-DoF saliency data"
            description="Saliency data from 360° video presentation with no audio, mono audio, and 4th-order Ambisonics spatial audio. Available as segmented (10 second) or culminated heat maps from 3-DoF head rotation data, along with scene description from a free-verbalization task."
            imageUrl={SaliencyGIF}
            docLink="/docs/saliency"
            docLabel="Saliency Dataset"
            badges={['3-DoF', 'Head Tracking', 'Heatmaps', 'Free Verbalization']}
          />
        </section>
      </main>
    </Layout>
  );
}
