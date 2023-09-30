import {  legacy_createStore as createStore } from 'redux';
import Reducer from '../store/reducers';

export const store =  createStore(Reducer);