import { Check } from 'lucide-react';
import React from 'react';

const CartFeatures = ({features}) => {
    return (
        <div>
            <li className='flex text-gray-500'><Check className='text-green-400 w-4 mr-2.5'></Check>{features}</li>
        </div>
    );
};

export default CartFeatures;