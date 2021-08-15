const details = document.querySelector('.footer').querySelectorAll('.list-container');

const arrayDetails = [...details]
arrayDetails.forEach(detail => {
    
    detail.addEventListener("click", (e) => {
        e.preventDefault();
    });
});