import { AiOutlineArrowRight } from "react-icons/ai"; 
import { Link } from 'react-router-dom';
import { FcLike } from 'react-icons/fc';
import "../brand/Brand.css";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next'
import { useFitch } from '../../hooks/useFitch'


const Navigation = () => {
  const { t,i18n } = useTranslation();
  const data = useFitch("/products")
  return (
   <div className="">
     <div className="flex ">
      <ul className="flex gap-[16px] py-2 ml-[3 0px] ">
        <li><Link className="nav-link ">{t('h1')}</Link></li>
        {/* <FcLike className='text-[20px] my-auto text-black' /> */}
        <li><Link className="nav-link ">{t('h2')}</Link></li>
        <li><Link className="nav-link">{t('h3')}</Link></li>
        <li><Link className="nav-link">{t('h4')}</Link></li>
        <li><Link className="nav-link ">{t('h5')}</Link></li>
        <li><Link className="nav-link w-[70px] ">{t('h6')}</Link></li>
        <li><Link className="nav-link">{t('h7')}</Link></li>
        <li><Link className="nav-link">{t('h8')}</Link></li>
        <li><Link className="nav-link ">{t('h9')}</Link></li>
        <li><Link className="nav-link ">{t('h10')}</Link></li>
        <li><Link className="nav-link ">{t('h11')}</Link></li>
        <li><Link className="nav-link ">{t('h12')}</Link></li>
      </ul>
    </div>
    <div className="bg-[#FEB786] h-[330px]  flex ">
    <div className=" flex items-center ml-[100px]">
    <div className="w-[330px] ">
    <h1 className="text-[40px] italic  w-[300px] text-[#5C1B05] ">{t("b1")}</h1>
    <h3 className=" text-[#5C1B05]" >{t("b2")}</h3>
    <div className="py-[20px]">
      <Link to={"/login"}>    <button className="px-[40px] py-[10px] border-2 border-black flex items-center gap-2 hover:bg-black hover:text-white text-[#5C1B05] ">{t("b3")}<AiOutlineArrowRight /></button>
      </Link>
    </div>
     </div>
    </div>
<div>
</div>
<div className="flex justify-around w-full p-5"> 

<div className="flex  ">
{data.slice(6,9).map((data) => (
            <div  key={data.id} className="flex flex-col items-center p-3 max-w-[250px] ">
                <p className="flex items-center gap-2 ">{data.title}<AiOutlineArrowRight />  </p>
                <br />
              <img src={data.images[0]} alt={data.title} className=" my-3 align-center w-[500px] h-auto rounded-md transition-transform duration-300 transform hover:scale-105" />
            </div>
          ))}
</div>
         
        </div>

</div>



   </div>
  );
};

export default Navigation;
