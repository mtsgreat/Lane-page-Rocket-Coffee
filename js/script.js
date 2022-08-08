const iconMobile = document.querySelector('.icon-mobile');
const menuMobile = document.querySelector('.menu');
const icone = document.querySelector('#icon')




iconMobile.addEventListener('click', function(){

   
    menuMobile.classList.toggle("is-hidden");

    if(icone.classList.contains('fa-bars')){
        icone.classList.remove('fa-bars');
        icone.classList.add('fa-xmark');

    }else{
        icone.classList.remove('fa-xmark');
        icone.classList.add('fa-bars');
    }


 
});


