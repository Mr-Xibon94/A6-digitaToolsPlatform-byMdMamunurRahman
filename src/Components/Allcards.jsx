import React, { use, useState } from 'react';
import Cards from './Cards';
import SelectedCart from './SelectedCart';
import { ShoppingCart } from 'lucide-react';
import Navbar from './NavBar/Navbar';
import Banner from './Banner/Banner';
import BodySectionOne from './BodySection/BodySectionOne';

const Allcards = ({ cardsDataPromise }) => {
    // here the api data is used 
    const allCardsData = use(cardsDataPromise);



    // it is state for toggling buttons 
    const [togleBtn, settogleBtn] = useState('products');

    // it is the state for selectel cart 
    const [selectedCart, setselectedCart] = useState([]);

    // it is the state for count total price 
    const [price, setprice] = useState(0);

    // this state will handle buy buttons color 
    const [isActive, setisActive] = useState(null);

    // it is the handler to empty cart section 
    const proceedHanlder = () => {
        setselectedCart([]);
        setprice(0);
    }

    // it is the handler for cart button 
    const cartHandler = () => {

        settogleBtn('cart');
    }

    console.log(selectedCart)


    return (
        <div>

            {/* it is my navbar  */}
            <Navbar selectedCart={selectedCart}>

            </Navbar>

            {/* it is my banner section */}
            <Banner>

            </Banner>

            {/* it is my body section part 1  */}

            <BodySectionOne>
                
            </BodySectionOne>


            {/* it is my full card section  */}
            <div className=' w-11/12 mx-auto'>
                {/* it is title head div of the card section  */}
                <div className='text-center'>
                    <h1 className='text-4xl font-bold '>Premium Digital Tools</h1>
                    <p className='text-[14px] text-gray-400 my-4'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
                    <div className='flex justify-center '>

                        {/* it is the two buttons which will togle  */}
                        <button className='btn rounded-2xl'>
                            <button onClick={() => (
                            settogleBtn('products')
                        )} className={`btn w-full rounded-3xl ${togleBtn == 'products' ? 'bodyColor text-white' : ''}`}>Products</button>
                        {/* BUTTON CART  */}
                        <button onClick={cartHandler} className={`btn w-full rounded-3xl ${togleBtn == 'cart' ? 'bodyColor text-white' : ''}`}>Cart({selectedCart.length})</button>
                        </button>
                    </div>
                </div>

                {/* it is the all card interface  */}
                <div >
                    {togleBtn === "products" ?
                        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>

                            {

                                allCardsData.map(card => (
                                    <Cards key={card.id} card={card} selectedCart={selectedCart} setprice={setprice} price={price} setselectedCart={setselectedCart} isActive={isActive} setisActive={setisActive}>

                                    </Cards>
                                ))
                            }
                        </div> : togleBtn === 'cart' ?
                            <div>
                                {
                                    selectedCart.length == 0 ?
                                        <div className='border-none shadow-2xl rounded-2xl m-5'>
                                            <h1 className='text-[20px] font-bold p-2.5'>Your Cart</h1>
                                            <div className='text-center p-12'>
                                                <div className='inline-block'>
                                                    <ShoppingCart className='w-30 h-20 text-gray-300'></ShoppingCart>
                                                    <p className='text-gray-500'>Your cart is empty</p>
                                                </div>
                                            </div>
                                        </div> :
                                        <div className='m-5'>
                                            {
                                                selectedCart.map(choosenCard =>
                                                    <SelectedCart choosenCard={choosenCard} setprice={setprice} price={price} selectedCart={selectedCart} setselectedCart={setselectedCart} >

                                                    </SelectedCart>
                                                )

                                            }

                                            <div className='m-3'>
                                                <div className='flex justify-between p-2.5'>
                                                    <p className='text-gray-400'>Total:</p>
                                                    <p className='font-bold'>${price}</p>
                                                </div>
                                                <div onClick={proceedHanlder} className='btn w-full rounded-4xl my-2.5 bodyColor text-white'>
                                                    <button>
                                                        Proceed To Checkout
                                                    </button>
                                                </div>

                                            </div>
                                        </div>

                                }
                            </div> : ''










                    }

                </div>


            </div>

        </div>
    );
};

export default Allcards;