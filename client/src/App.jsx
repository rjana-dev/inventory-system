import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8888/api/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Inventory Products</h1>

      {products.map((p) => (
        <div key={p._id}>
          <h3>{p.name}</h3>
          <p>Price: {p.price}</p>
          <p>Quantity: {p.quantity}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;