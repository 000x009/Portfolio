import {useGLTF} from "@react-three/drei";

export const MeModel = () => {
    const {nodes} = useGLTF(`${import.meta.env.BASE_URL}models/me3d.glb`);

    return (
        <group dispose={null}>
            <mesh geometry={nodes.mesh_0.geometry} material={nodes.mesh_0.material}/>
        </group>
    );
};

useGLTF.preload(`${import.meta.env.BASE_URL}models/me3d.glb`);
