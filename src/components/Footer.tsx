import useCart from "../hooks/useCart";

type PropsType = {
  viewCart: boolean;
};

const Footer = ({ viewCart }: PropsType) => {
  const { totalItems, totalPrice } = useCart();

  const year: number = new Date().getFullYear();

  const pageContent = viewCart ? (
    <p>Shopping Cart &copy; {year}</p>
  ) : (
    <>
      <p>Total Items: {totalItems}</p>
      <p>Total Price: {totalPrice}</p>
      <p>Shopping Cart: {totalItems}</p>
    </>
  );

  const content = (
    <footer className="flex justify-end flex-col bg-slate-600 gap-1 p-1">
      <div className="mx-2 text-white">{pageContent}</div>
    </footer>
  );

  return content;
};
export default Footer;
