import { MagnifyingGlass, X } from "phosphor-react"


interface ModalProps {

    isOpen: boolean
    onClose: () => void
}

export function Modal({ onClose, isOpen }: ModalProps) {
    if (isOpen) {
        return (
            <div className="fixed top-0 left-0  max-w-[459px] w-full flex flex-col">
                <div className="bg-bg-sidebar w-full h-screen flex flex-col">
                    <div className="flex justify-end mr-14 mt-5">
                        <button className=" font-bold cursor-pointer" onClick={onClose}>
                            <X size={24} color="white" weight="bold" />
                        </button>
                    </div>
                    <div className="flex justify-center gap-3 mt-11 relative">

                        <input type="text"
                            placeholder=" search location"
                            className="w-64 h-12 pl-4 border border-solid border-white bg-bg-sidebar" />
                        <MagnifyingGlass size={20} color="#838181" weight="bold" className="absolute left-14 top-0" />

                        <button className="border-none bg-indigo-600 font-semibold w-20 text-white">Search </button>
                    </div>
                </div>
            </div>
        )
    }

    return null
}
