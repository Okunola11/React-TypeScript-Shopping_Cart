import useCart from "../hooks/useCart";
import { useState } from "react";
import CartLineItem from "./CartLineItem";

const Cart = () => {
  const [confirm, setConfirm] = useState<boolean>(false);
  const { dispatch, REDUCER_ACTIONS, totalItems, totalPrice, cart } = useCart();

  const onSubmitOrder = () => {
    dispatch({ type: REDUCER_ACTIONS.SUBMIT });
    setConfirm(true);
  };

  const pageContent = confirm ? (
    <h2>Thank you for your order</h2>
  ) : (
    <>
      <h2 className="absolute left-full -translate-x-full sr-only">Cart</h2>
      <ul className="cart w-full">
        {cart.map((item) => {
          return (
            <CartLineItem
              key={item.sku}
              item={item}
              dispatch={dispatch}
              REDUCER_ACTIONS={REDUCER_ACTIONS}
            />
          );
        })}
      </ul>
      <div className="cart__totals">
        <p>Total Item: {totalItems}</p>
        <p>Total Price: {totalPrice}</p>
        <button
          className="cart__submit mt-2 border-white border-2 rounded-lg p-1 bg-gray-600 text-white"
          disabled={!totalItems}
          onClick={onSubmitOrder}
        >
          Place Order
        </button>
      </div>
    </>
  );

  const content = (
    <main className="main main--cart flex flex-col flex-grow gap-2 w-full">
      {pageContent}
    </main>
  );

  return content;
};
export default Cart;
