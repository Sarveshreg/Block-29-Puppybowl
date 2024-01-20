import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addToState } from './features/puppylist/puppySlice';
import './App.css'
import { useGetPuppyQuery, useAddNewPuppyMutation,useDeletePuppyMutation } from './api/api'
import Playercard from './components/playercard/Playercard';
import { NavLink } from 'react-router-dom';


function App() {
const [pup,setPup]=useState([]);
let [searchText,setSearchText]=useState("");
let[newName,setNewName]=useState("");
let[newBreed,setNewBreed]=useState("");
let[newUrl,setNewUrl]=useState("");
let [flag,setFlag]=useState(true);
let getPup=async()=>{
  const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-PT-SF/players');
  const result=await response.json();
  setPup(result.data.players);
};
useEffect(()=>{
  getPup();
  setNewBreed(""); setNewName(""); setNewUrl("");
},[flag]);

let deletePuppy=async function deletepup(id){
  try{
    const response=await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-PT-SF/players/${id}`,{method: "DELETE"});
  const result=await response.json();
  setFlag(!flag);
  }
  catch(err){
    console.error(err);
  } 
}

let addPuppy=async function addPup(newName, newBreed, newUrl){
  try {
    const response = await fetch(
      'https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-PT-SF/players',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: newName,
          breed: newBreed,
          imageUrl: newUrl
        }),
      }
    );
    const result = await response.json();
    console.log(result);
      
    // setFlag(!flag);
  } catch (err) {
    console.error(err);
  }
}

let ren=pup.map((p)=>(
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
            <button onClick={()=>{deletePuppy(p.id)}} className='bg-amber-600 rounded-lg p-1'><NavLink to={"/"}>Delete</NavLink></button>
            </span>
        </div>
    </div>
    </>
))

return(
  <>
  <span>
    <input className="border-black border-2" type="text" placeholder='Player Name' onChange={(e)=>setSearchText(e.target.value)}/>
    <button className='bg-orange-300 m-1 p-1'><NavLink to={`/search/${searchText}`}>Search!</NavLink></button>
  </span>
  <div>
      <h2>Add New Player</h2>
      <form  className="border-2">
        <label >Name: <input className='border-2 border-black' type="text"  onChange={(e)=>setNewName(e.target.value)}/></label>
        <label >Breed: <input className='border-2 border-black' type="text" onChange={(e)=>setNewBreed(e.target.value)} /></label>
        <label >Image Url: <input className='border-2 border-black' type="url" onChange={(e)=>setNewUrl(e.target.value)} /></label>
        {/* <button onClick={()=>{addPuppy(newName, newBreed, newUrl)}}><NavLink to={"/"}>Add</NavLink></button>  */}
        <button onClick={()=>{addPuppy(newName, newBreed, newUrl)}}>Add Player</button>  
        
      </form>      
  </div>
    {ren}
  </>
)

}

export default App;


  
//   if (isLoading) {
//     return(
//     <h1>Loading...</h1>
//     )
//   }
//   // Show an error message if the fetch failed
//   if (error) {
//     return(
//       <div className='error'>{error.data.error.message}</div>
//     )}
//     let[flag,setFlag]=useState(true);
//     useEffect(()=>{
//       const { data, error, isLoading } = useGetPuppyQuery('');
      
//     },[flag])
//   const [addPuppy,responseInfo2]=useAddNewPuppyMutation();
//   console.log(responseInfo2)
//   const [deletePuppy,responseInfo]=useDeletePuppyMutation();
//   let [newPlayer,setNewPlayer]=useState({name:"", breed:"",url:""})
//   let newPlayerCopy=newPlayer;
//   let [searchText,setSearchText]=useState("");
//   const[displayPuppy,setDisplayPuppy]=useState([]);
  
  
    
//   // let listItems=null;
//   // if(data){
//   //  listItems=data.data.players.map((player)=>(
//   //            <Playercard key={player.id}{... player}/>))
             
//   // }
  

//   return(
   
//     <>
//     <div className='flex flex-row'>
//       <div>
//         <h2>Add New Player</h2>
//         <form  className="border-2">
//           <label >Name: <input type="text" onChange={(e)=>newPlayerCopy.name=e.target.value}/></label>
//           <label >Breed: <input type="text" onChange={(e)=>newPlayerCopy.breed=e.target.value} /></label>
//           <label >Image Url: <input type="url" onChange={(e)=>newPlayerCopy.url=e.target.value} /></label>
//           <button onClick={()=>{addPuppy({name:newPlayerCopy.name, breed:newPlayerCopy.breed, url:newPlayerCopy.url})}}>Create</button>
          
//         </form>
        
//       </div>
//       <label >Search <input className='border-2' type="text" onChange={(e)=>setSearchText(e.target.value)} /></label>
//       <button><NavLink to={`/search/${searchText}`}>Go!</NavLink></button>

//     </div>
//     <div>
//       {listItems }
//     </div>
//     </>
    
//   )
//     }
  
//     export default App

  
//   //     setDisplayPuppy(toDisplay);
//   //     console.log("displaypup in useeffect",displayPuppy)
//   // },[toDisplay])

// //   let[searchText,setSearchtext]=useState("");
// //   let[displaypup,setDisplayPup]=useState([]);
// //   let players=null;
// //   let pupList=null;
// //   // let c=0;
// //   if(data){
// //     console.log(data.data.players);
// //     setDisplayPup(data.data.players);
// //     console.log("display pup",displaypup)

// //   // let b=()=>{
// //   //   c++;
// //   //   dispatch(addToState(players))};
// //   //   if(c==0){
// //   //     b();
// //   //   }
// //     pupList=displaypup.map(player=>
// //         <Playercard {... player}/>)
// // }
// //   function searchResult(name){
// //     let a=displaypup.filter((i)=>i.name==name);
// //     console.log("result",a)
// //     setDisplayPup(a)
// //   }
// //   return (
// //     <>
// //       <h1>Puppy Bowl</h1>
// //       <label htmlFor="">Search Players: <input className='border-2' type="text" placeholder="Enter player name here" onChange={(e=>setSearchtext(e.target.value))} /></label>
// //       <button onClick={()=>searchResult(searchText)}>Search</button>
// //       {error ? (
// //         <>Oh no, there was an error</>
// //       ) : isLoading ? (
// //         <>Loading...</>
// //       ) :  <div className='grid-cols-4'>
// //           {pupList}
// //       </div>}
// //       <button onClick={()=>{addPuppy({name:"dog", breed:"barker"})}}>Create</button>
// //       <button onClick={()=>{deletePuppy(1047)}}>delete</button>
// //       <button onClick={()=>{dispatch(addToState(players));searchResult("dog")}}>Search</button>
// //     </>
// //   )
// // }


