import { Link } from 'react-router-dom';
import CartTable from '../features/cart/CartTable';
import { useState } from 'react';
import { CHECKOUT_PAGE } from '../utils/constants';
import { initialCart } from '../utils/constants';

function Cart() {
  const [cart, setCart] = useState(initialCart);
  const [discount, setDiscount] = useState('');
  const totalPrice =
    cart.reduce(
      (accumulator, currentValue) =>
        accumulator + currentValue.price * currentValue.quantity,
      0,
    ) + discount || 0;

  function deleteCartItem(itemId) {
    const updatedCart = cart.filter((item) => item.id != itemId);
    setCart(updatedCart);
  }

  function applyDiscountCode() {}
  return (
    <div className="mx-5 max-w-screen-lg md:mt-10 md:flex">
      <div className="mb-5 flex justify-between gap-4 md:w-3/4">
        <CartTable cart={cart} deleteCartItem={deleteCartItem} />
      </div>
      <div className="rounded-md bg-slate-300 p-5 shadow-md md:mx-auto md:h-[200px] md:w-1/4">
        <div className="  flex items-center justify-between gap-3">
          <input
            placeholder="discount code"
            value={discount}
            className="w-4/5 rounded-md p-1 px-2 text-base text-slate-400"
            onChange={(e) => setDiscount(Number(e.target.value))}
            type="number"
          />
          <button
            className="w-1/5 rounded-md border-2 p-1 text-xs text-slate-500 md:w-2/5 md:text-sm"
            onClick={applyDiscountCode}
          >
            Apply
          </button>
        </div>
        <div className="my-6 flex items-center justify-between text-slate-700">
          <span className="text-base font-semibold">Total:</span>
          <span className="text-base font-semibold ">
            {totalPrice}
            <span className="text-m ml-1">$</span>
          </span>
        </div>
        <div className="w-full text-center">
          <Link
            to={CHECKOUT_PAGE}
            className="block rounded-md bg-lime-600 p-3 text-base text-slate-50 md:inline-block"
          >
            Go to Payment
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
