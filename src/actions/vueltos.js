import {types} from '../types/types';

export const addVuelto = (btn) => ({
    type: types.addVuelto,
    payload: btn
})

export const sumaVuelto = (suma) => ({
    type: types.sumaVuelto,
    payload: suma
})

export const resetVuelto = (rst) => ({
    type: types.resetVuelto,
    payload: rst
})