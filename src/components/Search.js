import {BiSearch} from 'react-icons/bi'


export const Search = ({onSearchPlaces, query}) =>{
  return(
    <div className='flex items-center'>
      <div className=" relative rounded-md shadow-sm">
        <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
          <label htmlFor='query'/>
          <BiSearch className='text-gray-400 text-sm'/>
        </div>
          <input 
          onChange={(e) =>{onSearchPlaces(e.target.value)}} 
          value={query} 
          type="text" 
          name="query" 
          className=" text-gray-500 outline-none rounded-md w-96 h-8 pl-8 text-sm" placeholder="Search"/>
      </div>
    </div>
  )
}