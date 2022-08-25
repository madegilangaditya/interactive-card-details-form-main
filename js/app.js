console.log('masuk');
const inp = document.querySelectorAll('#card-submit-form input');
const cardNumber = document.querySelector('#card-number');
const cardName = document.querySelector('#card-name');
const cardMonth = document.querySelector('#card-month');
const cardYear = document.querySelector('#card-year');
const cardCvc = document.querySelector('#card-cvc');
const btn = document.querySelector('#card-submit-form .btn');
const thankyou = document.querySelector('.thankyou');

inp.forEach((item)=>{
    item.addEventListener('focusout', inputChecker);
})

cardNumber.addEventListener('keyup', cardNumberCheck);
cardName.addEventListener('keyup', cardNameCheck);
cardMonth.addEventListener('keyup', cardMonthCheck);
cardYear.addEventListener('keyup', cardYearCheck);
cardCvc.addEventListener('keyup', cardCvcCheck);
btn.addEventListener('click', showThankyou);


function inputChecker(event){
    let numbers = /^[0-9 ]+$/;
    if(event.target.value == ''){
        event.target.parentElement.classList.add('error');
        event.target.parentElement.nextElementSibling ? event.target.parentElement.nextElementSibling.textContent = "Can't be blank" : event.target.parentElement.insertAdjacentHTML("afterend",
        "<span class='error-msg'>Can't be blank</span>");
        disableBtn();
    }else if((event.target.id == 'card-number' && !event.target.value.match(numbers)) || (event.target.id == 'card-month' && !event.target.value.match(numbers)) || (event.target.id == 'card-year' && !event.target.value.match(numbers)) || (event.target.id == 'card-cvc' && !event.target.value.match(numbers))){
        event.target.parentElement.classList.add('error');
        event.target.parentElement.nextElementSibling ? event.target.parentElement.nextElementSibling.textContent = "Wrong format, numbers only" : event.target.parentElement.insertAdjacentHTML("afterend",
        "<span class='error-msg'>Wrong format, numbers only</span>");
        disableBtn();  
    }else if(event.target.parentElement.classList.contains('error')){ 
        event.target.parentElement.classList.remove('error');
        event.target.parentElement.nextElementSibling.remove();
        disableBtn();
    }else{
        disableBtn();
    }
   
}

function disableBtn(){
    if(cardNumber.parentElement.classList.contains('error') || cardName.parentElement.classList.contains('error') || cardMonth.parentElement.classList.contains('error') || cardYear.parentElement.classList.contains('error') || cardCvc.parentElement.classList.contains('error')){ 
        btn.setAttribute('disabled','disabled');
    }else if(cardNumber.value != '' && cardName.value != '' && cardMonth.value != '' && cardYear.value != '' && cardCvc.value != '' ){
        btn.removeAttribute('disabled');
        console.log('test 1');
    }
}

function cardNumberCheck(e){
    const changeTarget = document.querySelector('.card-front .card-number');
    e.target.value = e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
    let endValue = e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
    changeTarget.textContent = endValue;
}

function cardNameCheck(e){
    const changeTarget = document.querySelector('.card-front .card-name');
    changeTarget.textContent = e.target.value;
}

function cardMonthCheck(e){
    const changeTarget = document.querySelector('.card-front .card-month');
    changeTarget.textContent = e.target.value;
}

function cardYearCheck(e){
    const changeTarget = document.querySelector('.card-front .card-year');
    changeTarget.textContent = e.target.value;
}

function cardCvcCheck(e){
    const changeTarget = document.querySelector('.card-back .cvc');
    changeTarget.textContent = e.target.value;
}

function showThankyou(e){
    e.preventDefault();
    thankyou.classList.add('show');
    document.querySelector('#card-submit-form').classList.add('hide');
}
