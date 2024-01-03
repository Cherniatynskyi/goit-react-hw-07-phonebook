import { createSlice} from "@reduxjs/toolkit";
import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import { getContacts } from "services/contactsApi";

// export const getAllContactActions = createAsyncThunk('contacts/getContacts', async()=>{
//     const data = await getContacts()
//     return data
// })

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts:[],
        isLoading: false,
        error: ''
    },
    // extraReducers:(builder)=>{
    //     builder.addCase(getAllContactActions.pending, (state)=>{
    //         state.isLoading = true
    //         state.error = ''
    //     })
    //     builder.addCase(getAllContactActions.fulfilled, (state, {payload})=>{
    //         state.isLoading = true
    //         state.contacts = payload
    //     })
    //     builder.addCase(getAllContactActions.rejected, (state, {payload})=>{
    //         state.error = payload
    //         state.isLoading = true
    //     })
    // }
})



// export const {addContact, deleteContact} = contactsSlice.actions


export const contactsApi = createApi({
    reducerPath: 'contactsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://65940be71493b0116069cd82.mockapi.io/'}),
    tagTypes: ['Contact'],
    endpoints: builder => ({
        fetchContacts: builder.query({
            query: () => '/contacts',
            providesTags: ['Contact']
        }),
        deleteContact: builder.mutation({
            query: contactId => ({
                url: `/contacts/${contactId}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Contact']
        }),
        createContact: builder.mutation({
            query: newContact => ({
                url: `/contacts`,
                method: 'POST',
                body: newContact
            }),
            invalidatesTags: ['Contact']
        })
    })
})

export const {useFetchContactsQuery, useDeleteContactMutation, useCreateContactMutation} = contactsApi

