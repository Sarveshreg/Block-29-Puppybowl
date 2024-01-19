import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import { useGetPuppyQuery, useAddNewPuppyMutation,useDeletePuppyMutation } from '../../api/api'
import { useState } from 'react';

function Playercard(props) {
  const [deletePuppy,responseInfo]=useDeletePuppyMutation();
  



  return (
    <>
    <div className="flex flex-row w-auto h-2/5 justify-center mt-3 bg-teal-100">
        <img className='h-40 w-44 mt-4' src={`${props.imageUrl}`} alt="a dog" />
        <div className=' flex flex-col m-5 text-lg font-bold p-1'>
            <p>Name: {props.name}</p>
            <p>Breed: {props.breed}</p>
            <p>ID: {props.id}</p>
            <p>Status: {props.status}</p>
            <span>
            <NavLink to={`/players/${props.id}`}><button className='bg-green-300 rounded-lg font-normal p-1 h-auto'>Show More!</button> </NavLink>
            <button onClick={()=>{deletePuppy(props.id)}} className='bg-amber-600 rounded-lg p-1'><NavLink to={"/"}>Delete</NavLink></button>
            </span>
        </div>
    </div>
    </>
  )
}

export default Playercard