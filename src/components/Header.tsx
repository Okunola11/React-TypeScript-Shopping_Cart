import Nav from "./Nav";
import useCart from "../hooks/useCart";

type PropsType = {
  viewCart: boolean;
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({ viewCart, setViewCart }: PropsType) => {
  const { totalItems, totalPrice } = useCart();

  const content = (
    <header className="flex justify-between bg-slate-50 dark:bg-black dark:text-white">
      <div className="flex flex-grow justify-between">
        <h1>Acme Co.</h1>
        <div className="">
          <p>Total Items: {totalItems}</p>
          <p>Total Price: {totalPrice}</p>
        </div>
      </div>
      <Nav viewCart={viewCart} setViewCart={setViewCart} />
    </header>
  );

  return content;
};
export default Header;
