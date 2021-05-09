// Aqui é onde adicionamos o CRUD da aplicação

// Lista inicial de notas
const initialState = {
    list:[
        {title: 'Primeira Nota', body: 'Testando 123...'}
    ]
};

export default (state = initialState, action) => {
    let newList = [...state.list]; // É necessário criarmos um clone da variável pois o redux é falho em editar a variável original

    // Ação de adição e edição
    switch(action.type){
        case 'ADD_NOTE':
            newList.push({
                title: action.payload.title,
                body: action.payload.body
            });
        break;
        case 'EDIT_NOTE':
            if(newList[action.payload.key]){
                newList[action.payload.key] = {
                    title: action.payload.title,
                    body: action.payload.body
                };
            }
        break;
        case 'DEL_NOTE': // Pegando todos os items que não tem o id informado. Dessa forma, excluímos o item.
            newList = newList.filter((item, index)=> index != action.payload.key);
        break;
    }

    return {...state, list:newList};
}