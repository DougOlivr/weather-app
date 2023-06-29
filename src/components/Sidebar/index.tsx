
import ShowerImage from '../../assets/Shower.png'

import { Crosshair, MapPin } from "phosphor-react";
import { useEffect, useState } from 'react';

import { TWeatherData } from '../../interface';
import { api } from '../../lib/axios';
import { Modal } from './SearchModal';
import { TWeatherCity } from '../../interface';


export function Sidebar() {

    
    const [openModal, setOpenModal] = useState(false)
    const [city, setCity] = useState<TWeatherCity[]>([])
    const [forecast, setForecast] = useState<TWeatherData | null >()


    const getCity = async (searchCity: string) => {
        try {
            const response = await api.get(`/geo/1.0/direct?q=${searchCity}&limit=5&appid=${import.meta.env.VITE_API_KEY}&units=metric`)
            setCity(response.data)
            console.log(city)
            
        } catch (error) {
            console.error(error)
        }
        
    }



    const getWeather = async (city: TWeatherCity) => {
        try {
            const response = await api.get(`data/2.5/forecast?lat=${city.lat}&lon=${city.lon}&cnt=5&appid=${import.meta.env.VITE_API_KEY}&units=metric`)
            setForecast(response.data)

        } catch (error) {
            console.log(error)
        }


    }

    
    
    useEffect(() => {
        if (city.length > 0)  {
            getWeather(city[0])
            
        }      
        

        console.log(forecast)
    }, [city])




    return (
        <div className="flex flex-col">
            <div className="m-10 flex items-center justify-between">
                <button
                    className="py-2 px-4 bg-zinc-400 font-medium text-gray-100 "
                    onClick={() => setOpenModal(true)}
                >
                    Search for places
                </button>

                <Modal isOpen={openModal} onClose={() => setOpenModal(!openModal)} getCity={getCity} />

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
                    <div className='flex'>
                        <h1 className="font-light text-9xl text-slate-100"></h1>
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
                        <span>{city[0]?.name}</span>
                    </div>

            </div>

        </div>
    )
}




