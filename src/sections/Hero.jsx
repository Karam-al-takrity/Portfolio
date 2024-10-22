import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import HackerRoom from "../components/HackerRoom";
import { Suspense } from "react";
import CanvasLoader from "../components/CanvasLoader";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants";
import Target from "../components/Target";
import ReactLogo from "../components/ReactLogo";
import Cube from "../components/Cube";
import Ring from "../components/Ring";
import HeroCamera from "../components/HeroCamera";
import Button from "../components/Button";

const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ maxWidth: 1024, minWidth: 768 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="relative flex min-h-screen w-full flex-col" id="home">
      <div className="c-space mx-auto mt-36 flex w-full flex-col gap-3 sm:mt-36"></div>
      <p className="text-center font-generalsans text-xl font-medium text-white sm:text-3xl">
        Hi, I am Karam <span className="waving-hand">👋🏼</span>
      </p>
      <p className="hero_tag text-gray_gradient">Building Products & Brands</p>

      <div className="absolute inset-0 h-full w-full">
        <Canvas className="h-full w-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />

            <HeroCamera isMobile={isMobile}>
              <HackerRoom
                position={sizes.deskPosition}
                scale={sizes.deskScale}
                rotation={[0, -Math.PI, 0]}
              />
            </HeroCamera>
            <group>
              <Target position={sizes.targetPosition} />
              <ReactLogo position={sizes.reactLogoPosition} />
              <Cube position={sizes.cubePosition} />
              <Ring position={sizes.ringPosition} />
            </group>

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={1} />
          </Suspense>
        </Canvas>
      </div>

      <div className="c-space absolute bottom-7 left-0 right-0 z-10 w-full">
        <a href="#about" className="w-fit">
          <Button
            name="Let's work together"
            isBeam
            containerClass="sm:w-fit w-full sm:min-w-96"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
