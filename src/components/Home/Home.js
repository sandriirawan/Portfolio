import React from "react";
import { Button, Link, Image } from "@nextui-org/react";
import Resume from "../../assets/Icon/Resume";
import { motion } from "framer-motion";

function Home(props) {
  const { data } = props;
  return (
    <div className="flex xl:flex-row md:flex-col lg:flex-row flex-col justify-center items-center w-screen lg:h-screen h-auto lg:px-[15%] px-0 p-0 py-10">
      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        className="lg:w-[50%] md:w-[50%] w-[70%] "
      >
        <Image
          isBlurred
          src="https://res.cloudinary.com/ddn4pon2w/image/upload/v1698158806/rndtjkrumm68gaibunoo.jpg"
          alt="NextUI Album Cover"
          className="lg:w-96"
        />
      </motion.div>
      <motion.div
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        className="lg:w-[50%] mt-5 lg:mt-0 px-5 lg:px-0"
      >
        <div>
          <h1 className="text-white lg:text-4xl text-2xl font-custom lg:w-[50%] md:w-[80%]  ">
            Hi! I Am Sandri Irawan
          </h1>
          <p className="text-white">Fullstack Website & Mobile Developer</p>
          <Link
            href={data.resume}
            className="no-underline text-black"
            target="_blank"
          >
            <Button color="default" className="mt-5 mr-2">
              Resume <Resume />
            </Button>
          </Link>
          <Link
            href={`mailto:${data.email}`}
            className="no-underline text-black"
          >
            <Button color="default" className="mt-5">
              Mail Me
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default Home;
