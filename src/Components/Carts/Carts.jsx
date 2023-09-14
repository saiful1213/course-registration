import Cart from "../Cart/Cart";

/* eslint-disable react/prop-types */
const Carts = ({carts}) => {
   // console.log(carts);
   return (
      <div className="w-auto md:w-1/4 p-6">
         <h1 className="text-[#1C1B1B] text-xl font-bold">Course Name</h1>
         {carts.map((cart, idx) => <Cart cart={cart} key={idx}></Cart>)}
      </div>
   );
};

export default Carts;