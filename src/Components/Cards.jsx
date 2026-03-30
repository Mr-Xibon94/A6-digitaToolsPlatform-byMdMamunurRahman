import React from 'react';

const Cards = ({card}) => {

    console.log("I am in cards",card)
    return (
        // it is single card style 
        <div className='border shadow-2xl border-gray-200'>
            <div className='flex justify-between'>
                <img src={card.icon} alt="" />
                <p>{card.tag}</p>
            </div>

            <h2 className='text-2xl font-semibold'>{card.name}</h2>

            <p className='text-gray-500'>{card.description}</p>

        </div>
    );
};

export default Cards;