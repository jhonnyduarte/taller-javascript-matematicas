
//ANALISIS PERSONAL

function encontrarPersona(personaEnBusqueda){

    return salarios.find(persona => persona.name == personaEnBusqueda);

    // const persona = salarios.find((persona) => {
    //     return persona.name == personaEnBusqueda;
    // });
    // return persona;
}

function medianaPorPersona(nombrePersona){

    const trabajos = encontrarPersona(nombrePersona).trabajos;
    //console.log(trabajos);
    
    const salarios = trabajos.map(function(elemento){
        
        return elemento.salario;
       
    })
    //console.log(salarios);

    const medianaSalarios = PlatziMath.calcularMediana(salarios);
    //console.log(medianaSalarios);
    return medianaSalarios;
}

function proyeccionPorPersona (nombrePersona){
    
    const trabajos = encontrarPersona(nombrePersona).trabajos;

    let porcentajesCrecimiento = [];

    for(let i= 1; i < trabajos.length; i++){

        const salarioActual = trabajos[i].salario;
        const salarioPasado = trabajos[i - 1].salario;
        const crecimiento = salarioActual-salarioPasado;
        const porcentajeCrecimiento = crecimiento/salarioPasado;

        porcentajesCrecimiento.push(porcentajeCrecimiento);
    }

    const medianaPorcentajesCrecimiento = PlatziMath.calcularMediana
    (porcentajesCrecimiento);

    
    console.log(porcentajesCrecimiento);
    console.log(medianaPorcentajesCrecimiento);

    const ultimoSalario = trabajos[trabajos.length -1].salario;
    const aumento = ultimoSalario * medianaPorcentajesCrecimiento;
    const nuevoSalario = ultimoSalario + aumento;

    console.log(nuevoSalario);
    return nuevoSalario;
    
}

//Analisis Empresarial

/* 
nombreEmpresa{
    year1: [salario1,salario2,salario3]
    year2: [salario1,salario2,salario3]
    year3: [salario1,salario2,salario3]
}
*/

const empresas = {};

for (persona of salarios) {
    for (trabajo of persona.trabajos) {
        if(!empresas[trabajo.empresa]){
            empresas[trabajo.empresa] = {};
        }

        if(!empresas[trabajo.empresa][trabajo.year]){
            empresas[trabajo.empresa][trabajo.year] = [];
        }

        empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);
    }
}
console.log({empresas});

function medianaEmpresaYear (nombreEmpresa,year){

    if(!empresas[nombreEmpresa]){
        console.warn('La empresa no existe !!');
    }else if(!empresas[nombreEmpresa][year]){
        console.warn('Este anno la empresa no opero!!');
    }else{
       return PlatziMath.calcularMediana(empresas[nombreEmpresa][year])
    }
}

function proyeccionEmpresa (nombre){

    if (!empresas[nombre]) {
        console.warn('La empresa no existe!!');
    } else{
        const empresaYears = Object.keys(empresas[nombre]);
        const listaMedianaYears = empresaYears.map((year) => {
            return medianaEmpresaYear(nombre,year);
        });

        let porcentajesCrecimiento = [];

        for(let i= 1; i < listaMedianaYears.length; i++){

        const salarioActual = listaMedianaYears[i];
        const salarioPasado = listaMedianaYears[i - 1];
        const crecimiento = salarioActual-salarioPasado;
        const porcentajeCrecimiento = crecimiento/salarioPasado;

        porcentajesCrecimiento.push(porcentajeCrecimiento);
    }

       const medianaPorcentajesCrecimiento = PlatziMath.calcularMediana
       (porcentajesCrecimiento);

       const ultimoMediana = listaMedianaYears[listaMedianaYears.length -1];
       const aumento = ultimoMediana * medianaPorcentajesCrecimiento;
       const nuevoMediana = ultimoMediana + aumento;

       return nuevoMediana;
    }

}


// Analisis General

function medianaGeneral(){

    const listaMedianas = salarios.map(
        persona => medianaPorPersona(persona.name)
    );

    const mediana = PlatziMath.calcularMediana(listaMedianas);
    return mediana;
}

function medianaTop10(){

    const listaMedianas = salarios.map(
        persona => medianaPorPersona(persona.name)
    );

    const medianasOrdenadas = PlatziMath.ordenarLista(listaMedianas);

    // 10% de la muestra que mas gana,en este ejemplo tenemos
    // 20 personas osea q el 10% serian 2 personas.
    // 20/10 = 2 perosnas es el 10% de 20
    const cantidad = listaMedianas.length / 10;
    const limite = listaMedianas.length - cantidad;

    const top10 = medianasOrdenadas.slice(limite,medianasOrdenadas.length);


    console.log(top10);
}
