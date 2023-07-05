'use client'
import { Environment, OrbitControls } from "@react-three/drei"
import { Canvas, useLoader } from "@react-three/fiber"
import { Suspense } from "react"
import { styled } from "styled-components"
// import { GLTFLoader } from "three-stdLib"
import styles from './page.module.css';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

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
    <main>
      <ThreeDContainer>
       

      <h2>HELLO?</h2>
        <Canvas shadows dpr={[1,2]} camera={{position:[0,0,4], fov:50}}>

          <ambientLight intensity={0.7} />
          <spotLight  intensity={0.5} angle={0.1} penumbra={2} position={[10,15,10]} castShadow/>
          
          <Suspense fallback={null}>
            <Model />
            <Environment preset="apartment" />
          </Suspense>
        
          <OrbitControls autoRotate/>
        </Canvas>
      
      </ThreeDContainer>
    </main>
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