import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ProductContext } from '../Contexts/ProductContext';
import { CartContext } from '../Contexts/CartContext';

const ProductDetail = () => {
  //add to cart
  const {addTocart} = useContext(CartContext)
  // end add to cart

  const {id} = useParams();
  const {products} = useContext(ProductContext)

  const product = products.find((item) => {
    return item.id === parseInt(id)
  })

  if(!product){
    return(
      <>
      
        <section className='flex items-center justify-center h-screen font-bold'>Loading...</section>
      
      </>
    )
  }

  const {image, title, category, price } = product

  return (
    <>
    
     <div className='flex justify-center items-center h-screen '>
      <div className='flex items-center space-x-10 gap-y-5'>
        <div>
          <img className='max-w-[300px]' src={image}/>
        </div>
        <div className='w-[300px]'>
            <p className='text-sm'>{category}</p>
            <p className='text-2xl'>{title}</p>
            <p className='font-bold text-red-500'>$ {price}</p>
            <div onClick={()=> addTocart(product, product.id)}>
               <button className='bg-blue-500 p-2 px-2 mt-3 rounded-md hover:bg-blue-400 text-white'>Add to cart</button>
            </div>
        </div>
        <div>
          
        </div>
      </div>
     </div>
    
    </>
  )
}

export default ProductDetail