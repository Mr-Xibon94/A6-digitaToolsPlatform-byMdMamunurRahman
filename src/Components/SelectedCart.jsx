import React from 'react';
import { toast } from 'react-toastify';

const SelectedCart = ({ choosenCard ,selectedCart, setselectedCart,setprice, price }) => {

     const removeHandler = (currentCard) => {
        
         toast.warning(`${choosenCard.name} is removed form the Cart`)

            const currentCardIndex = selectedCart.findIndex(index => index.id === currentCard.id)

            if(currentCardIndex !== -1){
                const newCart = [...selectedCart];
                newCart.splice(currentCardIndex, 1);

                setselectedCart(newCart);
                setprice(price-currentCard.price)
            }


     }
    return (
        <div>
            <div className='flex justify-between  m-2.5 p-2.5 bg-gray-50 rounded-xl'>
                <div className='flex gap-4 '>
                    <div className='rounded-full p-2 border border-gray-200'>
                        <img className='w-8' src={choosenCard.icon} alt={choosenCard.name} />
                    </div>
                    <div>
                        <h1 className='font-medium'>{choosenCard.name}</h1>
                        <p className='text-gray-400'>${choosenCard.price}</p>

                    </div>
                </div>

                <div className='flex items-center'>
                    <p onClick={()=>
                        removeHandler(choosenCard)} className='text-red-600 cursor-pointer'>Remove</p>
                </div>



            </div>
        </div>
    );
};

export default SelectedCart;