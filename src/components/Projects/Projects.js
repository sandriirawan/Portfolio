import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  Button,
  Link,
} from "@nextui-org/react";
import { Fade } from "react-reveal";

function Projects(props) {
  const { projects } = props;

  return (
    <div className="w-screen lg:py-0 lg:h-screen h-auto flex flex-col justify-center items-center py-10">
      <h1 className="text-white text-center lg:text-4xl text-2xl font-custom pb-5">
        My Project
      </h1>
      <div className="flex flex-wrap justify-center items-center lg:w-[50%] w-screen">
        {projects.map((item, index) => (
          <Fade key={index}>
            <Card className="m-4 lg:w-64 w-60 bg-gray-100">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-center ">
                <h4 className="text-large font-custom">{item.project_name}</h4>
              </CardHeader>
              <CardBody className="overflow-visible py-2 items-center ">
                <Image
                  isZoomed
                  alt={item.project_name}
                  className="object-cover rounded-xl "
                  src={item.image}
                  width={350}
                />
                <div className="py-3 space-x-3">
                  <Link href={item.repository} target="_blank">
                    <Button color="default">
                      <div className="font-custom">Github</div>
                    </Button>
                  </Link>
                  {index === 3 ? (
                    <Link href={item.demo} target="_blank">
                      <Button color="default">
                        <div className="font-custom">Download</div>
                      </Button>
                    </Link>
                  ) : (
                    <Link href={item.demo} target="_blank">
                      <Button color="default">
                        <div className="font-custom">Visit</div>
                      </Button>
                    </Link>
                  )}
                </div>
              </CardBody>
            </Card>
          </Fade>
        ))}
      </div>
    </div>
  );
}

export default Projects;
