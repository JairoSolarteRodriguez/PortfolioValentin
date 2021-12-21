// Menu mobile.
const btnMenu = document.getElementById('btn-menu'),
    navegacion = document.getElementById('nav');

function ocultar() {
    navegacion.classList.add('d-none');
    navegacion.classList.remove('dropdown-content');
    if (btnMenu.classList.contains('btn-close')) {
        btnMenu.classList.remove('btn-close');
        btnMenu.classList.add('btn-menu');
    }
    if (btnMenu.classList.contains('btn-menu')) {
        // btnMenu.classList.toggle('btn-menu');
        btnMenu.classList.remove('btn-close');
    }
    // btnMenu.classList.contains('clase2')
}

// toggle class
btnMenu.addEventListener('click', () => {
    navegacion.classList.toggle('dropdown-content');
    navegacion.classList.toggle('d-none');
    btnMenu.classList.toggle('btn-close');
    btnMenu.classList.toggle('btn-menu');
});

//click in the doc
document.addEventListener("click", function(e) {
    /* get DOM info for click off check */
    let clic = e.target;

    if (clic != btnMenu) {
        ocultar();
    }
});

// Form Validate.

const form = document.getElementById('form'),
    alertName = document.getElementById('alert-name'),
    alertEmail = document.getElementById('alert-email'),
    btnSubmit = document.getElementById('btn-submit');

const inputs = document.querySelectorAll('#form input');
const expresions = {
    name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

const formValidate = (e) => {
    switch (e.target.name) {
        case 'name':
            if (expresions.name.test(e.target.value)) {
                document.getElementById('name').classList.remove('wrong');
                alertName.classList.add('d-none');
            } else {
                document.getElementById('name').classList.remove('correct');
                document.getElementById('name').classList.add('wrong');
                alertName.classList.remove('d-none');
                alertName.classList.add('alert');
                alertName.innerText = `El nombre no puede contener síbolos ni números`;
            }
            if (e.target.value == '') {
                alertName.classList.remove('d-none');
                alertName.classList.add('alert');
                alertName.innerText = `Por favor complete los campos`;
            }
            break;
        case 'email':
            if (expresions.email.test(e.target.value)) {
                document.getElementById('email').classList.remove('wrong');
                document.getElementById('email').classList.add('correct');
                alertEmail.classList.add('d-none');
            } else {
                document.getElementById('email').classList.remove('correct');
                document.getElementById('email').classList.add('wrong');
                alertEmail.classList.remove('d-none');
                alertEmail.classList.add('alert');
                alertEmail.innerText = `Por favor ingrese un correo valido`;
            }
            if (e.target.value == '') {
                alertEmail.classList.remove('d-none');
                alertEmail.classList.add('alert');
                alertEmail.innerText = `Por favor complete los campos`;
            }
            break;
    }
}

inputs.forEach((input) => {
    input.addEventListener('blur', formValidate);
    input.addEventListener('keyup', formValidate);
    input.addEventListener('focus', formValidate);
});