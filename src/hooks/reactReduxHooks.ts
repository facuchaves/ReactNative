import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import type {RootState, EntityDispatch} from '../../store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useEntityDispatch: () => EntityDispatch = useDispatch;
export const useEntitySelector: TypedUseSelectorHook<RootState> = useSelector;
