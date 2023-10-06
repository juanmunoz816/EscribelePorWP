let inputSelect = document.querySelector('#indicativos');
let inputNumero = document.querySelector('#numero');
let btn = document.querySelector('#btn');

let xhr = new XMLHttpRequest();


xhr.open("GET",'dropdown.json',true);
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200){
        let datos = JSON.parse(xhr.responseText);
        datos.forEach(function(item) {
            let option = document.createElement('option');
            option.value = item.value;
            option.textContent = item.label;
            inputSelect.appendChild(option);
        });

    }
};

xhr.send();

btn.addEventListener('click', goToWhatsapp);


function goToWhatsapp(){
    if(inputNumero.value.trim() === ""){
        alert("Por favor, ingresa un numero");
        return;
    }

    const wpURL = 'https://wa.me/'+ inputSelect.value + inputNumero.value;

    window.location.href = wpURL;
};