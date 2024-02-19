export const categories = [
    { id: 0, name: 'Menu completo', description: '' },
    { id: 1, name: 'Entradas', description: '' },
    { id: 2, name: 'Picadas', description: '' },
    { id: 3, name: 'Hamburguesas', description: '' },
    { id: 4, name: 'Pizzas', description: '' },
    { id: 5, name: 'Cervezas', description: '' },
    { id: 6, name: 'Bebidas sin alcohol', description: '' },
    { id: 7, name: 'Cocktails', description: '' },
    { id: 8, name: 'Sandwiches', description: '' }
]

export const products = [
    // Entradas
    { categoryId: 1, id: 1, name: "Pollo a la parrilla", price: 2800, img: 'https://pronacatqma.com/images/com_yoorecipe/banner_superior/15485_1.jpg', description: "Delicioso pollo a la parrilla, sazonado y cocinado a la perfección." },
    { categoryId: 1, id: 2, name: "Lentejas con garbanzos y cebolla", price: 3800, img: 'https://estag.fimagenes.com/img/2/1/V/4/K/1V4K_900.jpg', description: "Una mezcla reconfortante de lentejas y garbanzos con cebolla, sazonada con hierbas frescas." },
    { categoryId: 1, id: 3, name: "Pollo a la parrilla", price: 2800, img: 'https://pronacatqma.com/images/com_yoorecipe/banner_superior/15485_1.jpg', description: "Delicioso pollo a la parrilla, sazonado y cocinado a la perfección." },
    { categoryId: 1, id: 4, name: "Lentejas con garbanzos y cebolla", price: 3800, img: 'https://estag.fimagenes.com/img/2/1/V/4/K/1V4K_900.jpg', description: "Una mezcla reconfortante de lentejas y garbanzos con cebolla, sazonada con hierbas frescas." },
    // Picadas
    { categoryId: 2, id: 5, name: "Tortilla de patata", price: 4300, img: 'https://cdn.recetasderechupete.com/wp-content/uploads/2020/11/Tortilla-de-patatas-4.jpg', description: "Clásica tortilla española hecha con patatas y huevos, un plato tradicional y sabroso." },
    { categoryId: 2, id: 6, name: "Chorizo picado", price: 2500, img: 'https://www.jamonarium.com/img/cms/CMS_chorizo/chorizo-rustico-cortado_peque.jpg', description: "Sabroso chorizo picado, perfecto para compartir como aperitivo." },
    { categoryId: 2, id: 7, name: "Tortilla de patata", price: 4300, img: 'https://cdn.recetasderechupete.com/wp-content/uploads/2020/11/Tortilla-de-patatas-4.jpg', description: "Clásica tortilla española hecha con patatas y huevos, un plato tradicional y sabroso." },
    { categoryId: 2, id: 8, name: "Chorizo picado", price: 2500, img: 'https://www.jamonarium.com/img/cms/CMS_chorizo/chorizo-rustico-cortado_peque.jpg', description: "Sabroso chorizo picado, perfecto para compartir como aperitivo." },
    // Hamburguesas
    { categoryId: 3, id: 9, name: "Hamburguesa de carne", price: 5100, img: 'https://resizer.glanacion.com/resizer/v2/gentileza-RGDDRKNE2ZHJNB2M2DK5JKL5EI.jpg?auth=d7d321d78fbdd6400132aaa2839faea749c0c09ffda36ee52718f2642ee2117d&width=768&height=432&quality=70&smart=true', description: "Jugosa hamburguesa de carne de res, acompañada de lechuga, tomate y queso." },
    { categoryId: 3, id: 10, name: "Hamburguesa vegana", price: 6000, img: 'https://www.conasi.eu/blog/wp-content/uploads/2022/05/hamburguesa-vegana-1.jpg', description: "Deliciosa hamburguesa vegana, hecha con una mezcla de vegetales y proteínas vegetales, acompañada de aderezos frescos." },
    { categoryId: 3, id: 11, name: "Hamburguesa de carne", price: 5100, img: 'https://resizer.glanacion.com/resizer/v2/gentileza-RGDDRKNE2ZHJNB2M2DK5JKL5EI.jpg?auth=d7d321d78fbdd6400132aaa2839faea749c0c09ffda36ee52718f2642ee2117d&width=768&height=432&quality=70&smart=true', description: "Jugosa hamburguesa de carne de res, acompañada de lechuga, tomate y queso." },
    { categoryId: 3, id: 12, name: "Hamburguesa vegana", price: 6000, img: 'https://www.conasi.eu/blog/wp-content/uploads/2022/05/hamburguesa-vegana-1.jpg', description: "Deliciosa hamburguesa vegana, hecha con una mezcla de vegetales y proteínas vegetales, acompañada de aderezos frescos." },
    // Pizzas
    { categoryId: 4, id: 13, name: "Margarita", toppings: ["Tomate", "Queso mozzarella"], price: 2200, img: 'https://www.paulinacocina.net/wp-content/uploads/2023/09/pizza-margherita-paulina-cocina-recetas.jpg', description: "Pizza clásica con salsa de tomate, queso mozzarella y albahaca fresca." },
    { categoryId: 4, id: 14, name: "Pepperoni", toppings: [], price: 4000, img: 'https://images.hola.com/imagenes/cocina/recetas/20230208226048/pizza-pepperoni/1-201-303/pizza-pepperoni-age-t.jpg?tx=w_680', description: "Pizza de pepperoni, con generosas rodajas de salchicha picante de pepperoni." },
    { categoryId: 4, id: 15, name: "Margarita", toppings: ["Tomate", "Queso mozzarella"], price: 2200, img: 'https://www.paulinacocina.net/wp-content/uploads/2023/09/pizza-margherita-paulina-cocina-recetas.jpg', description: "Pizza clásica con salsa de tomate, queso mozzarella y albahaca fresca." },
    { categoryId: 4, id: 16, name: "Pepperoni", toppings: [], price: 4000, img: 'https://images.hola.com/imagenes/cocina/recetas/20230208226048/pizza-pepperoni/1-201-303/pizza-pepperoni-age-t.jpg?tx=w_680', description: "Pizza de pepperoni, con generosas rodajas de salchicha picante de pepperoni." },
    // Cervezas
    { categoryId: 5, id: 17, name: "Cerveza lata", abv: 0.5, volume: "250ml", price: 1500, img: 'https://http2.mlstatic.com/D_NQ_NP_779888-MLU72605682506_112023-O.webp', description: "Refrescante cerveza en lata, perfecta para acompañar tu comida." },
    { categoryId: 5, id: 18, name: "Cerveza botella", abv: 5.0, volume: "500ml", price: 5800, img: 'https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/3100531_f.jpg', description: "Cerveza embotellada, con un sabor único y una graduación alcohólica moderada." },
    { categoryId: 5, id: 19, name: "Cerveza lata", abv: 0.5, volume: "250ml", price: 1500, img: 'https://http2.mlstatic.com/D_NQ_NP_779888-MLU72605682506_112023-O.webp', description: "Refrescante cerveza en lata, perfecta para acompañar tu comida." },
    { categoryId: 5, id: 20, name: "Cerveza botella", abv: 5.0, volume: "500ml", price: 5800, img: 'https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/3100531_f.jpg', description: "Cerveza embotellada, con un sabor único y una graduación alcohólica moderada." },
    // Bebidas sin alcohol
    { categoryId: 6, id: 21, name: "Agua", volume: "1lt", price: 1700, img: 'https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/3040004_f.jpg', description: "Agua fresca y pura, para mantenerte hidratado durante tu visita." },
    { categoryId: 6, id: 22, name: "Refresco", volume: "2lt", price: 3200, img: 'https://jumboargentina.vtexassets.com/arquivos/ids/782853/Gaseosa-Coca-cola-Sabor-Original-1-75-Lt-2-254543.jpg?v=638206689888300000', description: "Refresco carbonatado, disponible en una variedad de sabores para satisfacer tu sed." },
    { categoryId: 6, id: 23, name: "Agua", volume: "1lt", price: 1700, img: 'https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/3040004_f.jpg', description: "Agua fresca y pura, para mantenerte hidratado durante tu visita." },
    { categoryId: 6, id: 24, name: "Refresco", volume: "2lt", price: 3200, img: 'https://jumboargentina.vtexassets.com/arquivos/ids/782853/Gaseosa-Coca-cola-Sabor-Original-1-75-Lt-2-254543.jpg?v=638206689888300000', description: "Refresco carbonatado, disponible en una variedad de sabores para satisfacer tu sed." },
    // Cocktails
    { categoryId: 7, id: 25, name: "Vodka + cola", ingredients: ["Vodka", "Cola"], price: 1900, img: 'https://www.acouplecooks.com/wp-content/uploads/2020/12/Vodka-and-Coke-001s.jpg', description: "Cóctel clásico hecho con vodka y cola, servido con hielo y una rodaja de limón." },
    { categoryId: 7, id: 26, name: "Whisky + ginger ale", ingredients: ["Whisky", "Ginger ale"], price: 2700, img: 'https://www.schweppes.es/uploads/media/blog/0001/01/73999b687050ddd29c332eb028f7931915749041.jpeg', description: "Refrescante cóctel de whisky mezclado con ginger ale, perfecto para cualquier ocasión." },
    { categoryId: 7, id: 27, name: "Vodka + cola", ingredients: ["Vodka", "Cola"], price: 1900, img: 'https://www.acouplecooks.com/wp-content/uploads/2020/12/Vodka-and-Coke-001s.jpg', description: "Cóctel clásico hecho con vodka y cola, servido con hielo y una rodaja de limón." },
    { categoryId: 7, id: 28, name: "Whisky + ginger ale", ingredients: ["Whisky", "Ginger ale"], price: 2700, img: 'https://www.schweppes.es/uploads/media/blog/0001/01/73999b687050ddd29c332eb028f7931915749041.jpeg', description: "Refrescante cóctel de whisky mezclado con ginger ale, perfecto para cualquier ocasión." },
    // Sandwiches
    { categoryId: 8, id: 29, name: "Jamon y queso", ingredients: ["Vodka", "Cola"], price: 1900, img: 'https://www.acouplecooks.com/wp-content/uploads/2020/12/Vodka-and-Coke-001s.jpg', description: "Cóctel clásico hecho con vodka y cola, servido con hielo y una rodaja de limón." },
    { categoryId: 8, id: 30, name: "Salame y queso", ingredients: ["Whisky", "Ginger ale"], price: 2700, img: 'https://www.schweppes.es/uploads/media/blog/0001/01/73999b687050ddd29c332eb028f7931915749041.jpeg', description: "Refrescante cóctel de whisky mezclado con ginger ale, perfecto para cualquier ocasión." },
    { categoryId: 8, id: 31, name: "Jamon, queso y huevo", ingredients: ["Vodka", "Cola"], price: 1900, img: 'https://www.acouplecooks.com/wp-content/uploads/2020/12/Vodka-and-Coke-001s.jpg', description: "Cóctel clásico hecho con vodka y cola, servido con hielo y una rodaja de limón." },
    { categoryId: 8, id: 32, name: "Jamon, queso, huevo, lechuga y tomate", ingredients: ["Whisky", "Ginger ale"], price: 2700, img: 'https://www.schweppes.es/uploads/media/blog/0001/01/73999b687050ddd29c332eb028f7931915749041.jpeg', description: "Refrescante cóctel de whisky mezclado con ginger ale, perfecto para cualquier ocasión." }
];


export const data_contact = {
    title: "estamos aquí, muy cerca de tí",
    subtitle: "",
    address: "Avda. del Marqués de Salamanca, 12 - 28013 Madrid",
    map: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.6390965916175!2d-58.41301612533442!3d-34.58799745666629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca83d2aa1521%3A0xc7a941fe0d021ba0!2sAlto%20Palermo%20Shopping!5e0!3m2!1ses-419!2sar!4v1708300167707!5m2!1ses-419!2sar" class="w-full h-auto sm:h-[450px]" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    phone: "+34 91 123 4567",
    email: "info@foodapp.com",
    social_networks: {
        instagram: "@foodapp",
        twitter: "@foodapp",
        facebook: "foodapp"
    }
}