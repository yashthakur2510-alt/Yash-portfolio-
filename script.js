const navLinks = document.querySelectorAll('header nav a');
const logoLinks = document.querySelectorAll('.logo');
const sections = document.querySelectorAll('section');
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('header nav');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

const activePage = () => {
    const header = document.querySelector('header');
    const barsBox = document.querySelector('.bars-box');

        header.classList.remove('active');
        setTimeout(() => {
            header.classList.add('active');     
        }, 1100);

    navLinks.forEach(link => {
        link.classList.remove('active')
    });
   
    barsBox.classList.remove('active');
    setTimeout(() => {
        barsBox.classList.add('active');
    }, 1100);    
    
        sections.forEach(section => {
        section.classList.remove('active')
        });
}        

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');


navLinks.forEach((link, idx) => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); 
        if (!link.classList.contains('active')) {
            activePage();
            link.classList.add('active');
            
            setTimeout(() => {
                if (sections[idx]) sections[idx].classList.add('active');
            }, 1100);
        }
    });
});

logoLinks.forEach(logo => {
    logo.addEventListener('click', () => {
        if (navLinks[0] && !navLinks[0].classList.contains('active')) {
            activePage();
            navLinks[0].classList.add('active');
            setTimeout(() => {
                sections[0].classList.add('active')
            }, 1100);
        }
    });
});

const resumebtns = document.querySelectorAll('.resume-btn');

resumebtns.forEach((btn, idx) =>{
    btn.addEventListener('click', () => {
        const resumeDetails = document.querySelectorAll('.resume-detail');

        resumebtns.forEach(b => {
            b.classList.remove('active');
        });
        btn.classList.add('active');

        resumeDetails.forEach(detail => {
            detail.classList.remove('active');
        });
        if (resumeDetails[idx]) {
            resumeDetails[idx].classList.add('active');
        }
    });
});

const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left');

let index = 0;

const activePortfolio = () => {
    const imgSlide = document.querySelector('.portfolio-carousel .img-slide');
    const portfolioDetails = document.querySelectorAll('.portfolio-detail');

    if (imgSlide) {
        imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;
    }

    portfolioDetails.forEach(detail => {
        detail.classList.remove('active');
    });
    if (portfolioDetails[index]) {
        portfolioDetails[index].classList.add('active');
    }

    const maxIndex = Math.max(0, portfolioDetails.length - 1);
    if (arrowLeft) {
        if (index <= 0) arrowLeft.classList.add('disabled'); else arrowLeft.classList.remove('disabled');
    }
    if (arrowRight) {
        if (index >= maxIndex) arrowRight.classList.add('disabled'); else arrowRight.classList.remove('disabled');
    }
}

if (arrowRight) {
    arrowRight.addEventListener('click', () => {
        const maxIndex = document.querySelectorAll('.portfolio-detail').length - 1;
        if (index < maxIndex) {
            index++;
        } else {
            index = Math.max(0, maxIndex);
        }
        activePortfolio();
    });
}

if (arrowLeft) {
    arrowLeft.addEventListener('click', () => {
        if (index > 0) {
            index--;
        } else {
            index = 0;
        }
        activePortfolio();
    });
}