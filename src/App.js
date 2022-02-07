import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Home from "./pages/Home";
import Likes from "./pages/Likes";

function App() {
   const [cartOpened, setCartOpened] = useState(false);
   const [items, setItems] = useState([]);
   const [cartItems, setCartItems] = useState([]);
   const [searchValue, setSearchValue] = useState('');
   const [likes, setLikes] = useState([]);

   useEffect(() => {
      axios.get('https://61f84295783c1d0017c44674.mockapi.io/items').then(res => {
         setItems(res.data);
      });
      axios.get('https://61f84295783c1d0017c44674.mockapi.io/cart').then(res => {
         setCartItems(res.data);
      });
      axios.get('https://61f84295783c1d0017c44674.mockapi.io/liked').then(res => {
         setLikes(res.data);
      });
   }, []);

   const addToCart = (obj) => {
      axios.post('https://61f84295783c1d0017c44674.mockapi.io/cart', obj);
      setCartItems(prev => [...prev, obj]);
   };

   const removeFromCart = (id) => {
      axios.delete(`https://61f84295783c1d0017c44674.mockapi.io/cart/${id}`);
      setCartItems(prev => prev.filter(item => item.id !== id));
   };

   const addToLiked = async (obj) => {
      try {
         if (likes.find(likedObj => likedObj.id === obj.id)) {
            axios.delete(`https://61f84295783c1d0017c44674.mockapi.io/liked/${obj.id}`);
         } else {
            const { data } = await axios.post('https://61f84295783c1d0017c44674.mockapi.io/liked', obj);
            setLikes(prev => [...prev, data]);
         }
      } catch (error) {
         alert("Не удалось добавить в Избранное");
      };
      
   };

   const onChangeSearchInput = (event) => {
      setSearchValue(event.target.value);
   };

   return (
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
   );
}

export default App;
