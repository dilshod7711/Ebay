import { AiOutlineArrowRight } from "react-icons/ai"; 
import React from 'react'
import abay from "../assets/abay.png"
import rasm from "../assets/3x.png"
import loved from "../assets/loved.png"
import { Link } from "react-router-dom";
import "../products2/Products.css"
import { useTranslation } from 'react-i18next'

const Products2 = () => {
    const { t,i18n } = useTranslation();
  return (
   <>
   <div className="flex flex-col md:flex-row border-t border-gray-200 divs">
  <div className="flex-col p-4">
    <div className="text-sm text-gray-500 mb-2">{t('b7')}</div>
    <img src={abay} alt="Ebay Logo" className="w-24 mb-4 ml-[-2px]" />
    <div className="text-xl font-semibold mb-2 text-gray-600 font-sans text-start w-[550px]">
     {t('b8')}
    </div>
    <div className="text-gray-600 mb-4">
      {t('b9')}
    </div>
    <Link to={"/login"}><button className="px-3 py-2 w-[200px] bg-white border border-gray-400 rounded shadow hover:bg-gray-100 flex items-center">
      {t('b10')}<AiOutlineArrowRight />
    </button></Link>
  </div>

  <div className="flex flex-1 justify-center md:ml-[]">
    <img className="w-[300px] md:w-[500px] object-contain" src={rasm} alt="" />
  </div>

  <div className="flex justify-center items-center ">
    <img className="w-[250px] md:w-[310px] object-contain" src={loved} alt="Loved Products" />
  </div>
</div>

<div className="my-[40px] flex justify-between items-center">
  <p className="text-2xl font-semibold mb-2 text-gray-600 font-sans">
    {t('b6')}
  </p>
  <Link to={"/category"}><span className=" ml-[-300px]  text-[20px] flex items-center text-blue-500 cursor-pointer hover:underline">
    {t('b5')}
    <AiOutlineArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 transform hover:translate-x-1" />
  </span></Link>
</div>
   
   </>
  )
}

export default Products2