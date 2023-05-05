

const inputPrice = document.querySelector('#price');
const inputCoupon = document.querySelector('#coupon');
const btn = document.querySelector('#calcular');
const newResult = document.querySelector('#result');

btn.addEventListener('click',calcularPrecioConDescuento);

const couponList = [];

    couponList.push({
        name: 'Primera_compra',
        discount: 30
    })
    couponList.push({
        name: 'Referido',
        discount: 20
    })

function calcularPrecioConDescuento(){

    const price = Number(inputPrice.value); 
    const coupon = inputCoupon.value;

    if(!price || !coupon){
        newResult.innerText = 'Debe llenar los espacios requeridos!!';
        return;
    }
    
    let discount;

    const couponInArray = couponList.find(couponElement => couponElement.name == coupon);

    if(couponInArray){
        discount = couponInArray.discount;
    }else{
        newResult.innerText = 'Este cupon no es valido!!';
        return 
    }

    const newPrice = (price*(100-discount))/100;

    newResult.innerText = 'Precio con descuento: $ ' + newPrice;
}