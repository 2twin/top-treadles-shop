import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

import Header from "./components/Header";
import Drawer from "./components/Drawer/Drawer";
import Home from "./pages/Home";
import Likes from "./pages/Likes";
import Orders from "./pages/Orders";

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
         try {
         setIsLoading(true);
         const cartResponse = await axios.get('https://61f84295783c1d0017c44674.mockapi.io/cart');
         const likedResponse = await axios.get('https://61f84295783c1d0017c44674.mockapi.io/liked');
         const itemsResponse = await axios.get('https://61f84295783c1d0017c44674.mockapi.io/items');
         
         setIsLoading(false);
         setCartItems(cartResponse.data);
         setLikes(likedResponse.data);
         setItems(itemsResponse.data);
         } catch (error) {
            alert('Ошибка при загрузке страницы');
         }
      };

      fetchData();
   }, []);

   const addToCart = async (obj) => {
      try {
         const findItem = cartItems.find(item => +item.parentId === +obj.id);
         if (findItem) {
            setCartItems(prev => prev.filter(item => +item.parentId !== +obj.id));
            await axios.delete(`https://61f84295783c1d0017c44674.mockapi.io/cart/${findItem.id}`);
         } else {
            const { data } = await axios.post('https://61f84295783c1d0017c44674.mockapi.io/cart', obj);
            setCartItems(prev => [...prev, data]);
         }
      } catch (error) {
         alert("Не удалось добавить товар в корзину");
      }
   };

   const removeFromCart = (id) => {
      try {
         axios.delete(`https://61f84295783c1d0017c44674.mockapi.io/cart/${id}`);
         setCartItems(prev => prev.filter(item => +item.id !== +id));         
      } catch (error) {
         alert("Не удалось удалить товар")
      }
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
      return cartItems.some(obj => +obj.parentId === +id)
   }

   return (
      <AppContext.Provider value={{ items, cartItems, likes, isItemAdded, setCartOpened, setCartItems, addToCart, addToLiked }} >
         <div className="wrapper clear">
            <Drawer
               onClickX={() => setCartOpened(false)}
               items={cartItems}
               onRemove={removeFromCart}
               opened={cartOpened}
            />
         
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

               <Route 
                  exact path="/orders" 
                  element=
                     {
                        <Orders />
                     } 
               />
            </Routes>
         
         </div>
      </AppContext.Provider>
   );
}

export default App;
