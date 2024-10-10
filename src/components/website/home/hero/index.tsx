import { Button } from "@/ui";
import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen grid">
      <div className="relative grid items-center pt-[76px] md:pt-[88px]">
        <span className="absolute grid w-full h-full overflow-hidden">
          <Image
            src={"/hero.jpg"}
            fill
            objectFit="cover"
            priority
            alt="Hero Section Background Image"
          />
          <span className="bg-black bg-opacity-50 block absolute top-0 left-0 w-full h-full backdrop-blur-[1px]"></span>
        </span>

        <div className="relative text-center grid gap-5 md:gap-10 max-w-2xl md:max-w-5xl mx-auto px-5 lg:px-10">
          <h1 className="text-white font-semibold text-3xl sm:text-4xl md:text-5xl leading-[40px] md:leading-[55px]">
            Manage Disater. <br className="sm:hidden" />
            Scale On Blockchain. <br className="sm:hidden" /><br className="" /> Build the Society.
          </h1>
          <p className="text-white text-lg sm:text-xl md:text-2xl">
          Fundara is a disaster refund platform on the Arbitrum network, providing fast, transparent, and secure fund distribution through blockchain technology, ensuring efficient relief for affected communities.
          </p>
          <div className="grid grid-cols-2 gap-5 sm:gap-10 mt-5 w-full max-w-lg mx-auto">
            <Button variant="filled-green" className="py-3">
              Connect Wallet
            </Button>
            <Button variant="outlined-white">Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
