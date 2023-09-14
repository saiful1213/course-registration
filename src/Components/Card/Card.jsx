/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const Card = ({ card, handleSelect }) => {
   const { id, img, course_name, credit, price, details } = card;
   return (
      <div className="p-4 bg-white rounded-xl">
         <img src={img} className="mb-4"/>
         <h2 className="text-[#1C1B1B] text-lg font-semibold mt-3">{course_name}</h2>
         <p className="text-[#1c1b1b99] text-sm mb-4">{details}</p>
         <div className="flex items-center gap-3 mb-6">
            <p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
               <path d="M12 1V23" stroke="#1C1B1B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
               <path d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="#1C1B1B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg></p>
            <p className="text-[#1c1b1b99] font-medium">Price: {price}</p>
            <img src="../../../public/Frame.png" />
            <p className="text-[#1c1b1b99] font-medium">Credit: {credit}hr</p>
         </div>
         <button onClick={()=>{handleSelect(card)}} className="bg-[#2F80ED] rounded-lg py-2 text-white text-lg font-semibold w-full">Select</button>
      </div>
   );
};

export default Card;