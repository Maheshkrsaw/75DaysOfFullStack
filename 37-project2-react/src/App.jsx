import React from 'react'
import Nav from './Components/Nav'
import Work from './Components/Work'
import Stripes from './Components/Stripes'
import Products from './Components/Products'
import Marquees from './Components/Marquees'
import Cards from './Components/Cards'

function App() {
  return (
    <>
    <div className='m-3'>
      <Nav />
    <Work />
    <Stripes />
    <Products />
    <Marquees/>
    <Cards />
    </div>
    </>
  )
}

export default App