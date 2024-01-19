import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const puppyApi = createApi({
    reducerPath: 'puppyApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-PT-SF/players/' }),
    endpoints: (builder) => ({
        getPuppyByName: builder.query({
        query: (playerId) => `${playerId}`,
        }),
        addNewPuppy: builder.mutation({
            query: initialPost=>({
                url:"",
                method:"POST",
                headers: {
                    'Content-Type': 'application/json'},
                body: JSON.stringify({
                    name: initialPost.name,
                    breed: initialPost.breed,
                    })
            })  
        }),
        deletePuppy: builder.mutation({
            query: id=>({
                url:`${id}`,
                
                method:"DELETE",
                
            })
        })
    }),
})


export const {useGetPuppyByNameQuery, useAddNewPuppyMutation, useDeletePuppyMutation}=puppyApi