
// Acciones
interface Action {
    type: string;
    payload?: any;
}

// const incrementadorAction: Action = {
//     type: 'INCREMENTAR'
// };

function reducer( state = 10, action: Action ) {

    // if ( action.type === 'INCREMENTAR' ) {
    //     return state += 1;
    // }

    switch ( action.type ) {
        case 'INCREMENTAR':
            return state += 1;

        case 'DECREMENTAR':
            return state -= 1;

        case 'MULTIPLICAR':
            return state * action.payload;

        case 'DIVIDIR':
            return state / action.payload;

        default:
            return state;
    }
}

// Usamos el reducer

const incrementadorAction: Action = {
    type: 'INCREMENTAR'
};

const decrementarAction: Action = {
    type: 'DECREMENTAR'
}

const multiplicarAction: Action = {
    type: 'MULTIPLICAR',
    payload: 2
}

const dividirAction: Action = {
    type: 'DIVIDIR',
    payload: 3
}

console.log(reducer(10, dividirAction));

// Dividir action que reciba algo del payload

