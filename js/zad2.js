let formElement = document.querySelector('form');
let errorMessageElement = document.querySelector('.error-message');

let inputEmailElement = document.querySelector('#email');
let inputNameElement = document.querySelector('#name');
let inputTelElement = document.querySelector('#tel');
let inputNumberElement = document.querySelector('#number');
let checkboxAgreeConditions = document.querySelector('#agree-conditions');
let checkboxAgreeData = document.querySelector('#agree-data');

let addFile = document.querySelector('#add-file');
let addFileBtn = document.querySelector('#add-file-btn');
let fileText = document.querySelector('#file-text');

formElement.addEventListener('submit', function (event) {
  let errors = []

  if (inputNameElement.value.length <= 6) {
    errors.push('Twoje imię jest za krótkie')
  }

  if (!inputEmailElement.value.includes('@')) {
    errors.push('Email musi posiadać znak @')
  }

  if ((inputTelElement.value.length < 11 || inputTelElement.value.length > 11) && !inputEmailElement.value.includes('+')){
    errors.push('Numer telefonu musi mieć 11 znaków');
  }

  if  (inputNumberElement.value.length < 4 || inputNumberElement.value.length > 6){
    errors.push('Numer musi mieć min 4 oraz max 6 znaków');
  }

  if (!checkboxAgreeConditions.checked) {
    errors.push('Musisz zaakceptować warunki')
  }

  if (!checkboxAgreeData.checked) {
    errors.push('Musisz wyrazić zgodę')
  }

  if (errors.length > 0) {
    event.preventDefault()

    let errorMessage = '';
    errors.forEach(function (error) {
      errorMessage += error + '<br>';
    })
    errorMessageElement.innerHTML = errorMessage
  }
})

let imgUpload = document.querySelector('#upload-imgs');
let imgPreview = document.querySelector('#img-preview');
let totalFiles;
let previewElement;
let img;

imgUpload.addEventListener('change', previewImgs, false);

function previewImgs(event) {
  totalFiles = imgUpload.files.length;
  
  if(!!totalFiles) {
    imgPreview.classList.remove('add-imgs--hidden');
    previewElement = document.createElement('p');
    imgPreview.appendChild(previewElement);
  }
  
  for(let i = 0; i < totalFiles; i++) {
    img = document.createElement('img');
    img.src = URL.createObjectURL(event.target.files[i]);
    img.classList.add('img-preview');
    imgPreview.appendChild(img);
  }
}



