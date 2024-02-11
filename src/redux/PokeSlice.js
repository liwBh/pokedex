import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

/* obtener pokemons por paginacion */
export const fetchPokemos = createAsyncThunk(
  "pokemons/fetchPokemos",
  async ({ offset }) => {
    const baseUrl = "https://pokeapi.co/api/v2/";

    const res = await fetch(`${baseUrl}pokemon?limit=50&offset=${offset}`);
    const data = await res.json();

    const promises = data.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url);
      const data = await res.json();

      return data;
    });

    const results = await Promise.all(promises);

    //limpiar el array de pokemons para la paginacion

    return results;
  }
);

/* obtener todos los pokemones para filtrado */
export const fetchSearchPokemos = createAsyncThunk(
  "pokemons/fetchSearchPokemos",
  async ({ keyword }) => {
    try {
      const baseUrl = "https://pokeapi.co/api/v2/";
      const res = await fetch(`${baseUrl}pokemon/${keyword.toLowerCase().trim()}`);

      if (!res.ok) {
        //ingreso mensaje de error
        throw new Error("No se encontró el pokemon");
      }

      const data = await res.json();
      return data;

    } catch (error) {
      console.log(error.message);
    }
  }
);

/* obtener un pokemon por id para detalles */
export const fetchSinglePokemon = createAsyncThunk(
  "pokemons/fetchSinglePokemon",
  async ({ id }) => {
    try {
      const baseUrl = "https://pokeapi.co/api/v2/";
      const res = await fetch(`${baseUrl}pokemon/${id}`);

      if (!res.ok) {
        //ingreso mensaje de error
        throw new Error("No se encontró el pokemon");
      }
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error.message);
    }
  }
);

const pokeSlice = createSlice({
  name: "pokemons",
  initialState: {
    loading: false,
    pokemons: [],
    allPokemons: [],
    error: null,
    pokemon: {},
  },
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    clearPokemons: (state) => {
      state.pokemons = [];
    },
  },
  extraReducers: {
    /* obtener paginacion pokemones  */
    [fetchPokemos.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchPokemos.fulfilled]: (state, action) => {
      state.loading = false;
      state.pokemons = action.payload;
    },
    [fetchPokemos.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },

    /* obtener todos pokemones  */
    [fetchSearchPokemos.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchSearchPokemos.fulfilled]: (state, action) => {
      state.loading = false;
      state.pokemons = action.payload !== undefined ? [action.payload] : [];
    },
    [fetchSearchPokemos.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },

    //consulta por id
    [fetchSinglePokemon.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchSinglePokemon.fulfilled]: (state, action) => {
      state.loading = false;
      state.pokemon = action.payload !== undefined ? action.payload : {};
    },
    [fetchSinglePokemon.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
  },
});

export const { clearError, clearPokemons } = pokeSlice.actions;
export default pokeSlice.reducer;
