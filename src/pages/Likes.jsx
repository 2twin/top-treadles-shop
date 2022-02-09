import { useContext } from "react";

import Card from "../components/Card/Card";
import { AppContext } from "../App";

function Likes({ addToLiked }) {
   const {likes} = useContext(AppContext);

   return (
      <div className='content p-40'>
            <div className='d-flex align-center justify-between mb-40 flex-wrap'>
               <h1>Избранное</h1>
            </div>

            <div className='container d-flex flex-wrap'>
               {
                  likes
                     .map((item, index) => (
                        <Card
                           key={index}
                           liked={true}
                           onLike={addToLiked}
                           {...item}
                        />
                     ))
               }
            </div>
         </div>
   )
};

export default Likes;