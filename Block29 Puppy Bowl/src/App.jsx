import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addToState } from './features/puppylist/puppySlice';
import './App.css'
import { useGetPuppyQuery, useAddNewPuppyMutation,useDeletePuppyMutation } from './api/api'
import Playercard from './components/playercard/Playercard';
import { NavLink } from 'react-router-dom';


function App() {


  const { data, error, isLoading } = useGetPuppyQuery('');
  const [addPuppy,responseInfo2]=useAddNewPuppyMutation();
  console.log(responseInfo2)
  const [deletePuppy,responseInfo]=useDeletePuppyMutation();
  const[displayPuppy,setDisplayPuppy]=useState([]);
  let [newPlayer,setNewPlayer]=useState({name:"", breed:"",url:""})
  let newPlayerCopy=newPlayer;
  let [searchText,setSearchText]=useState("");
  
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
  let listItems=null;
  if(data){
   listItems=data.data.players.map((player)=>(
             <Playercard key={player.id}{... player}/>))
             
  }
  

  return(
   
    <>
    <div className='flex flex-row'>
      <div>
        <h2>Add New Player</h2>
        <form  className="border-2">
          <label >Name: <input type="text" onChange={(e)=>newPlayerCopy.name=e.target.value}/></label>
          <label >Breed: <input type="text" onChange={(e)=>newPlayerCopy.breed=e.target.value} /></label>
          <label >Image Url: <input type="url" onChange={(e)=>newPlayerCopy.url=e.target.value} /></label>
          <button onClick={()=>{addPuppy({name:newPlayerCopy.name, breed:newPlayerCopy.breed, url:newPlayerCopy.url})}}>Create</button>
          
        </form>
        
      </div>
      <label >Search <input className='border-2' type="text" onChange={(e)=>setSearchText(e.target.value)} /></label>
      <button><NavLink to={`/search/${searchText}`}>Go!</NavLink></button>

    </div>
    <div>
      {listItems }
    </div>
    </>
    
  )
    }
  
    export default App

  
  //     setDisplayPuppy(toDisplay);
  //     console.log("displaypup in useeffect",displayPuppy)
  // },[toDisplay])

//   let[searchText,setSearchtext]=useState("");
//   let[displaypup,setDisplayPup]=useState([]);
//   let players=null;
//   let pupList=null;
//   // let c=0;
//   if(data){
//     console.log(data.data.players);
//     setDisplayPup(data.data.players);
//     console.log("display pup",displaypup)

//   // let b=()=>{
//   //   c++;
//   //   dispatch(addToState(players))};
//   //   if(c==0){
//   //     b();
//   //   }
//     pupList=displaypup.map(player=>
//         <Playercard {... player}/>)
// }
//   function searchResult(name){
//     let a=displaypup.filter((i)=>i.name==name);
//     console.log("result",a)
//     setDisplayPup(a)
//   }
//   return (
//     <>
//       <h1>Puppy Bowl</h1>
//       <label htmlFor="">Search Players: <input className='border-2' type="text" placeholder="Enter player name here" onChange={(e=>setSearchtext(e.target.value))} /></label>
//       <button onClick={()=>searchResult(searchText)}>Search</button>
//       {error ? (
//         <>Oh no, there was an error</>
//       ) : isLoading ? (
//         <>Loading...</>
//       ) :  <div className='grid-cols-4'>
//           {pupList}
//       </div>}
//       <button onClick={()=>{addPuppy({name:"dog", breed:"barker"})}}>Create</button>
//       <button onClick={()=>{deletePuppy(1047)}}>delete</button>
//       <button onClick={()=>{dispatch(addToState(players));searchResult("dog")}}>Search</button>
//     </>
//   )
// }


