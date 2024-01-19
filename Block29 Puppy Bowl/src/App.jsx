import { useState } from 'react'

import './App.css'
import { useGetPuppyByNameQuery, useAddNewPuppyMutation,useDeletePuppyMutation } from './api/api'

function App() {
  
  const { data, error, isLoading } = useGetPuppyByNameQuery('');
  const [addPuppy,responseInfo2]=useAddNewPuppyMutation();
  const [deletePuppy,responseInfo]=useDeletePuppyMutation();
  let players=null;
  if(data){console.log(data.data.players);
  players=data.data.players;
  console.log(players)}
  function searchResult(name){
    let a=players.filter((i)=>i.name==name);
    console.log(a);
  }
  return (
    <>
      <h1>Puppy Bowl</h1>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) :  <>data is here!...</>}
      <button onClick={()=>{addPuppy({name:"dog", breed:"barker"})}}>Create</button>
      <button onClick={()=>{deletePuppy(1047)}}>Delete</button>
      <button onClick={()=>{searchResult("dog")}}>Search</button>
    </>
  )
}

export default App
