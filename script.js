const Form = document.querySelector('.form-contato');
const maskForm = document.querySelector('.mask-form');

function callForm() {
        Form.style.left = "35%";
        maskForm.style.visibility = "visible";
    };

function mask() {
        Form.style.left = "-100%";        
        maskForm.style.visibility = "hidden";
    };