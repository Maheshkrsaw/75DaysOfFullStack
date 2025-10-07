import React, { useState } from 'react'
import { motion, useMotionValueEvent, useScroll } from "motion/react"

const Work = () => {

  const [images , setimages ] = useState([
    {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/67b89d9110d0a5d6615f273a_umaultAwards-p-1080.png" ,top:"50%" , left:"50%" , isActive:false },
    {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d3d0fdcbfda7de0c21ed_Umlaut%20-%2016%209%20(B)-p-1080.webp" ,top:"53%" , left:"47%" , isActive:false },
    {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d880c1fd919b3709feb1_Cula-%2016%209%20(B)-p-1080.webp" ,top:"47%" , left:"52%" , isActive:false },
    {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d8caf827831eb8ff92f7_Layout%20Land%20-%2016%209%20(B)-p-1080.webp" ,top:"47%" , left:"53%" , isActive:false },
    {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/669d6f1f10e02f2cb6320ad9_669ad38beb29c99f7dfe1353_mockup-v3%402x%202-p-1600-p-1080.webp" ,top:"53%" , left:"57%" , isActive:false }
  ]);

  const { scrollYProgress } = useScroll()

  scrollYProgress.on("change",(data)=>{
    function imageShow(arr){
      setimages((prev)=>
        prev.map((item,index)=>
          arr.indexOf(index)===-1
          ?{...item,isActive:false}
          :{...item,isActive:true}
        )
      )
    }

    switch(Math.floor(data*100)){
      case 0:
        imageShow([])
        break;
      case 1:
        imageShow([0])
        break;
      case 2:
        imageShow([0 , 1])
        break;
      case 3:
        imageShow([0 , 1 , 2])
        break;
      case 4:
        imageShow([0 , 1 , 2 ,3])
        break;
      case 5:
        imageShow([0 , 1 , 2 ,3 , 4])
        break;
    }
  })

  return (
    <div className='w-full my-13'>
      <div className='relative max-w-screen-xl mx-auto text-center'>
        <h1 className='text-[30vw] leading-none tracking-tight select-none font-medium'>
          Work
        </h1>

        {/* Full overlay for images */}
        <div className='absolute top-0 left-0 h-full w-full'>
          {images.map((elem, idx) => (
            elem.isActive && (
              <img 
                key={idx}   // ✅ FIXED: key added
                className='absolute w-60 rounded-lg -translate-x-[50%] -translate-y-[50%]'
                src={elem.url} 
                alt="" 
                style={{ top: elem.top, left: elem.left }}
              />
            )
          ))}
        </div>
      </div>
    </div>
  )
}

export default Work
