import { useState, useEffect } from "react";

import Card from "./components/Card/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
   const [cartOpened, setCartOpened] = useState(false);
   const [items, setItems] = useState([]);
   const [cartItems, setCartItems] = useState([]);

   useEffect(() => {
      fetch('https://61f84295783c1d0017c44674.mockapi.io/items')
         .then(res => res.json())
         .then(json => setItems(json)
      );
   }, []);

   const addToCart = (obj) => {
      setCartItems(prev => [...prev, obj])
   }

   return (
      <div className="wrapper clear">
         {cartOpened && <Drawer 
                           onClickX={() => setCartOpened(false)}
                           items={cartItems}
                        />}
         <Header onClickCart={() => setCartOpened(true)} />
         <div className='content p-40'>
            <div className='d-flex align-center justify-between mb-40 flex-wrap'>
               <h1>Все кроссовки</h1>
               <div className='search-block d-flex align-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"/></svg>
                  <input placeholder='Поиск'/>
               </div>
            </div>

            <div className='d-flex flex-wrap justify-between'>
               {
                  items.map((item) => (
                     <Card 
                        title={item.title}
                        price={item.price}
                        imageUrl={item.imageUrl} 
                        onLike={() => alert('Добавили в закладки')}
                        onPlus={(obj) => addToCart(obj)}
                     />
                  ))
               }
            </div>
         </div>
      </div>
   );
}

export default App;
