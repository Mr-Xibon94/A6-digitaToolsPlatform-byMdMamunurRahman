import { ShoppingCart } from 'lucide-react';
import React from 'react';

const Navbar = ({selectedCart}) => {
    return (
        <div>
            <div className='border-none shadow-2xl  mb-10'>
                <div className=' w-11/12 m-auto flex flex-col md:flex-row text-center md:flex-col  -center gap-5  md:justify-between p-5'>
                    <h1 className='text-4xl font-bold bg-gradient-to-r from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent p-1'>DigiTools</h1>

                    <div className='flex items-center'>
                        <ul className='flex gap-4 flex-wrap justify-center  list-none '>
                            <li className='border rounded-2xl px-1 md:border-none'>Products</li>
                            <li className='border rounded-2xl px-1 md:border-none'>Features</li>
                            <li className='border rounded-2xl px-1 md:border-none'>Pricing</li>
                            <li className='border rounded-2xl px-1 md:border-none'>Testimonials</li>
                            <li className='border rounded-2xl px-1 md:border-none'>FAQ</li>
                        </ul>
                    </div>

                    <div className='flex gap-6 items-center justify-center'>
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