window.addEventListener("scroll", function(){
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
})

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu =document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}

document.addEventListener("DOMContentLoaded", function() {
    const list = document.getElementById("list");
    const showMoreButton = document.getElementById("show-more-tech");

    showMoreButton.addEventListener("click", function() {
        const hiddenItems = document.querySelectorAll(".hidden-tech");
        hiddenItems.forEach(item => item.style.display = "list-item");
        showMoreButton.style.display = "none";
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const list = document.getElementById("tool-list");
    const showMoreButton = document.getElementById("show-more-tool");

    showMoreButton.addEventListener("click", function() {
        const hiddenItems = document.querySelectorAll(".hidden-tool");
        hiddenItems.forEach(item => item.style.display = "list-item");
        showMoreButton.style.display = "none";
    });
});

$(document).ready(function(){
    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: false,
        autoplay: false,
        autoplayTimeOut: 1000,
        autoplayHoverPause: true,
        responsive: {

            0:{
                items: 1,
                nav: false
            },
            2000:{
                items: 3,
                nav: false
            }
        }
    });
});

function downloadFile() {
    var downloadLink = document.createElement("a");
    downloadLink.href = "dist/files/RJ_MENDAROS_RESUME.pdf";
    downloadLink.download = "RJ_MENDAROS_RESUME.pdf";
    
    downloadLink.click();
}

const scrollTopIcon = document.getElementById('scroll-effect');
animateElement = (element,origin,delay,distance) => {
    const sr = ScrollReveal({
        delay: delay,
        distance: distance,
        duration: 1000,
        easing: 'ease',
        origin: origin
    });
    sr.reveal(element);
}

animateElement('.home-profile','top',600,'90px');
animateElement('.content','bottom',600,'90px');
animateElement('.content','bottom',600,'90px');
animateElement('.home-icons','left',600,'90px');
animateElement('.about-left','left',500,'90px');
animateElement('.about-title','top',500,'90px');
animateElement('.about-content','right',500,'90px');
animateElement('.skills','bottom',800,'90px');
animateElement('.skills','bottom',800,'90px');
animateElement('#services','left',400,'90px');
animateElement('#portfolio','right',400,'90px');
animateElement('.contact-title','top',500,'90px');
animateElement('.contact-left','left',900,'90px');
animateElement('.contact-right','right',900,'90px');
animateElement('.footer-icons','bottom',900,'90px');
animateElement('.footer-creator','bottom',1000,'90px');

