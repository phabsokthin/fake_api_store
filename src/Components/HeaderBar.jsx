import React, { useContext } from 'react'
import { SidebarContext } from '../Contexts/SidebarContext'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { CartContext } from '../Contexts/CartContext'

const HeaderBar = () => {

  const {isOpen, setIsOpen} = useContext(SidebarContext)
  const {itemAmount} = useContext(CartContext)

  return (
    <>
    
    <div className="container mx-auto">
        <div className='flex justify-between py-5 p-5'>
            <div>
                <Link to={'/'}>
                    Home
                </Link>
            </div>
            <div onClick={() =>setIsOpen(!isOpen)}  className='cursor-pointer relative text-3xl'>
                <AiOutlineShoppingCart className='hover:text-red-500'/>
                <div className='absolute -right-2 -bottom-0 bg-orange-500 px-1 rounded-full text-white'>
                    <p className='text-sm '>{itemAmount}</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default HeaderBar