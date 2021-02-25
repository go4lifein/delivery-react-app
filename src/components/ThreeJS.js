import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

function ThreeJS() {
  
  const container = useRef(null);

  useEffect(() => {

    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer();
    const camera = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight, 0.1, 1000 );

    renderer.setSize( window.innerWidth, window.innerHeight );
    
    scene.background = new THREE.Color('skyblue');

    const cuboid = new THREE.BoxGeometry(10, 10, 30);
    const boxEdges = new THREE.EdgesGeometry(cuboid);
    const box = new THREE.LineSegments( boxEdges );

    // const geometry = new THREE.SphereGeometry( 5, 10, 10 );
    const plane = new THREE.PlaneGeometry(5, 3);
    const planeEdges = new THREE.EdgesGeometry(plane);
    const plane1 = new THREE.LineSegments( planeEdges );
    const plane2 = new THREE.LineSegments( planeEdges );

    plane1.material.depthTest = true;
    plane1.material.opacity = 1;
    plane1.material.transparent = false;

    
    plane2.material.depthTest = true;
    plane2.material.opacity = 1;
    plane2.material.transparent = false;

    scene.add( plane1 );
    scene.add( plane2 );
    scene.add( box );


    document.body.appendChild( renderer.domElement );

    camera.position.z = 40;
    // camera.position.x = -2;
    // camera.position.y = -2;

    const animate = function () {
      requestAnimationFrame( animate );

      box.rotation.x += 0.01;

      renderer.render( scene, camera );
    };
    
    animate();
  }, [container]);
  
  return (
    <div ref={useRef}>
    </div>
  );
}

export default ThreeJS;