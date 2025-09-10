import React, { useState } from 'react'
import axios from 'axios'
import { Show } from './components/Show';

function App() {


  const addproduct = () => {
    const api = "https://fakestoreapi.com/products";

    axios.post(api, {
      "title": "string",
      "price": 0.1,
      "description": "string",
      "category": "string",
      "image": "http://example.com"
    })
    .then(res => {
      // console.log("POST:", res.data)
    })
    .catch(err => console.log(err))
  }
  console.log(product)
  return (
    <>
      <div className='pt-[5%] pl-[3%]'>
        <button onClick={getproduct} className='p-3 bg-red-300 rounded'>
          Get Product api
        </button>
      </div>
      <div className='pt-[5%] pl-[3%]'>
        <button onClick={addproduct} className='p-3 bg-red-300 rounded'>
          Add Product api
        </button>
        <hr /><hr className='my-10' />
     <Show />
      </div>
    </>
  )
}

export default App
