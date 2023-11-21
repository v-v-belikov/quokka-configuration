import { createReducer } from '@reduxjs/toolkit';
import { CITIES_MAP } from '../components/consts';
import { TOffer } from '../types';
import { activeCityAction, updateOffersAction } from '../store/action';
import { generatedOffers } from '../components/mocks/offers';
const initialState: {
  activeCity: string;
  offers: TOffer[];
} = {
  activeCity: CITIES_MAP.Paris,
  offers: generatedOffers,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(activeCityAction, (state, action) => {
      state.activeCity = action.payload;
    })
    .addCase(updateOffersAction, (state, action) => {
      state.offers = action.payload;
    });
});
