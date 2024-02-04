import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',

  initialState: [],

  reducers: {
    addContact: {
      reducer(state, action) {
        state = state.push(action.payload);
      },
    },
  },
  deleteContact(state, action) {},
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
