import Navbar from '@/components/navbar';
import React from 'react';

import Image from 'next/image';

import News1 from "@/app/assets/news1.jpg";
import News2 from "@/app/assets/news2.jpg";
import News3 from "@/app/assets/news3.jpg";
import News4 from "@/app/assets/news4.jpg";
import Footer from '@/components/footer';



const About: React.FC = () => {

    return (
        <div id="news">
            <Navbar />
            <div className="px-4 py-10 md:px-8 lg:px-32 xl:px-52">
                {/* <h2 className="text-3xl mb-6">Main news</h2> */}
                <div className="grid gap-8 grid-cols-1 md:grid-cols-2 mb-16 py-6 border-t-2 border-red-500">
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
                        <p className="font-light">Sebastião Coana nascido em 1987 é um artista contemporâneo moçambicano conhecido por realizar um conjunto multifacetado de trabalhos criativos, incluindo instalações escultóricas, artes de rua e pinturas a óleo inspiradas e fascinadas pela vida quotidiana e pelas cores dinâmicas. Obras de arte públicas recentes incluem: História da Matola: arte mural com mais de 50 m de largura para o recém-construído edifício municipal da Matola, na cidade da Matola. Artes murais para o projeto Traga de volta Maputo: bloco de 3.000 metros quadrados com uma série de obras de arte que transformaram um distrito da luz vermelha em um novo turismo que emprega profissionais do sexo como faxineiras, a área foi pintada com murais de arte com mensagens de esperança e integração social e empoderamento de profissionais do sexo na baixa da cidade de Maputo o projecto está em curso com o apoio de empresas locais e do governo do município de maputo.</p>
                    </div>
                </div>
                <div className="grid gap-8 grid-cols-1 md:grid-cols-2 mb-16 py-6 border-t-2 border-green-500">
                    <div className="text order-2 md:order-1">
                        <p className="font-light">Sebastião Coana nasceu numa zona rural do distrito de Manhiça, onde sobreviveu aos brutais ataques da guerra civil com a sua família. Crescendo em uma comunidade subdesenvolvida destruída pela guerra civil, ele desenvolveu um forte senso de desenvolvimento social e suportou o fardo da reconstrução, canalizando parte de sua renda artística para causas sociais em áreas rurais. A Coana recebeu vários prémios de inovação para objectivos de desenvolvimento sustentável, incluindo o prémio internacional de 2018 do AbinBev Africa Sustainability Challenge para as alterações climáticas na África do Sul, e o TOTAL startupper de desenvolvimento rural sustentável do ano de 2019 em Moçambique, entre outros prémios.</p>
                    </div>
                    <figure className="order-1 md:order-2">
                        <Image
                            src={News1}
                            alt='Bridgee avatar'
                            width={100}
                            height={100}
                            quality={100}
                            className="w-full h-auto object-cover"
                        />
                    </figure>
                </div>
                <div className="grid gap-8 grid-cols-1 md:grid-cols-2 mb-16 py-6 border-t-2 border-blue-500">
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
                        <p className="font-light">Formou-se na Escola de Arquitectura da Academia Central de Belas Artes da China em Pequim (CAFA) no ano de 2012 e possui mestrado em Finanças Internacionais na Universidade de Negócios e Economia Internacionais (UIBE) em Pequim. Descobriu o seu talento artístico ainda jovem em 1995, mais tarde no ano 2000 ingressou no programa de arte juvenil do Museu Nacional de Artes de Maputo. As suas pinturas e murais de arte de rua estão em diversas colecções públicas e privadas em Moçambique, incluindo o Museu Nacional de Artes, e em mais de 25 países em todo o mundo, incluindo o distrito artístico China-Pequim 798, Nova Iorque, Moçambique, África do Sul, Finlândia e outros. Coana é fluente em inglês, português e mandarim.</p>
                    </div>
                </div>
                <div className="grid gap-8 grid-cols-1 md:grid-cols-2 border-t-2 pt-6 border-slate-950">
                    <div className="text">
                        <h5 className="text-[20px] mb-4">EXPOSIÇÕES SELECIONADAS</h5>
                        <span className="font-light">2020 – Live art painting to support victims of terrorism in Cabo Delegado and Curated Expo KuImbondi, in Galeria Porto de Maputo, Mozambique.</span>
                        <br /><span className="font-light">2019 -Expo Transcending, Maputo city Mall-Maputo, Mozambique</span>
                        <br /><span className="font-light">2017 – Annual Expo National Museum of Arts Maputo, Moçambique</span>
                        <br /><span className="font-light">2015 – Symphony of Cultures- Kempinski hotel, Beijing, China</span>
                        <br /><span className="font-light">2014 – Taipei Art Revolution – Taipei, Taiwan</span>
                        <br /><span className="font-light">2013 – Taipei Art Revolution – Taipei, Taiwan</span>
                        <br /><span className="font-light">2012 – Taipei Art Revolution – Taipei, Taiwan</span>
                        <br /><span className="font-light">2012 – “Inspiring Artists” Fox Gallery, Shanghai, China</span>
                        <br /><span className="font-light">2011 – Taipei Art Revolution – Taipei, Taiwan</span>
                        <br /><span className="font-light">2010 – “The Girl of Oranges” Maputo, Mozambique</span>
                        <br /><span className="font-light">2008 – “Inspiring Artists Group Show” in Beijing Colors of Joy Gallery – Beijing 798, China</span>
                        <br /><span className="font-light">2007 – “Colored Africa” Beijing Colors of Joy Gallery – Beijing 798, China</span>
                        <br /><span className="font-light">2007 – “Rising Hope” Mozambican Association of Photography – Maputo, Mozambique.</span>
                        <br /><span className="font-light">2006 – “Africa – China Young Artists Exhibition” Colors of Joy Art Gallery – Beijing 798 Beijing, China</span>
                        <br /><span className="font-light">2005 – “The Moon of Yesterday” Maputo Cultural House – Maputo, Mozambique</span>
                        <br /><span className="font-light">2005 – “Behind the Canvas” Newtown Johannesburg, South Africa</span>
                        <br /><span className="font-light">2005 – “New York Art Expo 05” Jacob K. Javits Convention Centre – NY, United States of America.</span>
                        <br /><span className="font-light">2004 – “Descoberta Art Fair” Brasil Cultural Centre Maputo, Mozambique.</span>
                        <br /><span className="font-light">2004 – “Expo Annual Musart 2004” Location Maputo, Mozambique.</span>
                        <br /><span className="font-light">2003 – “Young Artists from Portuguese Speaking Countries” group exhibition, Camoes Institute Exhibition Hall – Maputo, Mozambique.</span>
                        <br /><span className="font-light">2003 – “World Youth Arts Expo” Confirm the hall Hyvinkaan – Finland.</span>
                        <br /><span className="font-light">2003 – “Brasil Cultural Centre Annual Art Show”. Brasil Cultural Centre – Maputo, Mozambique</span>
                        <br /><span className="font-light">2002 – “Expo Annual Musart 2002” National Art Museum – Maputo, Mozambique.</span>
                    </div>
                    <div className="text">
                        <h5 className="text-[20px] mb-4">AWARDS</h5>
                        <span className="font-light">2004 – “UNESCO Art on Human Rights” Award Winner, UNESCO Mozambique Headquarters – Maputo, Mozambique;</span>
                        <br /><span className="font-light">2005 – “Expo Momentum” Mural Paintings Award, Alto Maé – Maputo, Mozambique;</span>
                        <br /><span className="font-light">2007 – “National Mural Painting Award” PSI Jeito Mozambique – Maputo, Mozambique;</span>
                        <br /><span className="font-light">2016 – Entrepreneur of the Year, RM-Radio cidade</span>
                        <br/><span className="font-light">2017 – Entrepreneur of the Year ANJE, Banco Comercial e de investimentos;</span>
                        <br/><span className="font-light">2018 – All Africa Top Innovator of Climate Action Sustainability Challenge by AbinBev- South Africa.</span>
                        <br/><span className="font-light">2019 – StartUpper of the Year by TOTAL Moçambique.</span>
                        {/* <br/><span></span>
                        <br/><span></span> */}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default About;