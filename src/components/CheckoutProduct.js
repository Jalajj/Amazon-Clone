import Image from 'next/image'
import React,{useState} from 'react'
import {StarIcon} from "@heroicons/react/solid"
import Currency from "react-currency-formatter"
import { useDispatch } from 'react-redux'
import {addToBasket, removeFromBasket } from "../slices/basketSlice"


function CheckoutProduct({id, title, rating, price, hasPrime, description, category,image}) {
 const dispatch = useDispatch();
 
    const addItemtoBasket =() => {
        const product = {
            id, title, rating, price, hasPrime, description, category,image,
        }
    dispatch(addToBasket(product));
 };
 const removeItemFromBasket = () => {
   dispatch(removeFromBasket({id}));
 }
  
    return (
        <div className="grid grid-cols-5">
            <Image src={image} height={200} width={200} objectFit="contain" />
            <div className="col-span-3 mx-5">
               <p>{title}</p>
               <div className="flex">
               {Array(rating)
          .fill()
          .map((_, i) =>(
              <StarIcon key={i} className="text-yellow-500" height={20} />
          ))}
               </div>
               <p className=" text-xs my-2 line-clamp-3 ">{description}</p>
               <Currency quantity={price} currency="GBP" />
               {hasPrime && (
                   <div className="flex items-center space-x-2">
                    <img className="w-12" loading="lazy" src="images/Prime.svg" alt="prime" />
                   </div>
               )}
            </div>
           {/* Right add and remove button */}
           <div className="flex flex-col space-y-2 my-auto justify-seld-end">
               <button onClick={addItemtoBasket} className="button">Add to Basket</button>
               <button onClick={removeItemFromBasket} className="button">Remove from Basket</button>
           </div>
        </div>
    )
}

export default CheckoutProduct
