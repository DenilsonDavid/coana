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

import "./artworks.css"
import Footer from "@/components/footer"

const Artworks = () => {


    const paintsData = [
        {
          id: 1,
          title: "Serene Nature Scene with Sunlight Streaming Through Trees",
          url: "https://i.ibb.co/s2V4JMg/paint8.jpg",
          color: "red",
        },
        {
          id: 2,
          title: "Tranquil Beach with Gentle Waves and Clear Blue Sky",
          url: "https://i.ibb.co/1dFYdNJ/paint7.jpg",
          color: "green",
        },
        {
          id: 3,
          title: "Lush Forest Scene with Rays of Sunlight Peeking Through",
          url: "https://i.ibb.co/gmBqmpf/paint1.jpg",
          color: "blue",
        },
        {
          id: 4,
          title: "Elegant Woman in City Setting with a Chic Attitude",
          url: "https://i.ibb.co/tCWLLm0/paint6.jpg",
          color: "orange",
        },
        {
          id: 5,
          title: "Majestic Tree in Vibrant Autumn Colors",
          url: "https://i.ibb.co/2tpF7BH/paint3.jpg",
          color: "violet",
        },
        {
          id: 6,
          title: "Majestic Tree in Vibrant Autumn Colors",
          url: "https://i.ibb.co/0KD2DjF/paint9.jpg",
          color: "yellow",
        },
      ];

      const muraisData = [
        {
          id: 1,
          title: "Serene Nature Scene with Sunlight Streaming Through Trees",
          url: "https://i.ibb.co/4Nbk50n/mural7.jpg",
          color: "red",
        },
        {
          id: 2,
          title: "Tranquil Beach with Gentle Waves and Clear Blue Sky",
          url: "https://i.ibb.co/yVfHpsv/mural8.jpg",
          color: "green",
        },
        {
          id: 3,
          title: "Lush Forest Scene with Rays of Sunlight Peeking Through",
          url: "https://i.ibb.co/QrHTJqK/mural5.jpg",
          color: "blue",
        },
      ]


    return (
        <div id="artworks">
            <Navbar />
            <div className="px-4 py-10 md:px-8 lg:px-32 xl:px-52">
                <h2 className="text-4xl mb-6">Artworks</h2>
                <Tabs defaultValue="paints" className="w-full mt-10 px-0 border-none">
            <TabsList className="w-full flex justify-start mb-4 triggersList">
                <TabsTrigger value="paints" className="w-fit px-8 border-b-2 border-transparent">Pinturas</TabsTrigger>
                <TabsTrigger value="murais" className="w-fit px-8 border-b-2 border-transparent">Murais</TabsTrigger>
            </TabsList>
            <TabsContent value="paints">
            {/* <h2 className="text-4xl mt-14">Future</h2> */}
            
        <div className="mt-8 mb-24 grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-0 border-slate-950">
        
        {paintsData?.map((item) => {
          return (
            <div className="pb-8 md:pr-5" 
            key={item.id}>
            <h5 className={`text-${item.color}-600 border-${item.color}-600 viewTitle text-[17px] border-b-2`}></h5>
            <figure className="mt-3">
                  
              <img className="w-full h-auto md:h-[250px] lg:h-[200px] embla__slide__img embla__parallax__img" src={item.url} alt="" />
                </figure>
                <h2 className="card-title p-0 mt-3">{item.title}</h2>
                  <p className="font-light">'Neither Nor'</p>
                  <span className="font-light text-[13px]">13/04/2024 - 15/09/2024</span>
          </div>
          );
        })}
        </div>
            </TabsContent>

            <TabsContent value="murais">
            <div className="mt-8 mb-24 grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-0 border-slate-950">
            {muraisData?.map((item) => {
          return (
            <div className="pb-8 md:pr-5" 
            key={item.id}>
            <h5 className={`text-${item.color}-600 border-${item.color}-600 viewTitle text-[17px] border-b-2`}></h5>
            <figure className="mt-3">
                  {/* <Image
                    src={item.url}
                    alt='Bridgee avatar'
                    width={100}
                    height={100}
                    quality={100}
                    className="w-full h-auto md:h-[200px] lg:h-[180px] object-cover"
                  /> */}
                  
              <img className="w-full h-auto md:h-[250px] lg:h-[200px] embla__slide__img embla__parallax__img" src={item.url} alt="" />
                </figure>
                <h2 className="card-title p-0 mt-3">{item.title}</h2>
                  <p className="font-light">'Neither Nor'</p>
                  <span className="font-light text-[13px]">13/04/2024 - 15/09/2024</span>
          </div>
          );
        })}
        </div>
            </TabsContent>
        </Tabs>
            </div>
            <Footer />
        </div>
    )
}

export default Artworks
