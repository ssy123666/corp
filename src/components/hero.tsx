import React from "react";
import Image, { StaticImageData } from "next/image";
interface IProps {
  imgUrl: StaticImageData;
  altTxt: string;
  content: string;
}
const Hero = ({ imgUrl, altTxt, content }: IProps) => {
  return (
    <div className="h-screen relative">
      <div className="absolute inset-0 -z-10">
        <Image src={imgUrl} fill alt={altTxt} style={{ objectFit: "cover" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100"></div>
      </div>
      <div className="flex justify-center pt-80">
        <h1 className="text-white text-8xl">{content}</h1>
      </div>
    </div>
  );
};

export default Hero;
