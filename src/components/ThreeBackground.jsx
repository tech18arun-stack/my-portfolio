import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeBackground = () => {
  const containerRef = useRef(null);
  const rendererRef = useRef(null);
  const requestRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check if system is dark mode
    const isDark = document.documentElement.classList.contains('dark');
    
    // Scene setup
    const scene = new THREE.Scene();
    
    // Camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 30;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Particles Geometry
    const particlesCount = 800;
    const posArray = new Float32Array(particlesCount * 3);
    const velocityArray = new Float32Array(particlesCount * 3);
    const initialPositions = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      // Create a wavy double-helix or wave pattern distribution
      const theta = Math.random() * Math.PI * 2;
      const radius = 10 + Math.random() * 25;
      
      const x = Math.cos(theta) * radius;
      const y = (Math.random() - 0.5) * 40;
      const z = Math.sin(theta) * radius;

      posArray[i] = x;
      posArray[i + 1] = y;
      posArray[i + 2] = z;

      initialPositions[i] = x;
      initialPositions[i + 1] = y;
      initialPositions[i + 2] = z;

      // Velocities
      velocityArray[i] = (Math.random() - 0.5) * 0.02;
      velocityArray[i + 1] = (Math.random() - 0.5) * 0.05;
      velocityArray[i + 2] = (Math.random() - 0.5) * 0.02;
    }

    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    // Particle Texture (Circle)
    const canvas = document.createElement('canvas');
    canvas.width = 16;
    canvas.height = 16;
    const ctx = canvas.getContext('2d');
    const gradient = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 16, 16);
    const texture = new THREE.CanvasTexture(canvas);

    // Particle Color Palette
    const particleColor = isDark ? 0x60a5fa : 0x2563eb; // Light blue vs dark blue
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.15,
      map: texture,
      transparent: true,
      color: particleColor,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Add secondary galaxy/nebula dust layer
    const dustCount = 400;
    const dustPos = new Float32Array(dustCount * 3);
    for (let i = 0; i < dustCount * 3; i += 3) {
      dustPos[i] = (Math.random() - 0.5) * 60;
      dustPos[i + 1] = (Math.random() - 0.5) * 60;
      dustPos[i + 2] = (Math.random() - 0.5) * 60;
    }
    const dustGeometry = new THREE.BufferGeometry();
    dustGeometry.setAttribute('position', new THREE.BufferAttribute(dustPos, 3));
    const dustMaterial = new THREE.PointsMaterial({
      size: 0.08,
      map: texture,
      transparent: true,
      color: isDark ? 0xa855f7 : 0x7c3aed, // Purple/Violet
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      opacity: 0.6
    });
    const dustMesh = new THREE.Points(dustGeometry, dustMaterial);
    scene.add(dustMesh);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event) => {
      mouseX = (event.clientX - window.innerWidth / 2) / 100;
      mouseY = (event.clientY - window.innerHeight / 2) / 100;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Listen to theme changes
    const observer = new MutationObserver(() => {
      const isDarkNow = document.documentElement.classList.contains('dark');
      particlesMaterial.color.setHex(isDarkNow ? 0x60a5fa : 0x2563eb);
      dustMaterial.color.setHex(isDarkNow ? 0xa855f7 : 0x7c3aed);
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    // Animation Loop
    let clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();
      
      // Gentle automatic rotation
      particlesMesh.rotation.y = elapsedTime * 0.03;
      dustMesh.rotation.y = -elapsedTime * 0.015;

      // Mouse Parallax interpolation
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;
      
      particlesMesh.rotation.x = -targetY * 0.1;
      particlesMesh.rotation.z = targetX * 0.05;
      
      dustMesh.rotation.x = targetY * 0.05;
      dustMesh.rotation.z = -targetX * 0.03;

      // Ripple effect in particles
      const positions = particlesGeometry.attributes.position.array;
      for (let i = 0; i < particlesCount; i++) {
        const i3 = i * 3;
        
        // Retrieve initial positions
        const initX = initialPositions[i3];
        const initZ = initialPositions[i3 + 2];
        
        // Calculate distance from center in XZ plane
        const dist = Math.sqrt(initX * initX + initZ * initZ);
        
        // Wave pattern
        positions[i3 + 1] = initialPositions[i3 + 1] + Math.sin(elapsedTime * 1.5 + dist * 0.3) * 1.5;
      }
      particlesGeometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
      requestRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Clean up
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      dustGeometry.dispose();
      dustMaterial.dispose();
      texture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 w-full h-full pointer-events-none z-[1] opacity-50 dark:opacity-75 transition-opacity duration-1000"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default ThreeBackground;
