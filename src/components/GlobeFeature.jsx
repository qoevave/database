// Import Three.js and any necessary dependencies
import * as THREE from 'three';
import React, { useEffect } from 'react';
import CheerleadingImg from '../../static/img/landingPage/Cheerleading.png';
import TrainImg from '../../static/img/landingPage/TrainGlobe.png';
import styles from '../css/globeFeature.module.css';

function ThreeJSphere() {
  useEffect(() => {

    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true }); // Enable anti-aliasing
    // renderer.setSize( 450, 400);
    // renderer.setSize(window.innerWidth/2.5, window.innerHeight/2.5);
    renderer.setSize(1920/3, 1080/3);
    renderer.setClearColor( 0xffffff, 0);
    renderer.setPixelRatio(window.devicePixelRatio);
    document.getElementById('scene-container').appendChild(renderer.domElement);

    // const camera = new THREE.PerspectiveCamera( 75, 450 / 400, 0.1, 300 );
    const camera = new THREE.PerspectiveCamera( 75, (1920 / 1080), 0.1, 1000 );
    camera.position.z = 3;

    const textureCheerleading = new THREE.TextureLoader().load(CheerleadingImg); 
    textureCheerleading.magFilter = THREE.LinearFilter;
    textureCheerleading.colorSpace = THREE.SRGBColorSpace;

    const textureTrain = new THREE.TextureLoader().load(TrainImg); 
    textureTrain.magFilter = THREE.LinearFilter;
    textureTrain.colorSpace = THREE.SRGBColorSpace;

    const geometryCheerleading = new THREE.SphereGeometry(2.8, 128, 128); // Radius, Width Segments, Height Segments   
    const mat = new THREE.MeshToonMaterial({
        map: textureCheerleading
    });

    const geometryTrain = new THREE.SphereGeometry(0.8, 64, 64); // Radius, Width Segments, Height Segments   
    const mat2 = new THREE.MeshToonMaterial({
        map: textureTrain
    });
 

    const sphereCheerleading = new THREE.Mesh( geometryCheerleading, mat );
    const sphereTrain = new THREE.Mesh( geometryTrain, mat2 );
    sphereCheerleading.position.set(-1,0,-2);
    sphereTrain.position.set(0.7,0,0.5);

    // directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // Color, Intensity
    directionalLight.position.set(5, 4, 7);
    directionalLight.intensity = 4; 
    directionalLight.castShadow = true;

    // aambient light
    const ambientLight = new THREE.AmbientLight(0xffffff); // Color (usually a shade of gray)
    ambientLight.intensity = .1; // Increase the intensity (default is 1.0)

    scene.add(camera);
    scene.add(sphereCheerleading);
    scene.add(sphereTrain);
    scene.add(directionalLight);
    scene.add(ambientLight);

    function animate() {
        requestAnimationFrame( animate );
        sphereCheerleading.rotation.y -= 0.0005;
        sphereTrain.rotation.y += 0.0003;
        renderer.render( scene, camera );
    }
    animate();

    // Clean up on unmount
    return () => {
      container.removeChild(renderer.domElement);
    };
  }, []);

  return <div id="scene-container" className={styles.globeimg}/>;
}

function GlobeComponent() {
  return (
      <ThreeJSphere/>       
  );
}

export default GlobeComponent;


