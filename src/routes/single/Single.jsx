import React from 'react'
import { useTranslation } from 'react-i18next'
import { useFitch } from '../../hooks/useFitch'
import { useParams } from 'react-router-dom' 
import { Link } from 'react-router-dom'
// import "../single/SINGLE.CSS"
const Single = () => {
    const {id} = useParams()
    const data = useFitch(`/products/${id}`)

    const { t,i18n } = useTranslation();

  return (
   <>
<div className="product-card p-4 border rounded-md shadow-lg transition-all duration-300 hover:shadow-xl flex gap-[60px]">
  <div>
    <img className="product-image w-[450px] h-[450px] object-cover mb-4" src={data.thumbnail} alt={data.title} />
  </div>
  <div className=' my-auto'>
    <h1 className="product-title text-2xl font-bold mb-2">{data.title}</h1>
    <p className="product-description text-gray-700 mb-4 border-b pb-4 w-[500px]">{data.description}</p>
    <p className="product-price text-lg font-bold text-green-600 mb-2">${data.price}</p>
    <p className="product-category text-gray-500 mb-1">Category: {data.category}</p>
    <p className="product-brand text-gray-500 mb-1 ml-[10px]">Brand: {data.brand}</p>
    <p className="product-stock text-gray-500 mb-1 ml-[10px]">Stock: {data.stock}</p>

    <div className="flex gap-4 mt-6">
      <Link className='flex gap-4 mt-6' to={`/login`}><button className='btn rounded-[25px] px-4 py-2 bg-[#0053A0] text-white'>{t('c3')}</button>
      <button className='btn rounded-[25px] px-4 py-2 bg-[#3498CA] border border-gray-300'>{t('c4')}</button>
      <button className='btn rounded-[25px] px-4 py-2 bg-gray-200 border border-blue-500'>{t('c5')}</button></Link>
    </div>
    
  </div>
  
</div>
<div className="footer-bottom container mx-auto mt-8 text-center border-t border-gray-700 pt-4 mt-[200px] p-4">
    <p className="footer-copyright text-sm text-gray-400 hover:text-gray-200">
      {t('footer_copyright')}
    </p>
  </div>

        
   
   </>

  )
}

export default Single