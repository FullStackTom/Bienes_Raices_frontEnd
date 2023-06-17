document.addEventListener('DOMContentLoaded',()=>{
    eventListeners();

    darkmode();
});

function darkmode(){

   /**  const prefiereDarkMode = Window.matchMedia('(prefers-color-scheme:dark)');

    if(prefiereDarkMode.matches){
        document.body.classList.add('dark-mode');
    }else{
        document.body.classList.remove('dark-mode');
    }**/

    const botonDarkmode = document.querySelector('.darkmode-boton');
    botonDarkmode.addEventListener('click',function(){
        document.body.classList.toggle('dark-mode');
    });
}


function eventListeners(){
    const mobileMenu = document.querySelector('.mobile-menu');

    mobileMenu.addEventListener('click',navegacionResponsive);
}

function navegacionResponsive(){

  const navegacion = document.querySelector('.navegacion');
    navegacion.classList.toggle('mostrar');
}
