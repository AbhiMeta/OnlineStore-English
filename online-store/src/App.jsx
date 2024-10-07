import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Item from './components/item/Item'
import { useEffect, useState } from 'react'

function App() {
  const [data, setData] = useState([])
  const [loading, setLLoading] = useState(true);
  const [cart, setCart] = useState([0, 0, 0, 0, 0, 0])

  useEffect(() =>   {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if(!response.ok) {
          throw new Error('Response is invalid');
        }
        const data = await response.json();
        setData(data);
        setLLoading(false);
      }
      catch(err) {
        console.log(err);
      }
    };

    fetchData();
  }, [])

  if(loading)  {return (
    <>
      <Navbar></Navbar>

      
      
      <div className="products">
        <Item image={reactLogo} name="hoodie" price={16.99}/>
        <Item image={reactLogo} name="hoodie" price={16.99}/>
        <Item image={reactLogo} name="hoodie" price={16.99}/>
        <Item image={reactLogo} name="hoodie" price={16.99}/>
        <Item image={reactLogo} name="hoodie" price={16.99}/>
        <Item image={reactLogo} name="hoodie" price={16.99}/>
      </div>
    </>

    
  )}
  

  return (

    <>
    <Navbar></Navbar>
    
    <div className="products">
    <div className="item-1">
        <Item image={data[0].image} name={data[0].title} price={data[0].price}/>
        <div className="counter">
          <button onClick={() => setCart([cart[0]-1, cart[1], cart[2], cart[3], cart[4], cart[5]])}>-</button>
          <p>{cart[0]}</p>
          <button onClick={() => setCart([cart[0]+1, cart[1], cart[2], cart[3], cart[4], cart[5]])}>+</button>
        </div>
      </div>
      <div className="item-2">
        <Item image={data[1].image} name={data[1].title} price={data[1].price}/>
        <div className="counter">
          <button onClick={() => setCart([cart[0], cart[1]-1, cart[2], cart[3], cart[4], cart[5]])}>-</button>
          <p>{cart[1]}</p>
          <button onClick={() => setCart([cart[0], cart[1] + 1, cart[2], cart[3], cart[4], cart[5]])}>+</button>
        </div>
      </div>

      <div className="item-3">
        <Item image={data[2].image} name={data[2].title} price={data[2].price}/>
        <div className="counter">
          <button onClick={() => setCart([cart[0], cart[1], cart[2] - 1, cart[3], cart[4], cart[5]])}>-</button>
          <p>{cart[2]}</p>
          <button onClick={() => setCart([cart[0], cart[1], cart[2] + 1, cart[3], cart[4], cart[5]])}>+</button>
        </div>
      </div>

      <div className="item-4">
        <Item image={data[3].image} name={data[3].title} price={data[3].price}/>
        <div className="counter">
          <button onClick={() => setCart([cart[0], cart[1], cart[2], cart[3] - 1, cart[4], cart[5]])}>-</button>
          <p>{cart[3]}</p>
          <button onClick={() => setCart([cart[0], cart[1], cart[2], cart[3] + 1, cart[4], cart[5]])}>+</button>
        </div>
      </div>

      <div className="item-5">
        <Item image={data[4].image} name={data[4].title} price={data[4].price}/>
        <div className="counter">
          <button onClick={() => setCart([cart[0], cart[1], cart[2], cart[3], cart[4] - 1, cart[5]])}>-</button>
          <p>{cart[4]}</p>
          <button onClick={() => setCart([cart[0], cart[1], cart[2], cart[3], cart[4] - 1, cart[5]])}>+</button>
        </div>
      </div>


      <div className="item-5">
        <Item image={data[5].image} name={data[5].title} price={data[5].price}/>
        <div className="counter">
          <button onClick={() => setCart([cart[0], cart[1], cart[2], cart[3], cart[4] , cart[5] - 1])}>-</button>
          <p>{cart[5]}</p>
          <button onClick={() => setCart([cart[0], cart[1], cart[2], cart[3], cart[4], cart[5] + 1])}>+</button>
        </div>
      </div>
    </div>
  </>
    
  )


}

export default App
