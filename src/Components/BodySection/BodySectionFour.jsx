import { Check } from 'lucide-react';
import React from 'react';

const BodySectionFour = () => {
    return (
        <div>
            {/* All the pricing card div  */}
            <div className='w-11/12 mx-auto p-5'>
                <div className='  text-center mb-5'>
                    <h1 className='text-5xl font-medium m-2.5'>Simple, Transparent Pricing</h1>
                    <p className='text-gray-400'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
                </div>

                <div className='flex flex-col md:flex-row gap-5 items-stretch '>
                    {/* card one  */}
                    <div className='flex flex-col border shadow-2xl border-gray-200 rounded-2xl p-6 gap-2.5 flex-1  '>


                        <h2 className='text-2xl font-semibold'>Starter</h2>

                        <p className='text-gray-500'>Perfect for getting started</p>

                        <div className='flex '>
                            <h1 className='text-xl font-semibold'>$0</h1>
                            <h1 ><sub className='text-gray-400 text-[14px]'>/Month</sub> </h1>
                        </div>
                        {/* it is the features section of my card  */}
                        <ul>
                            <li className='flex text-gray-500'><Check className='text-green-400 w-4 mr-2.5'></Check><p>Access to 10 free tools</p></li>
                            <li className='flex text-gray-500'><Check className='text-green-400 w-4 mr-2.5'></Check><p>Basic templates</p></li>
                            <li className='flex text-gray-500'><Check className='text-green-400 w-4 mr-2.5'></Check><p>Community support</p></li>
                            <li className='flex text-gray-500'><Check className='text-green-400 w-4 mr-2.5'></Check><p>1 project per month</p></li>

                        </ul>

                        {/* card button  */}
                        <div className={`btn rounded-3xl btn-w-full flex justify-center mt-auto bodyColor  text-white`}>
                            <button  >Get Started Free</button>
                        </div>

                    </div>

                    {/* card -two  */}
                    <div className='flex flex-col border shadow-2xl border-gray-200 rounded-2xl p-6 gap-2.5 flex-1 bodyColor text-white relative'>
                        <div className='absolute -top-4 left-1/2 -translate-x-1/2'>

                            <div className='flex w-fit px-1.5 p-1 rounded-3xl bg-amber-100'>
                                <p className='text-[14px] text-red-400 '>Most Popular</p>
                            </div>
                        </div>


                        <h2 className='text-2xl font-semibold text-white'>Pro</h2>

                        <p className='text-white '>Best for professionals</p>

                        <div className='flex '>
                            <h1 className='text-xl font-semibold'>$29</h1>
                            <h1 ><sub className='text-[14px]'>/Month</sub> </h1>
                        </div>
                        {/* it is the features section of my card  */}
                        <ul className=''>
                            <li className='flex'><Check className='text-green-400 w-4 mr-2.5'></Check><p>Access to all premium tools</p></li>
                            <li className='flex  '><Check className='text-green-400 w-4 mr-2.5'></Check><p>Unlimited templates</p></li>
                            <li className='flex'><Check className='text-green-400 w-4 mr-2.5'></Check><p>Priority support</p></li>
                            <li className='flex'><Check className='text-green-400 w-4 mr-2.5'></Check><p>Unlimited projects</p></li>
                            <li className='flex'><Check className='text-green-400 w-4 mr-2.5'></Check><p>Cloud sync</p></li>
                            <li className='flex'><Check className='text-green-400 w-4 mr-2.5'></Check><p>Advanced analytics</p></li>

                        </ul>

                        {/* card button  */}
                        <div className={`btn rounded-3xl btn-w-full flex justify-center mt-auto  border`}>
                            <button className='bg-gradient-to-r from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent p-1' >Start Pro Trial</button>
                        </div>

                    </div>

                    {/* card - three  */}
                    <div className='flex flex-col border shadow-2xl border-gray-200 rounded-2xl p-6  gap-2.5 flex-1 '>


                        <h2 className='text-2xl font-semibold'>Enterprise</h2>

                        <p className='text-gray-500'>For teams and businesses</p>

                        <div className='flex '>
                            <h1 className='text-xl font-semibold'>$99</h1>
                            <h1 ><sub className='text-gray-400 text-[14px]'>/Month</sub> </h1>
                        </div>
                        {/* it is the features section of my card  */}
                        <ul>
                            <li className='flex text-gray-500'><Check className='text-green-400 w-4 mr-2.5'></Check><p>Everything in Pro</p></li>
                            <li className='flex text-gray-500'><Check className='text-green-400 w-4 mr-2.5'></Check><p>Team collaboration</p></li>
                            <li className='flex text-gray-500'><Check className='text-green-400 w-4 mr-2.5'></Check><p>Custom integrations</p></li>
                            <li className='flex text-gray-500'><Check className='text-green-400 w-4 mr-2.5'></Check><p>Dedicated support</p></li>
                            <li className='flex text-gray-500'><Check className='text-green-400 w-4 mr-2.5'></Check><p>SLA guarantee</p></li>
                            <li className='flex text-gray-500'><Check className='text-green-400 w-4 mr-2.5'></Check><p>Custom branding</p></li>

                        </ul>

                        {/* card button  */}
                        <div className={`btn rounded-3xl btn-w-full flex justify-center mt-auto bodyColor  text-white`}>
                            <button  >Get Started Free</button>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default BodySectionFour;