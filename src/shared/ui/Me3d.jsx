import {useGLTF} from "@react-three/drei";

export const MeModel = () => {
    const {nodes} = useGLTF(`/models/me3d.glb`);

    return (
        <group dispose={null}>
            <mesh geometry={nodes.mesh_0.geometry} material={nodes.mesh_0.material}/>
        </group>
    );
};

useGLTF.preload(`/models/me3d.glb`);
