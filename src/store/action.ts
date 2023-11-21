import { createAction} from '@reduxjs/toolkit';
import { TOffer } from '../types';

export const activeCityAction = createAction<string>('selectCity');
export const updateOffersAction = createAction<TOffer[]>('updateOffers');
