import { useHelper } from "@react-three/drei";
import { useRef } from "react"
import { DirectionalLightHelper } from "three";

const Lights = () => {
    const lightRef = useRef<THREE.DirectionalLight>();
    useHelper(lightRef, DirectionalLightHelper,5,"red");
  return (
    <>
        <ambientLight intensity={0.3}/>
        <directionalLight ref={lightRef} position={[0,10,10]} castShadow/>
    </>
  )
}

export default Lights