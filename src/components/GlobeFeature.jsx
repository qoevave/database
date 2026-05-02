import * as THREE from 'three';
import React, { useEffect } from 'react';
import CheerleadingImg from '../../static/img/landingPage/Cheerleading.png';
import TrainImg from '../../static/img/landingPage/TrainGlobe.png';
import styles from '../css/globeFeature.module.css';

function ThreeJSphere() {
  useEffect(() => {
    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth / 4, window.innerHeight / 4);
    renderer.setClearColor(0xffffff, 0);
    renderer.setPixelRatio(window.devicePixelRatio);
    document.getElementById('scene-container').appendChild(renderer.domElement);

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth * 2 / window.innerHeight, 0.1, 1000);
    camera.position.z = 3;

    const textureCheerleading = new THREE.TextureLoader().load(CheerleadingImg);
    const textureTrain = new THREE.TextureLoader().load(TrainImg);

    const geometryCheerleading = new THREE.SphereGeometry(2.8, 128, 128);
    const mat = new THREE.MeshToonMaterial({ map: textureCheerleading });

    const geometryTrain = new THREE.SphereGeometry(0.8, 64, 64);
    const mat2 = new THREE.MeshToonMaterial({ map: textureTrain });

    const sphereCheerleading = new THREE.Mesh(geometryCheerleading, mat);
    const sphereTrain = new THREE.Mesh(geometryTrain, mat2);
    sphereCheerleading.position.set(-1, 0, -2);
    sphereTrain.position.set(0.7, 0, 0.5);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 4, 7);
    directionalLight.intensity = 4;
    directionalLight.castShadow = true;

    const ambientLight = new THREE.AmbientLight(0xffffff);
    ambientLight.intensity = .1;

    scene.add(camera);
    scene.add(sphereCheerleading);
    scene.add(sphereTrain);
    scene.add(directionalLight);
    scene.add(ambientLight);

    function updateRendererSize() {
      renderer.setSize(window.innerWidth / 3, window.innerHeight / 3);
      camera.aspect = window.innerWidth  / window.innerHeight ;
      camera.updateProjectionMatrix();
    }

    function animate() {
      requestAnimationFrame(animate);
      sphereCheerleading.rotation.y -= 0.0005;
      sphereTrain.rotation.y += 0.0003;
      renderer.render(scene, camera);
    }

    animate();
    updateRendererSize(); // Update renderer size continuously
    window.addEventListener('resize', updateRendererSize);

    return () => {
      document.getElementById('scene-container').removeChild(renderer.domElement);
      window.removeEventListener('resize', updateRendererSize);
    };
  }, []);

  return <div id="scene-container" className={styles.globeimg} />;
}

export default ThreeJSphere;
