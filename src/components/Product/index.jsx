const Product = ({ name, description, img, price }) => {
    return (
        <div className="w-full h-[140px] rounded-xl bg-[#F5E6DA] shadow-md px-2 sm:px-4">
            <div className="w-full h-full flex">
                <div className="w-1/5 sm:w-1/4 float-left flex justify-center items-center">
                    <img src={img} alt={name} width={60} height={60} className="rounded-full min-h-[60px] sm:min-h-[80px] min-w-[60px] sm:min-w-[80px] object-cover"/>
                </div>
                <div className="w-4/5 sm:w-3/4 h-full float-right relative px-2">
                    <h2 className="text-sm sm:text-md font-bold mt-2">{name}</h2>
                    <p className="text-sm lg:text-xs mt-1">{description}</p>
                    <p className="text-xs sm:text-sm absolute bottom-2 right-2 font-bold">${price}</p>
                </div>
            </div>
        </div>
    )
}

export default Product