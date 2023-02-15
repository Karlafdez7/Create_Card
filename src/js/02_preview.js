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

/* let nameWritten = '';
let emailWritten = '';
let jobWritten = '';
let telWritten = '';
let linkedinWritten = '';
let githubWritten = ''; */

function handleInputName (event) {
    data.name = inputName.value;
    updatePreview();
}

function handleInputJob (event) {
    data.job = inputJob.value;
    updatePreview();
}

function handleInputEmail (event) {
    data.email = inputEmail.value;
    updatePreview();
}

function handleInputTel (event) {
    data.phone = inputTel.value;
    updatePreview();
}

function handleInputLinkedin (event) {
    data.linkedin = inputLinkedin.value;
    updatePreview();
}

function handleInputGithub (event) {
    data.github = inputGithub.value;
    updatePreview();
}

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
  console.log(event.currentTarget);
  console.log(event.target);
}


inputEmail.addEventListener('change', function (event) {
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

inputName.addEventListener('change', function (event) {
  if (inputName.value === "") {
    nameError.innerHTML = 'Rellena tus datos'; 
    nameError.className = 'error'; 
  }
});

inputJob.addEventListener('change', function (event) {
  if (inputJob.value === "") {
    jobError.innerHTML = 'Rellena tus datos'; 
    jobError.className = 'error'; 
  }
});

inputLinkedin.addEventListener('change', function (event) {
  if (inputLinkedin.value === "") {
    linkedinError.innerHTML = 'Rellena tus datos'; 
    linkedinError.className = 'error'; 
  }
});

inputGithub.addEventListener('change', function (event) {
  if (inputGithub.value === "") {
    githubError.innerHTML = 'Rellena tus datos'; 
    githubError.className = 'error'; 
  }
});



// EVENTOS

inputName.addEventListener('input', handleInputName);
inputJob.addEventListener('input', handleInputJob);
inputEmail.addEventListener('input', handleInputEmail);
inputTel.addEventListener('input', handleInputTel);
inputLinkedin.addEventListener('input', handleInputLinkedin);
inputGithub.addEventListener('input', handleInputGithub);

btnPalette1.addEventListener('click', handlePalette1); 
btnPalette2.addEventListener('click', handlePalette2);
btnPalette3.addEventListener('click', handlePalette3);
btnPalettes.addEventListener('click', handlePalettes);
