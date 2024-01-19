import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addToState } from './features/puppylist/puppySlice';
import './App.css'
import { useGetPuppyQuery, useAddNewPuppyMutation,useDeletePuppyMutation } from './api/api'

function App() {
  const stateList=useSelector((state)=>state.puppy.list);
  const dispatch=useDispatch();
  console.log("state list",stateList);
  const { data, error, isLoading } = useGetPuppyQuery('');
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
      <button onClick={()=>{deletePuppy(1047)}}>delete</button>
      <button onClick={()=>{dispatch(addToState(players));searchResult("dog")}}>Search</button>
    </>
  )
}

export default App
