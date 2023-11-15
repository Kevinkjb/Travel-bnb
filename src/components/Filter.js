import {useState} from 'react'
import {BiCaretDown, BiCheck } from 'react-icons/bi'
const Dropdown =({toggle, sortBy, onSortByChange, orderBy, onOrderByChange})=>{
  if(!toggle){
    return null
  }
  return(
    <div className="relate w-1">
      <div className="className='origin-top-right absolute left-20 top-48 mt-3 w-56 
      rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5'">
        <div className='text-md font-medium my-1'>
          <div className='flex justify-between p-2 cursor-pointer hover:bg-gray-200' onClick={()=>onSortByChange("title")}>
            Title{(sortBy === "title") && <BiCheck className='my-auto'/>}
          </div>
          <div className='flex justify-between p-2 cursor-pointer hover:bg-gray-200' onClick={()=>onSortByChange("location")}>
            Location {(sortBy === "location") && <BiCheck className='my-auto'/>}
          </div>

        </div>
        <div className='border-t-2 text-md font-medium  my-1'>
          <div className='flex justify-between p-2 cursor-pointer hover:bg-gray-200'  onClick={()=>onOrderByChange("asc")}>
            Asc {(orderBy === "asc") && <BiCheck className='my-auto'/>}
          </div>
          <div className='flex justify-between p-2 cursor-pointer hover:bg-gray-200 '  onClick={()=>onOrderByChange("desc")}>
            Desc {(orderBy === "desc") && <BiCheck className='my-auto'/>}
          </div>
        </div>
      </div>
    </div>
  )
}
export const Filter = ({sortBy, onSortByChange, orderBy, onOrderByChange}) =>{
  const [toggle, setToggle] = useState(false)
  return(
    <>
      <div onClick={()=>{setToggle(!toggle)}} className=' bg-black flex justify-center w-24 h-8 cursor-pointer relative left-20 top-24'>
          <button className="text-xs text-white  bg-transparent">Sort by</button>
          <BiCaretDown className='my-auto text-white ml-2 '/>
        </div>
        <Dropdown toggle={toggle}
        orderBy={orderBy}
        sortBy={sortBy}
        onOrderByChange={myOrder => onOrderByChange(myOrder)}
        onSortByChange={mySort => onSortByChange(mySort)}
      />
    </>
    
  )
}