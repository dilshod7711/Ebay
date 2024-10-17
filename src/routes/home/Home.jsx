import React from 'react'
import Brand from "../../components/brand/Brand"
import Product from '../../components/product/Product'
import Products2 from '../../products2/Products2'
import SHipping from '../../components/shipping/SHipping'
import Footer from '../../components/footer/Footer'
const Home = () => {
  return (
   <div>
  <Brand/>
  <Product/>
  <Products2/>
  <SHipping/>
  <Footer/>
   </div>
  )
}

export default Home