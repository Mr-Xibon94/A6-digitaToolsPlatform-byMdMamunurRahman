import React from 'react';
import CartFeatures from './CartFeatures';

const Cards = ({ card }) => {

    const allFeatures = card.features;
    console.log("I am in cards", card)
    return (
        // it is single card style 
        <div className='border shadow-2xl border-gray-200 rounded-2xl p-6 space-y-2.5'>
            <div className='flex justify-between'>
                <div className='rounded-full p-2 border border-gray-200'>
                    <img className='w-8'   src={card.icon} alt={card.name} />
                </div>
                
                <div className=''>
                    <p className={`${card.tag == 'new'?'text-green-400 bg-green-200':
                    card.tag == 'popular'? 'text-purple-500 bg-purple-200':
                    'text-red-400 bg-amber-100'} px-2 py-1 rounded-xl text-[12px]`}>{card.tag == 'new'?'New':
                    card.tag == 'popular'? 'Popular':
                    'Best Seller'}</p>
                </div>
            </div>

            <h2 className='text-2xl font-semibold'>{card.name}</h2>

            <p className='text-gray-500'>{card.description}</p>

            <div className='flex '>
                <h1 className='text-xl font-semibold'>${card.price}</h1>
                <h1 ><sub className='text-gray-400 text-[14px]'>/{card.period}</sub> </h1>
            </div>
            {/* it is the features section of my card  */}
            <ul>
                {
                    allFeatures.map(features => (
                        <CartFeatures features={features}>

                        </CartFeatures>
                    ))
                }

            </ul>

            {/* card button  */}
            <div className='btn rounded-3xl btn-w-full flex justify-center mt-5 bodyColor text-white'>
                <button >Buy Now</button>
            </div>

        </div>
    );
};

export default Cards;