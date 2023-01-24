import {atom} from 'recoil';
import { Types } from '../module/constant';

export const textState = atom({
    key: 'textState', // unique ID (with respect to other atoms/selectors)
    default: [],
})

export const filterState = atom({
    key: 'filterState', // unique ID (with respect to other atoms/selectors)
    default: Types[0]
})