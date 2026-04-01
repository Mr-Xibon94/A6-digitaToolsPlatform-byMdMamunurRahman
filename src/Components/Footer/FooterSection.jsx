import React from 'react';
import fb from '../../assets/facebook.png'
import insta from '../../assets/Instagram.png'
import twit from '../../assets/Twitter.png'

const FooterSection = () => {
    return (
        <div>
            <div className='bg-black p-5 mt-10'>
                <div className='flex w-11/12 mx-auto gap-2.5 py-15'>
                    <div className='flex flex-col text-white flex-1 gap-5 px-10 mr-10'>
                        <h1 className='text-5xl font-medium'>DigiTools</h1>
                        <p className='text-white opacity-70'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                    </div>

                    <div className='text-white flex-1 flex flex-col gap-2.5'>
                        <h1 className='text-xl'>Product</h1>
                        <ul className='text-white opacity-70 flex flex-col gap-2.5'>
                            <li>Features</li>
                            <li>Pricing</li>
                            <li>Templaes</li>
                            <li>Integrations</li>
                            
                        </ul>
                    </div>

                    <div className='text-white flex-1 flex flex-col gap-2.5'>
                        <h1>Company</h1>
                        <ul className='text-white opacity-70 flex flex-col gap-2.5'>
                            <li>About</li>
                            <li>Blog</li>
                            <li>Careers</li>
                            <li>press</li>
                            
                        </ul>
                    </div>

                    <div className='text-white flex-1 flex flex-col gap-2.5 '>
                        <h1>Resources</h1>
                        <ul className='text-white opacity-70 flex flex-col gap-2.5'>
                            <li>Documnetation</li>
                            <li>Help Center</li>
                            <li>Community</li>
                            <li>Contact</li>
                            
                        </ul>
                    </div>

                    <div className='flex flex-col gap-2.5'>
                        <h1 className='text-white align-text-xl'>Social Links</h1>
                        <div className='flex gap-1.5'>
                            <img src={fb} alt="" />
                            <img src={insta} alt="" />
                            <img src={twit} alt="" />
                        </div>
                    </div>
                    
                </div>

                <hr className='w-11/12 mx-auto  border-white opacity-30  my-6 mb-10' />
                <div className='flex justify-between w-11/12 mx-auto'>
                    <h1 className='text-white opacity-70'>&copy: 2026 Digitools. All right reserved.</h1>
                    <div className='text-white opacity-70 flex gap-3.5'>
                        <h1>Privacy Policy</h1>
                        <h1>Terms of Service</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterSection;