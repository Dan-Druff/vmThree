'use client';
import { Canvas } from "@react-three/fiber"
import styles from '../page.module.css';
import AnimatedBox from "../Components/AnimatedBox";
// import CameraOrbitController from "../Components/CameraOrbitController";
import { OrbitControls, Stats } from "@react-three/drei";
import { Suspense, useState } from "react";
const ThreePage = () => {
    const [testing,setTesting] = useState<boolean>(true);
//    const testing = false;

  return (
    <div className={styles.container}>
        
    <Canvas>
        {testing ? <Stats /> : null}
        {testing ? <axesHelper visible={testing} args={[2]} /> : null}
       {testing ? <gridHelper args={[10,10]}/> : null}
        <OrbitControls />
        
        {/* <CameraOrbitController /> */}
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0,0,5]} />
        
            <AnimatedBox isTesting={testing}/>
        
        
    </Canvas>
    
    </div>
  )
}

export default ThreePage