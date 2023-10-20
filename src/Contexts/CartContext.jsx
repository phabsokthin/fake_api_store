import React, { createContext, useEffect, useState } from 'react'

export const CartContext = createContext();

const CartProvider = ({children}) => {


  // add to cart
  const [cart, setCart] = useState([])

  // for condition 1 for console

  // const addTocart = (product, id) =>{
  //   console.log(`${product.id} Cart`)
  // }

  //for condition2 for console
  // const addTocart = (prodct, id) => {
  //   const newItem = {...prodct, amount:1}
  //   console.log(newItem)
  // }

  // condition 3  show on  carditem

  const addTocart = (prodct,id) => {
    const newItem = {...prodct, amount: 1};
    const cartItem = cart.find((item) => {
      return item.id === id
    });

    if(cartItem){
      const newCart = [...cart].map(item => {
        if(item.id === id){
          return {...item, amount: cartItem.amount + 1};
        }else{
          return item;
        }
      });
      setCart(newCart);
    }else{
      setCart([...cart, newItem])
    };
  };
 // console.log(cart);
 // end add to cart

  //for increase your shopping is 0
  const [itemAmount, setItemAmount] = useState(0)
  // increase
  useEffect(() => {
    if(cart){
      const amount  = cart.reduce((calAmount, currentItem) => {
        return calAmount + currentItem.amount;
      }, 0);

      setItemAmount(amount)
    }
  })

  //end increase your shopping

  //remove cart

  const removeCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart)
  }
  //end of remove cart

  // for increase cart
  const increaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    addTocart(cartItem, id)
}

  // end for increase cart 

  // for decrease amount

  const decreaseAmount = (id) => {
    const cartItem = cart.find((item) =>{
      return item.id === id;
    });

    if(cartItem){
      const newCart = cart.map((item) => {
        if(item.id === id){
          return {...item, amount: cartItem.amount - 1};
        }else{
          return item
        }
      });
      setCart(newCart)
    }

  //   //cannot decrease untill minus
     if(cartItem.amount < 2){
     //removeCart(id)
       removeCart(false)
     }
   }

  //end decrease amount

  // for clear all
  const clearCartShop = () => {
    setCart([]);
  } 
  //end all clear cart

  // for set calculate toal

  const [total, setToal] = useState(0)
  useEffect(()=>{
    const total = cart.reduce((calcuateall, currentItem)=>{
      return calcuateall + currentItem.price * currentItem.amount;
    }, 0);
    setToal(total);
  })

  return (
    <CartContext.Provider value={{ cart,addTocart, itemAmount,removeCart,increaseAmount,decreaseAmount,clearCartShop, total}}>{children}</CartContext.Provider>
  )
}

export default CartProvider