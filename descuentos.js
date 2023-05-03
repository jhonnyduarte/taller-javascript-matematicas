

const inputPrice = document.querySelector('#price');
const inputCoupon = document.querySelector('#coupon');
const btn = document.querySelector('#calcular');
const newResult = document.querySelector('#result');

btn.addEventListener('click',calcularPrecioConDescuento);

function calcularPrecioConDescuento(){

    const price = Number(inputPrice.value); 
    const coupon = inputCoupon.value;

    if(!price || !coupon){
        newResult.innerText = 'Debe llenar los espacios requeridos!!';
        return;
    }
    
    let discount;

    switch (coupon) {
        case 'Primera compra':
            discount = 30;
            break;
        case 'Referido':
            discount = 20;
            break;    
    
        default:
            newResult.innerText = 'Este cupon no es valido!!';
            return;
            
    }

    // if(coupon=='Primera compra'){
    //     discount = 30;
    // }
    // else if(coupon=='Referido'){
    //     discount = 20;
    // }else{
    //     newResult.innerText = 'Este cupon no es valido!!';
    //     return 
    // }

    const newPrice = (price*(100-discount))/100;

    newResult.innerText = 'Precio con descuento: $ ' + newPrice;
}