
const detectedSelect = event => {

   switch ( event.target.className ){

      case "option": selectedValue( event.target ); break ;

      case "select": showValue(); break ;

      default : hiddenSelect() ;
   }
}

//Mostrar elementos de .options-container

const showValue = () =>  {

   const options = document.querySelectorAll('.options-container') ;

      options.forEach( elem => {
         const display  = elem.style.display ;

         switch ( display ){

            case "" : elem.style.display = "block" ; break ;

            case "block" : elem.style.display = "none" ; break ;

            default : elem.style.display = "block" ;
         }
      }) ;
      
}

// Mostrar valor seleccionado por .my-select

const selectedValue = element => {

   const text = element.innerHTML ;
   const elementInput = element.parentNode.previousSibling.previousElementSibling ;
   elementInput.value =  text.trim() ;

   selectedCheck( element );
}

// Ocultar Select
const hiddenSelect = () => {
   document.querySelectorAll('.options-container').
   forEach( elem => elem.style.display = "none" ) ;
}

//Cuando carga el DOM, se carga función
( function (){
   document.onclick = detectedSelect ;
}());

const selectedCheck = elementSelected => {

   const option = document.querySelectorAll('.option');
   option.forEach( el => el.classList.remove("selected") ) ;
   elementSelected.classList.add("selected");
};