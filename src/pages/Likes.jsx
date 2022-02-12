import { useContext } from "react";
import Card from "../components/Card/Card";
import { AppContext } from "../App";
import Info from "../components/Info";

function Likes({ addToLiked }) {
   const {likes} = useContext(AppContext);

   return (
      <div className='content p-40'>
         <div className='d-flex align-center justify-between mb-40 flex-wrap'>
            <h1>Избранное</h1>
         </div>

         { likes.length > 0
            ?  (<div className='container d-flex flex-wrap'>
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
               </div>)
            :  (
               <Info 
                  title="У вас пока нет закладок"
                  description="Добавьте хотя бы один товар"
                  image="/img/nolikes.png"
               />
            )
         }
      </div>
   )
};

export default Likes;