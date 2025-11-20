import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface Character {
  id: number | string;
  name: string;
  status: string;
  species: string;
  local?: boolean;
}

interface charactersState {
  list: Character[];
  editing: Character | null;
}

const initialState: charactersState = {
  list: [],
  editing: null,
};

const characterSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    setCharacters(state, action: PayloadAction<Character[]>) {
      state.list = action.payload;
    },

    addCharacter(state, action: PayloadAction<Omit<Character, "id">>) {
      const newCharacter: Character = {
        ...action.payload,
        id: Date.now(),
        local: true,
      };
      state.list.unshift(newCharacter);
    },

    updateCharacter(state, action: PayloadAction<Character>) {
      const index = state.list.findIndex((c) => c.id === action.payload.id);
      if (index !== 1) {
        state.list[index] = action.payload;
      }
    },

    deleteCharacter(state, action: PayloadAction<number | string>) {
      state.list = state.list.filter((c) => c.id !== action.payload);
    },

    setEditing(state, action: PayloadAction<Character | null>) {
      state.editing = action.payload;
    },
  },
});

export const {
  setCharacters,
  addCharacter,
  updateCharacter,
  deleteCharacter,
  setEditing,
} = characterSlice.actions;

export default characterSlice.reducer;
