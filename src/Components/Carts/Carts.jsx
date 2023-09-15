/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Cart from "../Cart/Cart";

const Carts = ({ carts, credit, remainingHour, price }) => {
   return (
      <div className="w-auto md:w-1/4 p-2 lg:p-6 rounded-xl lg:mx-6">
         <div className="bg-white">
            <h1 className="text-[#2F80ED] font-bold text-lg border-b-2 pb-4">Credit Hour Remaining {remainingHour} hr</h1>
            <h1 className="text-[#1C1B1B] text-xl font-bold mt-4 mb-5">Course Name</h1>
            <div className="border-b-2 mb-6 pb-6">{carts.map((cart, idx) => <Cart cart={cart} idx={idx} key={idx}></Cart>)}</div>
            <h4 className="text-[#1c1b1bcc] mt-4 font-medium border-b-2 pb-4">Total Credit Hour: {credit}</h4>
            <h4 className="text-[#1c1b1bcc] font-semibold mt-4">Total Price: {price} USD</h4>
         </div>
      </div>
   );
};

export default Carts;