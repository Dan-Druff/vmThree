import React, { useRef } from "react";
import {useFrame} from "@react-three/fiber";
import { useHelper } from "@react-three/drei";
import { BoxHelper } from "three";
type Props = {
    isTesting:boolean
}
const AnimatedBox : React.FC<Props> = ({isTesting}) => {
    const meshRef = useRef<THREE.Mesh>(null);
    // {isTesting ? useHelper(meshRef,BoxHelper, "blue") : null}
    if(isTesting){
        useHelper(meshRef,BoxHelper, "blue");
    }
    // {isTesting ? console.log(`TESTING TREU`) : console.log(`testing false`)}
    // useHelper(meshRef,BoxHelper, "blue");
    useFrame(() => {
     
        if(meshRef.current){
            meshRef.current.rotation.x += 0.01;
            meshRef.current.rotation.y += 0.01;
            meshRef.current.rotation.z += 0.01;
        }
        
    })
    return (
        <mesh ref={meshRef} scale={[0.5,0.5,0.5]}>
            <boxGeometry />
            <meshStandardMaterial />
        </mesh>
    )
}

export default AnimatedBox