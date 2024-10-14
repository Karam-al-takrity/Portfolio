import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import HackerRoom from "../components/HackerRoom";
import { Suspense } from "react";
import CanvasLoader from "../components/CanvasLoader";
import { Leva, useControls } from "leva";

const Hero = () => {
  const x = useControls("HackerRoom", {
    positionX: {
      value: 2.5,
      min: -10,
      max: 10,
    },
    positionY: {
      value: 2.5,
      min: -10,
      max: 10,
    },
    positionZ: {
      value: 2.5,
      min: -10,
      max: 10,
    },
    rotationX: {
      value: 2.5,
      min: -10,
      max: 10,
    },
    rotationY: {
      value: 2.5,
      min: -10,
      max: 10,
    },
    rotationZ: {
      value: 2.5,
      min: -10,
      max: 10,
    },
    scale: {
      value: 1,
      min: 0,
      max: 2,
    },
  });

  return (
    <section className="relative flex min-h-screen w-full flex-col border-2 border-blue-500">
      <div className="c-space mx-auto mt-36 flex w-full flex-col gap-3 sm:mt-36"></div>
      <p className="text-center font-generalsans text-xl font-medium text-white sm:text-3xl">
        Hi, I am Karam <span className="waving-hand">👋🏼</span>
      </p>
      <p className="hero_tag text-gray_gradient">Building Products & Brands</p>

      <div className="absolute inset-0 h-full w-full">
        <Leva />
        <Canvas className="mt-36 h-full w-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            <HackerRoom
              //   scale={0.07}
              //   position={[0, 0, 0]}
              //   rotation={[0, -Math.PI / 2, 0]}
              position={[x.positionX, x.positionY, x.positionZ]}
              rotation={[x.rotationX, x.rotationY, x.rotationZ]}
              scale={[x.scale, x.scale, x.scale]}
            />

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={1} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
