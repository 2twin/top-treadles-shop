import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";

function Header(props) {
   const {totalPrice} = useCart();

   return (
      <header className='d-flex justify-between align-center p-40'>
         <Link to="/">
            <div className='d-flex align-center'>
               <img src='/img/logo2.png' width={60} height={60} alt=''/>
               <div>
                  <h3 className='text-uppercase'>Top Treadles</h3>
                  <p className='opacity-6'>Магазин кроссовок</p>
               </div>
            </div>
         </Link>
         <div>
            <ul className='headerRight d-flex'>
               <li onClick={props.onClickCart} className='cart d-flex align-center'>
                  <img src="/img/cart.svg" alt="Корзина" />
                  <span>{totalPrice === 0 ? '' : totalPrice + 'руб.'} </span>
               </li>
               <li className='d-flex align-center likes'>
                  <Link to="/likes">
                     <img src="/img/unliked.svg" alt="Избранное" />
                  </Link>
               </li>
               <li className='d-flex align-center user'>
                  <Link to="/orders">
                     <img src="/img/user.svg" alt="Заказы" />
                  </Link>
               </li>
            </ul>
         </div>
      </header>
   )
};

export default Header;