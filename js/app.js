console.log('masuk');
const inp = document.querySelectorAll('#card-submit-form input');

inp.forEach((item)=>{
    item.addEventListener('focusout', inputChecker);
})

function inputChecker(event){
    if(event.target.value == ''){
        event.target.parentElement.classList.add('error');
        event.target.parentElement.nextElementSibling ? event.target.parentElement.nextElementSibling.textContent = "Can't be blank" : event.target.parentElement.insertAdjacentHTML("afterend",
        "<span class='error-msg'>Can't be blank</span>");
        
    }else{
        event.target.parentElement.classList.remove('error');
        event.target.parentElement.nextElementSibling.remove();
    }
}