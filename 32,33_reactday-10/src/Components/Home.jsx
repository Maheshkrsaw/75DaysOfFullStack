import React, { useContext } from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'
import { Productcontext } from '../utils/Context'
import Loading from '../utils/Loading';

function Home() {

  const [products]=useContext(Productcontext);
 

  return products ? (
    <>
   <Nav />
     <div className="w-[85%]  p-5 flex flex-wrap overflow-x-hidden overflow-y-auto gap-5">
     {products.map((p,i)=> (
       <Link key={i} to={`/Details/${p.id}`}  className=" mb-5 card p-5 border shadow rounded w-[18%] h-[25vh] flex flex-col justify-center items-center bg-white">
          <div
            className="  transform hover:scale-115 w-full h-[80%] bg-contain bg-no-repeat bg-center  "
            style={{
              backgroundImage:
                `url(${p.image})`,
            }}
          ></div>
          <h1 className="text-sm mt-2 text-center">
           {p.title}
          </h1>
        </Link>  
     ))}
            
      </div>
   
    </>
  ) :(
    <Loading />
  )
}

export default Home