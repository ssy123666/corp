import React from 'react';
import Hero from "@/components/hero";
import performanceSrc from "@/../public/image1.webp";
import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: "Performance"
}
const Page = () => {
    return (
        <Hero
        imgUrl={performanceSrc}
        altTxt="performance-image"
        content="Performance~~~"
      />
    );
}

export default Page;
