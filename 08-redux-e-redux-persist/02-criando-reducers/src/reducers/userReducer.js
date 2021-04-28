/* Criando um reducer */

// Informações iniciais do reducer
const initialState = {
    name:'Gandalf',
    email:'gandalf@cinzento.com.br'
};

export default (state = initialState, action) => {

    // Criando as actions/modificadores
    switch(action.type){
        case 'SET_NAME':
            return {...state, name:action.payload.name};
            break;
        case 'SET_EMAIL':
            return {...state, email:action.payload.email};
            break;
    }   

    return state;
}