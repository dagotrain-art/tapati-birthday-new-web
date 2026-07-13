/* ===========================================
      Floating Hearts
=========================================== */

const heartContainer = document.getElementById("hearts");

function createHeart(){

const heart = document.createElement("div");

heart.classList.add("heartParticle");

heart.innerHTML = "❤";

heart.style.left = Math.random()*100+"vw";

heart.style.fontSize=(15+Math.random()*30)+"px";

heart.style.animationDuration=(5+Math.random()*6)+"s";

heartContainer.appendChild(heart);

setTimeout(()=>{
heart.remove();
},11000);

}

setInterval(createHeart,250);


/* ===========================================
          Gallery Lightbox
=========================================== */

const images=document.querySelectorAll(".photos img");

const lightbox=document.createElement("div");

lightbox.id="lightbox";

lightbox.innerHTML="<img>";

document.body.appendChild(lightbox);

const lightImage=lightbox.querySelector("img");

images.forEach(img=>{

img.addEventListener("click",()=>{

lightbox.classList.add("show");

lightImage.src=img.src;

});

});

lightbox.addEventListener("click",()=>{

lightbox.classList.remove("show");

});


/* ===========================================
        Fade Animation on Scroll
=========================================== */

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity=1;

entry.target.style.transform="translateY(0px)";

}

});

},{
threshold:.2
});

document.querySelectorAll(".card,.letter,.gallery img").forEach(el=>{

el.style.opacity=0;

el.style.transform="translateY(70px)";

el.style.transition="1s";

observer.observe(el);

});


/* ===========================================
      Confetti
=========================================== */

function confetti(){

for(let i=0;i<120;i++){

let piece=document.createElement("div");

piece.className="confetti";

piece.style.left=Math.random()*100+"vw";

piece.style.background=
["#ff4d88","#ffd54f","#4dd0e1","#ffffff","#7c4dff"]
[Math.floor(Math.random()*5)];

piece.style.animationDuration=
(2+Math.random()*4)+"s";

piece.style.opacity=Math.random();

document.body.appendChild(piece);

setTimeout(()=>{

piece.remove();

},6000);

}

}

window.onload=confetti;


/* ===========================================
       Smooth Letter Animation
=========================================== */

const letter=document.querySelector(".letter");

letter.style.transition="2s";

letter.style.transform="scale(.95)";

setTimeout(()=>{

letter.style.transform="scale(1)";

},1000);


/* ===========================================
       Sparkle Cursor
=========================================== */

document.addEventListener("mousemove",function(e){

const sparkle=document.createElement("div");

sparkle.className="spark";

sparkle.style.left=e.pageX+"px";

sparkle.style.top=e.pageY+"px";

document.body.appendChild(sparkle);

setTimeout(()=>{

sparkle.remove();

},600);

});


/* ===========================================
        Typing Title Effect
=========================================== */

const title=document.querySelector(".hero h1");

const original=title.innerHTML;

title.innerHTML="";

let i=0;

function typing(){

if(i<original.length){

title.innerHTML+=original.charAt(i);

i++;

setTimeout(typing,35);

}

}

typing();


/* ===========================================
      Auto Scroll Hint
=========================================== */

setTimeout(()=>{

window.scrollBy({

top:30,

behavior:"smooth"

});

setTimeout(()=>{

window.scrollBy({

top:-30,

behavior:"smooth"

});

},800);

},2500);