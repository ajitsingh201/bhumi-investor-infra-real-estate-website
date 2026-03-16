//welcome header

const slides=document.querySelectorAll(".hero-slide");
let index=0;

function changeSlide(){
  slides[index].classList.remove("active");
  index=(index+1)%slides.length;
  slides[index].classList.add("active");
}

setInterval(changeSlide,5000);



// Mobile Toggle Script

const menuBtn = document.getElementById("menu-btn");
        const mobileMenu = document.getElementById("mobile-menu");
        menuBtn.addEventListener("click", () => {
            mobileMenu.classList.toggle("hidden");
        });


//tab-card

const tabs = document.querySelectorAll(".tab-card");

const content = {
villas:{
title:"Luxury Himalayan Villas",
text:"Celestia Retreat by Bhumi Investors Infra offers a limited collection of thoughtfully designed luxury villas nestled in the serene Himalayan landscape. Each residence blends modern architecture with natural surroundings, creating a private sanctuary for relaxation, comfort, and elevated mountain living. Every villa is carefully planned to maximize natural light, panoramic mountain views, and spacious interiors. The design philosophy focuses on delivering a harmonious balance between luxury living and the tranquility of nature, making it an ideal retreat away from the chaos of city life.",
image:"img/luxury-villa.jpg"
},

location:{
title:"Prime Kanatal Location",
text:"Strategically located near Kanatal in Uttarakhand, Celestia Retreat provides breathtaking panoramic views of the Himalayas while remaining well-connected to Mussoorie and Rishikesh. The location offers the perfect balance of peaceful mountain living and convenient accessibility. The region is rapidly becoming one of the most sought-after destinations for luxury tourism and second homes. Its natural beauty, pleasant climate, and growing popularity among travelers make it a prime location for both lifestyle living and long-term property investment.",
image:"img/villa-celestia1.jpg"
},

amenities:{
title:"Resort Style Amenities",
text:"Residents enjoy a curated selection of premium amenities including a luxury clubhouse, infinity pool, wellness spa, landscaped gardens, and recreational spaces. Every facility is thoughtfully designed to provide a resort-like living experience in the heart of nature. From wellness and relaxation to leisure and social experiences, the amenities are designed to enhance everyday living. Whether it's enjoying peaceful moments in landscaped gardens or spending time with family in the clubhouse, residents experience the comfort of a luxury mountain resort.",
image:"img/villa-celestia.jpg"
},

investment:{
title:"Smart Ownership Investment",
text:"Starting from ₹1.25 Cr, Celestia Retreat is not only a luxury home but also a strategic investment opportunity. With the growing tourism demand in the Mussoorie–Kanatal region, owners can benefit from property appreciation and attractive rental income potential. The smart ownership model allows buyers to enjoy personal use of their villa while also generating passive income through professionally managed rentals. This creates a perfect combination of lifestyle enjoyment and financial growth.",
image:"img/villa1.jpg"
},

management:{
title:"Professional Property Management",
text:"Bhumi Investors Infra provides comprehensive property management services including maintenance, guest handling, rental operations, and security. This ensures owners enjoy a stress-free experience while maximizing the value and returns from their property. With a dedicated hospitality and maintenance team, every aspect of property care is professionally handled. From regular upkeep to guest services, the management system ensures that your investment remains well-maintained and profitable throughout the year.",
image:"img/villa2.jpg"
}
};

tabs.forEach(tab=>{
tab.addEventListener("click",()=>{

tabs.forEach(t=>t.classList.remove("active"));
tab.classList.add("active");

let key = tab.dataset.tab;

document.querySelector("#content-area h3").innerText = content[key].title;
document.querySelector("#content-area p").innerText = content[key].text;
document.getElementById("content-image").src = content[key].image;

});
});



// review slider js

new Swiper(".reviewSlider",{
loop:true,
spaceBetween:25,
autoplay:{
delay:3500,
disableOnInteraction:false
},
navigation:{
nextEl:".swiper-button-next",
prevEl:".swiper-button-prev"
},
breakpoints:{
0:{slidesPerView:1},
640:{slidesPerView:2},
1024:{slidesPerView:3},
1280:{slidesPerView:4}
}
});



// contact form script
document.getElementById("enquiryForm").addEventListener("submit",function(e){

let name=document.querySelector("input[name='name']").value;
let phone=document.querySelector("input[name='phone']").value;
let email=document.querySelector("input[name='email']").value;
let message=document.querySelector("textarea[name='message']").value;

let whatsappMessage=`Hello Bhumi Investors Infra,%0A
Name: ${name}%0A
Phone: ${phone}%0A
Email: ${email}%0A
Message: ${message}`;

let whatsappURL=`https://wa.me/919354541413?text=${whatsappMessage}`;

setTimeout(()=>{
window.open(whatsappURL,"_blank");
},1000);

});



//image gallery page script
const images=document.querySelectorAll(".gallery-item img");
const lightbox=document.getElementById("lightbox");
const lightboxImg=document.getElementById("lightboxImg");
const closeLightbox=document.getElementById("closeLightbox");

images.forEach(img=>{
img.addEventListener("click",()=>{
lightbox.classList.remove("hidden");
lightbox.classList.add("flex");
lightboxImg.src=img.dataset.full;
});
});

closeLightbox.onclick=()=>{
lightbox.classList.add("hidden");
};

lightbox.onclick=(e)=>{
if(e.target===lightbox){
lightbox.classList.add("hidden");
}
};





