import { useState } from 'react';
import './App.css'
import { useEffect } from 'react';

function App() {
  const [data, setData] = useState();
  let [page, setPage] = useState(0);
  const limit = 10;

  useEffect(() => {
    async function getData() {
      try {
      let apiData = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${page * limit}`)
      let json = await apiData.json();
      setData(json.products);
      console.log(json.products);
      
      } catch(e) {
        console.log(e);
      }
    }

    getData();
  },[page]);
  

  return (
    <>
      {data && data.map((items, index) => {
        return (
          <div key={index}>
            <p>{items.title}</p>
            <img src={`${items.thumbnail}`}/>
          </div>
        )
      })}
      <div>
        {page > 0 && <button onClick={() => setPage(page-1)}>◀️</button>}
        <button>{page}</button>
        {page < 19 && <button onClick={() => setPage(page+1)}>▶️</button>}
      </div>
    </>
  )
}

export default App;