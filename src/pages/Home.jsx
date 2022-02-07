import Card from '../components/Card/Card';

function Home({ items, searchValue, setSearchValue, onChangeSearchInput, addToCart, addToLiked }) {
   return (
      <div className='content p-40'>
            <div className='d-flex align-center justify-between mb-40 flex-wrap'>
               <h1>{searchValue ? `Поиск по запросу "${searchValue}"` : 'Все кроссовки'}</h1>
               <div className='search-block d-flex align-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"/></svg>
                  {searchValue && <img onClick={() => setSearchValue('')} className="cu-p x" src='/img/x.svg' alt="Clear" />}
                  <input onChange={onChangeSearchInput} value={searchValue} placeholder='Поиск...'/>
               </div>
            </div>

            <div className='container d-flex flex-wrap'>
               {
                  items
                     .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
                     .map((item, index) => (
                        <Card
                           key={index}
                           onLike={(obj) => addToLiked(obj)}
                           onPlus={(obj) => addToCart(obj)}
                           {...item}
                        />
                     ))
               }
            </div>
         </div>
   )
};

export default Home;