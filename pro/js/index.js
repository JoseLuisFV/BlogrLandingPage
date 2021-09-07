
const navContainer = document.getElementById('navigation');

const openDefaultOption = document.querySelector('.list-container');

const navManagment = (defaultOption) => {
    let option = defaultOption;

    function changeOption (newOption) {
        option.removeAttribute('open')
        option = newOption;
    }
    return changeOption;
}

const change = navManagment(openDefaultOption);

navContainer.addEventListener('click',  (e) => {
    let option;
    if (e.target.tagName === "SPAN") {
        option = e.target.parentElement.parentElement
    } else if (e.target.tagName === "SUMMARY") {
        option = e.target.parentElement;
    } else {
        option = e.target
    }

    if(!option.open) {
        change(option);
    }
    
})

const buttonMenu = document.getElementById('buttonMenu');

buttonMenu.addEventListener('click', (e) => {
    
    const menu = e.target;
    const navHeader = menu.previousElementSibling;
    if(menu.classList.contains('hamburguer')) {
        menu.classList.replace('hamburguer', 'close');
        navHeader.classList.replace('close', 'open');


    } else if (menu.classList.contains('close')) {
        menu.classList.replace('close', 'hamburguer');
        navHeader.classList.replace('open', 'close');
    }
})


const details = document.querySelector('.footer').querySelectorAll('.list-container');

const arrayDetails = [...details]
arrayDetails.forEach(detail => {
    
    detail.addEventListener("click", (e) => {
        e.preventDefault();
    });
});