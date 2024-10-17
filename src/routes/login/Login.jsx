import React from 'react'
import { useTranslation } from 'react-i18next'
import { useFitch } from '../../hooks/useFitch'
import { useState } from 'react'
 import "../login/Login.css"
 import { Link } from 'react-router-dom'
 import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
 import axios from "../../api/axios"
import { useNavigate } from 'react-router-dom';
import abay from "../../assets/abay.png"
import { Checkbox } from 'antd';

const Login = () => {
  const { t,i18n } = useTranslation();

   const navigate = useNavigate();
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const [loading, setLoading] = useState(false);
 
 const onChange = (e) => {
   
 }
   const handleUserLogin = async (e) => {
     e.preventDefault();
     setLoading(true); 
 
     try {
       const response = await axios.post("/auth/login", { username, password });
       if (response.status === 200) {
        //  alert ("User registered successfully 🙂");
         
       
         navigate("/");
 
        Toastify({
          text: "User registered sucssesufully",
          duration: 3000,
          destination: "https://github.com/apvarun/toastify-js",
          newWindow: true,
          close: true,
          gravity: "top", // top or bottom
          position: "left", // left, center or right
          stopOnFocus: true, // Prevents dismissing of toast on hover
          style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          },
          onClick: function(){} // Callback after click
        }).showToast();
 
 
       }
     } 
     
     
     catch (error) {
       alert("Registration failed. Please try again.");
     } finally {
       setLoading(false); 
     }
 
   };
  return (

   <div className='login'>
   <div className='flex justify-between items-center w-full gap-[1000px]'>
   <div>
     <Link to={"/"}> <img className='image ml-[0px] my-[20px]' src={abay} alt="" /></Link>
    </div>
    <div>
    <select className=' uz text-black select border-b' defaultValue={i18n.language} onChange={(e) => i18n.changeLanguage(e.target.value)}>
        <option value="uz">UZ uz</option>
        <option value="ru">RU ru</option>
        <option value="en">EN en</option>
     </select>
    </div>
   </div>
     <div className='login-container'>
      
      <div className='login-form shadow-md'>
      <div className='text'>
        <h1 className='text-black text-[40px] ml-[140px]'>{t('navv')}</h1>
       

        <span className='text-black text-lg ml-[30px] '>{t('bt')} <a className='text-[#3665F3] border-b border-[#3665F3] ' href="">{t('bt2')}</a></span>
      </div>
      <form className='form' onSubmit={handleUserLogin}>
        <div className="field">
          <div className="fas fa-user"></div>
          <input required
            type="text"
            placeholder='Enter your username'
            onChange={(e) => setUsername(e.target.value)}
            disabled={loading}
          />
        </div>
        
        <div className="field">
          <div className="fas fa-lock"></div>
          <input required
            type="password"
            placeholder='Enter your password'
            onChange={(e) => setPassword(e.target.value)}
            disabled={loading}
          />
        </div>
       
        <button  onClick={() => {
          const audio = new Audio();
          audio.play();
        }}
          className='form__button'
          type='submit'
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Login'}
        </button>
        
      </form>
    </div>
    </div>
    <div className='text-center'>
    <Checkbox onChange={onChange}></Checkbox> 
    <span className='ml-2'>{t('l')}</span>
    <p>{t("l2")}?</p>
    <p>{t("l3")}.</p>
    <a className='text-[#3665F3] border-b border-[#3665F3] ' href="">{t('lm')}</a>

    </div>
    <div className='w-[500px] h-[238px] p-[24px] bg-[#3665F3] border-b my-[10px] mt-[30px] '>

     <p className='w-300px'>{t('cd')}</p>
    </div>
    <div className="footer-bottom container mx-auto mt-8 text-center border-t border-gray-700 pt-4 my-[50px]">
    <p className="footer-copyright text-sm text-gray-400 hover:text-gray-200">
      {t('footer_copyright')}
    </p>
  </div>
   </div>
  )
}

export default Login