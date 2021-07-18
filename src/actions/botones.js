import {types} from '../types/types';

export const addButton = (btn) => ({
    type: types.addButton,
    payload: btn
})

export const sumaButton = (suma) => ({
    type: types.sumaButton,
    payload: suma
})

export const resetButton = () => ({
    type: types.resetButton
})