import React from 'react';

const BodySectionOne = () => {
    return (
        <div>
            <div className='bodyColor mb-10'>
                <div className='w-11/12 mx-auto px-10 flex flex-col md:flex-row justify-center gap-20 p-10 text-white'>
                    <div className='text-center'>
                        <p className='text-4xl font-medium mb-3'>50K+</p>
                        <p className='text-white opacity-45'>Active Users</p>
                    </div>

                        <div className="divider divider-vertical md:divider-horizontal divider-start text-white"></div>

                    <div className='text-center'>
                        <p className='text-4xl font-medium mb-3'>200K+</p>
                        <p className='text-white opacity-45'>Premium Tools</p>
                    </div>

                    <div className="divider divider-vertical md:divider-horizontal  divider-start text-white"></div>
                    <div className='text-center'>
                        <p className='text-4xl font-medium mb-3'>4.9</p>
                        <p className='text-white opacity-45'>Rating</p>
                    </div>

                </div>

            </div>
            
        </div>
    );
};

export default BodySectionOne;