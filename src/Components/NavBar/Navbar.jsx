import { ShoppingCart } from 'lucide-react';
import React from 'react';

const Navbar = ({selectedCart}) => {
    return (
        <div>
            <div className='border-none shadow-2xl  mb-10'>
                <div className=' w-11/12 m-auto flex justify-between p-5'>
                    <h1 className='text-4xl font-bold bg-gradient-to-r from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent p-1'>DigiTools</h1>

                    <div className='flex items-center'>
                        <ul className='flex gap-4 list-none '>
                            <li>Products</li>
                            <li>Features</li>
                            <li>Pricing</li>
                            <li>Testimonials</li>
                            <li>FAQ</li>
                        </ul>
                    </div>

                    <div className='flex gap-6 items-center'>
                        <div className='indicator'>
                            <span className={`badge badge-sm indicator-item rounded-[100%] ${selectedCart.length===0? 'hidden':''}`}>{selectedCart.length}</span>
                            <ShoppingCart></ShoppingCart>
                            
                        </div>
                        <p>Login</p>
                        <div className=''>
                            <button className='btn bodyColor rounded-full text-white'>Get Started</button>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Navbar;