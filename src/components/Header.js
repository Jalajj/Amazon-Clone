import React from 'react'
import Image from 'next/image';
import {signIn, signOut, useSession} from "next-auth/client"
import {
    MenuIcon,
    SearchIcon,
    ShoppingCartIcon,
} from "@heroicons/react/outline";
import {useRouter} from "next/router";
import {useSelector} from "react-redux"
import {selectItems} from "../slices/basketSlice"


function Header() {
const [session] = useSession();
const router = useRouter();
const items = useSelector(selectItems);

    return (
        <header>
            <div className="flex items-center bg-amazon_blue p-1 h-16 flex-grow py-2">
                <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
                 <img 
                 onClick = {() => router.push('/')}
                 src="images/amalogo.png" height={1} width={100} />
                </div>
                 {/*Search */}
                 <div className= "hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
                   <input className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none" type="text" />
                   <SearchIcon className="h-12 p-4" />
                 </div>
                 {/*Right*/}
                 <div className="text-white flex items-center text-xs space-x=6 mx-6">
                     <div onClick={!session ? signIn: signOut} className="cursor-pointer link">
                       <p>
                           {session ? `Hello, ${session.user.name}` : "Sign In"}
                       </p>
                       <p className="font-extrabold md:text-sm">Account & Lists</p>
                     </div>
                     <div className="mx-6 cursor-pointer link">
                         <p>Returns</p>
                         <p className="font-extrabold md:text-sm">& Orders</p>
                     </div>
                     <div onClick={() => router.push("/checkout") } className="cursor-pointer relative link flex items-center">
                         <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
                          {items.length}
                         </span>

                         <ShoppingCartIcon className="h-10" />
                         <p className="hidden md:inline mt-2 font-extrabold md:text-sm">Basket</p>
                     </div>
                 </div>
            </div>
           {/*Bottom nav*/}
           <div className="flex items-center space-x-3 p-2  bg-amazon_blue-light text-white text-small">
             <p className="link flex items-center"><MenuIcon className="h-6 mr-1 m-2 " /> 
             ALL</p>
             <p className="link">Prime Video</p>
             <p className="link">Amazon Business</p>
             <p className="link">Today's deals</p>
             <p className="link hidden lg:inline-flex">Electronics</p>
             <p className="link hidden lg:inline-flex">Food & Grocery</p>
             <p className="link hidden lg:inline-flex">Prime </p>
             <p className="link hidden lg:inline-flex">Buy Again</p>
             <p className="link hidden lg:inline-flex">Shopper Tookit</p>
             <p className="link hidden lg:inline-flex">Health & Personal Care</p>
           </div>
        </header>
    )
}

export default Header;
