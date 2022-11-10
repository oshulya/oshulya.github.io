let slideIndex = 1;
let dialog = document.querySelector("#full-mockup");
let offer_button = document.querySelector(".offer-button");
let header_offer = document.querySelector(".header-offer");
let burger_checkbox = document.querySelector("#menuToggle input");
let menu_links = document.querySelectorAll(".menu-item");
let header_offer_hide = true;

showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("thumb");
    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("slide-active");
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    slides[slideIndex-1].classList.add("slide-active");
    dots[slideIndex-1].classList.add("active");
}

function show_modal(img_url) {
    let img = dialog.querySelector("img");
    img.setAttribute("src", img_url);
    dialog.showModal()
    document.querySelector("body").classList.add("fix-scroll");
}

// Mockup dialog
let mockups = document.querySelectorAll(".mockups img");
mockups.forEach(mockup => {
    mockup.addEventListener("click", (e) => {
        let img_url = e.target.getAttribute("src");
        show_modal(img_url);
    });
});

// Certificates dialog
let certs = document.querySelectorAll(".certificates img");
certs.forEach(cert => {
    cert.addEventListener("click", (e) => {
        let img_url = e.target.getAttribute("src");
        show_modal(img_url);
    });
});

document.querySelector('.close-btn').onclick = function() {  
    dialog.close();  
    document.querySelector("body").classList.remove("fix-scroll");
};  

menu_links.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        burger_checkbox.checked = false;
        var target = document.querySelector(e.target.hash);
        target.scrollIntoView({behavior: "smooth", block: "nearest", inline: "nearest"});
    });
});

document.addEventListener("scroll", () => {
    if (window.scrollY > offer_button.offsetTop) {
        if (header_offer_hide) {
            header_offer.style.visibility = "visible";
            header_offer.style.opacity = 1;
            header_offer_hide = false;
        } 
    } else {
        if (!header_offer_hide) {
            header_offer.style.visibility = "hidden";
            header_offer.style.opacity = 0;
            header_offer_hide = true;
        }
        
    }
});
