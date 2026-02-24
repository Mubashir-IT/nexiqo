"use client";

import { useMemo, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

export function Particles({ count = 500, spreadX = 10, spreadY = 10, spreadZ = 10, disableRotation = false, color = "#DAF9A0" }) {
    const points = useRef<THREE.Points>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Generate random positions and velocities for particles
    const [positions, velocities] = useMemo(() => {
        const pos = new Float32Array(count * 3);
        const vel = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            pos[i * 3] = (Math.random() - 0.5) * spreadX;
            pos[i * 3 + 1] = (Math.random() - 0.5) * spreadY;
            pos[i * 3 + 2] = (Math.random() - 0.5) * spreadZ;

            vel[i * 3] = (Math.random() - 0.5) * 0.005;
            vel[i * 3 + 1] = (Math.random() - 0.5) * 0.005;
            vel[i * 3 + 2] = (Math.random() - 0.5) * 0.005;
        }
        return [pos, vel];
    }, [count, spreadX, spreadY, spreadZ]);

    useFrame((state) => {
        if (!points.current) return;

        const { array } = points.current.geometry.attributes.position;
        for (let i = 0; i < count; i++) {
            array[i * 3] += velocities[i * 3];
            array[i * 3 + 1] += velocities[i * 3 + 1];
            array[i * 3 + 2] += velocities[i * 3 + 2];

            // Boundary check to keep particles within a certain range
            if (Math.abs(array[i * 3]) > spreadX / 2) velocities[i * 3] *= -1;
            if (Math.abs(array[i * 3 + 1]) > spreadY / 2) velocities[i * 3 + 1] *= -1;
            if (Math.abs(array[i * 3 + 2]) > spreadZ / 2) velocities[i * 3 + 2] *= -1;
        }
        points.current.geometry.attributes.position.needsUpdate = true;

        // Slow rotation of the entire group - only if enabled
        if (!disableRotation) {
            points.current.rotation.y += 0.001;
            points.current.rotation.x += 0.0005;
        }
    });

    if (!mounted) return null;

    return (
        <Points ref={points} positions={positions} stride={3} frustumCulled={false}>
            <PointMaterial
                transparent
                color={color}
                size={0.06}
                sizeAttenuation={true}
                depthWrite={false}
                opacity={0.6}
            />
        </Points>
    );
}

export default function ParticleCardBackground({ spreadX = 10, spreadY = 10, spreadZ = 10, disableRotation = false, color = "#DAF9A0" }) {
    return (
        <div className="absolute inset-0 w-full h-full pointer-events-none opacity-70">
            <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
                <Particles spreadX={spreadX} spreadY={spreadY} spreadZ={spreadZ} disableRotation={disableRotation} color={color} />
            </Canvas>
        </div>
    );
}

