
import { ToastContainer } from 'react-toastify'
import './App.css'
import Allcards from './Components/Allcards'
import { Suspense } from 'react'

function App() {

  const getCardData = async () => {
    const res = await fetch('/cardData.json')
    const data = res.json()
    return data
  }
  const cardsDataPromise = getCardData();
  
 console.log(cardsDataPromise);

  return (
    <>
      <Suspense fallback ={<div className='flex min-h-screen items-center justify-center'>
          <span className="loading loading-bars loading-xl"></span>
        </div>} >
        <Allcards cardsDataPromise={cardsDataPromise}>

        </Allcards>

      </Suspense>

           <ToastContainer />
    </>
  )
}

export default App
