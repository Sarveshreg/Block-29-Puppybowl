import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetPuppyQuery } from '../../api/api'
import { useState } from 'react';
import Playercard from '../playercard/Playercard';



function Search() {
    let {name}=useParams();
    const { data, error, isLoading } = useGetPuppyQuery('');
    if (isLoading) {
        return(
            <h1>Loading...</h1>
        )
        }
       // Show an error message if the fetch failed
        if (error) {
            return(
            <div className='error'>{error.data.error.message}</div>
            )}
    console.log(data.data.players)
    let result=data.data.players.filter((player)=>player.name.toUpperCase()==name.toUpperCase())
    console.log(result)
    if(result.length==0){
        return(<h2>Player Not Found!</h2>)
    }
    let dis=result.map((a)=>(
        <Playercard {... a}/>
    ))
  return (
    <div>{dis}</div>
  )
}

export default Search