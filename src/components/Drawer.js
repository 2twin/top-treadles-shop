function Drawer({ onClickX, items = [] }) {
   return (
      <div className='overlay'>
         <div className='drawer p-30 d-flex flex-column'>
            <h2 className='d-flex justify-between mb-30'>
               Корзина {' '}
               <img onClick={onClickX} src='/img/x.svg' alt="Close" />
            </h2>
            
            <div className='items'>
               {
                  items.map((obj) => (
                     <div className='cartItem d-flex align-center mb-20'>
                        <img className='mr-20' src={obj.imageUrl} alt='Sneakers' width={70} height={70}/>
                        <div className='mr-20'>
                           <p className='mb-5'>{obj.title}</p>
                           <b>{obj.price} руб.</b>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="30"><path d="M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h2V6h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z"/><path d="M9 10h2v8H9zm4 0h2v8h-2z"/></svg>
                     </div>
                  ))
               }
            </div>
            
            <div className='cartTotalBlock'>
               <ul>
                  <li>
                     <span>Итого:</span>
                     <div></div>
                     <b>21 498 руб.</b>
                  </li>
                  <li>
                     <span>Налог 5%:</span>
                     <div></div>
                     <b>1 074 руб.</b>
                  </li>
               </ul>
               <button className='greenButton'>Оформить заказ <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"/></svg></button>
            </div>
         </div>
      </div>
   )
};

export default Drawer;