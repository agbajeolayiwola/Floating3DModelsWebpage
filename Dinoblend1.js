/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/Dinoblend1.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Armature" position={[-0.36, 0.26, -0.13]}>
        <primitive object={nodes.Bone} />
        <primitive object={nodes.Bone004} />
        <primitive object={nodes.Bone009} />
        <primitive object={nodes.Bone011} />
        <skinnedMesh
          name="Cube"
          geometry={nodes.Cube.geometry}
          material={materials['Material.001']}
          skeleton={nodes.Cube.skeleton}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/Dinoblend1.glb')