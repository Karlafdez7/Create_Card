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


inputName.addEventListener('input', handleInputName);
inputJob.addEventListener('input', handleInputJob);
inputEmail.addEventListener('input', handleInputEmail);
inputTel.addEventListener('input', handleInputTel);
inputLinkedin.addEventListener('input', handleInputLinkedin);
inputGithub.addEventListener('input', handleInputGithub);