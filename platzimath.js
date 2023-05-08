

function calcularPromedio (lista){

    // let sumaLista = 0;
    // for (let i = 0; i < lista.length; i++) {
    //     sumaLista = sumaLista + lista[i];
    // }

    const sumaLista = lista.reduce((valorAcumulado,nuevoValor)=> valorAcumulado + nuevoValor);
        const promedio = sumaLista / lista.length;
        console.log(promedio);

}