import { Dot, Play } from 'lucide-react';
import React from 'react';
import circle from '../../assets/circle.png'
import banner from '../../assets/banner.png'
const Banner = () => {
    return (
        <div>
            {/* it is the container */}
            <div className='w-11/12 m-auto flex flex-col-reverse md:flex-row justify-center items-center gap-20 mb-10'>
            {/* it is the text and button section  */}
                <div className='flex flex-col w-fit h-fit text-ce space-y-2.5'>
                    <div className='flex justify-center md:justify-start '>
                        <div className='flex w-fit justify-center md:justify-start py-1 px-2.5 rounded-2xl bg-[#5d66e63b] gap-1.5'>
                            <div className='flex items-center object-contain'>
                                <img src={circle} alt="circle" />
                            </div>
                            <p className='bg-gradient-to-r from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent font-medium'> New: AI-Powered Tools Available</p>
                        </div>
                    </div>
                    <h1 className='text-5xl font-bold text-center md:text-left'>Supercharge Your<br /><span className='bg-gradient-to-r from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent'>Digital Workflow</span> </h1>
                    <p className='text-gray-300'>
                        Access premium AI tools, design assets, templates, and productivity<br/>
                        software—all in one place. Start creating faster today.<br/>
                        <br/>

                        Explore Products
                    </p>

                    <div className='flex gap-4 justify-center md:justify-start'>
                        <button className='btn rounded-3xl bodyColor text-white'>
                            Explore Products
                        </button>
                        <button className='flex gap-1.5 text-[#4f39f6] btn rounded-3xl bg-white border border-[#4f39f6] btnBgColor'>
                            <Play className='w-5 '></Play>
                            <p>Watch Demo</p>
                        </button>
                    </div>
                </div>
                {/* it is the image section  */}
                <div className='flex justify-center items-center'>
                    <img src={banner} alt="banner" />
                </div>

            </div>

        </div>
    );
};

export default Banner;