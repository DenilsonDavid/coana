"use client"

import Navbar from "@/components/navbar"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

import Future1 from "@/app/assets/feature_1.jpg"
import Future2 from "@/app/assets/feature_2.jpg"
import Future3 from "@/app/assets/feature_3.jpg"
import Image from "next/image";

import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import sliderData from "@/lib/sliderData";


const Crafting = () => {

    // const [emblaRef, emblaApi] = useEmblaCarousel()
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

    return (
        <div id="artworks">
            <Navbar />
            <div className="px-4 py-10 h-96 md:px-8 lg:px-32 xl:px-52">
            <div className="embla relative max-w-full lg:max-w-[100%]">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
        {sliderData?.map((item) => {
          return (
            <div className="embla__slide relative pl-0 lg:pl-4" key={item.id}>
                <div className="embla__parallax">
                <div className="embla__parallax__layer">
              <img className="w-full h-full embla__slide__img embla__parallax__img" src={item.url} alt="" />
              </div>
              </div>
              <h1 className="absolute top-1/4 left-1/2 w-full md:w-auto transform -translate-x-1/2 translate-y-[3rem] md:translate-y-[9rem]  lg:translate-y-48 bg-slate-950 py-2 lg:py-4 px-2 lg:px-8 text-xl lg:text-2xl text-white font-extrabold">
                {item.title}
              </h1>
            </div>
          );
        })}
        </div>
      </div>
      <div className="embla__buttons w-full px-20 flex justify-between">
      <button className="embla__prev embla__button bg-slate-950 text-white py-2 px-8 shadow-xl hidden lg:flex items-center justify-center" onClick={scrollPrev}>
        Prev
      </button>
      <button className="embla__prev embla__button bg-slate-950 text-white py-2 px-8 shadow-xl hidden lg:flex items-center justify-center" onClick={scrollNext}>
        Next
      </button>
      </div>
    </div>
        </div>
        </div>
    )
}

export default Crafting
