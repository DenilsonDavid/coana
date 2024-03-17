import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import Image from "next/image"

const Exhibitions = () => {

    return (
        <div id="exhibitions">
            <Navbar />
            <div className="px-4 py-10 md:px-8 lg:px-32 xl:px-52">
                <h2 className="text-4xl mb-6">Exhibitions</h2>
                <div className="grid gap-8  mb-16 py-6">
                    <div className="text">
                        <span className="italic font-light">30/03/2024</span>
                        <h3 className="font-semibold mt-2 text-[24px]">ADEL ABDESSEMED!</h3>
                        <p className="mt-2 mb-4">'Jam Proximus Ardet, la dernière vidéo'</p>
                        {/* <a className="font-light text-[17px] text-blue-600 hover:underline" href="https://bantumen.com/marcas_por_escrever/sebastiao-coana-uma-marca-sonante-da-revolucao-artistica-em-mocambique/">https://bantumen.com/marcas_por_escrever/sebastiao-coana-uma-marca-sonante-da-revolucao-artistica-em-mocambique/</a> */}
                        <p>30/03/2024 - 27/10/2024</p>
                    </div>
                    <div className="col-span-2">
                  <Image
                    src="https://i.ibb.co/NtxBbHr/news3.jpg"
                    alt='Bridgee avatar'
                    width={100}
                    height={100}
                    quality={100}
                    className="w-full h-auto object-cover"
                  />
                </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Exhibitions
