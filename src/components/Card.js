import {BiMap} from 'react-icons/bi'

export const Card = ({item}) =>{
  return(
    <>
    <div className=" my-24">
        <div className='flex'>
          <img className="w-96 h-72" src={item.imgURL} alt={item.title}/>
          <div className='pl-5'>
            <h1 className="text-2xl font-bold">{item.title}</h1>
            <div className="my-3 text-gray-500 flex items-center">
              <p>{item.location}</p>
              <a className='ml-auto' href={item.googleMap} target='_blank' rel="noreferrer">
                <BiMap />
              </a>
            </div>
            <p className="w-96 text-gray-700">{item.description}</p>
            <div className='mt-2 '>
              <span className='font-semibold'>${item.price} CAD</span>
            </div>
          </div>

        </div>

    </div>
    </>
  )
}