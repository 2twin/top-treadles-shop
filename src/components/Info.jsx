import React, { useContext } from 'react';
import { AppContext } from '../App';

export const Info = ({ title, description, image }) => {
   const {setCartOpened} = useContext(AppContext);

   return (
      <div className='d-flex justify-center flex-column align-center flex'>
         <div className="cartEmpty d-flex align-center justify-center flex-column flex">
            <img className="mb-20" width={120} src={image} alt="Empty" />
            <h2>{title}</h2>
            <p className="opacity-6">{description}</p>
            <button className='greenButton' onClick={() => setCartOpened(false)}>
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12.707 17.293 8.414 13H18v-2H8.414l4.293-4.293-1.414-1.414L4.586 12l6.707 6.707z"/></svg>
               Вернуться назад
            </button>
         </div> 
      </div>
   )
}

export default Info;