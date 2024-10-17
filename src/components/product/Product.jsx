    import { BsArrowRight } from "react-icons/bs"; 
    import React from 'react'
    import { Link } from 'react-router-dom'
    import { useFitch } from '../../hooks/useFitch'
    import "../product/Product.css"
    import { useTranslation } from 'react-i18next'

    
    const Product = () => {
        const { t,i18n } = useTranslation();
        const data = useFitch("/products")
    
    return (
        
    
    <>
        <div className="flex justify-center items-center gap-6 my-[50px]">
        {data.slice(8, 14).map((item) => (
        <div key={item.id} className="flex flex-col items-center card-container">
            <div className="card-image w-40 h-40 rounded-full flex justify-center items-center bg-gray-100 overflow-hidden">
            <img src={item.thumbnail} alt={item.title} className="w-32 h-32 object-contain" />
            </div>
            <p className="text-center mt-2 text-sm font-medium">{item.title}</p>
        </div>
        ))}
    
    </div>
    <div className='product-container flex  align-middle '>
    <p className='text-2xl font-semibold mb-2 text-gray-600 font-sans my-[40px] ml-[30px]'>{t('b4')}</p>
    <Link to="/category"><span className='flex my-[45px] ml-[-480px] text-blue-500 font-sans text-[20px]'>{t('b5')}  <BsArrowRight className="ml-3 w-4 h-4  my-[8px] [transform transition-transform duration-300 group-hover:translate-x-1" />  </span></Link>
    </div>
    
    </>
    )
    }

    export default Product