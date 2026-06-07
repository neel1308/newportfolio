'use client'

import { useEffect, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Points, PointMaterial, Preload } from '@react-three/drei'
import * as random from 'maath/random/dist/random.esm'

function ParticleField() {
  const ref = useRef<any>(null)
  const { camera } = useThree()

  useEffect(() => {
    if (ref.current) {
      const positions = new Float32Array(random.inSphere(new Float32Array(5000), { radius: 1.2 }))
      ref.current.geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    }
  }, [])

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x -= 0.0001
      ref.current.rotation.y -= 0.0002
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} limit={40000} stride={3} frustumCulled={true}>
        <PointMaterial
          transparent
          color="#4f7cff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
          dithering={true}
        />
      </Points>
    </group>
  )
}

export default function ParticleScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 1], fov: 75 }}
      gl={{ antialias: true }}
      className="absolute inset-0"
    >
      <ParticleField />
      <Preload all />
    </Canvas>
  )
}

import * as THREE from 'three'
