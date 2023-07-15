'use client';
import { Canvas } from "@react-three/fiber";
import styles from '../page.module.css';
import { OrbitControls, Stats, useTexture } from "@react-three/drei";
const TexturedSpheres = () => {
    const map = useTexture('./textures/rustic_stone_wall_02_diff_1k.png');
    const displacementMap = useTexture('./textures/rustic_stone_wall_02_disp_1k.png');
    const normalMap = useTexture('./textures/rustic_stone_wall_02_nor_gl_1k.png');
    const roughnesssMap = useTexture('./textures/rustic_stone_wall_02_rough_1k.png');

    return (
        <>
        <mesh scale={[0.5,0.5,0.5]} position={[-1,0,0]}>
            <sphereGeometry args={[1,200,200]}/>
            <meshStandardMaterial displacementScale={0.05} map={map} normalMap={normalMap} roughnessMap={roughnesssMap} displacementMap={displacementMap}/>
        </mesh>
        <mesh scale={[0.5,0.5,0.5]} position={[0,0,0]}>
            <sphereGeometry />
            <meshStandardMaterial map={map}/>
        </mesh>
        <mesh scale={[0.5,0.5,0.5]} position={[1,0,0]}>
            <sphereGeometry />
            <meshStandardMaterial map={map}/>
        </mesh>
        </>
    )
}

const TexturesPage = () => {
  return (
    <div className={styles.container}>
        <Canvas>
            <Stats />
            <gridHelper args={[10,10]}/>
        <OrbitControls />
        <ambientLight intensity={0.1} />
        <directionalLight position={[0,0,5]}/>
        <TexturedSpheres />
        </Canvas>
    </div>
  )
}

export default TexturesPage