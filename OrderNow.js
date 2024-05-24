let nameElement = document.getElementById('nameInput')
let phoneElement = document.getElementById('phoneInput')
let orderElement = document.getElementById('orderInput')
let order2Element = document.getElementById('order2Input')
let quantityElement = document.getElementById('quantityInput')
let addressElement = document.getElementById('addressInput')
let DeliveryButton = document.getElementById('point-1')
let DineButton = document.getElementById('point-2')
let BCAButton = document.getElementById('dot-1')
let DANAButton = document.getElementById('dot-2')
let GoPayButton = document.getElementById('dot-3')
let OVOButton = document.getElementById('dot-4')
let ShopeePayButton = document.getElementById('dot-5')

function checkInputs(){
    let nameInput = nameElement.value
    let orderInput = orderElement.value
    let order2Input = order2Element.value
    let addressInput = addressElement.value

    var phoneValid = phoneElement.value
    var quantityValid = quantityElement.value
    var regex=/^[0-9]+$/

    if(nameInput.length <= 3){
        alert('Full name must be more than 3 characters')
    } else if(!phoneValid.match(regex)){
        alert('Must consist of number only')
    } else if(orderInput.length <= 5){
        alert('Order must be more than 5 characters')
    } else if(order2Input.length <=5){
        alert('Additional order must be more than 5 characters')
    } else if(!quantityValid.match(regex)){
        alert('Must consist of number only')
    } else if(addressInput.length <= 5){
        alert('Address must be more than 5 characters')
    } else if(!DeliveryButton.checked && !DineButton.checked){
        alert('Please pick an order type')
    } else if(!BCAButton.checked && !DANAButton.checked && !GoPayButton.checked && !OVOButton.checked && !ShopeePayButton.checked){
        alert('Please pick a payment method')
    } else{
        confirm('Reservation has been made')
    }
}