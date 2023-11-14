import {BiSearch} from 'react-icons/bi'


export const Search = () =>{
  return(
    <div className='flex items-center'>
      <div className=" relative rounded-md shadow-sm">
        <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
          <label htmlFor='query'/>
          <BiSearch className='text-gray-400 text-sm'/>
        </div>
          <input type="text" name="query" className="border-2 text-gray-500 rounded-tl-md outline-none rounded-bl-md w-96 h-8 pl-8 text-sm" placeholder="Search"/>
          
      </div>
      <div className='flex items-center jus'>
        <button className='bg-blue-400 border-0 text-sm flex items-center justify-center w-16 h-8 text-white rounded-tr-md rounded-br-md'>Search</button>
      </div>
      
    </div>
  )
}