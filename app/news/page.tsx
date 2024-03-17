import Navbar from '@/components/navbar';
import React from 'react';

import Image from 'next/image';

import News1 from "@/app/assets/news1.jpg";
import News2 from "@/app/assets/news2.jpg";
import News3 from "@/app/assets/news3.jpg";
import News4 from "@/app/assets/news4.jpg";
import Footer from '@/components/footer';



const News: React.FC = () => {

    return (
        <div id="news">
        <Navbar />
            <div className="px-4 py-10 md:px-8 lg:px-32 xl:px-52">
                <h2 className="text-3xl mb-6">Principais notícias</h2>
                <div className="grid gap-8 grid-cols-1 md:grid-cols-2 border-t-2 mb-16 py-6 border-slate-950">
                <figure className="">
              <img className="w-full h-auto embla__slide__img embla__parallax__img" src="https://i.ibb.co/NtxBbHr/news3.jpg" alt="" />
                    </figure>
                    <div className="text">
                        <span className="italic font-light">30/03/2024</span>
                        <h3 className="font-semibold mt-2 text-[24px]">Sebastião Coana – uma marca sonante da revolução artística em Moçambique - Bantumen</h3>
                        <p className="mt-2 mb-4">Publicado por BANTUMEN</p>
                        <a className="font-light text-[17px] text-blue-600 hover:underline" href="https://bantumen.com/marcas_por_escrever/sebastiao-coana-uma-marca-sonante-da-revolucao-artistica-em-mocambique/">https://bantumen.com/marcas_por_escrever/sebastiao-coana-uma-marca-sonante-da-revolucao-artistica-em-mocambique/</a>
                        {/* <p>30/03/2024 - 27/10/2024</p> */}
                    </div>
                </div>
                <div className="grid gap-8 grid-cols-1 md:grid-cols-2 border-t-2 mb-16 pt-6 border-slate-950">
                <figure className="">
              <img className="w-full h-auto embla__slide__img embla__parallax__img" src="https://i.ibb.co/XWgMhkS/news2.jpg" alt="" />
                </figure>
                    <div className="text">
                        <span className="italic font-light">30/03/2024</span>
                        <h3 className="font-semibold mt-2 text-[24px]">Sebastião Coana condecorado na França - Jornal Notícias</h3>
                        <p className="mt-2 mb-4">Publicado por Jornal Notícias</p>
                        <a className="font-light text-[17px] text-blue-600 hover:underline" href="https://domaine-chaumont.fr/fr/centre-d-arts-et-de-nature/saison-d-art-2024/pascale-marthine-tayou">https://domaine-chaumont.fr/fr/centre-d-arts-et-de-nature/saison-d-art-2024/pascale-marthine-tayou</a>
                        {/* <p>30/03/2024 - 27/10/2024</p> */}
                    </div>
                </div>
                <div className="grid gap-8 grid-cols-1 md:grid-cols-2 border-t-2 pt-6 border-slate-950">
                <figure className="">
                  <img className="w-full h-auto embla__slide__img embla__parallax__img" src="https://i.ibb.co/QvdTCHd/paint4.jpg" alt="" />
                </figure>
                    <div className="text">
                        <span className="italic font-light">30/03/2024</span>
                        <h3 className="font-semibold mt-2 text-[24px]">Fala África: A estreia de Sebastião Coana na Europa - VOA Português</h3>
                        <p className="mt-2 mb-4">Publicado por VOA Português</p>
                        <a className="font-light text-[17px] text-blue-600 hover:underline" href="https://www.voaportugues.com/a/fala-%C3%A1frica-a-estreia-de-sebasti%C3%A3o-coana-na-europa/7290605.html">https://www.voaportugues.com/a/fala-%C3%A1frica-a-estreia-de-sebasti%C3%A3o-coana-na-europa/7290605.html</a>
                        {/* <p>30/03/2024 - 27/10/2024</p> */}
                    </div>
                </div>
        </div>

        <Footer />
        </div>
    );
}

export default News;