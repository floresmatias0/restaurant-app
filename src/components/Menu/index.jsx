import { categories } from "../../utils/mockup"
import Product from "../Product"

const Menu = ({products, seccionesRef, categoryId}) => {

    const groupProductsByCategory = () => {
        const groupedProducts = {};

        products.forEach(product => {
            const category = categories[product.categoryId].name;
            if (!groupedProducts[category]) {
                groupedProducts[category] = [];
            }
            groupedProducts[category].push(product);
        });

        return groupedProducts;
    };
    
    const groupedProducts = categoryId !== 0 ? null : groupProductsByCategory();

    return (
        <main className="bg-[#D9A066] w-full grow" ref={seccionesRef}>
            <div className="container mx-auto">
                {categoryId !== 0 ? (
                    <>
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
                    </>
                ) : (
                    <>
                        <h2 className="px-6 pt-6 font-protest text-4xl text-white">{categories[categoryId].name}</h2>
                        {Object.keys(groupedProducts).map((category, key) => (
                            <div key={key}>
                                <h2 className="px-6 pt-6 font-protest text-3xl text-white">{category}</h2>
                                <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {groupedProducts[category].map(product => (
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
                        ))}
                    </>
                )}
            </div>
        </main>
    )
}

export default Menu