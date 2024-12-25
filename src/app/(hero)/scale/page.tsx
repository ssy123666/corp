import React from 'react';
import Hero from "@/components/hero";
import  scaleSrc from "@/../public/image3.jpg";
import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: "Scale"
}
const Page = () => {
    return (
        <Hero
        imgUrl={scaleSrc}
        altTxt="scale-image"
        content="Scale~~~"
      />
    );
}

export default Page;
