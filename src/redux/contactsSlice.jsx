import { createAsyncThunk, createSlice, isAnyOf} from "@reduxjs/toolkit";
// import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getContacts, addContact, deleteContact } from "services/contactsApi";


export const getContactsThunk = createAsyncThunk('contacts/getContacts', async()=>{
    return await getContacts()
})

export const addContactsThunk = createAsyncThunk('contacts/addContact', async(data)=>{
    return await addContact(data)
})

export const deleteContactsThunk = createAsyncThunk('contacts/deleteContact', async(id)=>{
    return await deleteContact(id)
})

const handlePending = (state) => {
    state.isLoading = true
}

const handleFulfilledGet = (state,{payload}) => {
    state.isLoading = false
    state.contacts = payload
    state.error = ''
}

const handleFulfilledAdd = (state,{payload}) => {
    state.isLoading = false
    state.contacts.push(payload)
    state.error = ''
}

const handleFulfilledDel = (state,{payload}) => {
    state.isLoading = false
    state.contacts = state.contacts.filter(el=>el.id!==payload?.id)
    console.log('deleting')
    state.error = ''
}

const handleRejected = (state,{payload}) => {
    state.error = payload
    state.isLoading = false
}

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts:[],
        isLoading: false,
        error: ''
    },
    extraReducers:(builder)=>{
        builder
        .addCase(getContactsThunk.fulfilled, handleFulfilledGet)
        .addCase(addContactsThunk.fulfilled, handleFulfilledAdd)
        .addCase(deleteContactsThunk.fulfilled, handleFulfilledDel)
        .addMatcher(isAnyOf(getContactsThunk.pending, addContactsThunk.pending, deleteContactsThunk.pending), handlePending)
        .addMatcher(isAnyOf(getContactsThunk.rejected, addContactsThunk.rejected, deleteContactsThunk.rejected), handleRejected)
    }
})



// export const contactsApi = createApi({
//     reducerPath: 'contactsApi',
//     baseQuery: fetchBaseQuery({baseUrl: 'https://65940be71493b0116069cd82.mockapi.io/'}),
//     tagTypes: ['Contact'],
//     endpoints: builder => ({
//         fetchContacts: builder.query({
//             query: () => '/contacts',
//             providesTags: ['Contact']
//         }),
//         createContact: builder.mutation({
//             query: newContact => ({
//                 url: `/contacts`,
//                 method: 'POST',
//                 body: newContact
//             }),
//             invalidatesTags: ['Contact']
//         })
//     })
// })

// export const {useFetchContactsQuery, useCreateContactMutation} = contactsApi

