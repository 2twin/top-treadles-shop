import './App.css';

function App() {
  return (
    <div className="wrapper clear">
      <header className='d-flex justify-between align-center p-40'>
        <div className='d-flex align-center'>
          <img src='/img/logo.png' width={40} height={40} alt=''/>
          <div>
            <h3 className='text-uppercase'>React Sneakers</h3>
            <p className='opacity-6'>Магазин кроссовок</p>
          </div>
        </div>
        <div>
          <ul className='headerRight d-flex'>
            <li className='mr-30'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921zM17.307 15h-6.64l-2.5-6h11.39l-2.25 6z"/><circle cx="10.5" cy="19.5" r="1.5"/><circle cx="17.5" cy="19.5" r="1.5"/></svg>
              <span>1200 руб.</span>
            </li>
            <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M12 2A10.13 10.13 0 0 0 2 12a10 10 0 0 0 4 7.92V20h.1a9.7 9.7 0 0 0 11.8 0h.1v-.08A10 10 0 0 0 22 12 10.13 10.13 0 0 0 12 2zM8.07 18.93A3 3 0 0 1 11 16.57h2a3 3 0 0 1 2.93 2.36 7.75 7.75 0 0 1-7.86 0zm9.54-1.29A5 5 0 0 0 13 14.57h-2a5 5 0 0 0-4.61 3.07A8 8 0 0 1 4 12a8.1 8.1 0 0 1 8-8 8.1 8.1 0 0 1 8 8 8 8 0 0 1-2.39 5.64z"/><path d="M12 6a3.91 3.91 0 0 0-4 4 3.91 3.91 0 0 0 4 4 3.91 3.91 0 0 0 4-4 3.91 3.91 0 0 0-4-4zm0 6a1.91 1.91 0 0 1-2-2 1.91 1.91 0 0 1 2-2 1.91 1.91 0 0 1 2 2 1.91 1.91 0 0 1-2 2z"/></svg>
            </li>
          </ul>
        </div>
      </header>
      <div className='content p-40'>
        <h1 className='mb-40'>Все кроссовки</h1>

        <div className='d-flex'>
          <div className='card'>
            <img src='/img/sneakers/1.jpg' alt='Sneakers' width={133} height={120}/>
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className='d-flex justify-between align-center'>
              <div className='d-flex flex-column'>
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className='button'>
                <img src='/img/plus.svg' alt='Plus' width={11} height={11}/>
              </button>
            </div>
          </div>

          <div className='card'>
            <img src='/img/sneakers/2.jpg' alt='Sneakers' width={133} height={120}/>
            <h5>Мужские Кроссовки Nike Air Max 270</h5>
            <div className='d-flex justify-between align-center'>
              <div className='d-flex flex-column'>
                <span>Цена:</span>
                <b>8 499 руб.</b>
              </div>
              <button className='button'>
                <img src='/img/plus.svg' alt='Plus' width={11} height={11}/>
              </button>
            </div>
          </div>

          <div className='card'>
            <img src='/img/sneakers/3.jpg' alt='Sneakers' width={133} height={120}/>
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className='d-flex justify-between align-center'>
              <div className='d-flex flex-column'>
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className='button'>
                <img src='/img/plus.svg' alt='Plus' width={11} height={11}/>
              </button>
            </div>
          </div>

          <div className='card'>
            <img src='/img/sneakers/4.jpg' alt='Sneakers' width={133} height={120}/>
            <h5>Кроссовки Puma X Aka Boku Future Rider</h5>
            <div className='d-flex justify-between align-center'>
              <div className='d-flex flex-column'>
                <span>Цена:</span>
                <b>8 999 руб.</b>
              </div>
              <button className='button'>
                <img src='/img/plus.svg' alt='Plus' width={11} height={11}/>
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
