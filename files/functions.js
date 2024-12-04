 ///////////// MAKE INNER LINKS REFERENCED TO LANDING SECTIONS
function scrollToSection(className) {
    const targetElement = document.querySelector(className);
    
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
    }
}
////////////////////////////////////////////////////
//
//
//
//
/////////////////////////  HIDDEN NAVBAR ON SCROLLING
let lastScrollY = 0; 
const navbar = document.querySelector('.nav');  
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY && currentScrollY > 60) {
            navbar.classList.add('hidden');
        } else if (currentScrollY < lastScrollY) {
            navbar.classList.remove('hidden');
        }
        lastScrollY = currentScrollY <= 0 ? 0 : currentScrollY;
    });
////////////////////////////////////////////////////
//
//
//
//
/////////////////////////  SCROLL TO LEFT OR RIGHT BY ARROWS

const leftArrow = document.querySelector('.experts__arrow-left');
const rightArrow = document.querySelector('.experts__arrow-right');
const cards = document.querySelectorAll('.experts__person');
const visibleCardsCount = 4; 
const cardWidth = 280;

let currentIndex = 0; 

function updateVisibleCards() {
    cards.forEach((card, index) => {
        if (index >= currentIndex && index < currentIndex + visibleCardsCount) {
            card.style.transform = `translateX(${(index - currentIndex) * (cardWidth / 6)}px)`; 
        }
    });
}

updateVisibleCards();

rightArrow.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % cards.length;
    updateVisibleCards();
});

leftArrow.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    updateVisibleCards();
});
////////////////////////////////////////////////////
// 
// 
// 
// 
//////////////////// TO SLIDE QUOTES IN "WHAT CUSTOMERS SAY" SECTION
document.addEventListener('DOMContentLoaded', () => {
    const contentWrappers = document.querySelectorAll('.feedback__section2-content-wrapper');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    let currentIndex = 0;

    function showSlide(index) {
        contentWrappers.forEach(wrapper => {
            wrapper.classList.remove('active', 'previous');
        });

        contentWrappers[index].classList.add('active');
    }

    nextButton.addEventListener('click', () => {
        contentWrappers[currentIndex].classList.add('previous');
        
        currentIndex = (currentIndex + 1) % contentWrappers.length;
        
        showSlide(currentIndex);
    });

    prevButton.addEventListener('click', () => {
        contentWrappers[currentIndex].classList.add('previous');
        
        currentIndex = (currentIndex - 1 + contentWrappers.length) % contentWrappers.length;
        
        showSlide(currentIndex);
    });
});
////////////////////////////////////////////////////