'use client'

import * as THREE from 'three';
import { useEffect, useRef } from 'react';
import { MeshLineGeometry, MeshLineMaterial } from 'meshline';

const ThreeScene = () => {
    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      // Setup scene
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.z = 30;
  
      const renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(renderer.domElement);
  
      // Generate heart curve points
      const geometryPoints: THREE.Vector3[] = [];
      for (let t = 0; t <= Math.PI * 2; t += 0.01) {
        const x = 16 * Math.pow(Math.sin(t), 3);
        const y =
          13 * Math.cos(t) -
          5 * Math.cos(2 * t) -
          2 * Math.cos(4 * t);
        geometryPoints.push(new THREE.Vector3(x, y, 0));
      }
  
      // Create line
      const geometry = new MeshLineGeometry();
      geometry.setPoints(geometryPoints);
  
      const lineMaterial = new MeshLineMaterial({
        resolution: new THREE.Vector2(window.innerWidth, window.innerHeight),
        lineWidth: 0.2,
        color: new THREE.Color(0xff0000),
      });

const mesh = new THREE.Mesh(geometry, lineMaterial);
scene.add(mesh);

});

   return <div ref={mountRef} />;
};

export default ThreeScene;