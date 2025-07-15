import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [data ,setData] = useState([]);
  const [input ,setInput] = useState('') ;

  async function fetchData() 
  {
    const res = await fetch(`https://dummyjson.com/recipes/search?q=` + input);
    const data = await res.json() ;
    console.log(data.recipes)
    setData(data.recipes)

  }

useEffect(()=> {
    fetchData();


},[input])

  return (
    <div>
      <h1 className='heading'>Auto-Complete Search bar </h1>
      <div className='input-div' >
        <input type="text" placeholder='Enter the text' value={input} onChange={(e) => setInput(e.target.value)} className='input-text'  />
      </div>
     <div className='fetch-div'>
      {
        data.map((item)=> <p key={item.id}>{item.name}</p>)
      }
     </div>
    </div>
    
  )
}

export default App
