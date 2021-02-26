// 1) Exemplo de uma requisição assíncrona

// Nesse caso, não haverá sincronissidade entre a requisição assíncrona fetch e as demais funções
const requestMovies = () => {

    carregarLoading(true); 

    fetch('https://api.b7web.com.br/cinema/')
        .then((response)=>response.json())
        .then((json)=>{
            // ...
            carregarLoading(false); 
        });

    fecharAlgumaTela();

/* 
    Ou

    fetch('https://api.b7web.com.br/cinema/').then((response)=>{
        return response.json();
    });
*/
}

requestMovies();


// 2) Exemplo de requisição assíncrona com async await

// Nesse caso, haverá sincronissidade entre a requisição assíncrona fetch e as demais funções
const requestMovies = async () => {

    carregarLoading(true); 

    const request = await fetch('https://api.b7web.com.br/cinema/');
    const json = await request.json();

    carregarLoading(false); 
    fecharAlgumaTela();
}

requestMovies();