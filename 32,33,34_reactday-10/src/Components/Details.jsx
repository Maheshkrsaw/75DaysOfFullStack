import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Loading from '../utils/Loading';
import axios from '../utils/Axios';

const Details = () => {
    const [product, setproduct] = useState(null);
const { id } = useParams();

const getsingleproduct = async () => {
  try {
    const { data } = await axios.get(`/products/${id}`);
   setproduct(data);
  } catch (error) {
    console.log(error);
  }
};

useEffect(() => {
  getsingleproduct();
}, []);

  return product ? (

    <>
    <div className='w-[70%] flex h-full items-center justify-between m-auto p-[10%]'>
    
        <img className='object-contain h-[80%] w-[40%] ' src={`${product.image}`} alt="" />
    
   <div className='content w-[50%]'> 
     <h1 className='text-4xl'>{product.title}</h1>
     <h3 className='text-zinc-400 my-3'>{product.category}</h3>
    <h3 className='text-red-300 mb-3 '>₹ {product.price}</h3>
    <p className='mb-5'>{product.description}</p>
    <Link className=" mr-7 text-blue-200 border rounded border-blue-200 px-4 py-2" >Edit</Link>
    <Link className=" mr-7 text-red-200 border rounded border-Red-200 px-2 py-2 ">Delete</Link>
   </div>
    </div>
    </>
  ) : <Loading />
}

export default Details