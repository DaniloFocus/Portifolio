//Seu JavaScript de validação aqui

const form = document.querySelector('#form');

const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const assuntoInput = document.querySelector('#assunto');
const mensagemlInput = document.querySelector('#mensagem');
const btnFormInput = document.querySelector('#btnForm');

form.addEventListener("submit", (event) => {
    event.preventDefault();


    if (nameInput.value === ""){
        alert("Preencha seu nome.");
        return;
    }

    if (emailInput.value === ""){
        alert("Preencha seu email.");
        return;

    }

    if (assuntoInput.value === ""){
        alert("Preencha o assunto.");
        return;
    }

    if (mensagemlInput.value === ""){
        alert("Preencha a mensagem.");
        return;
    }


    form.submit();

})


