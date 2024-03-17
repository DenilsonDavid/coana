import React from 'react';

// import { Container } from './styles';

const Footer: React.FC = () => {
  return (
    <div className="footer w-full py-20 px-4 md:px-8 xl:px-28 flex flex-col md:flex-row gap-16 justify-between bg-white">
        <ul className="flex flex-col font-light">
            <li>&copy; 2024 SEBASTIÃO COANA</li>
            <li><a href="#">PRIVACY NOTICE</a></li>
            <li><a href="#">COOKIE POLICY</a></li>
        </ul>
        <div className="flex flex-col font-light">
        <span className="self-end mb-4">SIGA-ME</span>
        <ul className="flex self-end gap-8 text-[22px]">
            <li><a href="#"><i className="ri-facebook-circle-line"></i></a></li>
            <li><a href="#"><i className="ri-instagram-line"></i></a></li>
            <li><a href="#"><i className="ri-twitter-x-line"></i></a></li>
            <li><a href="#"><i className="ri-linkedin-box-line"></i></a></li>
            <li><a href="#"><i className="ri-youtube-line"></i></a></li>
        </ul>
        </div>
    </div>
  );
}

export default Footer;