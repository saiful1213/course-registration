
import { useState } from 'react'
import './App.css'
import Cards from './Components/Cards/Cards'
import Carts from './Components/Carts/Carts'

function App() {

  const [carts, setCarts] = useState([]);
  const [credits, setCredits] = useState(0);
  const [price, setPrice] = useState(0);

  const handleSelect = (card, purchase) => {
    // console.log(credits.length)
    const isExist = carts.find(cart => cart.id === card.id);
    if (isExist) {
      return alert('cart is exist')
    } else {
      let hour = card.credit;
      carts.forEach(cart => {
        hour += cart.credit
      })
      if (hour > 20) {
        return alert('your maximum credit hour is 20. you cant add more...')
      } else {
        setCarts([...carts, card]);
        setCredits(hour); 
        setPrice(price + purchase);
      }

    }
  }

  return (
    <div className='bg-[#F3F3F3]'>
      <h1 className='text-center text-[#1C1B1B] text-3xl font-bold pt-10'>Course Registration</h1>
      <div className='flex flex-col md:flex-row mt-12'>
        <Cards handleSelect={handleSelect}></Cards>
        <Carts carts={carts} credit={credits} price={price}></Carts>
      </div>
    </div>
  )
}

export default App
