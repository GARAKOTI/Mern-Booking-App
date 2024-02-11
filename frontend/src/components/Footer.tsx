import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-blue-800 py-10 ' >
    <div className=' container mx-auto flex items-center justify-between '>
        <span className='text-3xl font-bold tracking-tight text-white'>MyHoliday.com</span>
        <span className='font-bold text-white tracking-tight flex gap-4'>
            <Link to ="#" >Privacy Policy</Link>
            <Link to= "#">Terms of Service</Link>
        </span>
    </div>
    </div>
  )
}

export default Footer