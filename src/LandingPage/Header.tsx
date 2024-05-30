import logoitapedro from '../assets/icon-itapedro.png'
import setinha from '../assets/SETINHA.png';
import { HiOutlineMapPin } from "react-icons/hi2";

function Header() {
    return (
        <div className=' flex flex-col justify-center'>
            <div className='flex justify-center flex-wrap gap-96 items-center mt-4'>
                <img className='w-44 -ml-20' src={logoitapedro} alt="logo itapedro" />
                <div className='flex gap-16 flex-wrap'>
                    <a className='text-[#FFF]' href="#">O Evento</a>
                    <a className='text-[#FFF]' href="#">Fotos</a>
                    <a className='text-[#FFF]' href="#">Line-Up</a>
                    <a className='text-[#FFF]' href="#">Mapa</a>
                </div>
            </div>
            <div className="flex justify-center">
                <hr className='border-[#FFF] w-3/6'/>
            </div>
            
            <div className='mt-52 text-center font-roboto-slab'>
                <p className='text-xl text-[#FFF] font-bold text-3xl'>27 a 30 de Junho de 2024</p>
                <p className='text-[#FFF] font-black text-7xl'>O Maior <span className='text-amarelo'>São Pedro</span><br />do Brasil!</p>
                <div className='flex justify-center gap-2 mt-2'>
                    <HiOutlineMapPin className='text-[#FFF] text-3xl' />
                    <p className='text-xl text-[#FFF] font-bold text-2xl'>Itabuna-BA</p>
                </div>
            </div>
            <div className='flex justify-center mt-52 mb-10'>
                <img className='w-10' src={setinha} alt="setinha" />
            </div>
        </div>
    )
}

export default Header   