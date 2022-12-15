const checkbox = document.querySelector('input[name="theme"]')
let htmlElement = document.documentElement

checkbox.addEventListener('click',function(){
    htmlElement.classList.toggle('transition')

    if(checkbox.checked){
        htmlElement.setAttribute('data-theme','dark')
    }
    else{
        htmlElement.setAttribute('data-theme','light')
    }
})