import Nav from "./Nav";
import useCart from "../hooks/useCart";

type PropsType = {
  viewCart: boolean;
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({ viewCart, setViewCart }: PropsType) => {
  const { totalItems, totalPrice } = useCart();

  const content = (
    <header className="p-1 bg-slate-600 text-white dark:text-black">
      <div className="flex justify-between mx-3">
        <h1 className="text-3xl md:text-4xl">Acme Co.</h1>
        <div className="text-right">
          <p className="text-white dark:text-black">
            Total Items: {totalItems}
          </p>
          <p className="text-white dark:text-black">
            Total Price: {totalPrice}
          </p>
        </div>
      </div>
      <Nav viewCart={viewCart} setViewCart={setViewCart} />
    </header>
  );

  return content;
};
export default Header;
