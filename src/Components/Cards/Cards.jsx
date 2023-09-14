/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";

const Cards = ({handleSelect}) => {

   const [cards, setCards] = useState([]);

   useEffect(()=>{
      fetch ('./data.json')
      .then(res => res.json())
      .then(data => setCards(data))
   },[])
   return (
      <div className="w-auto md:w-3/4">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{cards.map(card => <Card handleSelect={handleSelect} card={card} key={card.id}></Card>)}</div>
      </div>
   );
};

export default Cards;