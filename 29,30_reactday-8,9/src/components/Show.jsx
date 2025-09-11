import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const Show = () => {
  const [product, setProduct] = useState([])

  const getproduct = () => {
    const api = "https://fakestoreapi.com/products";

    axios.get(api)
      .then(res => {
        setProduct(res.data); // API data state me save
      })
      .catch(err => console.log(err));
  }

  useEffect(()=>{
    getproduct()
  })
  return (
    <div className='p-5'>
      {/* Button for GET API */}
      <button onClick={getproduct} className='p-3 bg-green-300 rounded mb-5'>
        Get Product API
      </button>

      {/* Product list */}
      <ul className="pt-5">
  {product.length > 0 ? (
    product.map((p) => (
      <li key={p.id} className="rounded mb-2 p-5 bg-red-200">
        {p.title}
      </li>
    ))
  ) : (
    <h1>Loading..</h1>
  )}
</ul>

    </div>
  )
}
