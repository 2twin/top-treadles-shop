import React, { useState } from 'react';
import styles from './Card.module.scss';

function Card({id, onPlus, title, price, imageUrl, onLike, liked = false}) {
   const [isAdded, setIsAdded] = useState(false);
   const [isLiked, setIsLiked] = useState(liked);

   const onClickPlus = () => {
      onPlus({title, price, imageUrl});
      setIsAdded(!isAdded);
   };

   const onClickLike = () => {
      onLike({id, title, price, imageUrl});
      setIsLiked(!isLiked);
   };

   return (
      <div className={styles.card}>
         <div className={styles.favorite}>
            <div onClick={onClickLike}>
               <img 
                  className={styles.like}
                  src={isLiked ? '/img/liked.svg' : '/img/unliked.svg'}
                  alt='Like' width={11} height={11}
               />
            </div>
         </div>
         <img src={imageUrl} alt='Sneakers' width={133} height={120}/>
         <h5>{title}</h5>
         <div className='d-flex justify-between align-center'>
            <div className='d-flex flex-column'>
               <span>Цена:</span>
               <b>{price} руб.</b>
            </div>
            <img 
               className={styles.plus}
               src={isAdded ? '/img/check.svg' : '/img/plus.svg'}
               alt='Plus' width={11} height={11}
               onClick={onClickPlus}
            />
         </div>
      </div>
   )
};

export default Card;