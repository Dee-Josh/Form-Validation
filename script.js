const form = document.querySelector(".form");

// console.log(form.querySelector("h1"));

// function validateForm(user) {
//     console.log(user);
// }

const namePattern = /^[a-zA-Z]{3,}$/;
const passwordPattern = /^[a-zA-Z0-9]{8,}$/;
const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;


function submitUserData(e) {
    e.preventDefault();

    // console.log(e.target.name.value);
    // console.log(form.email.value);

    const user = {
        name: form.name.value,
        password: form.password.value,
        email: form.email.value,
        accept: form.accept.checked
    }

    // console.log(user);

    // const isFormVlaid = validateForm(user);
}


function liveFeedBack(e) {
    console.log(e.target.name);

    if (e.target.name === 'name') {
        let small = e.target.parentNode.querySelector('.form__group-small');
        small.textContent = namePattern.test(e.target.value) ? "Valid" : "Invalid";
       
        e.target.style.border = namePattern.test(e.target.value) ?   '1px solid green' : '1px solid red';

        console.log(namePattern.test(e.target.value));
    }else if (e.target.name === 'password') {
        let small = e.target.parentNode.querySelector('.form__group-small');
        small.textContent = passwordPattern.test(e.target.value) ? "Valid" : "Invalid";
       
        e.target.style.border = passwordPattern.test(e.target.value) ?   '1px solid green' : '1px solid red';

        // console.log(namePattern.test(e.target.value));
    }else if (e.target.name === 'email') {
        let small = e.target.parentNode.querySelector('.form__group-small');
        small.textContent = emailPattern.test(e.target.value) ? "Valid" : "Invalid";
       
        e.target.style.border = emailPattern.test(e.target.value) ?   '1px solid green' : '1px solid red';

        console.log(namePattern.test(e.target.value));
    }
}

form.addEventListener('keyup', liveFeedBack);
form.addEventListener('submit', submitUserData);
