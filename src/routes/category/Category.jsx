import React from 'react'
import { useTranslation } from 'react-i18next'

import web from "../../assets/web.png"
import { Link } from 'react-router-dom'
import "../category/Category.css"
import { useFitch } from "../../hooks/useFitch"
import "../category/Category.css"
import dv from "../../assets/dv.png"


import { useParams } from 'react-router-dom'
const Category = () => {
    const { t,i18n } = useTranslation();
    const data = useFitch("/products")

    const { id } = useParams();

  return (
    <div>

<div>
    <h1 className='text  my-[50px]'>{t('c')}</h1>
    <br />
    <img className='w-full' src={web} alt="" />
</div>
<div>
    {
      <div className="p-4">
      <div className="rounded-md">
        <h2 className="text-2xl font-bold mb-2 my-2">{t('c1')}</h2>
        <p>{t('c2')}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        {data.map(product => (
          <div key={product.id} className="product-card relative border rounded-md p-4 hover:shadow-lg transition-all duration-300">
            <Link to={`/single/${product.id}`}>
              <img src={product.thumbnail} alt={product.title} className="mb-2 cursor-pointer w-full h-48 object-cover" />
            </Link>
            <h3 className="font-semibold text-lg mb-2">{product.title}</h3>
            <p className="text-sm text-gray-700 mb-2">{product.description}</p>
            <p className="text-lg font-bold mb-2">${product.price.toFixed(2)}</p>
            <span className="text-gray-500 line-through">${(product.price * 1.2).toFixed(2)}</span>
            <span className="ml-2 ">{Math.floor(product.discountPercentage)}% OFF</span>
            <p className="text-red-500 mt-2">{product.category}</p>
            <p className="">{product.discountPercentage}% off</p>
           <Link to={"/login"}> <button className="buy-now-button bg-blue-400 w-full h-[40px] text-white px-4 py-2 rounded-md my-4 hover:bg-blue-800 transition-colors duration-300">Buy Now</button></Link>
          </div>
        ))}
      </div>
    </div>
    
    
    }
</div>
<div>
  <img src={dv} alt="" />
</div>
<div className="footer-bottom container mx-auto mt-8 text-center border-t border-gray-700 pt-4 mt-[200px] p-4">
    <p className="footer-copyright text-sm text-gray-400 hover:text-gray-200">
      {t('footer_copyright')}
    </p>
  </div>
    </div>
  )
}

export default Category