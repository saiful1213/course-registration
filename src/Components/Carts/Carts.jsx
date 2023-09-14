/* eslint-disable no-unused-vars */
import Cart from "../Cart/Cart";

/* eslint-disable react/prop-types */
const Carts = ({carts, credit, price}) => {
   // console.log(credit);
   return (
      <div className="w-auto md:w-1/4 p-6 bg-white rounded-xl mx-6">
         <h1 className="text-[#1C1B1B] text-xl font-bold mb-5">Course Name</h1>
         <div className="border-b-2 mb-6 pb-6">{carts.map((cart, idx) => <Cart cart={cart} idx={idx} key={idx}></Cart>)}</div>
         <h4 className="text-[#1c1b1bcc] mt-4 font-medium border-b-2 pb-4">Total Credit Hour: {credit}</h4>
         <h4 className="text-[#1c1b1bcc] font-semibold mt-4">Total Price: {price} USD</h4>
      </div>
   );
};

export default Carts;