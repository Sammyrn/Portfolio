const btn = document.querySelector('.menu-btn');
const dropdown = document.querySelector('.hamburger');
const lightbtn = document.querySelector('.fa-moon');
const body = document.body;
const box = document.querySelectorAll('.box');
const experienceList = document.querySelector(".timeline");
window.addEventListener('scroll', check_animation)

check_animation()

function check_animation(){
    const trigger = window.innerHeight;
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
        lightbtn.classList.toggle('fa-sun');
        
    });
    
};

const experiences = {
    professional: [
      {
        title: "Front End Developer",
        organization: "Freelance",
        date: "Feb 2024 - till Date",
        description: "Developed user friendly interfaces for companies.",
      },
    ],
    extracurricular: [
      {
        title: "Secretary",
        organization: "Industrial Training Fund Yenagoa",
        date: "March 2023 - August 2024",
        description: "Worked as an intern/assistant",
      },
      
    ],
  };

  // Function to render experience items
  function renderExperience(type) {
    experienceList.innerHTML = experiences[type].map(
        (exp) => `<div class="timeline-item">
            <div class="tl-icon">
                <i class="fas fa-briefcase"></i>
            </div>
            <p class="tl-duration">${exp.date}</p>
            <h5>${exp.title} - <span>${exp.organization}</span></h5>
            <p>${exp.description}</p>
        </div>`
      )
      .join('');
  }

  // Function to toggle between Professional and Extracurricular
  function showExperience(type) {
    // Update the active button
    document.getElementById('btn-professional').classList.remove('active');
    document.getElementById('btn-extracurricular').classList.remove('active');
    document.getElementById(`btn-${type}`).classList.add('active');
    
    // Render the selected experience type
    renderExperience(type);
  }

  // Initialize with Professional experience
  renderExperience('professional');


toggle();
