/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const Cart = ({cart, idx}) => {
   const {course_name} = cart
   return (
      <div>
         <p className="text-[#1c1b1b99] mt-2"><span>{idx+1}</span>. {course_name}</p>
      </div>
   );
};

export default Cart;