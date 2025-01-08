const Modal = document.getElementById('modal');
const FormBtn = document.getElementById('formbtn');
const Newsletter = document.getElementById('newsletter');
const Email = document.getElementById('email');
const ModalBtn = document.getElementById('modalbtn');
const Label = document.getElementById('label');
const Form = document.getElementsByTagName("form");

const handleClick = (e) => {
    e.preventDefault();
    if (Validation() && getComputedStyle(Modal).display === 'none') {
        Newsletter.style.display = "none";
        Modal.style.display = "flex";

        Form[0].reset();
    } else {
        Modal.style.display = "none";
        Newsletter.style.display = "grid";
    }
};

const Validation = () => {
    const email = Email.value;
    const pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

    if (pattern.test(email)) {
        console.log('Email is valid');
        return true;
    } else {
        Email.style.border = "1px solid red";
        return false;
    }
};

FormBtn.addEventListener("click", handleClick);
ModalBtn.addEventListener("click", () => {
    if (getComputedStyle(Modal).display === "flex") {
        Newsletter.style.display = "grid";
        Modal.style.display = "none";
    }
});
