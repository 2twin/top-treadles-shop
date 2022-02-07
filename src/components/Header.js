import { Link } from "react-router-dom";

function Header(props) {
   return (
      <header className='d-flex justify-between align-center p-40'>
         <Link to="/">
            <div className='d-flex align-center'>
               <img src='/img/logo.png' width={40} height={40} alt=''/>
               <div>
                  <h3 className='text-uppercase'>React Sneakers</h3>
                  <p className='opacity-6'>Магазин кроссовок</p>
               </div>
            </div>
         </Link>
         <div>
            <ul className='headerRight d-flex'>
               <li onClick={props.onClickCart} className='cart d-flex align-center'>
                  <img src="/img/cart.svg" alt="Cart" />
                  <span>1200 руб.</span>
               </li>
               <li className='d-flex align-center likes'>
                  <Link to="/likes">
                     <img src="/img/unliked.svg" alt="Likes" />
                  </Link>
               </li>
               <li className='d-flex align-center user'>
                  <img src="/img/user.svg" alt="User" />
               </li>
            </ul>
         </div>
      </header>
   )
};

export default Header;