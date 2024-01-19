import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import {useGetPuppyByIdQuery} from "../../api/api"
import Playercard from '../playercard/Playercard';

function Players() {
    let {id}=useParams();
    let pupInfo=null
    const { data, error, isLoading } = useGetPuppyByIdQuery(`${id}`);
    if(data){
        pupInfo=data.data.player
        console.log(pupInfo)
    }
    return (
    <>
        {error ? (
            <>Oh no, there was an error</>
        ) : isLoading ? (
            <>Loading...</>
        ) :  <Playercard {...pupInfo}/>}
    </>

    )
}

export default Players