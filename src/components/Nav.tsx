type PropsType = {
  viewCart: boolean;
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
};

const Nav = ({ viewCart, setViewCart }: PropsType) => {
  const button = viewCart ? (
    <button
      onClick={() => setViewCart(false)}
      className="border-white border-2 rounded-lg p-1 bg-gray-800 shadow-xl text-white"
    >
      View Products
    </button>
  ) : (
    <button
      onClick={() => setViewCart(true)}
      className="border-white border-2 rounded-lg p-1 bg-gray-800 shadow-xl text-white"
    >
      View Cart
    </button>
  );

  const content = <nav className="flex justify-end mx-4">{button}</nav>;

  return content;
};
export default Nav;
