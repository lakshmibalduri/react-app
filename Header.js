import React from "react";
import { FaShoppingCart } from 'react-icons/fa';

function Header({ cartCount, onSearch }) {
  const handleInputChange = (e) => {
    onSearch(e.target.value); 
  };

  return (
    <header style={{ display: 'flex' }}>
      <div style={{
        color: "black",
        marginLeft: "20px",
        borderRadius: '10px',
        backgroundColor: "rgba(225, 16, 16, 0.1)",
        marginTop: '5px',
        fontSize: "20px",
        padding: "10px",
        height: "20px"
      }}>
        Product Store
      </div>
      <form className="seach-form" onSubmit={(e) => e.preventDefault()}>
        <input 
          type="search" 
          placeholder="Search..." 
          onChange={handleInputChange}
          style={{
            padding: '12px 16px',
            borderRadius: '10px',
            backgroundColor: 'rgba(225, 16, 16, 0.1)',
            color: 'green',
            fontSize: '20px',
            width: '500px',
            marginTop: '1px',
            marginLeft: '150px',
          }} 
        />
        <button type="submit" style={{ fontSize: "20px", borderRadius: '10px', padding: '12px 16px', marginLeft: '5px' }}>search</button>
      </form>

      <div style={{ position: 'relative', marginLeft: '400px' }}>
        <FaShoppingCart size={34} style={{ color: 'blue' }} />
        <span style={{
          position: 'absolute',
          top: '-3px',
          right: '-12px',
          background: 'red',
          color: 'white',
          borderRadius: '50%',
          padding: '4px 8px',
          fontSize: '12px'
        }}>
          {cartCount}
        </span>
      </div>
    </header>
  );
}

export default Header;