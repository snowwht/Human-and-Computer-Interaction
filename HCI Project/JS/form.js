const button = document.getElementById("submit_button");

button.addEventListener("click", function(){

    const nameInput = document.getElementById("name").value;
    if(nameInput.length < 5){
        alert('Name must be at least 5 characters long');
        return; 
    }

    const email = document.getElementById("email").value;
    if(!email.endsWith('@gmail.com')){
        alert('email must wnd with @gmail.com');
        return;
    }

    const phone = document.getElementById("phoneNumber").values;
    if(phone.length < 11 || phone.length > 15){
        alert('phone number must be between 11 and 15 numbers')
    }
    else if(isNaN(phone)){
        alert('phone number only contain number')
    }

    const ramen = document.getElementById('ramen-radio');
    const dryRamen = document.getElementById('dryRamen-radio');

    if(!ramen.checked && !dryRamen.checked){
        alert('You must choose a ramen');
        return;
    }

    const tos = document.getElementById('tos')
    if(!tos.checked){
        alert("You must agree to receive newsletter");
        return;
    }

    alert('Registered!')

})