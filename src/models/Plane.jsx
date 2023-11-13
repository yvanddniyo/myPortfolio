import { useEffect, useRef } from 'react'
import planeScene from '../assets/3d/plane.glb'
import { useGLTF, useAnimations } from '@react-three/drei'


const Plane = ({ isRotating, ...props }) => {
  // Load the 3D model and its animation
  const { scene, animations } = useGLTF(planeScene);

  const ref = useRef();
  // Get animation actions associate with the plane
  const { actions } = useAnimations(animations, ref);
  // use an effect to control the plane's animation based on 'isRotating'
  // Note: Animation names can be found on the Sketchfab website whre the 3D model is hosted,

  useEffect(() => {
    if (isRotating) {
      actions['Take 001'].play();
    }
    else {
      actions["Take 001"].stop();
    }
  }, [actions, isRotating]);
  return (
    <mesh {...props} ref={ref}>
        // use the primitive element when you want to directly embed a complex 3D
      model or scene
      <primitive object={scene} />
    </mesh>
  )
}

export default Plane