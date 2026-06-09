import "./App.css";
import Product from "./components/Product/Product";
import { products } from "./data/products";
import { useState } from "react";

function App() {
  const [balance, setBalance] = useState(50000);

  const buyProduct = (price) => {
    if (balance >= price) {
      setBalance(balance - price);
    } else {
      alert("Недостатньо коштів!");
    }
  };

  return (
    <>
      <h1>🛍️ Shopik</h1>

      <h2>💳 Ваш баланс: {balance} грн</h2>

      <div className="products">
        {products.map((p) => (
          <Product
            key={p.id}
            {...p}
            buyProduct={buyProduct}
          />
        ))}
      </div>
    </>
  );
}

export default App;