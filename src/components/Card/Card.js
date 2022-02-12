import React, { useState, useContext } from 'react';
import styles from './Card.module.scss';
import ContentLoader from 'react-content-loader';
import { AppContext } from '../../App';

function Card({id, onPlus, title, price, imageUrl, onLike, liked = false, loading = false }) {
   const { isItemAdded } = useContext(AppContext);
   const [isLiked, setIsLiked] = useState(liked);
   const object = { title, price, imageUrl, id, parentId: id };

   const onClickPlus = () => {
      onPlus(object);
   };

   const onClickLike = () => {
      onLike(object);
      setIsLiked(!isLiked);
   };

   return (
      <div className={styles.card}>
         {
            loading ? 
            <ContentLoader 
               speed={3}
               width={174}
               height={266}
               viewBox="0 0 174 266"
               backgroundColor="#f3f3f3"
               foregroundColor="#ecebeb"
            >
               <rect x="0" y="0" rx="10" ry="10" width="174" height="160" /> 
               <rect x="0" y="180" rx="5" ry="5" width="150" height="15" /> 
               <rect x="0" y="200" rx="5" ry="5" width="100" height="15" /> 
               <rect x="0" y="234" rx="8" ry="8" width="80" height="32" /> 
               <rect x="142" y="234" rx="10" ry="10" width="32" height="32" />
            </ContentLoader> :
            
            <>
               <div className={styles.favorite}>
                  <div onClick={onClickLike}>
                     {onLike && <img 
                        className={styles.like}
                        src={isLiked ? '/img/liked.svg' : '/img/unliked.svg'}
                        alt='Like' width={11} height={11}
                     />}
                  </div>
               </div>
               <img src={imageUrl} alt='Sneakers' width={133} height={120}/>
               <h5>{title}</h5>
               <div className='d-flex justify-between align-center'>
                  <div className='d-flex flex-column'>
                     <span>Цена:</span>
                     <b>{price} руб.</b>
                  </div>
                  {onPlus && <img 
                     className={styles.plus}
                     src={isItemAdded(id) ? '/img/check.svg' : '/img/plus.svg'}
                     style={isItemAdded(id) ? {background: 'lightgreen'} : {background: 'transparent'}}
                     alt='Plus' width={11} height={11}
                     onClick={onClickPlus}
                  />}
               </div> 
            </>       
         }
      </div>
   )
};

export default Card;