import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Home from "./pages/Home";
import Likes from "./pages/Likes";

export const AppContext = React.createContext({});

function App() {
   const [cartOpened, setCartOpened] = useState(false);
   const [items, setItems] = useState([]);
   const [cartItems, setCartItems] = useState([]);
   const [searchValue, setSearchValue] = useState('');
   const [likes, setLikes] = useState([]);
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      async function fetchData() {
         setIsLoading(true);
         const cartResponse = await axios.get('https://61f84295783c1d0017c44674.mockapi.io/cart');
         const likedResponse = await axios.get('https://61f84295783c1d0017c44674.mockapi.io/liked');
         const itemsResponse = await axios.get('https://61f84295783c1d0017c44674.mockapi.io/items');
         
         setIsLoading(false);
         setCartItems(cartResponse.data);
         setLikes(likedResponse.data);
         setItems(itemsResponse.data);

      };

      fetchData();
   }, []);

   const addToCart = (obj) => {
      try {
         if (cartItems.find(item => +item.id === +obj.id)) {
            axios.delete(`https://61f84295783c1d0017c44674.mockapi.io/cart/${obj.id}`);
            setCartItems(prev => prev.filter(item => +item.id !== +obj.id));
         } else {
            axios.post('https://61f84295783c1d0017c44674.mockapi.io/cart', obj);
            setCartItems(prev => [...prev, obj]);
         }
      } catch (error) {
         alert("Не удалось добавить в корзину");
      }
   };

   const removeFromCart = (id) => {
      axios.delete(`https://61f84295783c1d0017c44674.mockapi.io/cart/${id}`);
      setCartItems(prev => prev.filter(item => item.id !== id));
   };

   const addToLiked = async (obj) => {
      try {
         if (likes.find(likedObj => +likedObj.id === +obj.id)) {
            axios.delete(`https://61f84295783c1d0017c44674.mockapi.io/liked/${obj.id}`);
            setLikes(prev => prev.filter((item) => +item.id !== +obj.id));
         } else {
            const { data } = await axios.post('https://61f84295783c1d0017c44674.mockapi.io/liked', obj);
            setLikes(prev => [...prev, data]);
         }
      } catch (error) {
         alert("Не удалось добавить в избранное");
      };
      
   };

   const onChangeSearchInput = (event) => {
      setSearchValue(event.target.value);
   };

   const isItemAdded = (id) => {
      return cartItems.some(obj => +obj.id === +id)
   }

   return (
      <AppContext.Provider value={{ items, cartItems, likes, isItemAdded, setCartOpened, setCartItems }} >
         <div className="wrapper clear">
            {cartOpened && <Drawer
                              onClickX={() => setCartOpened(false)}
                              items={cartItems}
                              onRemove={removeFromCart}
                           />
            }
         
            <Header onClickCart={() => setCartOpened(true)} />
         
            <Routes>
               <Route 
                  exact path="/" 
                  element=
                     {
                        <Home
                           items={items}
                           searchValue={searchValue}
                           setSearchValue={setSearchValue}
                           onChangeSearchInput={onChangeSearchInput}
                           addToCart={addToCart}
                           addToLiked={addToLiked}
                           cartItems={cartItems}
                           isLoading={isLoading}
                        />
                     } 
               />
         
               <Route 
                  exact path="/likes" 
                  element=
                     {
                        <Likes 
                           items={likes}
                           addToLiked={addToLiked}
                        />
                     } 
               />
            </Routes>
         
         </div>
      </AppContext.Provider>
   );
}

export default App;
