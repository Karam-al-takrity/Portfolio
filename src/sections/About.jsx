import Globe from "react-globe.gl";
import { color } from "three/webgpu";
import Button from "../components/Button";
import { useState } from "react";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("karam.tk20@gmail.com");
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20">
      <div className="grid h-full grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 xl:grid-rows-2">
        {/* // First Span */}
        <div className="col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="/assets/grid1.png"
              alt="grid-1"
              className="h-fit w-full object-contain sm:h-[276px]"
            />
            <div>
              <p className="grid-headtext">Hi, I'm Karam</p>
              <p className="grid-subtext">
                With almost 3 years of experience, I have sharpened my skills in
                frontend and backend development, and recently elevated my work
                by incorporating Three.js and 3D web development, adding a layer
                of immersive, interactive experiences that take my projects to
                the next level.
              </p>
            </div>
          </div>
        </div>
        {/* // Second Span */}
        <div className="col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="/assets/grid2.png"
              alt="grid-2"
              className="h-fit w-full object-contain sm:w-[276px]"
            />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in JavaScript/TypeScript with a focus on React and
                Next.js ecosystems.
              </p>
            </div>
          </div>
        </div>
        {/* // Third Span */}
        <div className="col-span-1 xl:row-span-2">
          <div className="grid-container">
            <div className="flex h-fit w-full items-center justify-center rounded-3xl sm:h-[326px]">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  {
                    lat: 34.802074,
                    lng: 38.996815,
                    text: "I'm Here",
                    color: "white",
                    size: 200,
                  },
                ]}
              />
            </div>
            <div>
              <p className="grid-headtext">
                I work remotly across most timezones.
              </p>
              <p className="grid-subtext">
                I'm based in Syria, with remote work available.
              </p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>
        <div className="xl:col-span-2 xl:row-span-2">
          <div className="grid-container">
            <img
              src="/assets/grid3.png"
              alt="grid-3"
              className="h-fit w-full object-contain sm:h-[266px]"
            />
            <div>
              <p className="grid-headtext">My Passion for coding</p>
              <p className="grid-subtext">
                Creating solutions and bringing ideas to life through code is
                what drives me. Coding is more than just my job—it's my true
                passion.
              </p>
            </div>
          </div>
        </div>
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container flex flex-col items-center justify-center">
            <img
              src="/assets/grid4.png"
              alt="grid-4"
              className="h-fit w-full object-cover sm:h-[267] sm:object-top md:h-[126px]"
            />
            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={hasCopied ? "/assets/tick.svg" : "/assets/copy.svg"}
                  alt="copy"
                />
                <p className="text-gray_gradient font-medium text-white md:text-xl lg:text-2xl">
                  karam.tk20@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
