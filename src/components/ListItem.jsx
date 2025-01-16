import React, { useState, useEffect } from 'react'



function ListItem(props) {
  const { id, title, price, src } = props

  return (
    <div className='container flex justify-between bg-white py-5 my-2'>
      <div className='container flex flex-col items-start justify-center'>
        <p className='mx-10 text-2xl'> <span className='bg-blue-200 px-0.5 rounded-md'>ID :</span> {id}</p>
        <p className='mx-10 text-lg'><span  className='bg-blue-200 px-0.5 rounded-md'>Product : </span>{title}</p>
        <p className='mx-10 text-lg'><span  className='bg-blue-200 px-0.5 rounded-md'>Price : </span>${price}</p>
      </div>
      <img src={src} alt="pic Product" width={200} className='px-10'/>
    </div>
  )
}

export default ListItem
