import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const puppyApi = createApi({
    reducerPath: 'puppyApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-PT-SF/players/' }),
    endpoints: (builder) => ({
        getPuppy: builder.query({
        query: (playerId) => `${playerId}`,
        }),
        getPuppyById: builder.query({
        query: (playerId) =>({
            url:`${playerId}`,
        method: "GET"})

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
                    imageUrl: initialPost.url
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


export const {useGetPuppyQuery, useGetPuppyByIdQuery,useAddNewPuppyMutation, useDeletePuppyMutation}=puppyApi