import { useState, useRef } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Menu from '../components/Menu'
import { products as mockupProducts } from '../utils/mockup'

const Home = () => {
  const seccionesRefs = useRef(null)

  const scrollToSection = () => {
    if (seccionesRefs.current) {
      seccionesRefs.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [categoryId, setCategoryId] = useState(0)

  const filteredProducts = categoryId === 0 ? mockupProducts : mockupProducts.filter(product => product.categoryId === categoryId)

  const handleCategory = (category) => {
    scrollToSection()
    setCategoryId(category?.id)
  }

  return (
    <div className='h-screen w-full flex flex-col'>
      <Header handleClick={handleCategory} categoryId={categoryId}/>
      <Menu products={filteredProducts} seccionesRef={seccionesRefs} categoryId={categoryId}/>
      <Footer/>
    </div>
  )
}

export default Home
