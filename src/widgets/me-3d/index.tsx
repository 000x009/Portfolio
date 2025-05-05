import {FC} from "react";
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import {MeModel} from "../../entities/me/ui/Me3d.jsx";
import styles from "./index.module.css";
import {Text} from "../../shared/ui/Text";

export const Me3D: FC = () => {
    return (
        <div>
            <Canvas
                shadows
                className={styles.canvas}
                camera={{position: [1, 1.5, 2.5], fov: 40}}
            >
                <ambientLight intensity={2}/>
                <OrbitControls
                    autoRotate={true}
                    autoRotateSpeed={30}
                    enableZoom={false}
                />
                <MeModel/>
            </Canvas>
            <Text className="text-center text-sm text-red-600 w-full align-middle justify-center flex">
                *NOT AN EXACT COPY OF ME. JUST A 3D MOCK UP {":))"}
            </Text>
        </div>
    );
};

