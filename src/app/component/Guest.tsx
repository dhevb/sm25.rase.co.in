import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

interface GuestProps {
  name: string;
  designation: string;
  tracks: string;
  imageSrc: string;
}

const Guest: React.FC<GuestProps> = ({ name, designation, tracks, imageSrc }) => {
  return (
    <Card className="py-4 border border-red-800 rounded-xl max-w-sm mx-auto">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold text-black">{name}</p>
      </CardHeader>
      <CardBody className="flex flex-col py-2 items-center">
        <Image
          alt="Guest"
          className="object-cover rounded-xl mb-2"
          src={imageSrc}
          width={270}
          height={270}
          style={{ width: '270px', height: '290px', objectFit: 'cover' }}
        />
        <div className="w-full px-4">
          <div className="flex justify-between w-full mb-1">
            <small className="text-black">{tracks}</small>
          </div>
          <h4 className="font-bold text-large text-black">{designation}</h4>
        </div>
      </CardBody>
    </Card>
  );
};

export default Guest;
