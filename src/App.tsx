import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import ProductList from "./components/ProductList";
import { useState } from "react";

function App() {
  const [viewCart, setViewCart] = useState<boolean>(false);

  const pageContent = viewCart ? <Cart /> : <ProductList />;

  const content = (
    <body className="min-h-screen sm:scroll-smooth">
      <Header viewCart={viewCart} setViewCart={setViewCart} />
      {pageContent}
      <Footer viewCart={viewCart} />
    </body>
  );
  return content;
}

export default App;
