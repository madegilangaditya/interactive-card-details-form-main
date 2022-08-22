console.log('masuk');
const inp = document.querySelectorAll('#card-submit-form input');
const cardNumber = document.querySelector('#card-number');
const btn = document.querySelector('#card-submit-form .btn');
let i = 0;

inp.forEach((item, index)=>{
    disableBtn(item,index);
    // cardNumber.addEventListener('focusout', numberOnly);
    item.addEventListener('focusout', inputChecker);
})

// btn.addEventListener('click', ()=>{
    
//     inp.forEach((item)=>{
//         if(item.parentElement.classList.contains('error') && d === 1){
//             btn.classList.add('disabled');
//         }else if(d === 0){
//             btn.classList.remove('disabled');
//         }
//     })
//     console.log(d);
// });



function inputChecker(event){
    let numbers = /^[0-9]+$/;
    if(event.target.value == ''){
        event.target.parentElement.classList.add('error');
        event.target.parentElement.nextElementSibling ? event.target.parentElement.nextElementSibling.textContent = "Can't be blank" : event.target.parentElement.insertAdjacentHTML("afterend",
        "<span class='error-msg'>Can't be blank</span>");
        btn.setAttribute('disabled','disabled'); 
    }else if((event.target.id == 'card-number' && !event.target.value.match(numbers)) || (event.target.id == 'card-month' && !event.target.value.match(numbers)) || (event.target.id == 'card-year' && !event.target.value.match(numbers)) || (event.target.id == 'card-cvc' && !event.target.value.match(numbers))){
        event.target.parentElement.classList.add('error');
        event.target.parentElement.nextElementSibling ? event.target.parentElement.nextElementSibling.textContent = "Wrong format, numbers only" : event.target.parentElement.insertAdjacentHTML("afterend",
        "<span class='error-msg'>Wrong format, numbers only</span>");
        btn.setAttribute('disabled','disabled');  
    }else if(event.target.parentElement.classList.contains('error')){ 
        event.target.parentElement.classList.remove('error');
        event.target.parentElement.nextElementSibling.remove();
        btn.removeAttribute('disabled');
    }
}

function disableBtn(item, index){
    
    
    console.log(index);
    console.log(i);
    if(item.value == '' && i == index - 1  ){
        btn.setAttribute('disabled','disabled');
        i++;
        console.log(item.value);
    }
}
