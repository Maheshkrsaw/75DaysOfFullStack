
import React, { useState } from 'react'
import Cards from './components/Cards'
import Form from './components/Form'
function App() {
const [users , setusers]=useState([])

const handelsubmitdata =(data)=>{
  setusers([...users , data])
}

  const handelremove=(id)=>{
    setusers(()=> users.filter((item,index)=> index!=id))
  }
  return (
    <div className='w-full h-screen bg-zinc-200 flex items-center justify-center '>
      <div className='container mx-auto '>
       <Cards handelremove={handelremove} users={users} />
       <Form  handelsubmitdata={handelsubmitdata} />


      </div>
      </div>
  )
}

export default App 