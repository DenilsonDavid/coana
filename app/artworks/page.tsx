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

const Artworks = () => {
    return (
        <div id="artworks">
            <Navbar />
            <div className="px-4 py-10 md:px-8 lg:px-32 xl:px-52">
                <h2 className="text-3xl mb-6">Artworks</h2>
                <Tabs defaultValue="paints" className="w-full mt-10 px-0 border-none">
            <TabsList className="w-full flex justify-start mb-4 triggersList">
                <TabsTrigger value="paints" className="w-fit px-8 border-b-2 border-transparent">Pinturas</TabsTrigger>
                <TabsTrigger value="murais" className="w-fit px-8 border-b-2 border-transparent">Murais</TabsTrigger>
            </TabsList>
            <TabsContent value="paints">
            {/* <h2 className="text-4xl mt-14">Future</h2> */}
        <div className="mt-8 mb-24 grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-0 border-slate-950">
        <div className="pb-8 md:pr-5">
            <h5 className="viewTitle text-[17px] text-red-600 border-b-2 border-red-600"></h5>
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
            <h5 className="viewTitle text-[17px] text-yellow-600 border-b-2 border-yellow-600"></h5>
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
            <h5 className="viewTitle text-[17px] text-purple-600 border-b-2 border-purple-600"></h5>
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
            </TabsContent>
            <TabsContent value="murais">
            <div className="mt-8 mb-24 grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-0 border-slate-950">
        <div className="pb-8 md:pr-5">
            <h5 className="viewTitle text-[17px] text-red-600 border-b-2 border-red-600"></h5>
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
            <h5 className="viewTitle text-[17px] text-yellow-600 border-b-2 border-yellow-600"></h5>
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
            <h5 className="viewTitle text-[17px] text-purple-600 border-b-2 border-purple-600"></h5>
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
            </TabsContent>
        </Tabs>
            </div>
        </div>
    )
}

export default Artworks
