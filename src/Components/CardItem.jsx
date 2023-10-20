import React, { useContext } from 'react'
import { AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { CartContext } from '../Contexts/CartContext';

const CardItem = ({ item }) => {

  // for remove cart
  const {removeCart,itemAmount,increaseAmount,decreaseAmount} = useContext(CartContext)

  const { id, image, title, price, amount} = item;

  return (
    <>

      <div>

        <div className='flex border-b gapx-x-4 '>
          <div className='flex space-x-5 w-full min-h-[150px] p-10'>
            <Link to={'/'}>
              <img className='max-w-[80px]' src={image} alt="" />
            </Link>
            <div className='cursor-pointer flex flex-col w-full'>
              <div className='flex justify-between'>
                <div>{title}</div>
                <div onClick={()=> removeCart(id)} className='cursor-pointer text-1xl'>
                  <AiOutlineClose />
                </div>
              </div>

              <div className='flex justify-between items-center'>
                <div className='flex gap-x-5 border max-w-[150px] p-3 justify-center mt-[10px] py-2 items-center'>
                  <div onClick={()=> decreaseAmount(id)} className='cursor-pointer'>
                    <AiOutlineMinus />
                  </div>
                  <div>
                    <p>{amount}</p>
                  </div>
                  <div onClick={()=> increaseAmount(id)} className='cursor-pointer'>
                    <AiOutlinePlus />
                  </div>
                </div>
                <div>
                  <p>$ {price}</p>
                </div>
                <div>
                  <p className='text-sm font-bold'>${`${parseFloat(price * amount).toFixed(2)}`}</p>
                </div>
              </div>
            </div>
          </div>


        </div>

      </div>

    </>
  )
}

export default CardItem