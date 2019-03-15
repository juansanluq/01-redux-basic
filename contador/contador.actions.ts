import { Action } from '../ngrx-fake/ngrx';

export const incrementadorAction: Action = {
    type: 'INCREMENTAR'
};

export const decrementarAction: Action = {
    type: 'DECREMENTAR'
}

export const multiplicarAction: Action = {
    type: 'MULTIPLICAR',
    payload: 2
}

export const dividirAction: Action = {
    type: 'DIVIDIR',
    payload: 3
}

export const resetAction: Action = {
    type: 'RESET'
}