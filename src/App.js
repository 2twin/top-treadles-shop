import Card from "./components/Card/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

const arr = [
   { title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 12999, imageUrl: '/img/sneakers/1.jpg' },
   { title: 'Мужские Кроссовки Nike Air Max 270', price: 8499, imageUrl: '/img/sneakers/2.jpg'},
   { title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 12999, imageUrl: '/img/sneakers/3.jpg' },
   { title: 'Кроссовки Puma X Aka Boku Future Rider', price: 8999, imageUrl: '/img/sneakers/4.jpg' }
]

function App() {
   return (
      <div className="wrapper clear">
         <Drawer />
         <Header />
         <div className='content p-40'>
            <div className='d-flex align-center justify-between mb-40'>
               <h1>Все кроссовки</h1>
               <div className='search-block d-flex align-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"/></svg>
                  <input placeholder='Поиск'/>
               </div>
            </div>

            <div className='d-flex'>
               {
                  arr.map((obj) => (
                     <Card 
                        title={obj.title}
                        price={obj.price}
                        imageUrl={obj.imageUrl} 
                        handleClick={() => alert(123)}/>
                  ))
               }
            </div>
         </div>
      </div>
   );
}

export default App;
