import Thunderstorm from '../assets/Thunderstorm.png'

export function DaysInfo() {
    return (
        <div>
            <div className="h-44 w-32 bg-bg-sidebar mx-auto flex flex-col justify-center">
                <div className='flex flex-col items-center '>
                    <h1 className=" text-white leading-[18px]">Tomorrow</h1>
                    <img src={Thunderstorm} className="h-16" alt="" />
                </div>
                <div className="flex gap-4 mt-8 justify-center">
                    <span className='text-white leading-[19px]'>16°C</span>
                    <span className='text-text-shower leading-[19px]'>11°C</span>
                </div>
            </div>
        </div>
    )
}