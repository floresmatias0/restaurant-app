import { categories } from "../../utils/mockup"
import Product from "../Product"

const Menu = ({products, seccionesRef, categoryId}) => {
    return (
        <main className="bg-[#D9A066] w-full grow" ref={seccionesRef}>
            <div className="container mx-auto">
                <h2 className="px-6 pt-6 font-protest text-3xl text-white">{categories[categoryId].name}</h2>
                <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {products?.map(product => (
                        <div key={product.id} className="animate-fadeIn">
                            <Product
                                name={product?.name}
                                description={product?.description}
                                price={product?.price}
                                img={product?.img}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}

export default Menu