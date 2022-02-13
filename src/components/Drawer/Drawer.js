import { useCart } from "../../hooks/useCart";
import React, { useState } from "react";
import axios from "axios";

import Info from "../Info";

import styles from "./Drawer.module.scss";

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

function Drawer({ onClickX, onRemove, items = [], opened }) {
   const { cartItems, setCartItems, totalPrice } = useCart();
   const [orderId, setOrderId] = useState(null);
   const [isOrdered, setIsordered] = useState(false);
   const [isLoading, setIsLoading] = useState(false);
   const fee = Math.floor(totalPrice * 0.05);

   const onClickOrder = async () => {
      try {
         setIsLoading(true);
         const {data} = await axios.post('https://61f84295783c1d0017c44674.mockapi.io/orders', {items: cartItems});
         setOrderId(data.id);
         setIsordered(true);
         setCartItems([]);

         for (let i = 0; i < cartItems.length; i++) {
            const item = cartItems[i];
            axios.delete('https://61f84295783c1d0017c44674.mockapi.io/cart/' + item.id);
            await delay(1000);
         }

      } catch (error) {
         alert("Не удалось создать заказ :(");
      };
      setIsLoading(false);
   };

      if (opened) {
         document.body.style.overflow = 'hidden';
      } else {
         document.body.style.overflow = 'auto';
      }

   return (
      <div className={`${styles.overlay} ${opened ? styles.overlayVisible : styles.overlay}`}>
         <div className={styles.drawer}>
            <h2 className='d-flex justify-between mb-30'>
               Корзина {' '}
               <img onClick={onClickX} src='img/x.svg' alt="Close" />
            </h2>

            {
               items.length > 0 ? (
               <div className="d-flex flex-column flex" >
                  <div className={styles.items}>
                     {
                        items.map((obj) => (
                           <div key={obj.id} className='cartItem d-flex align-center mb-20'>
                              <img className='mr-20' src={obj.imageUrl} alt='Sneakers' width={70} height={70}/>
                              <div className='mr-20'>
                                 <p className='mb-5'>{obj.title}</p>
                                 <b>{obj.price} руб.</b>
                              </div>
                              <img className="trash" src="../../img/delete.png" onClick={() => onRemove(obj.id)} alt="delete"/>
                           </div>
                        ))
                     }
                  </div>
                  <div className='cartTotalBlock'>
                     <ul>
                        <li>
                           <span>Итого:</span>
                           <div></div>
                           <b>{Math.floor(totalPrice + fee)} руб.</b>
                        </li>
                        <li>
                           <span>Налог 5%:</span>
                           <div></div>
                           <b>{fee} руб.</b>
                        </li>
                     </ul>
                     <button disabled={isLoading} className='greenButton' onClick={onClickOrder}>
                        Оформить заказ
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"/></svg>
                     </button>
                  </div>
               </div>

               ) : (
                  <Info 
                     title={isOrdered ? "Заказ оформлен" : "Корзина пустая"} 
                     description={isOrdered ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке` : "Добавьте хотя бы один товар, чтобы сделать заказ"} 
                     image={isOrdered? "img/ordered.jpg" : "img/empty.png"} 
                  />
               )
            }

            

            
         </div>
      </div>
   )
};

export default Drawer;