"use client";

import { OSS_PRODUCTS, PRODUCTS } from "@/configurations/products";
import { Player } from "@lottiefiles/react-lottie-player";

export default function Home() {
  return (
    <div className="flex flex-col pt-12 mx-8 font-mono">
      <section className="flex container mx-auto items-center w-full pt-12 md:pt-24">
        <div className="xl:w-1/2">
          <h1 className="uppercase text-4xl md:text-8xl mb-4">
            Boost Your <br /> Productivity
          </h1>
          <div className="text-lg md:text-2xl">
            Empower you to eliminate distractions, streamline processes, and
            focus on what matters, so you can reach your goals efficiently.
          </div>
        </div>
        <div className="xl:w-1/2 hidden xl:flex justify-center">
          <div className="aspect-square h-[512px] overflow-hidden">
            <Player
              src="https://lottie.host/4d0e3471-e1f3-4967-9e5b-bbfda32ebbce/NlDC16H651.json"
              background="transparent"
              loop
              autoplay
              style={{ height: "624px", width: "624px", margin: "-56px" }}
            />
          </div>
        </div>
      </section>

      <section className="mt-16 mb-8 container mx-auto">
        <h2 className="text-3xl md:text-5xl mb-8">Open Source Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-16">
          {OSS_PRODUCTS.map((w) => (
            <div
              className="flex flex-col gap-y-3 md:gap-y-2"
              key={w.repository}
            >
              <div className="text-xl md:text-3xl whitespace-nowrap overflow-hidden text-ellipsis">
                {w.title}
              </div>
              <div className="text-sm md:text-base">{w.description}</div>
              <div className="text-sm md:text-base">
                <a
                  href={w.repository}
                  className="dark:text-sky-300 text-sky-600"
                  target="_blank"
                >
                  GitHub Repository
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 mb-8 container mx-auto">
        <h2 className="text-3xl md:text-5xl mb-8">Other Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-16">
          {PRODUCTS.map((w) => (
            <div className="flex flex-col gap-y-3 md:gap-y-2" key={w.url}>
              <div className="text-xl md:text-3xl whitespace-nowrap overflow-hidden text-ellipsis">
                {w.title}
              </div>
              <div className="text-sm md:text-base">{w.description}</div>
              <div className="text-sm md:text-base">
                <a
                  href={w.url}
                  className="dark:text-sky-300 text-sky-600"
                  target="_blank"
                >
                  Website
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 mb-8 container mx-auto">
        <h2 className="text-3xl md:text-5xl mb-8">Contact</h2>
        <p>
          Please feel free to inquire about requests for your productivity
          improvements. If you agree to open the source code after a certain
          period of time after delivery, we will work it so free of charge.
        </p>

        <ul className="my-4">
          <li>
            X:{" "}
            <a
              href="https://twitter.com/6jz"
              target="_blank"
              className="dark:text-sky-300 text-sky-600"
            >
              @6jz
            </a>
          </li>
          <li>Discord: natsuneko</li>
        </ul>
      </section>
    </div>
  );
}
