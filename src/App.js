import {Card} from './components/Card'
import {Search} from './components/Search'
import {Header} from './components/Header'
import { Filter } from './components/Filter'

import './index.css'
import {useState, useEffect, useCallback} from 'react'


export const App = () =>{
  const [query, setQuery] = useState("")
  const [sortBy, setSortBy] = useState("title")
    const [orderBy, setOrderBy] = useState("asc")
  const [data, setData] = useState([])
  const filteredData = data.filter(
    item =>{
      return(
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.location.toLowerCase().includes(query.toLowerCase()) 
      )
    }
  ).sort((a, b)=>{
    let order = (orderBy === 'asc') ? 1 : -1
    return(
      a[sortBy].toLowerCase() < b[sortBy].toLowerCase() 
      ? -1 * order : 1 * order
    )
  })
  
  const fetchData = useCallback(()=>{
    fetch('./data.json')
    .then(res=> res.json())
    .then(data => setData(data))
  },[])
  useEffect((data)=>{
    fetchData(data)
  }, [fetchData])
  return(
    <>
    <div className='bg-black flex justify-between p-5'>
      <Header/>
      <Search
        query={query}
        onSearchPlaces={myQuery => setQuery(myQuery)}
      />
    </div>
    <Filter
      orderBy={orderBy}
      sortBy={sortBy}
      onSortByChange={mySort => setSortBy(mySort)}
      onOrderByChange={mySort => setOrderBy(mySort)}
    />
    <div className='mt-10 grid grid-cols-2 items-center mx-auto justify-center w-11/12'>
      
      {filteredData.map(item => (
        <Card 
        key={item.id}
        item={item}
        />
      ))}


    </div>
    
    </>
  )
}