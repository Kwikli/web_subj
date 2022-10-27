new WOW().init();

const cartButton = document.querySelector("#cart_button");
const loginButton = document.querySelector("#login_button");
const closeBtn = document.querySelector("#close_buttonn");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");
const loginnForm = document.querySelector(".login_form");
const body = document.querySelector('body');
const submitBtn = document.querySelector('#submit_button');

cartButton.addEventListener("click", function(event){
    modal.classList.add("is-open");
    body.style.overflow = 'hidden';
});

loginButton.addEventListener("click", function(event){
    loginnForm.classList.add("is-open");
    body.style.overflow = 'hidden';
});

closeBtn.addEventListener("click", function(){
    loginnForm.classList.remove("is-open");
    body.style.overflow = 'scroll';
})

close.addEventListener("click", function(event){
    modal.classList.remove("is-open");
    loginnForm.classList.remove("is-open");
    body.style.overflow = 'scroll';
});

// submitBtn.addEventListener("click", function(){
//     if(login){
//         body.style.overflow = 'scroll';
//     }
// });

body.addEventListener('mouseover',function(){
    if(logInForm.classList == 'login_form is-open'){
        body.style.overflow = 'hidden';
    }else{
        body.style.overflow = 'scroll';
    }
});


function toggleModal(){
    modal.classList.toggle("is-open");
}


const buttonAuth = document.querySelector('.button_auth');
const logInForm = document.querySelector('.login_form');
const closeAuth = document.querySelector('.close-auth');
const loginInput = document.querySelector('#login');
const userName = document.querySelector('.user_name');
const buttonOut = document.querySelector('.button_out');

logInForm.addEventListener('click',function(event){
    console.log(event.target);
    if(event.target.classList.contains('is-open')){
        logInForm.classList.remove('is-open');
        body.style.overflow = 'scroll';
    }
})

let login = '';

// function togglelogInForm(){
//     logInForm.classList.toggle('is-open');
// }

function authorized() {
    function logOut() {
            login = '';
            //localStorage.removeItem('gloDelivery');
            buttonAuth.style.display = '';
            userName.style.display = 'none';
            buttonOut.style.display = '';
            buttonOut.removeEventListener('click', logOut);
            checkAuth();
            //userName.textContent = login;
    }
    console.log('Авторизований');
    userName.textContent = login;
    buttonAuth.style.display = 'none';
    userName.style.display = 'inline';
    buttonOut.style.display = 'block';

    buttonOut.addEventListener('click', logOut);
}

function notAuthorized(){
    console.log('Не авторизований');

    function logIn(event){
        event.preventDefault();
        login = loginInput.value;
        if (login){
            logInForm.removeEventListener('submit', logIn);
            logInForm.reset();
            logInForm.classList.remove('is-open');
            checkAuth();
        }else{
            loginInput.classList.add('warning');
            loginInput.addEventListener('mouseover',function(){
                if(loginInput == ''){
                    loginInput.classList.add('warning');
                }else{
                    loginInput.classList.remove('warning');
                }
            });
        }
        //localStorage.setItem('gloDelivery', login);
        //tooglelogInForm();
        //buttonAuth.removeEventListener('click', tooglelogInForm);
        //closeAuth.removeEventListener('click', tooglelogInForm);

    }

    //buttonAuth.addEventListener('click', tooglelogInForm);
    //closeAuth.addEventListener('click', tooglelogInForm);
    logInForm.addEventListener('submit', logIn);
}

function checkAuth() {
    if(login){
        authorized();
    }else{
        notAuthorized();
    }
}

checkAuth();




const dom = document.querySelector('.card_btn');
const domForm = document.querySelector('dom');
const main = document.querySelector('main');
const backtomain = document.querySelector('.backtomain');

dom.addEventListener('click',function(){
    if(login){
        domForm.classList.remove('hidden_dom');
        main.classList.add('hidden_dom');
        body.style.overflow = 'scroll';
    }else{
        loginnForm.classList.add("is-open");
        body.style.overflow = 'hidden';
        
    }
    
});
backtomain.addEventListener('click',function(){
    domForm.classList.add('hidden_dom');
    main.classList.remove('hidden_dom');
});











let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}