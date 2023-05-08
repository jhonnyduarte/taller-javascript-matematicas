

function calcularPromedio (lista){

    // let sumaLista = 0;
    // for (let i = 0; i < lista.length; i++) {
    //     sumaLista = sumaLista + lista[i];
    // }

    const sumaLista = lista.reduce((valorAcumulado,nuevoValor)=> valorAcumulado + nuevoValor);
        const promedio = sumaLista / lista.length;
       // console.log(promedio);
        return promedio;

}

function esPar(lista){
    return !(lista.length % 2);
}
function esImpar(){
    return lista.length % 2;
}

function calcularMediana(listaDesordenada){
    const lista = ordenarLista(listaDesordenada);

    const listaEsPar = esPar(lista);

    if(listaEsPar){

        const indexMitad1ListaPar= (lista.length/2) -1;
        const indexMitad2ListaPar= lista.length / 2 ;

        const listaMitades = [];
        listaMitades.push(lista[indexMitad1ListaPar]);
        listaMitades.push(lista[indexMitad2ListaPar]);

        const medianaListaPar = calcularPromedio(listaMitades);
        return medianaListaPar;

    }else{
        const indexMitadListaImpar = Math.floor(lista.length/2);
        const medianaListaImpar = lista[indexMitadListaImpar];
        console.log(indexMitadListaImpar);
        console.log(medianaListaImpar);
        return medianaListaImpar;
    }
}

function ordenarLista(listaDesordenada){

    const lista = listaDesordenada.sort((valorAcumulado,nuevoValor) => valorAcumulado-nuevoValor);

    return lista;
}