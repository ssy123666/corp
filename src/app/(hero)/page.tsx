import Hero from "@/components/hero";
import homeSrc from "@/../public/home.jpeg";
import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: "Home"
}
export default function Home() {
  return (
    <Hero
      imgUrl={homeSrc}
      altTxt="home-image"
      content="Welcome to our website"
    />
  );
}
