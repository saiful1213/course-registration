
import { useState } from 'react'
import './App.css'
import Cards from './Components/Cards/Cards'
import Carts from './Components/Carts/Carts'

function App() {

  const [carts, setCarts] = useState([]);
  const [credit, setCredit] = useState(0);
  const [price, setPrice] = useState(0);

  const handleSelect = (card, hour, purchase) =>{
    setCarts([...carts, card]);
    setCredit(credit + hour);
    setPrice(price + purchase);
  }

  return (
    <div className='bg-[#F3F3F3]'>
      <h1 className='text-center text-[#1C1B1B] text-3xl font-bold pt-10'>Course Registration</h1>
      <div className='flex flex-col md:flex-row mt-12'>
        <Cards handleSelect={handleSelect}></Cards>
        <Carts carts={carts} credit={credit} price={price}></Carts>
      </div>
    </div>
  )
}

export default App
