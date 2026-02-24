// "use client";

// import { useMemo, useRef, useState, useEffect } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { Float, MeshDistortMaterial, Sphere, Center, Text3D } from "@react-three/drei";
// import * as THREE from "three";
// import { Particles } from "./ParticleCardBackground";

// function AnimatedConstruction() {
//   const group = useRef<THREE.Group>(null);
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   /* 
//   // Old particles logic commented out to use unified Particles component
//   const points = useMemo(() => {
//     const p = new Float32Array(1000 * 3);
//     for (let i = 0; i < 1000; i++) {
//       p[i * 3] = (Math.random() - 0.5) * 10;
//       p[i * 3 + 1] = (Math.random() - 0.5) * 10;
//       p[i * 3 + 2] = (Math.random() - 0.5) * 10;
//     }
//     return p;
//   }, []);
//   */

//   useFrame((state) => {
//     if (group.current) {
//       group.current.rotation.y = state.clock.getElapsedTime() * 0.1;
//       group.current.rotation.x = state.clock.getElapsedTime() * 0.05;
//     }
//   });

//   if (!mounted) return null;

//   return (
//     <group ref={group}>
//       <Particles count={1500} color="#f7a042" />
//       {/* 
//       <Points positions={points} stride={3} frustumCulled={false}>
//         <PointMaterial
//           transparent
//           color="#A76B2A"
//           size={0.05}
//           sizeAttenuation={true}
//           depthWrite={false}
//           opacity={0.4}
//         />
//       </Points>
//       */}

//       <Float speed={2} rotationIntensity={1} floatIntensity={1}>
//         <Sphere args={[1, 64, 64]} scale={1.5}>
//           <MeshDistortMaterial
//             color="#f7a042"
//             speed={3}
//             distort={0.4}
//             radius={1}
//           />
//         </Sphere>
//       </Float>

//       {/* First rotating torus line - Currently Warm Brown (#A76B2A) */}
//       <mesh rotation={[Math.PI / 4, 0, 0]}>
//         <torusGeometry args={[3, 0.02, 16, 100]} />
//         <meshStandardMaterial color="#A76B2A" emissive="#A76B2A" emissiveIntensity={0.5} />
//       </mesh>

//       {/* Second rotating torus line - Currently Bright Orange (#f7a042) */}
//       <mesh rotation={[-Math.PI / 4, Math.PI / 4, 0]}>
//         <torusGeometry args={[3.5, 0.01, 16, 100]} />
//         <meshStandardMaterial color="#f7a042" emissive="#f7a042" emissiveIntensity={0.2} transparent opacity={0.6} />
//       </mesh>
//     </group>



//   );
// }

// export default function HeroScene() {
//   return (
//     <div className="absolute inset-0 w-full h-full pointer-events-none opacity-40 md:opacity-100">
//       <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
//         <ambientLight intensity={0.5} />
//         <pointLight position={[10, 10, 10]} intensity={1} />
//         <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} />
//         <AnimatedConstruction />
//       </Canvas>
//     </div>
//   );
// }


"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere } from "@react-three/drei";
import * as THREE from "three";

function Particles({ count = 1500, color = "#f7a042" }: { count?: number; color?: string }) {
  const mesh = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 3 + Math.random() * 4;
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = state.clock.getElapsedTime() * 0.03;
      mesh.current.rotation.x = state.clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color={color}
        size={0.025}
        sizeAttenuation
        transparent
        opacity={0.6}
        depthWrite={false}
      />
    </points>
  );
}

function AnimatedSphere() {
  const group = useRef<THREE.Group>(null);
  const ring1 = useRef<THREE.Mesh>(null);
  const ring2 = useRef<THREE.Mesh>(null);
  const ring3 = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (group.current) {
      group.current.rotation.y = t * 0.08;
      group.current.rotation.x = Math.sin(t * 0.05) * 0.1;
    }
    if (ring1.current) {
      ring1.current.rotation.z = t * 0.3;
      ring1.current.rotation.x = Math.sin(t * 0.2) * 0.2;
    }
    if (ring2.current) {
      ring2.current.rotation.z = -t * 0.2;
      ring2.current.rotation.y = Math.cos(t * 0.15) * 0.3;
    }
    if (ring3.current) {
      ring3.current.rotation.x = t * 0.15;
      ring3.current.rotation.z = Math.sin(t * 0.1) * 0.2;
    }
  });

  return (
    <group ref={group}>
      <Particles count={2000} color="#DAF9A0" />

      {/* Main glowing sphere */}
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.8}>
        <Sphere args={[1.2, 128, 128]} scale={1.4}>
          <MeshDistortMaterial
            color="#f7a042"
            speed={2.5}
            distort={0.35}
            radius={1}
            roughness={0.2}
            metalness={0.8}
          />
        </Sphere>
      </Float>

      {/* Inner glow sphere */}
      <Sphere args={[1.1, 64, 64]} scale={1.4}>
        <meshStandardMaterial
          color="#DAF9A0"
          emissive="#DAF9A0"
          emissiveIntensity={0.3}
          transparent
          opacity={0.15}
        />
      </Sphere>

      {/* Orbital ring 1 */}
      <mesh ref={ring1} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[2.8, 0.008, 16, 200]} />
        <meshStandardMaterial
          color="#f7a042"
          emissive="#f7a042"
          emissiveIntensity={0.8}
          transparent
          opacity={0.7}
        />
      </mesh>

      {/* Orbital ring 2 */}
      <mesh ref={ring2} rotation={[-Math.PI / 5, Math.PI / 3, 0]}>
        <torusGeometry args={[3.2, 0.006, 16, 200]} />
        <meshStandardMaterial
          color="#A76B2A"
          emissive="#A76B2A"
          emissiveIntensity={0.6}
          transparent
          opacity={0.5}
        />
      </mesh>

      {/* Orbital ring 3 */}
      <mesh ref={ring3} rotation={[Math.PI / 2.5, -Math.PI / 6, Math.PI / 4]}>
        <torusGeometry args={[3.6, 0.004, 16, 200]} />
        <meshStandardMaterial
          color="#f7a042"
          emissive="#f7a042"
          emissiveIntensity={0.4}
          transparent
          opacity={0.3}
        />
      </mesh>

      {/* Accent dots on rings */}
      {[0, 1, 2, 3, 4, 5].map((i) => {
        const angle = (i / 6) * Math.PI * 2;
        return (
          <mesh
            key={i}
            position={[
              Math.cos(angle) * 2.8,
              Math.sin(angle) * 2.8 * Math.cos(Math.PI / 3),
              Math.sin(angle) * 2.8 * Math.sin(Math.PI / 3),
            ]}
          >
            <sphereGeometry args={[0.03, 16, 16]} />
            <meshStandardMaterial
              color="#f7a042"
              emissive="#f7a042"
              emissiveIntensity={2}
            />
          </mesh>
        );
      })}
    </group>
  );
}

export default function HeroScene() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={["#0f1729"]} />
        <fog attach="fog" args={["#0f1729", 8, 20]} />
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#DAF9A0" />
        <pointLight position={[-10, -5, 5]} intensity={0.5} color="#DAF9A0" />
        <spotLight
          position={[0, 10, 5]}
          angle={0.3}
          penumbra={1}
          intensity={1}
          color="#DAF9A0"
        />
        <AnimatedSphere />
      </Canvas>
    </div>
  );
}

