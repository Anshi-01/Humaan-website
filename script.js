function locomotive(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
locomotive()



gsap.from(".text .div",{
    y:100,
    opacity:0,
    delay:1,
    stagger:0.08
})


gsap.from(".videocontainer video",{
    width:"80%",
    borderRadius:"50px",
    scrollTrigger:{
        scroller:".main",
        trigger:".videocontainer",
        // markers:true,
        start:"top 20%",
        end:"top 20%",
        pin:true,
        scrub:2,
    }
})



gsap.to(".page2",{
    backgroundColor:"#B488F1",
    color:"white",
    scrollTrigger:{
        scroller:".main",
        trigger:".page2",
        // markers:true,
        start:"top -40%",
        end:"top -40%",
        scrub:2,
    }
})



var tl=gsap.timeline({
    scrollTrigger:{
        scroller:".main",
        trigger:".imgcontainer video",
        // markers:true,
        start:"top 10%",
        end:"top 10%",
        scrub:2,  
        
    }
})
tl.to(".page2",{
    backgroundColor:"#f3f3e9",
    // opacity:0,
   
},"same")
tl.to(".page2",{
    backgroundColor:"#f3f3e9",
    // opacity:0,
   
},"same")
tl.to(".page2",{
    backgroundColor:"#f3f3e9",
    // opacity:0,
   
},"same")





var h= document.querySelectorAll(".card h6")
h.forEach(function(elem){
    gsap.to(elem,{
        bottom:("5%"),
        duration:2,
        scrollTrigger:{
            scroller:".main",
            trigger:".card",
            // markers: true,
            start:"top 10%",
            end:"top 10%",
            scrub:3
        }
    })
    
})


gsap.to(".level",{
    scrollTrigger:{
        scroller:".main",
        trigger:".level",
        // markers:true,
        start:"top 100%",
        end:"top 100%",
        onEnter: function() {
            startCounters(); // Call the function to start the counters when the trigger is activated
        }
    }
    
})
function startCounters(){
    var score=document.querySelector("#hundred h1 span")
var grow=0;

var val=setInterval(function(){
    if(grow<=100){
        var progress=grow++;
        score.innerHTML=progress;
    }
},40)
setTimeout(function(){
    clearInterval(val)
},4500)


var score2=document.querySelector("#thirteen h1 span")
grow2=0;
var val2=setInterval(function(){
    if(grow2<=13){
        var progress2=grow2++;
        score2.innerHTML=progress2;
    }
},110)
setTimeout(function(){
    clearInterval(val2)
},7500)


var score3=document.querySelector("#eighty h1 span")
grow3=0;
var val3=setInterval(function(){
    if(grow3<=80){
        var progress3=grow3++;
        score3.innerHTML=progress3;
    }
},50)
setTimeout(function(){
    clearInterval(val3)
},5500)


}

function swipe(){
    var swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        pagination: {
          el: ".swiper-pagination",
        },
      });
}
swipe()



