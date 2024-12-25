
import React from 'react';
import Hero from "@/components/hero";
import  reliabilitySrc from "@/../public/image2.jpg";
import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: "Reliability"
}
const Page = () => {
    return (
        <Hero
        imgUrl={reliabilitySrc}
        altTxt="reliability-image"
        content="Reliability~~~"
      />
    );
}

export default Page;
