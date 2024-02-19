import { useState } from "react";
import { categories } from "../../utils/mockup"
import { ImMenu3 } from "react-icons/im";

const Header = ({handleClick, categoryId}) => {
    const [openNav, setOpenNav] = useState(false)

    return (
        <header className="relative shadow-xl">
            <nav className="sticky top-0 left-0 right-0 w-full flex flex-col lg:flex-row lg:bg-[#784212] items-center justify-between h-auto py-0 lg:py-6 lg:px-6 z-20">
                <div className="bg-[#784212] w-full h-full lg:w-1/5 flex justify-between items-center px-6 lg:px-0 py-6 lg:py-0">
                    <h1 className="text-white font-bold text-4xl lg:text-3xl font-protest">My company</h1>
                    <ImMenu3 onClick={() => setOpenNav(!openNav)} className="lg:hidden fill-white h-14 w-14 cursor-pointer" width={40} height={40}/>
                </div>
                <ul className={`${openNav ? 'flex flex-col' : 'hidden'} bg-[#5C2F00] lg:bg-transparent w-full lg:w-4/5 items-center justify-end lg:flex lg:flex-row gap-2 py-2 lg:py-0`}>
                    {categories?.map((category, idx) => (
                        <li onClick={() => handleClick(category)} className={`animate-fadeIn text-white font-bold text-center lg:text-left text-xl lg:text-lg cursor-pointer hover:text-black font-protest uppercase ${categoryId === category?.id && "underline underline-offset-4"}`} key={idx}>{category?.name}</li>
                    ))}
                </ul>
            </nav>
            <div className="bg-header-banner bg-cover bg-no-repeat bg-center h-[500px] w-full flex items-center justify-center relative">
                <div className="relative h-full w-full backdrop-brightness-50">
                    <h2 className="font-protest text-4xl font-bold text-white text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-fadeIn">Bienvenidos a My Company</h2>
                </div>
            </div>
        </header>
    )
}

export default Header