import { CaretRight, X } from "phosphor-react"
import { ChangeEvent, useState } from "react"


interface ModalProps {

    isOpen: boolean;
    onClose: () => void;
    getCity: (searchCity: string) => void
    
}

export function Modal({ onClose, isOpen, getCity }: ModalProps) {

    const [searchCity, setSearchCity] = useState<string>('')

    const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value.trim()
        setSearchCity(value)

        if (value === '') return
        
    }

    if (isOpen) {
        return (

            <div className="fixed top-0 left-0  max-w-[459px] w-full flex flex-col">
                <div className="bg-bg-sidebar w-full h-screen flex flex-col">
                    <div className="flex justify-end mr-12 mt-5">
                        <button className="font-bold cursor-pointer" onClick={onClose}>
                            <X size={24} color="white" weight="bold" />
                        </button>
                    </div>
                    <div className="flex justify-center flex-col w-full ">
                        <div className="flex justify-center gap-3 mt-11 relative">
                            <input type="text"
                                placeholder="search location"
                                onChange={onInputChange}
                                className="w-[268px] h-12 pl-4 border border-solid border-white bg-bg-sidebar focus:outline-none focus:border-indigo-600 text-white" />
                            <button
                                onClick={() => getCity(searchCity)}
                                className="border-none bg-indigo-600 font-semibold w-[86px]  text-white">Search </button>
                        </div>
                        <div className="mt-14">
                            <div className="w-[367px] h-16 m-auto border border-solid border-gray-300 flex justify-between items-center cursor-pointer">
                                <p className="text-white pl-3">London</p>
                                <CaretRight size={16} color="#908e8e" weight="bold" className="mr-4" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return null
}

