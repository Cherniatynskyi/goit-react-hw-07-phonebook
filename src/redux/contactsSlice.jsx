import { createSlice} from "@reduxjs/toolkit";
import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts:[],
    },
    reducers:{
        addContact: (state, action) =>{
             state.contacts.push(action.payload)
        },
        deleteContact: (state,action) =>{
           state.contacts = state.contacts.filter((el) => el.id !== action.payload)
        },
    }
})



export const {addContact, deleteContact} = contactsSlice.actions


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