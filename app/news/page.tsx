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
                <h2 className="text-3xl mb-6">Main news</h2>
                <div className="grid gap-8 grid-cols-1 md:grid-cols-2 border-t-2 mb-16 py-6 border-slate-950">
                <figure className="">
                  <Image
                    src={News1}
                    alt='Bridgee avatar'
                    width={100}
                    height={100}
                    quality={100}
                    className="w-full h-auto object-cover"
                  />
                </figure>
                    <div className="text">
                        <span className="italic font-light">30/03/2024</span>
                        <h3 className="font-semibold mt-2 text-[24px]">PASCALE MARTHINE TAYOU 'OXYGEN'</h3>
                        <p className="mt-2 mb-4">Domaine de Chaumont sur Loire</p>
                        <a className="font-light text-[17px]" href="https://domaine-chaumont.fr/fr/centre-d-arts-et-de-nature/saison-d-art-2024/pascale-marthine-tayou">https://domaine-chaumont.fr/fr/centre-d-arts-et-de-nature/saison-d-art-2024/pascale-marthine-tayou</a>
                        <p>30/03/2024 - 27/10/2024</p>
                    </div>
                </div>
                <div className="grid gap-8 grid-cols-1 md:grid-cols-2 border-t-2 pt-6 border-slate-950">
                <figure className="">
                  <Image
                    src={News2}
                    alt='Bridgee avatar'
                    width={100}
                    height={100}
                    quality={100}
                    className="w-full h-auto object-cover"
                  />
                </figure>
                    <div className="text">
                        <span className="italic font-light">30/03/2024</span>
                        <h3 className="font-semibold mt-2 text-[24px]">PASCALE MARTHINE TAYOU 'OXYGEN'</h3>
                        <p className="mt-2 mb-4">Domaine de Chaumont sur Loire</p>
                        <a className="font-light text-[17px]" href="https://domaine-chaumont.fr/fr/centre-d-arts-et-de-nature/saison-d-art-2024/pascale-marthine-tayou">https://domaine-chaumont.fr/fr/centre-d-arts-et-de-nature/saison-d-art-2024/pascale-marthine-tayou</a>
                        <p>30/03/2024 - 27/10/2024</p>
                    </div>
                </div>
        </div>

        <Footer />
        </div>
    );
}

export default News;