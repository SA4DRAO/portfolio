import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial } from '@react-three/drei'
import { useRef, useMemo } from 'react'
import * as THREE from 'three'

const COLORS = {
  yellow: '#ffd60a',
  pink: '#ff5d8f',
  blue: '#3a86ff',
  green: '#06d6a0',
  purple: '#b388ff',
  orange: '#ff8f3c',
}

/** A single floating solid shape with a hard black outline feel. */
function Shape({
  position,
  color,
  geometry,
  scale = 1,
  speed = 1,
}: {
  position: [number, number, number]
  color: string
  geometry: 'box' | 'torus' | 'sphere' | 'cone' | 'octa'
  scale?: number
  speed?: number
}) {
  const ref = useRef<THREE.Mesh>(null)
  useFrame((state) => {
    if (!ref.current) return
    const t = state.clock.elapsedTime * speed
    ref.current.rotation.x = t * 0.3
    ref.current.rotation.y = t * 0.4
  })

  const geo = useMemo(() => {
    switch (geometry) {
      case 'torus':
        return new THREE.TorusGeometry(0.7, 0.28, 20, 40)
      case 'sphere':
        return new THREE.SphereGeometry(0.8, 32, 32)
      case 'cone':
        return new THREE.ConeGeometry(0.7, 1.2, 4)
      case 'octa':
        return new THREE.OctahedronGeometry(0.85)
      default:
        return new THREE.BoxGeometry(1, 1, 1)
    }
  }, [geometry])

  return (
    <Float speed={2 * speed} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh ref={ref} position={position} scale={scale} geometry={geo}>
        <meshStandardMaterial color={color} roughness={0.35} metalness={0.1} flatShading />
      </mesh>
    </Float>
  )
}

/** A central distorted blob — the "agent brain". */
function Brain() {
  const ref = useRef<THREE.Mesh>(null)
  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.y = state.clock.elapsedTime * 0.15
  })
  return (
    <mesh ref={ref} position={[0, 0, 0]} scale={1.6}>
      <icosahedronGeometry args={[1, 4]} />
      <MeshDistortMaterial
        color={COLORS.pink}
        distort={0.35}
        speed={2}
        roughness={0.3}
        metalness={0.15}
        flatShading
      />
    </mesh>
  )
}

/** Wireframe grid floor for depth. */
function Grid() {
  return (
    <gridHelper
      args={[40, 40, COLORS.blue, '#1a1a1a']}
      position={[0, -3.2, 0]}
    />
  )
}

function SceneContent() {
  const group = useRef<THREE.Group>(null)
  useFrame((state) => {
    if (!group.current) return
    // Mouse parallax
    const x = state.pointer.x * 0.4
    const y = state.pointer.y * 0.4
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, x, 0.05)
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -y, 0.05)
  })

  return (
    <group ref={group}>
      <Brain />
      <Shape position={[-3.4, 1.4, -1]} color={COLORS.yellow} geometry="box" scale={0.9} speed={1.1} />
      <Shape position={[3.6, 1.8, -1.5]} color={COLORS.blue} geometry="torus" scale={0.8} speed={0.9} />
      <Shape position={[-3.8, -1.2, -0.5]} color={COLORS.green} geometry="octa" scale={0.7} speed={1.3} />
      <Shape position={[3.2, -1.6, -1]} color={COLORS.purple} geometry="cone" scale={0.8} speed={1} />
      <Shape position={[0, 2.6, -2]} color={COLORS.orange} geometry="sphere" scale={0.5} speed={1.4} />
      <Shape position={[-1.8, -2.4, -1.5]} color={COLORS.pink} geometry="box" scale={0.5} speed={1.2} />
      <Shape position={[2, 0.4, -2.5]} color={COLORS.yellow} geometry="octa" scale={0.45} speed={1.5} />
      <Grid />
    </group>
  )
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} intensity={1.1} />
      <directionalLight position={[-5, -3, -5]} intensity={0.4} color={COLORS.blue} />
      <SceneContent />
    </Canvas>
  )
}
