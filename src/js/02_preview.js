/* eslint-disable quotes */
/* eslint-disable no-undef */
/* eslint-disable strict */

const data = {
  palette: 1,
  name: "",
  job: "",
  phone: "",
  email: "",
  linkedin: "",
  github: "",
  photo: "",
};

const allInputList = document.querySelectorAll('.js-input');

function handleInputForm() {
  data.name = inputName.value;
  data.job = inputJob.value;
  data.email = inputEmail.value;
  data.phone = inputTel.value;
  data.linkedin = inputLinkedin.value;
  data.github = inputGithub.value;
  updatePreview();
}
/* let nameWritten = '';
let emailWritten = '';
let jobWritten = '';
let telWritten = '';
let linkedinWritten = '';
let githubWritten = ''; */

/* function handleInputName () {
  data.name = inputName.value;
  updatePreview();
}

function handleInputJob () {
  data.job = inputJob.value;
  updatePreview();
}

function handleInputEmail () {
  data.email = inputEmail.value;
  updatePreview();
}

function handleInputTel () {
  data.phone = inputTel.value;
  updatePreview();
}

function handleInputLinkedin () {
  data.linkedin = inputLinkedin.value;
  updatePreview();
}

function handleInputGithub () {
  data.github = inputGithub.value;
  updatePreview();
} */

function updatePreview() {
  if (data.name === '') {
    previewName.innerHTML = 'Nombre Apellidos';
  } else {
    previewName.innerHTML = data.name;
  }
  previewEmail.href = `mailto:${data.email}`;
  if (data.job === '') {
    previewJob.innerHTML = 'Front-end developer';
  } else {
    previewJob.innerHTML = data.job;
  }
  previewTel.href = `tel:+34${data.phone}`;
  if (!data.linkedin.includes ('https://www.')) {
    previewLinkedin.href = `https://www.${data.linkedin}`;
  } else {
    previewLinkedin.href = `${data.linkedin}`;
  }
  if (!data.github.includes ('https://github.com/')) {
    previewGithub.href = `https://github.com/${data.github}`;
  } else {
    previewGithub.href = `${data.github}`;
  }
}


// FUNCIONES -PALETTES

function handlePalette1() {
  data.palette = 1;
  previewPalette.classList.remove('palette2');
  previewPalette.classList.remove('palette3');
  previewPalette.classList.add('palette1');
}

function handlePalette2() {
  data.palette = 2;
  previewPalette.classList.remove('palette1');
  previewPalette.classList.remove('palette3');
  previewPalette.classList.add('palette2');
}

function handlePalette3() {
  data.palette = 3;
  previewPalette.classList.remove('palette1');
  previewPalette.classList.remove('palette2');
  previewPalette.classList.add('palette3');
}

function handlePalettes(event) {
  if(event.target.id === 'palette1') {
    handlePalette1();
  }
  if(event.target.id === 'palette2') {
    handlePalette2();
  }
  if(event.target.id === 'palette3') {
    handlePalette3();
  }
}


inputEmail.addEventListener('change', function () {
  // Cada vez que el usuario escribe algo, verificamos si
  // los campos del formulario son válidos.

  if (inputEmail.validity.valid) {
    // En caso de que haya un mensaje de error visible, si el campo
    // es válido, eliminamos el mensaje de error.
    emailError.innerHTML = ''; // Restablece el contenido del mensaje
    emailError.className = 'error'; // Restablece el estado visual del mensaje
  } else {
    // Si todavía hay un error, muestra el error exacto
    showError(); 
  }
});

function showError() {
  if(email.validity.valueMissing) {
    // Si el campo está vacío
    // muestra el mensaje de error siguiente.
    emailError.textContent = 'Debe introducir una dirección de correo electrónico.';
  } else if(email.validity.typeMismatch) {
    // Si el campo no contiene una dirección de correo electrónico
    // muestra el mensaje de error siguiente.
    emailError.textContent = 'El valor introducido debe ser una dirección de correo electrónico.';
  } else {
    emailError.innerHTML = '';
  }
}

inputName.addEventListener('change', function () {
  if (inputName.value === "") {
    nameError.innerHTML = 'Rellena tus datos'; 
    nameError.className = 'error'; 
  }
});

inputJob.addEventListener('change', function () {
  if (inputJob.value === "") {
    jobError.innerHTML = 'Rellena tus datos'; 
    jobError.className = 'error'; 
  }
});

inputLinkedin.addEventListener('change', function () {
  if (inputLinkedin.value === "") {
    linkedinError.innerHTML = 'Rellena tus datos'; 
    linkedinError.className = 'error'; 
  }
});

inputGithub.addEventListener('change', function () {
  if (inputGithub.value === "") {
    githubError.innerHTML = 'Rellena tus datos'; 
    githubError.className = 'error'; 
  }
});



// EVENTOS
for(let i = 0; i < allInputList.length; i++) {
  allInputList[i].addEventListener('input', handleInputForm);
}

/* inputName.addEventListener('input', handleInputName);
inputJob.addEventListener('input', handleInputJob);
inputEmail.addEventListener('input', handleInputEmail);
inputTel.addEventListener('input', handleInputTel);
inputLinkedin.addEventListener('input', handleInputLinkedin);
inputGithub.addEventListener('input', handleInputGithub); */

/* btnPalette1.addEventListener('click', handlePalette1); 
btnPalette2.addEventListener('click', handlePalette2);
btnPalette3.addEventListener('click', handlePalette3); */
btnPalettes.addEventListener('click', handlePalettes);
