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