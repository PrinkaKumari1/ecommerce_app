import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
            <img src={assets.logo} alt="" srcset="" className='mb-5 w-32'/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis reprehenderit ab repellendus quae accusantium deserunt doloremque blanditiis quod asperiores fuga harum nihil, officiis impedit exercitationem ipsum quaerat corporis corrupti aliquid?</p>
        </div>

        <div>
            <p className='text-xl fonte-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>

        <div>
            <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+92-3363609655</li>
                <li>prinka.kumaari@gmail.com</li>
            </ul>
        </div>

        <div>
            <hr />
            <p className="py-5 text-sm text-center">Copyright 2024@prinka.kumaari@gmail.com</p>
        </div>
    </div>
  )
}

export default Footer