

function calcularPromedio (lista){

    // let sumaLista = 0;
    // for (let i = 0; i < lista.length; i++) {
    //     sumaLista = sumaLista + lista[i];
    // }

    const sumaLista = lista.reduce((valorAcumulado,nuevoValor)=> valorAcumulado + nuevoValor);
        const promedio = sumaLista / lista.length;
        console.log(promedio);

}

function esPar(lista){
    return !(lista.length % 2);
}
function esImpar(){
    return lista.length % 2;
}

function calcularMediana(lista){

    const listaEsPar = esPar(lista);

    if(listaEsPar){

    }else{
        const indexMitadListaImpar = Math.floor(lista.length/2);
        const medianaListaImpar = lista[indexMitadListaImpar];
        console.log(indexMitadListaImpar);
        console.log(medianaListaImpar);
        return medianaListaImpar;
    }
}