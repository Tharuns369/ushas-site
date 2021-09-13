// AOS
window.addEventListener('load', function(){
    AOS.init();
})



// navbar_toggler
let toggler = document.querySelector('.navbar_toggler');
toggler.addEventListener('click', toggleNavbar);

document.addEventListener('click', function(e){
    if(e.target.closest('.navbar')){
        toggleNavbar();
    }
});

function toggleNavbar(){
    document.querySelector('.navbar').classList.toggle('active');
    document.querySelector('.navbar_toggler').classList.toggle('active');
}

//sticky nav
window.addEventListener('scroll', function(){
    if(this.pageYOffset > 50){
        document.querySelector('header').classList.add('active');
    }else{
        document.querySelector('header').classList.remove('active');
    }
});

// menu Selection

const menuButtons = document.querySelector('.menuButtons');
const menuItemsMain = document.querySelector('.menuItemsMain');

menuButtons.addEventListener('click', function(e){
    if(e.target.classList.contains('menuButton') && !e.target.classList.contains('active')){
        let toDisplay = e.target.getAttribute('data-target');
        console.log(toDisplay)

        //to add/remove active class to buttons
        menuButtons.querySelector('.active').classList.remove('active');
        e.target.classList.add('active');

        //to add/remove active class to menuItems
        menuItemsMain.querySelector('.menuItems.active').classList.remove('active');
        menuItemsMain.querySelector(toDisplay).classList.add('active');
        AOS.init();
    }
})