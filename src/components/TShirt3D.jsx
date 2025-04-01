import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";

const TShirt3D = ({ textureUrl, color }) => {
    const { scene } = useGLTF("/assets/tshirt.glb");
    const [texture, setTexture] = useState(null);

    useEffect(() => {
        if (textureUrl) {
            const loader = new THREE.TextureLoader();
            loader.load(textureUrl, (loadedTexture) => {
                loadedTexture.colorSpace = THREE.SRGBColorSpace;
                loadedTexture.wrapS = THREE.RepeatWrapping;
                loadedTexture.wrapT = THREE.RepeatWrapping;
                loadedTexture.needsUpdate = true;

                setTexture(loadedTexture);
            });
        } else {
            setTexture(null);
        }
    }, [textureUrl]);

    useEffect(() => {
        scene.traverse((child) => {
            if (child.isMesh) {
                if (texture) {
                    child.material.map = texture;
                    child.material.color.set(0xffffff);
                } else {
                    child.material.map = null;
                    child.material.color.set(color);
                }
                child.material.side = THREE.DoubleSide;
                child.material.needsUpdate = true;
            }
        });
    }, [texture, scene, color]);

    return (
        <div className="container" style={{width: '500px', height: '400px', marginRight: '80px'}}>
        <Canvas camera={{ position: [0, 2, 17], fov: 50 }} style={{height:'500px', borderRadius: '30px', margin: '30px', marginRight: '100px'}}>
            <ambientLight intensity={2.0} />
            <directionalLight position={[2, 2, 2]} />
            <OrbitControls/>
            <primitive object={scene} scale={2} />
        </Canvas>
        </div>
    );
};

export default TShirt3D;
