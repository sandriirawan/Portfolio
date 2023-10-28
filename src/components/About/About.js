import { Image } from "@nextui-org/react";
import React from "react";
import { Fade } from "react-reveal";

function About(props) {
  const { skills } = props;

  return (
    <div className="flex flex-col justify-center items-center lg:h-screen h-auto lg:px-[15%] px-[5%]">
      <h1 className="text-white text-center lg:text-4xl text-2xl font-custom pb-5">
        About
      </h1>
      <Fade bottom>
        <h1 className="text-white text-center">
          I am a Full Stack Developer who has a passion for programming skills.
          I have experience in JavaScript to develop Web and Mobile apps,
          especially in Android Platform. I have some programming skills, such
          as React Native, ReactJs, and NodeJs. I am a person who always wants
          to learn and grow. I am also an adaptive and collaborative person in a
          team.
        </h1>
      </Fade>
      <div className="mt-10">
        <h1 className="text-white text-center lg:text-4xl text-2xl font-custom py-5">
          Skills
        </h1>
        <div className="flex flex-wrap space-x-7 justify-center">
          {skills.map((item, index) => (
            <Fade key={index} bottom>
              <Image
                width={100}
                height={50}
                alt={item.Skill}
                src={item.image}
                className="py-3"
              />
            </Fade>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
