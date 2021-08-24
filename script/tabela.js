const fetchTeste = () => {
    const path = 'http://localhost:3000/getAtributes';
    let teste = [];
      
    const criate = (e) => {
        return document.createElement(e);
    }

    function populaHead(keys){
        const th = criate('thead');
        const row = criate('tr');
        keys.forEach(e => {
            row.innerHTML += `<th>${e}</th>`;
        });
        th.appendChild(row);
        return th;
    }
   
    function populaTabela(array){
        const tb = criate ('tbody');
        for(let i = 0; i < array.length; i++){
            const row = criate('tr');
            Object.values(array[i]).forEach(e => {
                  row.innerHTML += `<td>${e}</td>`;
            });

            tb.appendChild(row);
        }
        console.log(tb);
        return tb;       
    }

    fetch(path).then(response => response.json()).then(e => {
        const table = document.querySelector('#tabelaInscritos');
        const keysObject = Object.keys(e[0]); // pega os nomes das keys
        console.log(Object.keys(e))
        table.appendChild(populaHead(keysObject));
        table.appendChild(populaTabela(e));       
    });
}

fetchTeste();