'use client'
import { Environment, OrbitControls } from "@react-three/drei"
import { Canvas, useLoader } from "@react-three/fiber"
import { Suspense } from "react"
import { styled } from "styled-components"
// import { GLTFLoader } from "three-stdLib"
import styles from '../page.module.css';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { VRButton, XR, Controllers, Hands } from "@react-three/xr";

export default function TutorialPage() {

  const Model = () => {
    // const gltf = useLoader(GLTFLoader,'/threeD/scene.gltf')
    const gltf = useLoader(GLTFLoader,'/suzy/suzy.gltf')

    return (
      <>
        <primitive dispose={null} object={gltf.scene} scale={0.7}/>
      </>
    )
  }


  return (
    <div className={styles.container}>
      {/* <ThreeDContainer> */}
      <VRButton />

      
        <Canvas shadows dpr={[1,2]} camera={{position:[0,0,4], fov:50}}>
        <XR>
        <Controllers />
            <Hands />
          <ambientLight intensity={0.7} />
          <spotLight  intensity={0.5} angle={0.1} penumbra={2} position={[10,15,10]} castShadow/>
          
          <Suspense fallback={null}>
            <Model />
            <Environment preset="apartment" />
          </Suspense>
        
          <OrbitControls autoRotate/>
          </XR>
        </Canvas>
      
      {/* </ThreeDContainer> */}
    </div>
  )
}
const ThreeDContainer = styled.div`
  canvas {
    // height: 660px !important;
    // width: 400px !important;
    // width:100%;
    width:100%;
    
  }
  text-align:center;
`;