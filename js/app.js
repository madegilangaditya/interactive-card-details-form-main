console.log('masuk');
const inp = document.querySelectorAll('#card-submit-form input');
const cardNumber = document.querySelector('#card-number');
const cardName = document.querySelector('#card-name');
const cardMonth = document.querySelector('#card-month');
const cardYear = document.querySelector('#card-year');
const cardCvc = document.querySelector('#card-cvc');
const btn = document.querySelector('#card-submit-form .btn');

inp.forEach((item, index)=>{
    item.addEventListener('focusout', inputChecker);
})



function inputChecker(event){
    console.log(cardNumber.value);
    console.log(cardName.value);
    console.log(cardMonth.value);
    console.log(cardYear.value);
    console.log(cardCvc.value);
    
    let numbers = /^[0-9]+$/;
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
