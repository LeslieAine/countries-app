import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = [];

export const fetchCountries = createAsyncThunk('countries/fetchCountries', async () => {
  const response = await axios.get('https://restcountries.com/v3.1/all');
  return response.data.map((country) => ({
    name: country.name.official,
    population: country.population,
    capital: country.capital,
    area: country.area,
    flagEmoji: country.flag,
    flagPng: country.flags.png,
    flagSvg: country.flags.svg,
    flagAlt: country.flags.alt,
    continent: country.continents[0],
    timezones: country.timezones,
    maps: country.maps.googleMaps,
    subregion: country.subregion,
  }));
});

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCountries.fulfilled, (state, action) => action.payload);
  },
});

export default countriesSlice.reducer;
