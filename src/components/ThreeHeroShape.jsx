import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const ThreeHeroShape = () => {
  const containerRef = useRef(null);
  const rendererRef = useRef(null);
  const requestRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || 500;
    const height = container.clientHeight || 500;

    // Check if system is dark mode
    const isDark = document.documentElement.classList.contains('dark');

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 18;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0x3b82f6, 1.8); // Blue light
    dirLight1.position.set(6, 6, 6);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xec4899, 1.5); // Pink light
    dirLight2.position.set(-6, -6, 6);
    scene.add(dirLight2);

    const pointLight = new THREE.PointLight(0xa855f7, 3, 30); // Glowing purple
    pointLight.position.set(0, 0, 0);
    scene.add(pointLight);

    // Group to hold all shapes for global rotation
    const group = new THREE.Group();
    scene.add(group);

    // 1. Dual-Layer Geodesic Cyber Core
    // Outer Geodesic Sphere (Detailed wireframe, cyan/blue)
    const outerGeom = new THREE.IcosahedronGeometry(3.0, 2);
    const outerMat = new THREE.MeshStandardMaterial({
      color: isDark ? 0x60a5fa : 0x2563eb,
      wireframe: true,
      roughness: 0.1,
      metalness: 0.9,
    });
    const outerMesh = new THREE.Mesh(outerGeom, outerMat);
    group.add(outerMesh);

    // Inner Geodesic Sphere (Lower-poly wireframe, purple/pink)
    const innerGeom = new THREE.IcosahedronGeometry(2.2, 1);
    const innerMat = new THREE.MeshStandardMaterial({
      color: isDark ? 0xa855f7 : 0x7c3aed,
      wireframe: true,
      roughness: 0.2,
      metalness: 0.8,
    });
    const innerMesh = new THREE.Mesh(innerGeom, innerMat);
    group.add(innerMesh);

    // 2. Central Pulsing Glowing Core
    const coreGeom = new THREE.SphereGeometry(1.2, 32, 32);
    const coreMat = new THREE.MeshBasicMaterial({
      color: isDark ? 0xec4899 : 0xdb2777,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
    });
    const coreMesh = new THREE.Mesh(coreGeom, coreMat);
    group.add(coreMesh);

    // 3. Concentric Orbit Rings
    // Ring 1: tilted X
    const ringGeom1 = new THREE.RingGeometry(4.5, 4.6, 64);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: isDark ? 0xf472b6 : 0x7c3aed,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.3,
      wireframe: true
    });
    const ringMesh1 = new THREE.Mesh(ringGeom1, ringMat1);
    ringMesh1.rotation.x = Math.PI / 2.5;
    group.add(ringMesh1);

    // Ring 2: tilted Y
    const ringGeom2 = new THREE.RingGeometry(5.2, 5.3, 64);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: isDark ? 0x3b82f6 : 0x2563eb,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.2,
      wireframe: true
    });
    const ringMesh2 = new THREE.Mesh(ringGeom2, ringMat2);
    ringMesh2.rotation.y = Math.PI / 4;
    ringMesh2.rotation.x = -Math.PI / 6;
    group.add(ringMesh2);

    // 4. Floating Satellites (Neural Network Nodes)
    const satGeom = new THREE.SphereGeometry(0.12, 16, 16);
    const blueSatMat = new THREE.MeshBasicMaterial({
      color: isDark ? 0x60a5fa : 0x2563eb,
      transparent: true,
      opacity: 0.9
    });
    const pinkSatMat = new THREE.MeshBasicMaterial({
      color: isDark ? 0xf472b6 : 0xdb2777,
      transparent: true,
      opacity: 0.9
    });

    const satellitesCount = 8;
    const satellites = [];

    for (let i = 0; i < satellitesCount; i++) {
      const angle = (i / satellitesCount) * Math.PI * 2;
      const radius = 2.2 + Math.random() * 2.0;
      const speed = 0.4 + Math.random() * 0.8;
      const offsetY = (Math.random() - 0.5) * 2.5;
      const phase = Math.random() * Math.PI;

      const satMesh = new THREE.Mesh(satGeom, i % 2 === 0 ? blueSatMat : pinkSatMat);
      const scale = 0.6 + Math.random() * 0.6;
      satMesh.scale.setScalar(scale);
      group.add(satMesh);

      satellites.push({
        mesh: satMesh,
        radius,
        speed,
        angle,
        offsetY,
        phase
      });
    }

    // 5. Connection Lines (Radial - Core to Node)
    const linePositions = new Float32Array(satellitesCount * 2 * 3);
    const lineColors = new Float32Array(satellitesCount * 2 * 3);
    const lineGeom = new THREE.BufferGeometry();
    lineGeom.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));

    const startColor = new THREE.Color(isDark ? 0xa855f7 : 0x7c3aed);
    const endColor = new THREE.Color(isDark ? 0x60a5fa : 0x2563eb);
    for (let i = 0; i < satellitesCount; i++) {
      const i6 = i * 6;
      lineColors[i6] = startColor.r;
      lineColors[i6 + 1] = startColor.g;
      lineColors[i6 + 2] = startColor.b;
      
      lineColors[i6 + 3] = endColor.r;
      lineColors[i6 + 4] = endColor.g;
      lineColors[i6 + 5] = endColor.b;
    }
    lineGeom.setAttribute('color', new THREE.BufferAttribute(lineColors, 3));

    const lineMat = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending
    });
    const radialLines = new THREE.LineSegments(lineGeom, lineMat);
    group.add(radialLines);

    // 6. Connecting Mesh Lines (Node to Node)
    const ringLinePositions = new Float32Array(satellitesCount * 2 * 3);
    const ringLineGeom = new THREE.BufferGeometry();
    ringLineGeom.setAttribute('position', new THREE.BufferAttribute(ringLinePositions, 3));

    const ringLineMat = new THREE.LineBasicMaterial({
      color: isDark ? 0xec4899 : 0xdb2777,
      transparent: true,
      opacity: 0.2,
      blending: THREE.AdditiveBlending
    });
    const ringLines = new THREE.LineSegments(ringLineGeom, ringLineMat);
    group.add(ringLines);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    
    // Drag rotation velocities
    let velocityX = 0;
    let velocityY = 0;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const localX = e.clientX - rect.left;
      const localY = e.clientY - rect.top;
      
      mouseX = (localX - rect.width / 2) / (rect.width / 2);
      mouseY = (localY - rect.height / 2) / (rect.height / 2);

      if (isDragging) {
        const deltaMove = {
          x: e.clientX - previousMousePosition.x,
          y: e.clientY - previousMousePosition.y
        };

        velocityX = deltaMove.x * 0.005;
        velocityY = deltaMove.y * 0.005;

        group.rotation.y += velocityX;
        group.rotation.x += velocityY;

        previousMousePosition = {
          x: e.clientX,
          y: e.clientY
        };
      }
    };

    const handleMouseDown = (e) => {
      isDragging = true;
      previousMousePosition = {
        x: e.clientX,
        y: e.clientY
      };
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    // Touch support for mobile
    const handleTouchStart = (e) => {
      if (e.touches.length === 1) {
        isDragging = true;
        previousMousePosition = {
          x: e.touches[0].clientX,
          y: e.touches[0].clientY
        };
      }
    };

    const handleTouchMove = (e) => {
      if (isDragging && e.touches.length === 1) {
        const deltaMove = {
          x: e.touches[0].clientX - previousMousePosition.x,
          y: e.touches[0].clientY - previousMousePosition.y
        };

        velocityX = deltaMove.x * 0.005;
        velocityY = deltaMove.y * 0.005;

        group.rotation.y += velocityX;
        group.rotation.x += velocityY;

        previousMousePosition = {
          x: e.touches[0].clientX,
          y: e.touches[0].clientY
        };
      }
    };

    const handleTouchEnd = () => {
      isDragging = false;
    };

    const dom = container;
    dom.addEventListener('mousemove', handleMouseMove);
    dom.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    dom.addEventListener('touchstart', handleTouchStart, { passive: true });
    dom.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);

    // Resize Handler
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const w = entry.contentRect.width || 500;
        const h = entry.contentRect.height || 500;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      }
    });
    resizeObserver.observe(container);

    // Theme change observer
    const themeObserver = new MutationObserver(() => {
      const isDarkNow = document.documentElement.classList.contains('dark');
      outerMat.color.setHex(isDarkNow ? 0x60a5fa : 0x2563eb);
      innerMat.color.setHex(isDarkNow ? 0xa855f7 : 0x7c3aed);
      coreMat.color.setHex(isDarkNow ? 0xec4899 : 0xdb2777);
      ringMat1.color.setHex(isDarkNow ? 0xf472b6 : 0x7c3aed);
      ringMat2.color.setHex(isDarkNow ? 0x3b82f6 : 0x2563eb);
      blueSatMat.color.setHex(isDarkNow ? 0x60a5fa : 0x2563eb);
      pinkSatMat.color.setHex(isDarkNow ? 0xf472b6 : 0xdb2777);
      ringLineMat.color.setHex(isDarkNow ? 0xec4899 : 0xdb2777);
    });
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    // Animation loop variables
    let clock = new THREE.Clock();

    const animate = () => {
      const elapsed = clock.getElapsedTime();

      // Constant auto-rotations
      if (!isDragging) {
        // Apply spin inertia/decay
        group.rotation.y += velocityX;
        group.rotation.x += velocityY;
        
        velocityX *= 0.95;
        velocityY *= 0.95;

        // Base idle rotation
        group.rotation.y += 0.004;
        group.rotation.x += 0.002;
      }

      // Rotate geodesic spheres in opposite directions for moiré effect
      outerMesh.rotation.y = elapsed * 0.12;
      outerMesh.rotation.x = elapsed * 0.06;
      innerMesh.rotation.y = -elapsed * 0.18;
      innerMesh.rotation.z = elapsed * 0.08;

      // Glow pulse for center core
      coreMesh.scale.setScalar(1 + Math.sin(elapsed * 2.5) * 0.12);

      // Rotate orbital rings
      ringMesh1.rotation.z = elapsed * 0.08;
      ringMesh2.rotation.z = -elapsed * 0.12;

      // Update satellite orbits and dynamic lines
      const rPos = radialLines.geometry.attributes.position.array;
      const lPos = ringLines.geometry.attributes.position.array;

      satellites.forEach((sat, i) => {
        const currentAngle = sat.angle + elapsed * sat.speed * 0.3;
        sat.mesh.position.x = Math.cos(currentAngle) * sat.radius;
        sat.mesh.position.y = Math.sin(elapsed * 0.8 + sat.phase) * sat.offsetY;
        sat.mesh.position.z = Math.sin(currentAngle) * sat.radius;

        // Update radial line segments (center to node)
        const idx6 = i * 6;
        rPos[idx6] = 0;
        rPos[idx6 + 1] = 0;
        rPos[idx6 + 2] = 0;
        
        rPos[idx6 + 3] = sat.mesh.position.x;
        rPos[idx6 + 4] = sat.mesh.position.y;
        rPos[idx6 + 5] = sat.mesh.position.z;

        // Update node-to-node ring lines
        const nextSat = satellites[(i + 1) % satellitesCount];
        lPos[idx6] = sat.mesh.position.x;
        lPos[idx6 + 1] = sat.mesh.position.y;
        lPos[idx6 + 2] = sat.mesh.position.z;

        lPos[idx6 + 3] = nextSat.mesh.position.x;
        lPos[idx6 + 4] = nextSat.mesh.position.y;
        lPos[idx6 + 5] = nextSat.mesh.position.z;
      });

      radialLines.geometry.attributes.position.needsUpdate = true;
      ringLines.geometry.attributes.position.needsUpdate = true;

      // Parallax towards mouse position when not dragging
      if (!isDragging) {
        targetX += (mouseX - targetX) * 0.05;
        targetY += (mouseY - targetY) * 0.05;
        
        group.rotation.y += targetX * 0.005;
        group.rotation.x += -targetY * 0.005;
      }

      // Point light intensity ripple
      pointLight.intensity = 2.5 + Math.sin(elapsed * 4) * 0.7;

      renderer.render(scene, camera);
      requestRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      dom.removeEventListener('mousemove', handleMouseMove);
      dom.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      dom.removeEventListener('touchstart', handleTouchStart);
      dom.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      resizeObserver.disconnect();
      themeObserver.disconnect();
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      
      // Dispose Geometries
      outerGeom.dispose();
      innerGeom.dispose();
      coreGeom.dispose();
      ringGeom1.dispose();
      ringGeom2.dispose();
      satGeom.dispose();
      lineGeom.dispose();
      ringLineGeom.dispose();

      // Dispose Materials
      outerMat.dispose();
      innerMat.dispose();
      coreMat.dispose();
      ringMat1.dispose();
      ringMat2.dispose();
      blueSatMat.dispose();
      pinkSatMat.dispose();
      lineMat.dispose();
      ringLineMat.dispose();

      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="relative w-full h-[300px] md:h-[500px] flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Visual background guide lines */}
      <div className="absolute inset-0 border border-dashed border-blue-500/10 rounded-full animate-spin-slow pointer-events-none w-5/6 h-5/6 m-auto"></div>
      <div className="absolute inset-0 border border-dashed border-purple-500/5 rounded-full animate-reverse-spin-slow pointer-events-none w-4/6 h-4/6 m-auto"></div>
      
      {/* 3D Indicator */}
      <span className={`absolute bottom-4 text-[10px] font-black uppercase tracking-[0.2em] font-mono px-3 py-1 rounded-full border border-white/10 glass transition-opacity duration-300 pointer-events-none ${isHovered ? 'opacity-100' : 'opacity-40'}`}>
        ✦ Drag to Spin / Hover to Tilt ✦
      </span>
    </div>
  );
};

export default ThreeHeroShape;
