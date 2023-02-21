'use strict'; 

const localStorageData = JSON.parse(localStorage.getItem ('formData')); 

if(localStorageData){
    console.log('hay local storage'); 
    data=localStorageData; 
    inputName.value=data.name; 
    inputJob.value=data.job; 
    inputEmail.value=data.email;
    inputTel.value=data.phone;
    inputLinkedin=data.linkedin;
    inputGithub=data.github; 
    updatePreview(); 
}


