const btn = document.querySelector('.menu-btn');
const dropdown = document.querySelector('.hamburger');
const lightbtn = document.querySelector('.light');
const body = document.body;
const box = document.querySelectorAll('.box');
window.addEventListener('scroll', check_animation)

check_animation()

function check_animation(){
    const trigger = window.innerHeight / 6 * 4;
    box.forEach(box => {
        const top = box.getBoundingClientRect().top;

        if (trigger > top){
            box.classList.add('activate')
        } else{
            box.classList.remove('activate')
        }
    })
};

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
