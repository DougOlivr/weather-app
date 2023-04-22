
import ShowerImage from '../../assets/Shower.png'

import { Crosshair, MapPin } from "phosphor-react";
import { useEffect, useState } from 'react';

import { TWeatherData } from '../../interface';
import { api } from '../../lib/axios';
import { Modal } from './SearchModal';


export function Sidebar() {

    const [weatherData, setWeatherData] = useState<TWeatherData | null>(null)
    const [openModal, setOpenModal] = useState(false)

    
    

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await api.get(`data/2.5/weather?q=London&appid=${import.meta.env.VITE_API_KEY}&units=metric`)
                setWeatherData(response.data)
                console.log(response.data)
    
            } catch (error) {
                console.log(error)
            }
        }

        getData()
    }, [])


    return (
        <div className="flex flex-col   ">
            <div className="m-10 flex items-center justify-between">
                <button
                    className="py-2 px-4 bg-zinc-400 font-medium text-gray-100 "
                    onClick={() => setOpenModal(true)}
                >
                    Search for places   
                </button>

                <Modal isOpen={openModal} onClose={() => setOpenModal(!openModal)} /> 

                <button className="bg-zinc-500 p-2 rounded-full ">
                    <Crosshair size={20} weight="fill" color="#fbf9f9" />

                </button>
            </div>

            <div className="mt-5 h-[376px] " >
                <div className='bg-sidebar bg-center w-full h-full flex items-center justify-center'>
                    <img src={ShowerImage} className='' alt="" />
                </div>

            </div>

            <div className="flex justify-center h-[266px]">
                <div className='items-center flex-col '>
                        <div className='flex '>
                            <h1 className="font-light text-9xl text-slate-100">{weatherData?.main.temp}</h1>
                            <span className="text-zinc-500 text-5xl mt-16">°C</span>
                        </div>
                    <div className='mt-20 flex justify-center font-medium text-text-shower text-4xl font '>
                        <h1>Shower</h1>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-20 flex-col items-center gap-8">
                <div className="flex gap-4 text-lg text-text-location">
                    <span>Today</span>
                    <span>•</span>
                    <span>Friday, 10 Fev</span>
                </div>
                <div className="flex items-center gap-2 text-text-location text-lg font-semibold mb-10">
                    <MapPin size={20} color="#88869D" weight="fill" />
                    <span>{weatherData?.name}</span>
                </div>

            </div>

        </div>
    )
}




