import React from 'react'
import Nav from './Components/Nav'
import Work from './Components/Work'
import Stripes from './Components/Stripes'
import Products from './Components/Products'
import Marquees from './Components/Marquees'
import Cards from './Components/Cards'
import Footer from './Components/Footer'
import LocomotiveScroll from 'locomotive-scroll';



function App() {
const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
    <div className='m-3'>
      <Nav />
    <Work />
    <Stripes />
    <Products />
    <Marquees/>
    <Cards />
    <Footer />
    </div>
    </>
  )
}

export default App