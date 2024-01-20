import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetPuppyQuery } from '../../api/api'
import { useState,useEffect } from 'react';
import Playercard from '../playercard/Playercard';
import { NavLink } from 'react-router-dom';



function Search() {
    let {name}=useParams();
    const [pup,setPup]=useState([]);
    let [flag,setFlag]=useState(true);
    let [del,setDel]=useState(false);
    
    let getPup=async()=>{
        const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-PT-SF/players');
        const result=await response.json();
        setPup(result.data.players);
      };
      useEffect(()=>{
        getPup();
      },[flag]);
      let deletePuppy=async function deletepup(id){
        setDel(true)
        try{
          const response=await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-PT-SF/players/${id}`,{method: "DELETE"});
        const result=await response.json();
        //del=true;
        setFlag(!flag);
        }
        catch(err){
          console.error(err);
        } 
      }
    let result=pup.filter((player)=>player.name.toUpperCase()==name.toUpperCase());
    console.log(result);
    if(result.length==0 & (del==false)){
        return(<h2><strong>{name}</strong> Not Found!</h2>)
    }
    let ren=result.map((p)=>(
        < >
        
            <div key={p.id} className="flex flex-row w-auto h-2/5 justify-center mt-3 bg-teal-100">
                <img className='h-40 w-44 mt-4' src={`${p.imageUrl}`} alt="a dog" />
                <div className=' flex flex-col m-5 text-lg font-bold p-1'>
                    <p>Name: {p.name}</p>
                    <p>Breed: {p.breed}</p>
                    <p>ID: {p.id}</p>
                    <p>Status: {p.status}</p>
                    <span>
                    <NavLink to={`/players/${p.id}`}><button className='bg-green-300 rounded-lg font-normal p-1 h-auto'>Show More!</button> </NavLink>
                    <button onClick={()=>{deletePuppy(p.id)}} className='bg-amber-600 rounded-lg p-1'>Delete</button>
                    </span>
                </div>
            </div>
            </>
        ))
    return (
        <>
        {del && <p>Player deleted!</p>}
        {!del && <h2>Search result for <strong>{name}</strong></h2>}
        <div>{ren}</div>
        </>
    )
    }

export default Search