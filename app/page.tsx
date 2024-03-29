"use client"

import Navbar from "@/components/navbar";

import Image from "next/image";
import OnView1 from "@/app/assets/ADEL_ABDESSEMED-Jam_Proximus_Ardet_JPdc.jpg"
import OnView2 from "@/app/assets/ALEJANDRO_CAMPINS_Sucedaneos_Hafid_Lhachmi_7.jpg"
import OnView3 from "@/app/assets/MICHELANGELO_PISTOLETTO-60-ans-d-identites-et-d-alterites-2.jpg"
import OnView4 from "@/app/assets/MOATAZ-NASR_BOTTLE-NECK_HAS09790.jpg"
import OnView5 from "@/app/assets/MICHELANGELO_PISTOLETTO-Terzo_Paradiso_SP_JC231128_65376.jpg"
import OnView6 from "@/app/assets/Carlos_Cruz-Diez_2018_05dfb.jpg"
import Future1 from "@/app/assets/feature_1.jpg"
import Future2 from "@/app/assets/feature_2.jpg"
import Future3 from "@/app/assets/feature_3.jpg"
import Special1 from "@/app/assets/special_1.jpg"
import Special2 from "@/app/assets/special_2.jpg"
import Special3 from "@/app/assets/special_3.jpg"
import Subscribe from "@/components/subscribe";
import Footer from "@/components/footer";


import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import sliderData from "@/lib/sliderData";
import Link from "next/link";

export default function Home() {


  // const [emblaRef, emblaApi] = useEmblaCarousel()
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 6500 })])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])


  return (
    <div id="app" className="bg-white flex flex-col items-center">
      <Navbar />


      <div className="embla relative max-w-full lg:max-w-[100%]">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
        {sliderData?.map((item) => {
          return (
            <div className="embla__slide relative pl-0 lg:pl-4" key={item.id}>
            <div className="overlay absolute top-0 w-full z-10"></div>
                <div className="embla__parallax">
                <div className="embla__parallax__layer">
              <img className="w-full h-full embla__slide__img embla__parallax__img" src={item.url} alt="" />
              </div>
              </div>
              {/* <h1 className="absolute top-1/4 left-1/2 w-full md:w-auto transform -translate-x-1/2 translate-y-[3rem] md:translate-y-[9rem]  lg:translate-y-48 bg-red-600  py-2 lg:py-4 px-2 lg:px-8 text-xl lg:text-2xl text-white font-extrabold">
                {item.title}
              </h1> */}
              <div className="text_effect effect"></div> 
                <div className="effect reveal_text z-20"> 
                  {/* <span>into amazing experiences</span> */}
                  <div className="overflow-hidden absolute top-1/4 left-1/2 w-auto transform -translate-x-1/2 translate-y-[3rem] md:translate-y-[9rem] lg:translate-y-48 bg-white mx-2 px-2 py-2 lg:py-4 lg:px-8 text-xl lg:text-2xl text-slate-800 font-extrabold shadow-lg shadow-slate-950">
                  <span className="max-w-[80%] flex flex-wrap">{item.title}</span>
                  </div>
                  {/* <h1 className="absolute top-1/4 left-1/2 w-full md:w-auto transform -translate-x-1/2 translate-y-[3rem] md:translate-y-[9rem] lg:translate-y-48 bg-white  py-2 lg:py-4 lg:px-8 text-xl lg:text-2xl text-slate-800 font-extrabold shadow-lg shadow-slate-950">
                <span>{item.title}</span>
              </h1> */}
                </div>
            </div>
          );
        })}
        </div>
      </div>
      <div className="embla__buttons w-full px-20 flex justify-between">
      <button className="embla__prev embla__button rounded-full p-4 w-[50px] h-[50px] bg-white text-slate-800 shadow-lg shadow-slate-950 hidden lg:flex items-center justify-center" onClick={scrollPrev}>
      <i className="ri-arrow-left-s-line text-[26px]"></i>
      </button>
      <button className="embla__prev embla__button rounded-full p-4 w-[50px] h-[50px] bg-white text-slate-800 shadow-lg shadow-slate-950 hidden lg:flex items-center justify-center" onClick={scrollNext}>
      <i className="ri-arrow-right-s-line text-[26px]"></i>
      </button>
      </div>
    </div>

      <section className="container mt-16 px-4 xl:px-20 border-none border-blue-800">
        <h2 className="text-4xl">Em Exibição</h2>

        <div className="mt-8 grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 border-0 border-slate-950">
        <div className="pb-8 md:pr-5">
            <h5 className="text-[17px] text-red-600 border-b-2 border-red-600">SAN GIMIGNANO</h5>
            <figure className="mt-3">
                  <Image
                    src={OnView1}
                    alt='Bridgee avatar'
                    width={100}
                    height={100}
                    quality={100}
                    className="w-full h-auto md:h-[200px] lg:h-[180px] object-cover"
                  />
                </figure>
                <Link href="/exhibitions"><h2 className="card-title p-0 mt-3">ADEL ABDESSEMED!</h2></Link>
                  <p className="font-light">'Jam Proximus Ardet, la dernière vidéo'</p>
                  <span className="font-light text-[13px]">20/01/2024 - 31/03/2024</span>
          </div>
          <div className="pb-8 md:pr-5">
            <h5 className="viewTitle text-[17px] text-yellow-600 border-b-2 border-yellow-600">BEIJING</h5>
            <figure className="mt-3">
                  <Image
                    src={OnView2}
                    alt='Bridgee avatar'
                    width={100}
                    height={100}
                    quality={100}
                    className="w-full h-auto md:h-[200px] lg:h-[180px] object-cover"
                  />
                </figure>
                  <h2 className="card-title p-0 mt-3">SUSANA PILAR</h2>
                  <p className="font-light">'Empatía'</p>
                  <span className="font-light text-[13px]">20/01/2024 - 31/03/2024</span>
          </div>
          <div className="pb-8 md:pr-5">
            <h5 className="viewTitle text-[17px] text-green-600 border-b-2 border-green-600">LES MOULINS</h5>
            <figure className="mt-3">
                  <Image
                    src={OnView3}
                    alt='Bridgee avatar'
                    width={100}
                    height={100}
                    quality={100}
                    className="w-full h-auto md:h-[200px] lg:h-[180px] object-cover"
                  />
                </figure>
                  <h2 className="card-title p-0 mt-3">MICHELANGELO PISTOLETTO</h2>
                  <p className="font-light">'QR Code Possession'</p>
                  <span className="font-light text-[13px]">15/11/2023 - 14/04/2024</span>
          </div>
          <div className="pb-8 md:pr-5">
            <h5 className="viewTitle text-[17px] text-violet-600 border-b-2 border-violet-600">HABANA</h5>
            <figure className="mt-3">
                  <Image
                    src={Future1}
                    alt='Bridgee avatar'
                    width={100}
                    height={100}
                    quality={100}
                    className="w-full h-auto md:h-[200px] lg:h-[180px] object-cover"
                  />
                </figure>
                  <h2 className="card-title p-0 mt-3">JULIO LE PARC</h2>
                  <p className="font-light">'Aurora'</p>
                  <span className="font-light text-[13px]">17/09/2023 - 28/04/2024</span>
          </div>
          <div className="pb-8 md:pr-5">
            <h5 className="viewTitle text-[17px] text-blue-600 border-b-2 border-blue-600">ROMA</h5>
            <figure className="mt-3">
                  <Image
                    src={OnView5}
                    alt='Bridgee avatar'
                    width={100}
                    height={100}
                    quality={100}
                    className="w-full h-auto md:h-[200px] lg:h-[180px] object-cover"
                  />
                </figure>
                  <h2 className="card-title p-0 mt-3">'THE ABILITY TO DREAM'</h2>
                  <p className="font-light">Adel Abdessemed - Kader Attia - Yoan Capote - Loris Cecchini - Carlos Cruz-Diez - Berlinde De Bruyckere - Leandro Erlich - Subodh Gupta - Zhanna Kadyrova - Hans Op de Beeck - Ana Maria Tavares - Pascale Marthine Tayou - Armando Testa</p>
                  <span className="font-light text-[13px]">17/09/2023 - 28/04/2024</span>
          </div>
        </div>

        <h2 className="text-4xl mt-14">Em Breve</h2>
        <div className="mt-8 mb-24 grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 border-0 border-slate-950">
        <div className="pb-8 md:pr-5">
            <h5 className="viewTitle text-[17px] text-red-600 border-b-2 border-red-600">SAN GIMIGNANO</h5>
            <figure className="mt-3">
                  <Image
                    src={Future1}
                    alt='Bridgee avatar'
                    width={100}
                    height={100}
                    quality={100}
                    className="w-full h-auto md:h-[200px] lg:h-[180px] object-cover"
                  />
                </figure>
                <h2 className="card-title p-0 mt-3">AI WEIWEI</h2>
                  <p className="font-light">'Neither Nor'</p>
                  <span className="font-light text-[13px]">13/04/2024 - 15/09/2024</span>
          </div>
          <div className="pb-8 md:pr-5">
            <h5 className="viewTitle text-[17px] text-yellow-600 border-b-2 border-yellow-600">BEIJING</h5>
            <figure className="mt-3">
                  <Image
                    src={Future2}
                    alt='Bridgee avatar'
                    width={100}
                    height={100}
                    quality={100}
                    className="w-full h-auto md:h-[200px] lg:h-[180px] object-cover"
                  />
                </figure>
                  <h2 className="card-title p-0 mt-3">SERSE</h2>
                  <p className="font-light">'Breadth and Vastness of Pure Vision'</p>
                  <span className="font-light text-[13px]">23/03/2024 -</span>
          </div>
          <div className="pb-8 md:pr-5">
            <h5 className="viewTitle text-[17px] text-purple-600 border-b-2 border-purple-600">PARIS</h5>
            <figure className="mt-3">
                  <Image
                    src={Future3}
                    alt='Bridgee avatar'
                    width={100}
                    height={100}
                    quality={100}
                    className="w-full h-auto md:h-[200px] lg:h-[180px] object-cover"
                  />
                </figure>
                  <h2 className="card-title p-0 mt-3">CARLOS CRUZ-DIEZ</h2>
                  <p className="font-light">'L’Euphorie de la couleur'</p>
                  <span className="font-light text-[13px]">02/04/2024 - 28/05/2024</span>
          </div>
        </div>



        <h2 className="text-4xl mt-14">Projetos Especiais</h2>
            <h5 className="mt-8 w-auto text-[17px] text-gray-950 border-b-2 border-slate-950">PROJECTOS ESPECIAIS</h5>
        <div className="mb-24 grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 border-0 border-slate-950">
        <div className="pb-8 md:pr-5">
            <figure className="mt-3">
                  <Image
                    src={Special1}
                    alt='Bridgee avatar'
                    width={100}
                    height={100}
                    quality={100}
                    className="w-full h-auto md:h-[200px] lg:h-[180px] object-cover"
                  />
                </figure>
                <h2 className="card-title p-0 mt-3">ADEL ABDESSEMED!</h2>
                  <p className="font-light">'Jam Proximus Ardet, la dernière vidéo'</p>
                  <span className="font-light text-[13px]">20/01/2024 - 31/03/2024</span>
          </div>
          <div className="pb-8 md:pr-5">
            <figure className="mt-3">
                  <Image
                    src={Special2}
                    alt='Bridgee avatar'
                    width={100}
                    height={100}
                    quality={100}
                    className="w-full h-auto md:h-[200px] lg:h-[180px] object-cover"
                  />
                </figure>
                  <h2 className="card-title p-0 mt-3">SUSANA PILAR</h2>
                  <p className="font-light">'Empatía'</p>
                  <span className="font-light text-[13px]">20/01/2024 - 31/03/2024</span>
          </div>
          <div className="pb-8 md:pr-5">
            <figure className="mt-3">
                  <Image
                    src={Special3}
                    alt='Bridgee avatar'
                    width={100}
                    height={100}
                    quality={100}
                    className="w-full h-auto md:h-[200px] lg:h-[180px] object-cover"
                  />
                </figure>
                  <h2 className="card-title p-0 mt-3">SERSE</h2>
                  <p className="font-light">'Breadth and Vastness of Pure Vision'</p>
                  <span className="font-light text-[13px]">23/03/2024 -</span>
          </div>
        </div>

        
        <h2 className="text-4xl mt-4 w-full">Visite as Obras</h2>
        <div className="locations mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-0 border-slate-950">
          <div className="md:border-r border-slate-300 pb-20 md:pr-5">
            <h4 className="pt-8 border-t-[6px] border-t-red-600 text-[22px] font-medium">SAN GIMIGNANO</h4>
            <ul className="mt-4 font-light">
              <li>Via del Castello 11</li>
              <li>53037 San Gimignano (SI)</li>
              <li><a href="tel:+390577943134">Tel. +39 0577 943134</a></li>
              <li><a href="mailto:sangimignano@galleriacontinua.com">sangimignano@galleriacontinua.com</a></li>
            </ul>
            <p className="font-light mt-7 text-[14px]">O espaço da Galleria Continua em San Gimignano funciona de segunda a domingo, das 10h às 13h e das 14h às 19h. Fechado nos feriados nacionais e no dia 31 de janeiro. É possível agendar a sua visita envie-nos um e-mail para sangimignano@galleriacontinua.com ou marque através do formulário selecionando 'agendar a sua visita'.</p>
          </div>
          <div className="lg:border-r border-slate-300 pb-20 md:px-5">
            <h4 className="pt-8 text-[22px] font-medium border-t-[6px] border-t-green-600">BEIJING</h4>
            <ul className="mt-4 font-light">
              <li>Via del Castello 11</li>
              <li>53037 San Gimignano (SI)</li>
              <li><a href="tel:+390577943134">Tel. +39 0577 943134</a></li>
              <li><a href="mailto:sangimignano@galleriacontinua.com">sangimignano@galleriacontinua.com</a></li>
            </ul>
            <p className="font-light mt-7 text-[14px]">O espaço da Galleria Continua em San Gimignano funciona de segunda a domingo, das 10h às 13h e das 14h às 19h. Fechado nos feriados nacionais e no dia 31 de janeiro. É possível agendar a sua visita envie-nos um e-mail para sangimignano@galleriacontinua.com ou marque através do formulário selecionando 'agendar a sua visita'.</p>
          </div>
          <div className="md:border-r border-slate-300 lg:border-none pb-20 md:pr-5 lg:pl-5">
            <h4 className="pt-8 text-[22px] font-medium border-t-[6px] border-t-blue-600">LES MOULINS</h4>
            <ul className="mt-4 font-light">
              <li>Via del Castello 11</li>
              <li>53037 San Gimignano (SI)</li>
              <li><a href="tel:+390577943134">Tel. +39 0577 943134</a></li>
              <li><a href="mailto:sangimignano@galleriacontinua.com">sangimignano@galleriacontinua.com</a></li>
            </ul>
            <p className="font-light mt-7 text-[14px]">O espaço da Galleria Continua em San Gimignano funciona de segunda a domingo, das 10h às 13h e das 14h às 19h. Fechado nos feriados nacionais e no dia 31 de janeiro. É possível agendar a sua visita envie-nos um e-mail para sangimignano@galleriacontinua.com ou marque através do formulário selecionando 'agendar a sua visita'.</p>
          </div>
        </div>
      </section>
      <Subscribe />
      <Footer />
    </div>
  );
}
