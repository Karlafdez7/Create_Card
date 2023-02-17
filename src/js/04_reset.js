/* eslint-disable strict */
// Botón reset

const handleReset = () => {
  console.log(allInputErrorList); 
  data.palette = 1,
  data.name = "",
  data.job = "",
  data.phone = "",
  data.email = "",
  data.linkedin = "",
  data.github = "",
  data.photo = "",
  updatePreview();
  previewPalette.classList.remove('palette2');
  previewPalette.classList.remove('palette3');
  previewPalette.classList.add('palette1');
  btnPalette1.checked = true;
  for(let i = 0; i < allInputList.length; i++) {
  allInputList[i].value = "";
  };
  for(let i = 0; i < allInputErrorList.length; i++) {
    allInputErrorList[i].innerHTML = " ";
    };
  
  resetImage();
}

btnReset.addEventListener('click', handleReset);

