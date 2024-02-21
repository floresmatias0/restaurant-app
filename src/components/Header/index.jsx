import { useEffect, useState } from "react";
import { categories } from "../../utils/mockup"
import { HiMenuAlt3 } from "react-icons/hi";


const Header = ({handleClick, categoryId}) => {
    const [openNav, setOpenNav] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setOpenNav(false);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className="relative shadow-xl">
            <nav className="sticky top-0 left-0 right-0 w-full flex flex-col lg:flex-row bg-gradient-to-r from-[#784212] to-[#5C2F00] items-center justify-between h-auto py-0 lg:py-6 lg:px-6 z-20">
                <div className="bg-[#784212] lg:bg-transparent relative w-full h-full lg:w-1/5 flex justify-between items-center px-6 lg:px-0 py-6 lg:py-0 z-20">
                    <h1 className="text-white font-bold text-4xl lg:text-3xl font-protest">My company</h1>
                    <HiMenuAlt3 onClick={() => setOpenNav(!openNav)} className="lg:hidden fill-white h-14 w-14 cursor-pointer" width={40} height={40}/>
                </div>
                <ul className={`${openNav ? 'flex flex-col' : 'hidden'} absolute top-[100px] lg:static animate-slideDown bg-gradient-to-b from-[#784212] lg:from-transparent to-[#5C2F00] lg:to-transparent w-full lg:w-4/5 items-center justify-end lg:flex lg:flex-row py-2 lg:py-0 transition-[height] duration-300 ease-in-out z-10`}>
                    {categories?.map((category, idx) => (
                        <li onClick={() => handleClick(category)} className={`w-full text-right lg:text-center text-white font-bold text-xl lg:text-sm cursor-pointer hover:text-black font-protest uppercase ${categoryId === category?.id && "underline underline-offset-4"} px-6 lg:px-0 backdrop-blur-sm`} key={idx}>{category?.name}</li>
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