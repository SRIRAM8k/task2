// script.js
const signUpForm = document.getElementById('signUpForm');
const signInForm = document.getElementById('signInForm');
const switchToSignIn = document.getElementById('switchToSignIn');
const switchToSignUp = document.getElementById('switchToSignUp');

switchToSignIn.addEventListener('click', (e) => {
    e.preventDefault();
    signInForm.parentElement.style.display = 'block';
    signUpForm.parentElement.style.display = 'none';
});

switchToSignUp.addEventListener('click', (e) => {
    e.preventDefault();
    signUpForm.parentElement.style.display = 'block';
    signInForm.parentElement.style.display = 'none';
});

// Initialize to show the sign-in form by default
signInForm.parentElement.style.display = 'block';
signUpForm.parentElement.style.display = 'none';
