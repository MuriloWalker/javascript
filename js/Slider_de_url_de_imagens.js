let currentIndex=0;const slides=document.querySelectorAll('.slide'),dots=document.querySelectorAll('.dot');function showSlide(e){document.querySelector('.slider-wrapper').style.transform=`translateX(${-e*710}px)`,dots.forEach(e=>e.classList.remove('active-dot')),dots[e].classList.add('active-dot')}function nextSlide(){currentIndex=(currentIndex+1)%slides.length,showSlide(currentIndex)}function prevSlide(){currentIndex=(currentIndex-1+slides.length)%slides.length,showSlide(currentIndex)}function currentSlide(e){currentIndex=e,showSlide(currentIndex)}document.addEventListener('DOMContentLoaded',()=>showSlide(currentIndex));