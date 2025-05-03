import {FC} from "react";
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import {MeModel} from "../../entities/me/ui/Me3d.tsx";
import styles from "./index.module.css"

export const Me3D: FC = () => {
    return (
        <Canvas shadows className={styles.canvas} camera={{position: [1, 1.5, 2.5], fov: 40}}>
            <ambientLight intensity={2}/>
            <OrbitControls autoRotate={true} autoRotateSpeed={30} enableZoom={false}/>
            <MeModel/>
        </Canvas>
    )
}