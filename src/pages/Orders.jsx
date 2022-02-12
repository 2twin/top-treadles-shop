import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/Card/Card";
import Info from "../components/Info";

function Orders() {
   const [orders, setOrders] = useState([]);
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      try {
         (async() => {
            const { data } = await axios.get('https://61f84295783c1d0017c44674.mockapi.io/orders');
            setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
            setIsLoading(false);
         })();
      } catch (error) {
         alert('Не удалось отобразить заказы');
      }

   }, []);

   return (
      <div className='content p-40'>
         <div className='d-flex align-center justify-between mb-40 flex-wrap'>
            <h1>Мои заказы</h1>
         </div>

         {
            orders.length > 0 
            ?  (<div className='container d-flex flex-wrap'>
                  {
                     (isLoading ? [...Array(8)] : orders).map((item, index) => (
                        <Card 
                           key={index}
                           loading={isLoading}
                           {...item}
                        />
                     ))
                  }
               </div>)
            :  (
               <Info 
                  title="У вас пока нет заказов"
                  description="Оформите хотя бы один заказ"
                  image="/img/noorders.png"
               />
            )
         }
      </div>
   )
};

export default Orders;