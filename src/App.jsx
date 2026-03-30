
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
      <Suspense fallback ={<span className="loading loading-bars loading-xl"></span>} >
        <Allcards cardsDataPromise={cardsDataPromise}>

        </Allcards>

      </Suspense>

    </>
  )
}

export default App
