/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const Cart = ({cart}) => {
   const {course_name} = cart
   return (
      <div>
         <p>{course_name}</p>
      </div>
   );
};

export default Cart;