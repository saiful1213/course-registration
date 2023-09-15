import { useState } from 'react'
import './App.css'
import Cards from './Components/Cards/Cards'
import Carts from './Components/Carts/Carts'
import toast from 'react-hot-toast'

function App() {

  const [carts, setCarts] = useState([]);
  const [remainingHour, setRemainingHour] = useState(20);
  const [credits, setCredits] = useState(0);
  const [price, setPrice] = useState(0);


  const handleSelect = (card, purchase) => {
    const isExist = carts.find(cart => cart.id === card.id);
    if (isExist) {
      return toast.error("card is exist")
    } else {
      let hour = card.credit;
      carts.forEach(cart => {
        hour += cart.credit
      })
      const remaining = 20 - hour;
      if (hour > 20) {
        return toast.error('your maximum credit hour is 20. you cant add more')
      }
      else {
        if (remaining < 0) {
          return toast.error('your minimum credit hour is 0. you cant add more')
        }
        else {
          setCarts([...carts, card]);
          setRemainingHour(remaining);
          setCredits(hour);
          setPrice(price + purchase);
        }
      }
    }
  }

  return (
    <div>
      <h1 className='text-center text-[#1C1B1B] text-3xl font-bold pt-10'>Course Registration</h1>
      <div className='flex flex-col md:flex-row mt-12'>
        <Cards handleSelect={handleSelect}></Cards>
        <Carts carts={carts} credit={credits} remainingHour={remainingHour} price={price}></Carts>
      </div>
    </div>
  )
}

export default App