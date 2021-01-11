const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let headImg = document.getElementById("cta-img");
headImg.setAttribute('src', siteContent['cta']["img-src"])

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

const navTab1 = document.querySelector('nav a');
const navTab2 = navTab1.nextSibling;
const navTab3 = navTab2.nextSibling;
const navTab4 = navTab3.nextSibling;
const navTab5 = navTab4.nextSibling;
const navTab6 = navTab5.nextSibling;
navTab1.textContent = "Services";
navTab2.textContent = "Product";
navTab3.textContent = "Vision";
navTab4.textContent = "Features";
navTab5.textContent = "About";
navTab6.textContent = "Contact";

let navBar = document.querySelector('nav')
let nav = document.getElementsByTagName('a')
let newNavItem = document.createElement('a')
newNavItem.textContent = 'New Item'
newNavItem.href = '#'
navBar.prepend(newNavItem)

const frontPage = document.querySelector('h1');
frontPage.textContent = siteContent["cta"]["h1"]
frontPage.innerHTML = "DOM <br> IS <br> AWESOME"

const button = document.querySelector('button');
button.textContent = siteContent["cta"]["button"]
button.innerHTML = "Get Started"

const new1 = document.querySelectorAll(".text-content h4");
new1[0].textContent = siteContent["main-content"]["features-h4"];

 const new2 = document.querySelectorAll(".text-content p");
 
 new2[1].innerText = siteContent["main-content"]["features-content"];

 const new3 = document.querySelectorAll(".text-content h4");
 
 new3[2].innerText = siteContent["main-content"]["about-h4"];

const new4 = document.querySelectorAll(".text-content p");

new4[3].innerText = siteContent["main-content"]["about-content"];

const new5 = document.querySelectorAll(".text-content h4");

new5[4].innerText = siteContent["main-content"]["services-h4"];

const new6 = document.querySelectorAll(".text-content p");
new6[5].innerText = siteContent["main-content"]["services-content"];

const new7 = document.querySelectorAll(".text-content h4");
new7[6].innerText = siteContent["main-content"]["product-h4"];

const new8 = document.querySelectorAll(".text-content p");
new8[7].innerText = siteContent["main-content"]["product-content"];

const new9 = document.querySelectorAll(".text-content h4");
new9[8].innerText = siteContent["main-content"]["vision-h4"];

const new10= document.querySelectorAll(".text-content p");
new10[9].innerText = siteContent["main-content"]["vision-content"];

let contactText = document.querySelectorAll('.contact p')

let contactArray = Array.from(contactText)
contactArray[0].textContent = siteContent['contact']['address']
contactArray[1].textContent = siteContent['contact']['phone']
contactArray[2].textContent = siteContent['contact']['email']



