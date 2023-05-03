
console.group('cuadrado');
const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado*4;
const areaCuadrado = ladoCuadrado*ladoCuadrado;

console.log({
    ladoCuadrado,
    perimetroCuadrado,
    areaCuadrado
});

function calcularCuadrado(lado){
    return{
        perimetro: lado*4,
        area: lado*lado
    }
}
console.log(calcularCuadrado(5));
console.groupEnd('cuadrdado');


console.group('triangulo');

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTrianguloBase = 4;
const alturaTriangulo = 5.5;

const perimetroTriangulo = ladoTriangulo1+ladoTriangulo2+ladoTrianguloBase;
const areaTriangulo = (ladoTrianguloBase*alturaTriangulo)/2;

console.log({
    ladoTriangulo1,
    ladoTriangulo2,
    ladoTrianguloBase,
    alturaTriangulo,
    perimetroTriangulo,
    areaTriangulo
})

function calcularTriangulo(lado1,lado2,base,altura){
    return{
        perimetro: lado1+lado2+base,
        area: (base*altura)/2
    };
}
console.log(calcularTriangulo(5,6,4,5.5));

function calcularAlturaTriangulo(lado1,base){
    if(lado1 == base){
        console.warn('No es un triangulo Isosceles');
    } else{
        return Math.sqrt((Math.pow(lado1,2) - (Math.pow(base,2))/4))
    }
}
console.log(calcularAlturaTriangulo(6,4));
console.log(calcularAlturaTriangulo(6,6));

function areaTrianguloEscaleno(lado1,lado2,lado3){
    if(lado1==lado2 || lado1==lado3 || lado2==lado3){
        return false;
    }else{
        let s = (lado1+lado2+lado3)/2;
        let area = Math.sqrt(s*(s-lado1)*(s-lado2)*(s-lado3))
        let h = (2*area)/lado1;

        return h;
    }
}
console.log(areaTrianguloEscaleno(16,8,10));
console.log(areaTrianguloEscaleno(6,6,6));


console.groupEnd('triangulo');



console.group('circle');

const radioCirculo = 3;
const diametroCirculo = radioCirculo*2;
const PI = 3.1415;

const circunferencia = diametroCirculo * PI;
const areaCirculo = PI * Math.pow(radioCirculo,2);

console.log(
    {
        radioCirculo,
        diametroCirculo,
        PI,
        circunferencia,
        areaCirculo
    }
);
function calcularCirculo(radio){
    const diametro = radio*2;
    const radioAlCuadrado = Math.pow(radio,2);

    return{
        circunferencia: diametro * Math.PI.toFixed(5),
        area: Math.PI.toFixed(5) * radioAlCuadrado
    };
}
console.log(calcularCirculo(3));


console.groupEnd('circle');