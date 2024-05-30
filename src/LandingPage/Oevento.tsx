import imgEvento from '../assets/imagem-evento.png'

function Oevento() {
    return (
        <div className='flex flex-wrap flex-row justify-center mt-52'>
            <div className='flex flex-row flex-wrap items-center gap-40'>
                <div className='flex flex-col flex-wrap gap-4 font-roboto-slab w-96'>
                    <h1 className='text-amarelo font-bold text-3xl'>O EVENTO</h1>
                    <p className='text-[#FFF] font-normal'>Idealizado a partir do entendimento da importância de preservar a identidade cultural regional, com o intuito de ascender a cultura junina e de promover o turismo e alimentar a cadeia produtiva regional, o projeto nasceu em Junho de 2022, tendo como base as grandes festas juninas do Nordeste.
                        Em 2023 foi realizada a segunda edição, contando com mais de 28 atrações nacionais e regionais, atingindo toda a Bahia, desenvolvendo a cultura, aumentando o fluxo turístico e econômico de Itabuna e cidades circunvizinhas.
                    </p>
                </div>
                <div>
                    <img className='w-96' src={imgEvento} alt="" />
                </div>
            </div>

        </div>
    )
}

export default Oevento