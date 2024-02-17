const carosoul=document.querySelector('.carosoul');
const slider = document.querySelector('.slider');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

const hori_next_1 = document.querySelector('.hori-next-1');
const hori_next_2 = document.querySelector('.hori-next-2');
const hori_next_3 = document.querySelector('.hori-next-3');
const hori_next_4 = document.querySelector('.hori-next-4');
// const hori_next_5 = document.querySelector('.hori-next-5'); // New variable for next button 5
const hori_prev_1 = document.querySelector('.hori-prev-1');
const hori_prev_2 = document.querySelector('.hori-prev-2');
const hori_prev_3 = document.querySelector('.hori-prev-3');
const hori_prev_4 = document.querySelector('.hori-prev-4');
const hori_prev_5 = document.querySelector('.hori-prev-5'); // New variable for previous button 5
const hori_banner_1 = document.querySelector('.img-cont_1');
const hori_banner_2 = document.querySelector('.img-cont_2');
const hori_banner_3 = document.querySelector('.img-cont_3');
const hori_banner_4 = document.querySelector('.img-card-4');
// const hori_banner_5 = document.querySelector('.img-cont_5'); // New variable for banner 5
const cont1 = document.querySelector('.horizontal-banner');

let direction;

let scrollpos_1 = 0;
let scrollpos_2 = 0;
let scrollpos_3 = 0;
let scrollpos_4 = 0;
// let scrollpos_5 = 0; // New variable for scroll position of banner 5
let scrollamount = 300;
hori_prev_1.style.opacity = '.2';
hori_prev_2.style.opacity = '.2';
hori_prev_3.style.opacity = '.2';
hori_prev_4.style.opacity = '.2';
// hori_prev_5.style.opacity = '.2'; // Set opacity for previous button 5

function horiscroll_1(var1) {
    let maxscroll = hori_banner_1.offsetWidth - cont1.offsetWidth + 40;
    scrollpos_1 += var1 * scrollamount;
    
    if (scrollpos_1 < -maxscroll) {
        scrollpos_1 = -maxscroll;
        hori_next_1.style.opacity = '.2';
    } else {
        hori_next_1.style.opacity = '1';
    }

    if (scrollpos_1 > 0) {
        scrollpos_1 = 0;
        hori_prev_1.style.opacity = '.2';
    } else {
        hori_prev_1.style.opacity = '1';
    }
   
    hori_banner_1.style.left = scrollpos_1 + 'px';
}

function horiscroll_2(var1) {
    let maxscroll = hori_banner_2.offsetWidth - cont1.offsetWidth + 40;
    scrollpos_2 += var1 * scrollamount;
    
    if (scrollpos_2 < -maxscroll) {
        scrollpos_2 = -maxscroll;
        hori_next_2.style.opacity = '.2';
    } else {
        hori_next_2.style.opacity = '1';
    }

    if (scrollpos_2 > 0) {
        scrollpos_2 = 0;
        hori_prev_2.style.opacity = '.2';
    } else {
        hori_prev_2.style.opacity = '1';
    }
   
    hori_banner_2.style.left = scrollpos_2 + 'px';
}

function horiscroll_3(var1) {
    let maxscroll = hori_banner_3.offsetWidth - cont1.offsetWidth + 40;
    scrollpos_3 += var1 * scrollamount;
    
    if (scrollpos_3 < -maxscroll) {
        scrollpos_3 = -maxscroll;
        hori_next_3.style.opacity = '.2';
    } else {
        hori_next_3.style.opacity = '1';
    }

    if (scrollpos_3 > 0) {
        scrollpos_3 = 0;
        hori_prev_3.style.opacity = '.2';
    } else {
        hori_prev_3.style.opacity = '1';
    }
   
    hori_banner_3.style.left = scrollpos_3 + 'px';
}

function horiscroll_4(var1) {
    let maxscroll = hori_banner_4.offsetWidth - cont1.offsetWidth + 40;
    scrollpos_4 += var1 * scrollamount;
   console.log(hori_banner_4.offsetWidth)
   console.log(cont1.offsetWidth)
    
    if (scrollpos_4 < -maxscroll) {
        scrollpos_4 = -maxscroll;
        hori_next_4.style.opacity = '.2';
    } else {
        hori_next_4.style.opacity = '1';
    }

    if (scrollpos_4 > 0) {
        scrollpos_4 = 0;
        hori_prev_4.style.opacity = '.2';
    } else {
        hori_prev_4.style.opacity = '1';
    }
   
    hori_banner_4.style.left = scrollpos_4 + 'px';
}

// New function for banner 5
function horiscroll_5(var1) {
    let maxscroll = hori_banner_5.offsetWidth - cont1.offsetWidth + 40;
    scrollpos_5 += var1 * scrollamount;
    
    if (scrollpos_5 < -maxscroll) {
        scrollpos_5 = -maxscroll;
        hori_next_5.style.opacity = '.2';
    } else {
        hori_next_5.style.opacity = '1';
    }

    if (scrollpos_5 > 0) {
        scrollpos_5 = 0;
        hori_prev_5.style.opacity = '.2';
    } else {
        hori_prev_5.style.opacity = '1';
    }
   
    hori_banner_5.style.left = scrollpos_5 + 'px';
}










// let x=0;
// let w_1=hori_banner.getBoundingClientRect().width;
// alert(w_1)
// hori_prev_1.addEventListener('click',()=>{
//     x=x+20;
//     hori_banner.style.transform = `translateX(${x}%)`;

// })


// hori_next_1.addEventListener('click',()=>{
    
//     x=x-20;
//     hori_banner.style.transform = `translateX(${x}%)`;
// })





prev.addEventListener('click', () => {
    if(direction==-1){
        slider.appendChild(slider.firstElementChild);
        direction=1;

    }
    carosoul.style.justifyContent='flex-end'
    slider.style.transition = 'transform 0.5s ease-in-out';
    slider.style.transform = 'translateX(20%)';

   
});



next.addEventListener('click', () => {
    direction=-1;
    carosoul.style.justifyContent='flex-start'
    slider.style.transition = 'transform 0.5s ease-in-out';
    slider.style.transform = 'translateX(-20%)';

   
});

slider.addEventListener('transitionend', () => {
    if(direction==-1){
        slider.appendChild(slider.firstElementChild);

    }
    else{
        slider.prepend(slider.lastElementChild);
    }



    slider.style.transition = 'none';
    slider.style.transform = 'translateX(0)';
    setTimeout(() => {
        slider.style.transition = 'transform 0.5s ease-in-out';
    });
});
