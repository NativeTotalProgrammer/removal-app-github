import './App.css';
import { NavbarComponent } from './components/NavbarFile';
import { ItemComponent } from './components/ItemFile';
import data from './data.js';
import { TwoButtonsComponent } from './components/TwoButtonsFile';
import { SummaryComponent } from './components/SummaryFile';
import { useState } from 'react';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const { products } = data;

  const onAdd = (product) => {
    const existElement = cartItems.find(x => x.id === product.id);

    if (existElement) {
      const newCartItems = cartItems.map((x) => {
        return x.id === product.id ? { ...existElement, qty: existElement.qty + 1 } : x;
      });
      setCartItems(newCartItems);
    } else {
      const newCartItems = [...cartItems, { ...product, qty: 1 }];
      setCartItems(newCartItems);
    };
  };

  const onRemove = (product) => {
    const existElement = cartItems.find(x => x.id === product.id);
   
    if(existElement.qty === 1) {
      const newCartItems = cartItems.filter(x => x.id !== product.id);
      setCartItems(newCartItems);
    } else {
      const newCartItems = cartItems.map((x) => {
        return x.id === product.id ? { ...existElement, qty: existElement.qty - 1 } : x;
      });
      setCartItems(newCartItems);
    };
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <>
      <NavbarComponent />
      <div className='all-components'>

        <div className='displayProducts'>
          <ItemComponent
            cartItems={cartItems} 
            products={products}
            onAdd={onAdd}
            onRemove={onRemove}
          />
          <TwoButtonsComponent 
            clearCart={clearCart}  
          />
        </div>
      
        <SummaryComponent 
          cartItems={cartItems}
        />

      </div>
    </>
  );
}

export default App;
