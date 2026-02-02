import { NavLink } from 'react-router-dom'
import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { ShopContext } from '../context/ShopContext'



const Login = () => {
  const { token, setToken, navigate, backend_Url, } = useContext(ShopContext);
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  
  useEffect(() => {
    if (token) {
      navigate('/')
    }
  }, [navigate, token])




  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(backend_Url + '/user/login', { email, password });
      if (response.data.success) {
        setToken(response.data.token);
                localStorage.setItem('token', response.data.token);
      } else {
        console.log(response.data.message);
      }

    } catch (error) {
        console.log(error.message);
    }
  }



  return (
    <div className='py-[70px]'>
      <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800' action="">
        <div className='inline-flex items-center gap-2 mb-2 mt-10'>
          <p className='prata-regular text-blue-900 text-3xl'>Login</p>
          <hr className='border-none h-[1.5px] w-8 bg-blue-900' />
        </div>
        <input onChange={(e) => setemail(e.target.value)} value={email} className='w-full px-3 py-2 border border-gray-800' placeholder='Email' type="email" required />
        <input onChange={(e) => setpassword(e.target.value)} value={password} className='w-full px-3 py-2 border border-gray-800' placeholder='Password' type="password" required />
        <div className='w-full flex justify-between text-sm mt-[-8px]'>
          <p className='cursor-pointer'>Forgot your password?</p>
          <NavLink to={'/user/register'}>
            <p className="cursor-pointer">Create account</p>
          </NavLink>

        </div>
        <button className='box-availableBalance w-full text-white font-light px-8 py-2 mt-4 '>Login</button>
      </form>
    </div>
  )
}

export default Login
