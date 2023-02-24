import { createSlice } from "@reduxjs/toolkit";
const todoSlice = createSlice({
  name: "todoSlice",
  initialState: {
    list: [],
    //   my list will store id, and data (id helpful to delete item, and data that is to be added.)
  },
  reducers: {
    addToList: (state, action) => {
      // action will have data and id to be added.
      //   to be used while adding elements.
      state.list.push({
        id: new Date().getTime().toString(),
        data: action.payload,
      });
    },
    removeFromList: (state, action) => {
      // filter the items that are not to be deleted.
      // to be used when removig item
      const new_list = state.list.filter((item) => item.id !== action.payload);
      if (new_list) {
        state.list = new_list;
      } else {
        state.list = [];
      }
    },
    deleteListItem: (state) => {
      // To be used when cliking checklist remove
      state.list = [];
    },
  },
});

// first export actions.
export const { addToList, removeFromList, deleteListItem } = todoSlice.actions;
// then export reducer object containing reducers to be accessed in store.js
export default todoSlice.reducer;
