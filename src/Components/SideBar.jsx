import React, { useContext } from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { SidebarContext } from '../Contexts/SidebarContext'
import CardItem from './CardItem'
import { CartContext } from '../Contexts/CartContext'
import { Link } from 'react-router-dom'
import { BsFillTrashFill } from 'react-icons/bs'
import empty from './image/empty.png'


const SideBar = () => {

    const { isOpen, handleClose } = useContext(SidebarContext)
    const { cart, itemAmount, clearCartShop, total } = useContext(CartContext)


    return (
        <>
        <section className={`${isOpen ? "w-full": "-right-0"}  h-full bg-gray-800/40 fixed z-10 top-0 transition-all duration-500 `}>
            {/* {cart.length > 0 ? ()} */}
            <div className={`${isOpen ? "right-0" : "-right-full"} w-full h-full  fixed z-10 bg-white shadow-2xl top-0  md:w-[70%] lg:w-[40%] xl:w-[30%] transition-all duration-250 ease-in-out`}>

                <div className='flex justify-between items-center p-5 border-b'>
                    <div>
                        <p>YOUR SHOPPING CART IS ({itemAmount}) </p>
                    </div>
                    <div onClick={() => handleClose()} className='cursor-pointer'>
                        <BsArrowRight />
                    </div>
                </div>
                <div className='h-[520px] overflow-hidden border-b overflow-y-auto relative'>
                    {
                        cart.map((item) => {
                            return (

                                <CardItem item={item} key={item.id} />

                            )
                        })
                    }
                </div>
        
                <div className='flex justify-center'>
                    <div className='absolute top-[30%] '>
                        {cart.length > 0 ? (
                            <></>
                        ) : (
                            // <p className='text-gray-500 text-3xl'>Empty cart</p>
                            <img className='max-w-[200px]' src={empty} alt="" />
                        )}
                    </div>
                </div>

                <div className='flex justify-between mx-10 mt-10 items-center'>
                    <div>
                        <p className='font-bold'>Total:$ {parseFloat(total).toFixed(2)}</p>
                    </div>
                    <div onClick={() => clearCartShop()} className=' bg-red-500 p-2  hover:bg-red-600 cursor-pointer transition-all duration-300 rounded-full text-white'>
                        <BsFillTrashFill />
                    </div>
                </div>
                <Link className='bg-gray-200 flex justify-center items-center p-4 cursor-pointer mx-10 m-5 hover:bg-gray-300 transition-all duration-all' to={'/'}>View Cart</Link>
                <Link className='bg-orange-500 text-white flex justify-center items-center p-4 cursor-pointer mx-10 hover:bg-orange-400 duation-300 transition-all' to={'/'}>Check Out</Link>
            </div>



            </section>
        </>
    )
}

export default SideBar