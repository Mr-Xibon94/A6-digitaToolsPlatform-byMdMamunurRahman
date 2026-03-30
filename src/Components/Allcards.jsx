import React, { use } from 'react';
import Cards from './Cards';

const Allcards = ({ cardsDataPromise }) => {
    const allCardsData = use(cardsDataPromise);

    console.log(allCardsData);
    return (
        <div>
            <h1>I am All Cards section</h1>

            {/* it is my full card section  */}
            <div className='border border-red-600 w-11/12 mx-auto'>
                {/* it is title head div of the card section  */}
                <div className='text-center'>
                    <h1 className='text-4xl font-bold '>Premium Digital Tools</h1>
                    <p className='text-[14px] text-gray-400 my-4'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
                    <div className='flex justify-center '>

                        {/* it is the two buttons which will togle  */}
                        <button className='btn rounded-3xl text-white bodyColor'>Products</button>
                        <button className='btn rounded-3xl'>Cart(0)</button>
                    </div>
                </div>

                {/* it is the all card interface  */}
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-2.5 mt-10'>
                    {

                        allCardsData.map(card => (
                            <Cards card={card}>

                            </Cards>
                        ))
                    }

                </div>


            </div>

        </div>
    );
};

export default Allcards;