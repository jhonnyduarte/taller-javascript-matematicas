
const PlatziMath = {};

PlatziMath.calcularPromedio = function calcularPromedio (lista){

    // let sumaLista = 0;
    // for (let i = 0; i < lista.length; i++) {
    //     sumaLista = sumaLista + lista[i];
    // }

    const sumaLista = lista.reduce((valorAcumulado,nuevoValor)=> valorAcumulado + nuevoValor);
        const promedio = sumaLista / lista.length;
       // console.log(promedio);
        return promedio;

}

PlatziMath.esPar = function esPar(lista){
    return !(lista.length % 2);
}
PlatziMath.esImpar = function esImpar(){
    return lista.length % 2;
}

PlatziMath.calcularMediana = function calcularMediana(listaDesordenada){
    const lista = PlatziMath.ordenarLista(listaDesordenada);

    const listaEsPar = PlatziMath.esPar(lista);

    if(listaEsPar){

        const indexMitad1ListaPar= (lista.length/2) -1;
        const indexMitad2ListaPar= lista.length / 2 ;

        const listaMitades = [];
        listaMitades.push(lista[indexMitad1ListaPar]);
        listaMitades.push(lista[indexMitad2ListaPar]);

        const medianaListaPar = PlatziMath.calcularPromedio(listaMitades);
        return medianaListaPar;

    }else{
        const indexMitadListaImpar = Math.floor(lista.length/2);
        const medianaListaImpar = lista[indexMitadListaImpar];
        console.log(indexMitadListaImpar);
        console.log(medianaListaImpar);
        return medianaListaImpar;
    }
}

PlatziMath.ordenarLista = function ordenarLista(listaDesordenada){

    const lista = listaDesordenada.sort((valorAcumulado,nuevoValor) => valorAcumulado-nuevoValor);

    return lista;
}
PlatziMath.ordenarListaBidimensional = function ordenarListaBidimensional(listaDesordenada,i){

    const lista = listaDesordenada.sort((valorAcumulado,nuevoValor) => valorAcumulado[1]-nuevoValor[1]);

    return lista;
}

PlatziMath.calculandoModa = function calculandoModa(lista){

    const listaCount = {};

    for (let i = 0; i < lista.length; i++) {
        const element = lista[i];
        
        if(listaCount[element]){
            listaCount[element] += 1;
        }else{
            listaCount[element] = 1;
        }
        
    }

    const listaArray = Object.entries(listaCount);
    const listaOrdenada = ordenarListaBidimensional(listaArray,1)
    const listaMaxNumber = listaOrdenada[listaOrdenada.length-1];
    console.log(listaCount);
    console.log(listaOrdenada);
    console.log(listaMaxNumber);
    console.log('La moda es: ' + listaMaxNumber[0]);
    const moda = listaMaxNumber[0];
    return moda;
}


const obj = {
    123: 'Juanito Alcachofa',
    456: 'Juanita Alcaparra',
}

function solucion (obj){
    
    const array = [];

    Object.entries(obj).forEach((element) => {
        array.push({
            id: element[0],
            name: element[1],
        });
        
    })
    
    return array;

}

console.log(solucion(obj));
