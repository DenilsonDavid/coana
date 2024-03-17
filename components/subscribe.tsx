import React from 'react';

// import { Container } from './styles';

const Subscribe: React.FC = () => {
  return (
    <div className="content mt-14 py-20 px-4 w-full flex flex-col items-center justify-center bg-black">
        <h3 className="text-slate-100 text-center text-2xl font-medium">INSCREVA-SE EM NEWSLETTERS</h3>
        <p className="max-w-[700px] mt-4 text-slate-100 font-light text-[17px] text-center">
        Precisamos da sua autorização para mantê-lo actualizado com as novidades de SEBASTIÃO COANA.
            <br />
Por favor, inscreva-se em nossa Newsletter para receber notícias sobre nossas próximas exposições e eventos de arte contemporânea em todo o mundo.</p>

        <form className="mt-8 flex flex-col md:flex-row gap-5">
            <input
            className="border-none outline-none py-2 px-5 text-white text-[14px] bg-neutral-600 w-full min-w-80" 
            type="text" 
            name="" 
            id="" 
            placeholder="E-mail"
             />
            <button 
                type="submit"
                className="w-full py-2 px-16 bg-gray-50 text-slate-950 text-[14px] border-none outline-none"
            >Se inscrever</button>
        </form>
    </div>
  );
}

export default Subscribe;