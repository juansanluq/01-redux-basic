import { Action } from './ngrx-fake/ngrx';
import { incrementadorAction, 
    decrementarAction, 
    multiplicarAction, 
    dividirAction, 
    resetAction } from './contador/contador.actions';

console.log( reducer(10, incrementadorAction));
console.log( reducer(10, decrementarAction));
console.log( reducer(10, multiplicarAction));
console.log( reducer(10, dividirAction));
console.log( reducer(10, resetAction));