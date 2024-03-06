function init(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
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
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();





// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}


init();
var cursor=document.querySelector('.cursor');
var mouse=document.querySelector('.main');
mouse.addEventListener("mousemove",function (e){
  cursor.style.left=e.x+20+"px";
  cursor.style.top=e.y+20+"px";
});

var crsr=document.querySelector('.crsr');
var video=document.querySelector('video');
video.querySelector("mouseenter",function(e1){
  crsr.style.left=e1.x+"px";
  crsr.style.top=e1.y+"px";
})


var tl=gsap.timeline({
    scrollTrigger:{
        trigger:".page-1 h1",
        scroller:".main",
        // markers:true,
        start:"top 27%",
        end:"top 0",
        scrub:3
    }
})
tl.to(".page-1 h1",{
    x:-80,
    duration:1
},"hello");
tl.to(".page-1 h2",{
    x:100,
    duration:1
},"hello");
tl.to(".page-1 video", {
    width: "90%"
}, "hello");
var tl2=gsap.timeline({
  scrollTrigger:{
      trigger:".page-1 h1",
      scroller:".main",
      // markers:true,
      start:"top -127%",
      end:"top -170",
      scrub:3
  }
});
tl2.to(".main",{
  backgroundColor:"#fff",
});
var tl3=gsap.timeline({
  scrollTrigger:{
      trigger:".page-1 h1",
      scroller:".main",
      // markers:true,
      start:"top -280%",
      end:"top -320",
      scrub:3
  }
});
tl3.to(".image-container #one",{
  x:-80,
  duration:1
},"anim");
tl3.to(".image-container #two",{
  x:90,
  duration:2
},"anim");
var tl4=gsap.timeline({
  scrollTrigger:{
      trigger:".page-1 h1",
      scroller:".main",
      // markers:true,
      start:"top -340%",
      end:"top -380",
      scrub:3
  }
});
tl4.to(".main",{
  backgroundColor:"#000",
})
var zIndexValue = 11; // Initial z-index value
var boxes=document.querySelectorAll(".box-1");
boxes.forEach(function(element) {
    element.addEventListener("mouseenter",function(){
      var attribute=element.getAttribute("data-image");
      cursor.style.width="400px";
      cursor.style.height="500px";
      cursor.style.borderRadius = "0"
      cursor.style.backgroundImage=`url(${attribute})`
      cursor.style.objectFit="cover";
      cursor.style.backgroundSize="cover";
      cursor.style.zIndex=zIndexValue;
      cursor.style.position="absolute";
    }

    )
    element.addEventListener("mouseleave",function(){
      cursor.style.width="20px";
      cursor.style.height="20px";
      cursor.style.borderRadius="50%";
      cursor.style.backgroundImage="none";
    })
});