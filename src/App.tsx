import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import ProductList from "./components/ProductList";
import { useState } from "react";

function App() {
  const [viewCart, setViewCart] = useState<boolean>(false);

  const pageContent = viewCart ? <Cart /> : <ProductList />;

  const content = (
    <body className="min-h-screen flex flex-col sm:scroll-smooth bg-slate-50 dark:bg-black dark:text-white">
      <Header viewCart={viewCart} setViewCart={setViewCart} />
      <main className="flex flex-grow gap-4 mx-4 p-1">{pageContent}</main>
      <Footer viewCart={viewCart} />
    </body>
  );
  return content;
}

export default App;
