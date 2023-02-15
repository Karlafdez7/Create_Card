/* eslint-disable strict */
// Botón reset

const handleReset = () => {
  data.palette = 1,
  data.name = "",
  data.job = "",
  data.phone = "",
  data.email = "",
  data.linkedin = "",
  data.github = "",
  updatePreview();
    previewPalette.classList.remove('palette2');
    previewPalette.classList.remove('palette3');
    previewPalette.classList.add('palette1');
    btnPalette1.checked = true;
}

btnReset.addEventListener('click', handleReset);

