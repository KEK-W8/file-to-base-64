import './style.css'

document.querySelector('#app').innerHTML = `
  <h1>File encoder</h1>
  <input id="file-uploader" type="file">
  <span id="encoded-file-box"></span>
`

const fileUploader = document.querySelector('#file-uploader');
const encodedFileBox = document.querySelector('#encoded-file-box');

fileUploader.addEventListener('change', ()=>{
    const uploadedFile = fileUploader['files'][0];
    if (!uploadedFile) return;
    const reader = new FileReader();
    reader.readAsDataURL(uploadedFile);
    reader.onload = () => {
        encodedFileBox.innerHTML = reader.result;
        encodedFileBox.style.opacity = 1;
    };
});

encodedFileBox.addEventListener('click', ()=>{
    navigator.clipboard.writeText(encodedFileBox.textContent)
        .then(() => {
            window.alert("Copied to clipboard")
        })
        .catch((error) => {
            window.alert(error);
        });
});
