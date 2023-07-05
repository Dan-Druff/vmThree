'use client';
import { Canvas } from "@react-three/fiber"
import styles from '../page.module.css';
import AnimatedBox from "../Components/AnimatedBox";
import CameraOrbitController from "../Components/CameraOrbitController";

const ThreePage = () => {
   

  return (
    <div className={styles.container}>
    <Canvas>
        <CameraOrbitController />
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0,0,5]} />
        <AnimatedBox />
    </Canvas>
    </div>
  )
}

export default ThreePage