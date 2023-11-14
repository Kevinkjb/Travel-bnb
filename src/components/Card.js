import {BiMap} from 'react-icons/bi'

export const Card = ({item}) =>{
  return(
    <>
    <div className="grid grid-cols-2 my-24">
        <img className="w-96" src={item.imgURL} alt={item.title}/>
        <div className="pl-8 flex flex-col">
          <h1 className="text-2xl font-bold">{item.title}</h1>
          <div className="my-3 text-gray-500 flex items-center">
            <p>{item.location}</p>
            <a className='ml-auto' href={item.googleMap} target='_blank' rel="noreferrer">
              <BiMap />
            </a>
          </div>
          <p className="w-96 text-gray-700">{item.description}</p>
          <div className='mt-2 ml-auto'>
            <span className='font-bold'>${item.price}</span>
          </div>
        </div>
    </div>
      
    </>
  )
}