import React from 'react'
import { Link } from "react-router-dom"

import gh from "../../assets/gh.png"
import shop from "../../assets/shop.png"
import abay from "../../assets/abay.png"
import { useTranslation } from 'react-i18next'
import "../navbar/nav.css"
const Nav = () => {
    const { t, i18n } = useTranslation()
    const onChange = (value) => {
        
    }
    const onSearch = (value) => {
        
    }
  return (
<div  className='border-b'>
        
 <div className='flex justify-between py-4 align-middle items-center gap-[150px] border-b  '>
            <div className='flex'>
                        <h1>{t('nav1')} <Link className='text-blue-500' to ="/login"> {t('nav2')}</Link> {t('nav3')} <Link className='text-blue-500' to ="/login">{t('nav4')}            </Link></h1>
            </div>
            <div className='flex gap-[40px] ml-[-150px]'>
                <ul><li><Link>{t('nav5')}</Link></li></ul>
                <ul><li><Link>{t('nav6')}</Link></li></ul>
                <ul><li><Link>{t('nav7')}</Link></li></ul>
            </div>
            <div className='flex gap-[20px]
            '>
                <p>{t('nav8')}</p>
               <select className='text-black  select '>
                   <option value="">{t('nav9')}</option>
               </select>
               <select className=' uz text-black select border-b' defaultValue={i18n.language} onChange={(e) => i18n.changeLanguage(e.target.value)}>
        <option value="uz">UZ uz</option>
        <option value="ru">RU ru</option>
        <option value="en">EN en</option>
     </select>
               <img src={gh} alt="" />
            <img src={shop} alt="" />
            </div>
 </div>
 <div className="  flex items-center   p-4 bg-white ml-[100px]  border-b py-[40px] ">
 <div className="logo">
 <Link to={"/"}>   <img src={abay} alt="logo" className="w-[290px] ml-[-170px] cursor-pointer " /></Link>
  </div>
  
    <div className="flex items-center space-x-2">
      <p className="hover:underline cursor-pointer ml-[-330px]">{t('nav10')}</p>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
    
    <div className="flex items-center w-full max-w-2xl ml-4 ">
      <input
        type="text"
        placeholder={t('nav11')}
        className="w-[500px] py-2 px-4 border  rounded-l-lg ml-[-170px] focus:outline-none"
      />
      <select className="border-t border-b border-r py-2 px-2 focus:outline-none">
        <option>{t('nav12')}</option>
      </select>
      <button className="bg-blue-500 text-white py-2 px-16 ml-[10px] rounded-[2px]">{t('nav13')}</button>
      <p className="ml-[16px] text-gray-400 hover:underline cursor-pointer ml-[10px]">{t('nav14')}</p>
 </div>

</div>

</div>
  )
}

export default Nav