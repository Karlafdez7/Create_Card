/* eslint-disable quotes */
/* eslint-disable no-undef */
/* eslint-disable strict */

function handleInputName (event) {
    const nameWritten = inputName.value;
    if (nameWritten === '') {
        previewName.innerHTML = 'Nombre Apellidos';
    } else {
        previewName.innerHTML = nameWritten;
    }
}

function handleInputJob (event) {
    const jobWritten = inputJob.value;
    if (jobWritten === '') {
        previewJob.innerHTML = 'Front-end developer';
    } else {
        previewJob.innerHTML = jobWritten;
    }
}

function handleInputEmail (event) {
    const emailWritten = inputEmail.value;
    previewEmail.href = `mailto:${emailWritten}`;
}

function handleInputTel (event) {
    const telWritten = inputTel.value;
    previewTel.href = `tel:+34${telWritten}`;
}

function handleInputLinkedin (event) {
    const linkedinWritten = inputLinkedin.value;
    if (!linkedinWritten.includes ('https://www.')) {
        previewLinkedin.href = `https://www.${linkedinWritten}`;
    } else {
        previewLinkedin.href = `${linkedinWritten}`;
    }
}

function handleInputGithub (event) {
    const githubWritten = inputGithub.value;
    if (!githubWritten.includes ('https://github.com/')) {
        previewGithub.href = `https://github.com/${githubWritten}`;
    } else {
        previewGithub.href = `${githubWritten}`;
    }
}



// FUNCIONES -PALETTES

function handlePalette1 () {
  if( btnPalette1.checked) {
      previewPalette.classList.remove('palette2');
      previewPalette.classList.remove('palette3');
      previewPalette.classList.add('palette1');
  } 
}

function handlePalette2 () {
  if( btnPalette2.checked) {
      previewPalette.classList.remove('palette1');
      previewPalette.classList.remove('palette3');
      previewPalette.classList.add('palette2');
  } 
}

function handlePalette3 () {
  if( btnPalette3.checked) {
      previewPalette.classList.remove('palette1');
      previewPalette.classList.remove('palette2');
      previewPalette.classList.add('palette3');
  }
}


// E

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

