import { categories } from "../../utils/mockup"

const Header = ({handleClick, categoryId}) => {
    return (
        <header className="bg-[#784212] w-full">
            <div className="container mx-auto">
                <nav className="flex flex-col lg:flex-row items-center justify-between h-auto lg:h-[60px] px-6">
                    <h1 className="text-white font-bold text-3xl font-protest">My company</h1>
                    <ul className="flex flex-col lg:flex-row gap-2 py-2 lg:py-0">
                        {categories?.map((category, idx) => (
                            <li onClick={() => handleClick(category)} className={`text-white font-bold text-center lg:text-left text-lg cursor-pointer hover:text-black font-protest uppercase ${categoryId === category?.id && "underline underline-offset-4"}`} key={idx}>{category?.name}</li>
                        ))}
                    </ul>
                </nav>
            </div>
            <div className="bg-header-banner bg-cover bg-no-repeat bg-center h-[500px] w-full flex items-center justify-center brightness-50 relative">
            </div>
            <h2 className="font-protest text-4xl font-bold text-white absolute top-1/2 left-1/3 animate-slideIn">Bienvenidos a My Company</h2>
        </header>
    )
}

export default Header