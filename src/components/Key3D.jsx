import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, ContactShadows } from '@react-three/drei'
import { useScroll, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useEffect } from 'react'
import * as THREE from 'three'

function BrassKey({ rotY, hover }) {
  const group = useRef()

  useFrame((state, dt) => {
    if (!group.current) return
    // combine scroll-driven rotation with gentle idle
    const idle = Math.sin(state.clock.elapsedTime * 0.6) * 0.08
    group.current.rotation.y = rotY.get() + idle
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.4) * 0.05 - 0.05
    group.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.03
  })

  // bitting pattern 5-3-7-4-6 (each 0-10)
  const bitting = [5, 3, 7, 4, 6]
  const shaftLen = 2.4
  const shaftRadius = 0.08
  const toothZ = 0.03 // thickness direction

  return (
    <group ref={group} position={[0, 0, 0]}>
      {/* Bow (circular head) */}
      <mesh position={[-1.5, 0, 0]}>
        <torusGeometry args={[0.5, 0.12, 24, 48]} />
        <meshStandardMaterial color="#D4AF6A" metalness={0.95} roughness={0.25} />
      </mesh>
      {/* Bow face (coin-like) */}
      <mesh position={[-1.5, 0, 0]}>
        <cylinderGeometry args={[0.45, 0.45, 0.08, 48]} />
        <meshStandardMaterial color="#C9A464" metalness={0.9} roughness={0.3} />
      </mesh>
      {/* Hole in bow */}
      <mesh position={[-1.5, 0, 0.001]}>
        <cylinderGeometry args={[0.14, 0.14, 0.12, 24]} />
        <meshStandardMaterial color="#1A1A18" metalness={0.2} roughness={0.9} />
      </mesh>

      {/* Shaft (cylindrical) */}
      <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[shaftRadius, shaftRadius, shaftLen, 24]} />
        <meshStandardMaterial color="#D4AF6A" metalness={0.92} roughness={0.28} />
      </mesh>

      {/* Bitting teeth along the top of shaft */}
      {bitting.map((depth, i) => {
        const x = -0.2 + i * 0.36
        const h = (depth / 10) * 0.22 + 0.06
        return (
          <mesh key={i} position={[x, h / 2 + shaftRadius - 0.04, 0]}>
            <boxGeometry args={[0.32, h, 0.14]} />
            <meshStandardMaterial color="#C9A464" metalness={0.9} roughness={0.3} />
          </mesh>
        )
      })}

      {/* Tip bevel */}
      <mesh position={[1.25, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
        <coneGeometry args={[shaftRadius, 0.18, 24]} />
        <meshStandardMaterial color="#B8933E" metalness={0.9} roughness={0.35} />
      </mesh>

      {/* Subtle shoulder */}
      <mesh position={[-0.9, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[shaftRadius + 0.03, shaftRadius + 0.03, 0.08, 24]} />
        <meshStandardMaterial color="#9A7840" metalness={0.9} roughness={0.4} />
      </mesh>
    </group>
  )
}

export default function Key3D() {
  // Scroll-driven rotation
  const { scrollYProgress } = useScroll()
  const rotYRaw = useTransform(scrollYProgress, [0, 1], [0, Math.PI * 4])
  const rotY = useSpring(rotYRaw, { stiffness: 80, damping: 20, mass: 1 })

  return (
    <Canvas
      camera={{ position: [0, 0.4, 5], fov: 32 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
      style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}
    >
      <color attach="background" args={['#00000000']} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 3]} intensity={1.3} castShadow />
      <directionalLight position={[-3, 2, 4]} intensity={0.6} color="#FFE8C8" />
      <pointLight position={[2, -2, 2]} intensity={0.4} color="#E63946" />

      <BrassKey rotY={rotY} />

      <ContactShadows
        position={[0, -0.7, 0]}
        opacity={0.35}
        scale={6}
        blur={2.2}
        far={1.2}
        color="#0A0A0A"
      />

      <Environment preset="studio" />
    </Canvas>
  )
}
