const btn = document.querySelector('.menu-btn');
const dropdown = document.querySelector('.hamburger');
const lightbtn = document.querySelector('.light');
const body = document.body;

function toggle(){
    btn.addEventListener('click', function(){
        dropdown.classList.toggle('active');
    });

    lightbtn.addEventListener('click', function(){
        body.classList.toggle('lightmode');
        lightbtn.classList.toggle('darkbtn')
    });
    
};

toggle();