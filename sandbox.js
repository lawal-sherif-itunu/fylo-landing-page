    const form = document.getElementById('form');
    const email = document.getElementById('email');
    const emailError = document.getElementById('email-error');
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    form.addEventListener('submit', e => {
        e.preventDefault()
        if (regex.test(email.value)) {
            email.classList.add("failed");
        } else {
            email.classList.remove("failed");
        }
    });













    form.addEventListener('submit', e => {
        e.preventDefault()

        if (mailRegex.test(email.value) {
            console.log('valid');
        });
    });










function validation()
{
    const form = document.getElementById('form');
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('email-error');
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email.match(pattern)) 
    {
        form.classList.add("successMail");
        form.classList.remove("errorMail");
        emailError.innerHTML = "";
        emailError.innerHTML = "Please check your email";
    } else 
    {
        form.classList.add("invalid");
        form.classList.remoce("successMail");
    }

    if (email == "") 
    {
        form.classList.remove("successMail");
        form.classList.add("errorMail");
        emailError.innerHTML = "Please check your email";
    } 
}





const form = document.getElementById('form');
const email = document.getElementById('email');
const emailError = document.getElementById('email-error');

form.addEventListener('submit', e => {
    e.preventDefault();
    
    let emailMessages = []
    if (email.value === '' || email.value == null) {
        emailMessages.push('Please check your email')
    }

    if (emailMessages.length > 0) {
        emailError.innerText = emailMessages.join(', ')
    } else {
        emailError.style.display = 'none';
    }
})