import React from 'react';
import user from '../../assets/user.png'
import packageimg from '../../assets/package.png'
import rocket from '../../assets/rocket.png'

const BodySectionThree = () => {
    return (
        <div>
           <div className='bg-gray-50 py-10'>
             <div className='w-11/12 mx-auto p-5'>
                <div className=' mb-5 text-center '>
                    <h1 className='text-5xl font-medium m-2.5'>Get Started in 3 Steps</h1>
                    <p className='text-gray-400'>Start using premium digital tools in minutes, not hours.</p>
                </div>
                {/* here all of my get started card  */}
                <div className='flex flex-col justify-center md:flex-row md:justify-between gap-2.5  bg-gray-50'>
                    {/* card - 01 */}
                    <div className=' rounded-2xl p-5 bg-white border-none shadow-2xl space-y-2.5'>
                        <div className='flex justify-end'>
                            <div className='flex w-fit rounded-full p-1 bodyColor text-white '>
                            <p className=' justify-end'>01</p>
                        </div>
                        </div>
                        <div className='flex justify-center'>
                            <div className='flex w-fit justify-center rounded-full p-5 bg-[#5d66e63b]'>
                            <img className='w-20' src={user} alt="" />
                        </div>
                        </div>
                        <div className='text-center'>
                            <h1 className='text-2xl font-medium'>Create Account</h1>
                            <p className='text-gray-400'>Sign up for free in seconds. No credit card<br/> required to get started.</p>
                        </div>
                    </div>
                    {/* card - 02 */}
                    <div className=' rounded-2xl p-5 bg-white border-none shadow-2xl space-y-2.5'>
                        <div className='flex justify-end'>
                            <div className='flex w-fit rounded-full p-1 bodyColor text-white '>
                            <p className=' justify-end'>02</p>
                        </div>
                        </div>
                        <div className='flex justify-center'>
                            <div className='flex w-fit justify-center rounded-full p-5 bg-[#5d66e63b]'>
                            <img className='w-20' src={packageimg} alt="" />
                        </div>
                        </div>
                        <div className='text-center'>
                            <h1 className='text-2xl font-medium'>Choose Products</h1>
                            <p className='text-gray-400'>Browse our catalog and select the tools<br/>that fit your needs.</p>
                        </div>
                    </div>
                        {/* card -03 */}
                    <div className=' rounded-2xl p-5 bg-white border-none shadow-2xl space-y-2.5'>
                        <div className='flex justify-end'>
                            <div className='flex w-fit rounded-full p-1 bodyColor text-white '>
                            <p className=' justify-end'>03</p>
                        </div>
                        </div>
                        <div className='flex justify-center'>
                            <div className='flex w-fit justify-center rounded-full p-5 bg-[#5d66e63b]'>
                            <img className='w-20' src={rocket} alt="" />
                        </div>
                        </div>
                        <div className='text-center'>
                            <h1 className='text-2xl font-medium'>Start Creating</h1>
                            <p className='text-gray-400'>Download and start using your premium <br/>tools immediately.</p>
                        </div>
                    </div>
                </div>
            </div>
           </div>
            
        </div>
    );
};

export default BodySectionThree;