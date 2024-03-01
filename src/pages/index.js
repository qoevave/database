import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import TwoColumnComponent from '../components/twoColumnComponent'; 
import SaliencyComponent from '../components/saliencyFeature';
import CGIComponent from '../components/cgiScenes';


// Images
import MicrophoneImage from '../../static/img/landingPage/EigenmikWide.jpg';
import SaliencyGIF from '../../static/img/landingPage/SkateboardingHeatmaps.gif';
import MansionGeometry from '../../static/img/cgi/mansion/mansion_simplifiedMesh.png';
import CompImages from '../../static/img/landingPage/lightingComp.png'
import CaveGeometry from '../../static/img/landingPage/CaveGeometry.png';
import CinemaGeometry from '../../static/img/landingPage/CinemaGeometry.png';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">  
      <h1 className={styles.heroTitle}>{siteConfig.title}</h1>    
      <p className={styles.heroTagline}>{siteConfig.tagline}<br /></p>
        <div className={styles.buttons}>
          <Link
            className={clsx('button button--primary button--lg', styles.buttonRounder)}
            to="/docs/intro">
            Documentation
          </Link>
        </div>
      </div>
    </header>
  );
}

// <h1 className="hero__title">{siteConfig.title}</h1>

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`The ${siteConfig.title} Database`}
      description="Quality of Experience Evaluation for Interactive Audiovisual Virtual Envrionments">
      <div className={clsx('heroFiller', styles.heroFiller)}></div>
      <HomepageHeader />
      <main>
        <CGIComponent
          title="6-DoF interactive CGI scenes"
          description={
          <>
            Three CGI scenes: <strong>Cave, Cinema,</strong> and <strong>Mansion</strong>. Made in Unity for 6-Degrees-of-freedom exploration and interaction. Features <strong>acoustic geometry models</strong> for bespoke audio rendering, audio files for continuous and event based playback, and comes with <strong>MetaXR</strong> Audio SDK for plug-and-play audio.
          </>
          }
          imageUrl={MansionGeometry}
          image2Url={CompImages}
          information={"Created with the intention to provide a diverse range of audio and visual environments for task-based exploration, and behavior analysis."}
        />
        <TwoColumnComponent 
          title="360° audiovisual content"
          description={
          <>
            Up to <strong>4th-order Ambisonics</strong> audio along with 8k resolution 360 degree video, for perceptual, cognitive, and behavioral research. Available as audio only (.wav), video only (.mkv), or muxed 1st-order Ambisonics and video (.mp4), using <strong>ACN channel ordering and SN3D normalization (AmbiX)</strong>.
          </>
          }  
          imageUrl={MicrophoneImage}
          information={
            <>
              A total of 24 different recordings across 12 different settings, through indoor and outdoor spaces with varying acoustic and visual properties. Focusing on daily life situations to provide content more ecologically valid in experimental environments. An average duration of 60 seconds for longer form stimuli.  
            </>
          }
        />     
        <SaliencyComponent 
          title="3-DoF saliency data"
          description="Saliency data from 360° video presentation with no audio, mono audio, and 4th-order Ambisonics spatial audio. Available as segmented (10 second) or culminated heat maps from 3-DoF head rotation data, along with scene description from free-verbalization task."
          imageUrl={SaliencyGIF} 
        /> 
      </main>
    </Layout>
  );
}
