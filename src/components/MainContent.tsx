import { ArrowCircleDownLeft } from 'phosphor-react'
import { DaysInfo } from './DaysInfo'

export function MainContent() {
    return (
        <div className='flex flex-col items-center'>
            <div>
                <div className="flex justify-end gap-3 mt-11 ">
                    <button className="w-10 h-10 rounded-full bg-bg-button font-bold text-white text-lg">℃</button>
                    <button className="w-10 h-10 rounded-full bg-bg-button font-bold text-white text-lg ">℉</button>
                </div>
                <div className="grid grid-flow-col auto-cols-max gap-6 mt-16">
                    <DaysInfo />
                    <DaysInfo />
                    <DaysInfo />
                    <DaysInfo />
                    <DaysInfo />
                </div>


                <main>
                    <h1 className="text-white  font-bold text-2xl leading-7  mt-16 mb-8">Today's Hightlights</h1>

                    <div className="grid grid-cols-2 grid-rows-2 gap-12 ">
                        <div className="h-52 w-80 bg-bg-sidebar ">
                            <div className="flex flex-col items-center h-full justify-center gap-4 ">
                                <span className="text-white leading-5 ">Wind status</span>
                                <div className="">
                                    <span className="text-6xl text-white font-bold">7</span>
                                    <span className="text-4xl text-white">mph</span>
                                </div>
                                <div className="flex gap-2 mt-4  items-center">
                                    <div className="w-7 h-7 rounded-full bg-bg-button font-bold text-white text-lg">
                                        <ArrowCircleDownLeft size={28} color="#a3a3a3" weight="fill" />
                                    </div>
                                    <span className='text-white text-sm'>wsw</span>
                                </div>

                            </div>
                        </div>

                        <div className="h-52 w-80 bg-bg-sidebar">
                            <div className="flex flex-col items-center h-full justify-center gap-4 ">
                                <span className="text-white leading-5 ">Humidity</span>
                                <div className="">
                                    <span className="text-6xl text-white font-bold">84</span>
                                    <span className="text-4xl text-white ">%</span>
                                </div>
                                <div className="flex gap-2 mt-4  items-center">
                                    <span className='text-white text-sm'>wsw</span>
                                </div>

                            </div>
                        </div>
                        <div className="h-40 w-80 bg-bg-sidebar">
                            <div className="flex flex-col items-center h-full justify-center gap-4 ">
                                <span className="text-white leading-5 ">Visibility</span>
                                <div className="">
                                    <span className="text-6xl text-white font-bold mr-4">6,4</span>
                                    <span className="text-4xl text-white">miles</span>
                                </div>

                            </div>
                        </div>
                        <div className="h-40 w-80 bg-bg-sidebar">
                            <div className="flex flex-col items-center h-full justify-center gap-4 ">
                                <span className="text-white leading-5 ">Air Pressure</span>
                                <div className="">
                                    <span className="text-6xl text-white font-bold mr-4">998</span>
                                    <span className="text-4xl text-white">mb</span>
                                </div>

                            </div>
                        </div>
                    </div>

                </main>
            </div>

        </div>
    )
}
