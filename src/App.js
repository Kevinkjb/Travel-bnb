import {Card} from './components/Card'
import {Search} from './components/Search'
import './index.css'
import {useState, useEffect, useCallback} from 'react'


export const App = () =>{
  const [data, setData] = useState([])
  const fetchData = useCallback(()=>{
    fetch('./data.json')
    .then(res=> res.json())
    .then(data => setData(data))
  },[])
  useEffect((data)=>{
    fetchData(data)
  }, [fetchData])
  return(
    <div className='mt-10 h-full flex justify-center items-center flex-col'>
      <Search/>
      {data.map(item => (
        <Card 
          key={item.id}
          item={item}
        />
      ))}
    </div>
  )
}