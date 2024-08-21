
import Navbar1 from "@/components/Navbar1";
import Navbar2 from "@/components/Navbar2";
import { Carousel } from "flowbite-react";

export default function Home() {
  return (
    <>
    <div>
      <Navbar1/>
      <Navbar2/>
    </div>
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
    <Carousel>
      <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="Texto alternativo" />
      <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="Texto alternativo" />
      <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="Texto alternativo" />
      <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="Texto alternativo" />
      <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="Texto alternativo" />
    </Carousel>
  </div>
  </>
  );
}
