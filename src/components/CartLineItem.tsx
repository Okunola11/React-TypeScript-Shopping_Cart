import { ChangeEvent, ReactElement, memo } from "react";
import { CartItemType } from "../context/CartProvider";
import { ReducerAction } from "../context/CartProvider";
import { ReducerActionType } from "../context/CartProvider";

type PropsType = {
  item: CartItemType;
  dispatch: React.Dispatch<ReducerAction>;
  REDUCER_ACTIONS: ReducerActionType;
};

const CartLineItem = ({
  item,
  dispatch,
  REDUCER_ACTIONS,
}: PropsType): ReactElement => {
  const img: string = new URL(`../images/${item.sku}.jpg`, import.meta.url)
    .href;

  const lineTotal: number = item.quantity * item.price;

  const highestQuantity: number = 20 > item.quantity ? 20 : item.quantity;

  const optionValues = [...Array(highestQuantity).keys()].map((i) => i + 1);

  const options: ReactElement[] = optionValues.map((value) => {
    return (
      <option key={`opt${value}`} value={value}>
        {value}
      </option>
    );
  });

  const onChangeQty = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch({
      type: REDUCER_ACTIONS.QUANTITY,
      payload: { ...item, quantity: Number(e.target.value) },
    });
  };

  const onRemoveFromCart = () =>
    dispatch({ type: REDUCER_ACTIONS.REMOVE, payload: item });

  const content = (
    <li className="cart__item my-4 grid grid-cols-[3fr,15fr,5fr,1fr,8fr,1fr] grid-flow-col gap-2">
      <img src={img} alt={item.name} className="cart__img min-w-16" />
      <div aria-label="Item Name">{item.name}</div>
      <div aria-label="Price Per Item">
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(item.price)}
      </div>

      <label
        htmlFor="itemQty"
        className="offscreen left-full -translate-x-full sr-only"
      >
        Item Quantity
      </label>
      <select
        name="itemQty"
        id="itemQty"
        className="cart__select text-black max-h-10 max-w-10 rounded-sm"
        value={item.quantity}
        aria-label="Item Quantity"
        onChange={onChangeQty}
      >
        {options}
      </select>

      <div
        className="cart__item-subtotal text-center"
        aria-label="Line Item Subtotal"
      >
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(lineTotal)}
      </div>

      <button
        className="cart__button max-h-12 justify-end border-white border-2 rounded-lg p-1 bg-white"
        aria-label="Remove Item from Cart"
        title="Remove Item from Cart"
        onClick={onRemoveFromCart}
      >
        ❌
      </button>
    </li>
  );

  return content;
};

//this checks to see if the previous item object and the next item object are equal. In the props passed in above,
// 'dispatch' and 'REDUCER_ACTIONS' are memoised from the Context but items is not. This makes sure it doesn't re-render
const areItemsEqual = (
  { item: prevItem }: PropsType,
  { item: nextItem }: PropsType
) => {
  return Object.keys(prevItem).every((key) => {
    return (
      prevItem[key as keyof CartItemType] ===
      nextItem[key as keyof CartItemType]
    );
  });
};
// we pass this confirmation in as a second argument for memo. If one item on the list changes, the rest should not re-render

const memoisedCartLineItem = memo<typeof CartLineItem>(
  CartLineItem,
  areItemsEqual
);

export default memoisedCartLineItem;
