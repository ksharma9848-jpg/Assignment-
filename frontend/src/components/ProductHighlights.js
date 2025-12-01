import React, { useEffect, useState } from "react";

function ProductHighlights() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then(res => res.json())
      .then(data => {
        console.log("Fetched products:", data); 
        setProducts(data);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>✨ Product Highlights</h2>
      {products.length === 0 ? (
        <p className="loading-message">Loading products</p>
      ) : (
        <div className="product-list">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <h3>{product.name}</h3>
              <p>₹{product.price?.toLocaleString('en-IN')}</p>
              <p>{product.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductHighlights;
