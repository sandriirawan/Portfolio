import React from "react";
import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@nextui-org/react";

function UserCard() {
  return (
    <Card shadow="none" className="max-w-[300px] border-none bg-transparent">
      <CardHeader className="justify-between">
        <div className="flex gap-3">
          <Avatar
            isBordered
            radius="full"
            size="md"
            src="https://res.cloudinary.com/ddn4pon2w/image/upload/v1698158806/rndtjkrumm68gaibunoo.jpg"
          />
          <div className="flex flex-col items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">
              Sandri Irawan
            </h4>
            <h5 className="text-small tracking-tight text-default-500">
              @sandriirawann
            </h5>
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-3 py-0">
        <p className="text-small pl-px text-default-500">
          Hi! I Am Sandri Irawan, Fullstack Website & Mobile Developer
        </p>
      </CardBody>
      <CardFooter className="gap-3"></CardFooter>
    </Card>
  );
}

export default UserCard;
