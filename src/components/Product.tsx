import { ProductType } from "../context/ProductsProvider";
import { ReducerActionType, ReducerAction } from "../context/CartProvider";
import { ReactElement, memo } from "react";

type PropsType = {
  product: ProductType;
  dispatch: React.Dispatch<ReducerAction>;
  REDUCER_ACTIONS: ReducerActionType;
  inCart: boolean;
};

const Product = ({
  product,
  dispatch,
  REDUCER_ACTIONS,
  inCart,
}: PropsType): ReactElement => {
  const img: string = new URL(`../images/${product.sku}.jpg`, import.meta.url)
    .href; // Importing an image or Images dynamically || Works with VITE and CreateReactApp
  console.log(img);

  const onAddCart = () =>
    dispatch({
      type: REDUCER_ACTIONS.ADD,
      payload: { ...product, quantity: 1 },
    });

  const itemInCart = inCart ? " → Item in Cart: ✔️" : null;

  const content = (
    <article className="w-11/12 mb-4">
      <h3 className="mb-1">{product.name}</h3>
      <img src={img} alt={product.name} className="max-w-80 rounded-xl" />
      <p>
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(product.price)}{" "}
        {itemInCart}
      </p>
      <button
        onClick={onAddCart}
        className="border-white border-2 rounded-lg p-1 bg-gray-600 text-white mt-1"
      >
        Add to Cart
      </button>
    </article>
  );

  return content;
};

// check if the prev and next ProductObj are same and inCart boolean is same
const areProductsEqual = (
  { product: prevProduct, inCart: prevInCart }: PropsType,
  { product: nextProduct, inCart: nextInCart }: PropsType
) => {
  return (
    Object.keys(prevProduct).every((key) => {
      return (
        prevProduct[key as keyof ProductType] ===
        nextProduct[key as keyof ProductType]
      );
    }) && prevInCart === nextInCart
  );
};

const memoisedProduct = memo<typeof Product>(Product, areProductsEqual);

export default memoisedProduct;
