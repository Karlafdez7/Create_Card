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
        msgShare.innerHTML = data.error; 
      }else{
        // enlace de la tarjeta
        msgShare.innerHTML = `<a href='${data.cardURL}' target='_blank'> Tu tarjeta </a>`;
}
} ); 
}

sendBTN.addEventListener( 'click', handleClickSend); 


