import React, {useState,useEffect} from 'react';
 function TableComponent({ onAddToCart, onRemoveFromCart, searchTerm }) {
  const [products, setProducts] = useState([]); 

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div style={{ backgroundColor: '#fff', display: 'flex', marginLeft: '20px' }}>
        <div style={{ padding: '20px', marginLeft: '100px', marginTop: '20px' }}>
          <h1>Product Gallery</h1>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '10px',
            marginTop: '20px',
            marginLeft: '100px',
          }}>
            {filteredProducts.map((product) => (
              <div key={product.id} style={{
                border: '1px solid #ddd',
                borderRadius: '20px',
                padding: '10px',
                textAlign: 'center',
                backgroundColor: '#fff',
                boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
              }}>
                <img
                  src={product.image}
                  alt={product.title}
                  style={{ width: '100px', height: '130px', objectFit: 'contain' }}
                />
                <h4 style={{ fontSize: '16px', margin: '10px 0' }}>
                  {product.title.substring(0, 30)}...
                </h4>
                <p style={{ fontWeight: 'bold' }}>${product.price}</p>
                <button
                  onClick={() => onAddToCart(product)}
                  style={{
                    backgroundColor: 'green',
                    color: 'white',
                    padding: '8px 12px',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    marginTop: '10px',
                  }}
                >
                  Add to Cart
                </button>
                <button 
                  onClick={() => onRemoveFromCart(product)}
                  style={{
                    backgroundColor: 'green',
                    color: 'white',
                    padding: '8px 12px',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    marginTop: '10px',
                    marginLeft: '5px',
                  }}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default TableComponent;