console.log('masuk');
const inp = document.querySelectorAll('#card-submit-form input');
const cardNumber = document.querySelector('#card-number');
const btn = document.querySelector('#card-submit-form .btn');

inp.forEach((item)=>{
    // cardNumber.addEventListener('focusout', numberOnly);
    item.addEventListener('focusout', inputChecker);
    
})



function inputChecker(event){
    let numbers = /^[0-9]+$/;
    if(event.target.value == ''){
        event.target.parentElement.classList.add('error');
        event.target.parentElement.nextElementSibling ? event.target.parentElement.nextElementSibling.textContent = "Can't be blank" : event.target.parentElement.insertAdjacentHTML("afterend",
        "<span class='error-msg'>Can't be blank</span>");
        
    }else if((event.target.id == 'card-number' && !event.target.value.match(numbers)) || (event.target.id == 'card-month' && !event.target.value.match(numbers)) || (event.target.id == 'card-year' && !event.target.value.match(numbers)) || (event.target.id == 'card-cvc' && !event.target.value.match(numbers))){
       
        event.target.parentElement.classList.add('error');
        event.target.parentElement.nextElementSibling ? event.target.parentElement.nextElementSibling.textContent = "Wrong format, numbers only" : event.target.parentElement.insertAdjacentHTML("afterend",
        "<span class='error-msg'>Wrong format, numbers only</span>");
            
        
    }else if(event.target.parentElement.classList.contains('error')){ 
        event.target.parentElement.classList.remove('error');
        event.target.parentElement.nextElementSibling.remove();
    }
}