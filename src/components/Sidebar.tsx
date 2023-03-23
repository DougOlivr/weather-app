
import ShowerImage from '../assets/shower.png'


import { Crosshair, MapPin } from "phosphor-react";
import { useEffect, useState } from 'react';

import axios from 'axios';



export function Sidebar() {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('https://api.openweathermap.org/data/2.5/weather?q=London,uk&callback=test&appid=c1c0941e97d6bf6b471e2b818b01216a')
        .then(response => {
            setData(response.data)
            console.log(response.data)
        })

    }, [])

    return (
        <div className="flex flex-col ">
            <div className="m-10 flex items-center justify-between">
                <button className="py-2 px-4 bg-zinc-400 font-medium text-gray-100 ">Search for places</button>

                <button className="bg-zinc-500 p-2 rounded-full ">
                    <Crosshair size={20} weight="fill" color="#fbf9f9" />
                </button>
            </div>
            
            <div className="mt-5 h-[376px] relative justify-center flex items-center" >
                    <div className='bg-sidebar bg-cover bg-center w-full h-full absolute opacity-5'></div>
                    
                    <div className=" ">
                        <img src={ShowerImage} alt="" />
                    </div>  
            </div>
            
            <div className="flex justify-center h-[266px]">
                <div className='items-center flex-col '>
                    <div className='flex'>
                        <h1 className="font-light text-9xl text-slate-100">15</h1>
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
                    <span>Rio da Janeiro</span>
                </div>
                
            </div>
            
        </div>
    )
}




