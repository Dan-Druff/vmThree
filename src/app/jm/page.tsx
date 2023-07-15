'use client';
import { VRButton, XR } from '@react-three/xr';
import styles from '../page.module.css';
import { Canvas, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
const JmPage = () => {
    const model = useLoader(GLTFLoader, "./suzy/tree1.glb");

  return (
    <div className={styles.container}>
        <VRButton />
        <Canvas>
            <XR>
                <ambientLight intensity={0.1} />
                <directionalLight color="red" position={[0,0,5]} /> 
                <object3D position={[2,0,0]}>
                <primitive object={model.scene}></primitive>
                </object3D>
                
                <mesh rotation-x={Math.PI * -0.5} receiveShadow>
                    <planeGeometry args={[1000,1000]} />
                    <meshStandardMaterial color="green" />
                </mesh>
            </XR>
        </Canvas>
    </div>
  )
}

export default JmPage