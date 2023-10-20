import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../Contexts/CartContext';

const Product = ({ product }) => {

    const {addTocart} = useContext(CartContext);
    const { id, image, category, title, price } = product;

    return (
        <>

            <div>
                <div className='border border-[#e4e4e4] h-[300px] relative mb-4 group overflow-hidden'>
                    <div className='w-full h-full flex justify-center items-center'>
                        <div className='flex justify-center mx-auto w-[200px]'>
                            <img className='max-h-[160px] group-hover:scale-110 transition duration-300 cursor-pointer' src={image} />
                        </div>
                    </div>
                </div>
                <div className=''>
                    <p className='text-sm font-bold text-gray-700'>{category}</p>
                    <p className='text-1xl'>{title}</p>
                    <p className='font-bold text-red-500'>$ {price}</p>
                </div>
                <div onClick={()=> addTocart(product, id)}  className='flex justify-center'>
                    <button className='bg-orange-500 px-4 p-2 text-white font-bold rounded-md hover:bg-orange-400 transtion-all duration-300'>Add To Cart</button>
                </div>
                <div className='flex justify-center mt-3'>
                    <Link to={`/product/${id}`}>
                        <button className='bg-blue-500 px-4 p-2 text-white font-bold rounded-md hover:bg-blue-400 transtion-all duration-300'>View Detail</button>
                    </Link>
                </div>


            </div>

        </>
    )
}

export default Product