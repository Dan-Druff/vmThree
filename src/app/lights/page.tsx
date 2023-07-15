'use client';
import { Canvas } from "@react-three/fiber";
import styles from '../page.module.css';
import { OrbitControls, Stats, useTexture, TransformControls } from "@react-three/drei";
import Lights from "../Components/Lights";
const TexturedSpheres = () => {
    const map = useTexture('./textures/rustic_stone_wall_02_diff_1k.png');
    const displacementMap = useTexture('./textures/rustic_stone_wall_02_disp_1k.png');
    const normalMap = useTexture('./textures/rustic_stone_wall_02_nor_gl_1k.png');
    const roughnesssMap = useTexture('./textures/rustic_stone_wall_02_rough_1k.png');

    return (
        <>
            <TransformControls>
                <mesh scale={[0.5,0.5,0.5]} position={[0,1,0]} castShadow>
                    <sphereGeometry args={[1,200,200]}/>
                    <meshStandardMaterial 
                    displacementScale={0.05} 
                    map={map} 
                    normalMap={normalMap} 
                    roughnessMap={roughnesssMap} 
                    displacementMap={displacementMap}/>
                </mesh>
            </TransformControls>
        </>
    )
}

const LightsPage = () => {
  return (
    <div className={styles.container}>
        <Canvas shadows>
            <Stats />
            <gridHelper args={[10,10]}/>
        {/* <OrbitControls /> */}
        <Lights />
        <TexturedSpheres />
        <mesh rotation-x={Math.PI * - 0.5} receiveShadow>
            {/* <planeBufferGeometry args={[5,5]} /> */}
            <planeGeometry args={[500,500]} />
            <meshStandardMaterial color={"#458745"} />
        </mesh>
        </Canvas>
    </div>
  )
}

export default LightsPage