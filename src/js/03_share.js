/* eslint-disable quotes */
/* eslint-disable no-undef */
/* eslint-disable strict */

const sendBTN = document.querySelector ('.js-shareBtn'); 
const msgShare = document.querySelector ('.js-msgShare'); 


function handleClickSend(event) {
    event.preventDefault(); 

    fetch('https://dev.adalab.es/api/card/', {
        method:'POST',
        headers: {
            'content-type':'application/json',
        },
        body:JSON.stringify(data),
      })
    .then ((response)=>response.json())
    .then ((data)=>{

      console.log (data);
      if( ! data.success){
        // Mensaje error
        console.log ('maaaaaaaaaaaaaaaal');
        msgShare.innerHTML = data.error; 
      }else{
        // enlace de la tarjeta
        msgShare.innerHTML = data.cardURL;
        console.log ('TARJETA'); 
}
} ); 
}

sendBTN.addEventListener( 'click', handleClickSend); 


