import React from 'react'


export const Show = () => {
    const [product , setproduct]=useState([ ])

  const getproduct = () => {
    const api = "https://fakestoreapi.com/products";

    axios.get(api)
      .then(res => {
        // console.log("GET:", res.data)
        setproduct(res.data);
      })
      .catch(err => console.log(err));
  }

  return (
    <div>
        <ul>
  {product.map((item) => (
    <li key={item.id} className='rounded p-5 bg-red-200 mb-2'>
      {item.title}
    </li>
  ))}
</ul>

    </div>
  )
}
