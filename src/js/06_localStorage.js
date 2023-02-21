'use strict'; 

const localStorageData = JSON.parse(localStorage.getItem ('formData')); 

if(localStorageData){
  console.log('hay local storage');
  data = localStorageData;
  inputName.value = data.name;
  inputJob.value = data.job;
  inputEmail.value = data.email;
  inputTel.value = data.phone;
  data.photo = data.photo;
  inputLinkedin.value = data.linkedin;
  inputGithub.value = data.github;
  updatePreview();
}


