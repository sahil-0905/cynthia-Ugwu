var timeout;
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// function circleMouseFollower(){
    // window.addEventListener("mousemove", function(dets) {
        // console.log(dets);
      //document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
    // 
// });
// }
// circleMouseFollower();
// 
function firstPageAnim(){
    var t1 = gsap.timeline();

    t1.from("#nav", {
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease: "power2.inOut"
    })
    .to(".boundingelem", {
        y: 0,
        ease: "power2.inOut",
        duration: 1,
        delay: -1,
        stagger: .2
       
    })
    t1.from("#herofooter", {
        y: '-10',
        opacity: 0,
        duration: 1.5,
        delay: -1,
        ease: "power2.inOut"
    })
}

function circleChaptaKaro(){
    //define default value
    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;
    window.addEventListener("mousemove", function(dets){
        this.clearTimeout(timeout);
        var xdiff = dets.clientX - xprev;
        var ydiff = dets.clientY - yprev;

        xscale = gsap.utils.clamp(.8, 1.2, xdiff);
        yscale = gsap.utils.clamp(.8, 1.2, ydiff);

        xprev = dets.clientX;
        yprev = dets.clientY;

       
       circleMouseFollower(xscale,yscale);
       timeout = setTimeout(function() {
        document.querySelector("#minicircle").style.transform = 
          `translate(${dets.clientX}px, ${dets.clientY}px) scale(1,1)`;
       }, 100);
    });
}

function circleMouseFollower(xscale,yscale) {
    window.addEventListener("mousemove", function(dets) {
        console.log(dets); // Logging mouse event details

        // Moving the #minicircle element to the cursor position
        document.querySelector("#minicircle").style.transform = 
            `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale},${yscale})`;
    });
}


circleChaptaKaro();
circleMouseFollower();
firstPageAnim();

// document.querySelectorAll(".elem").forEach(function (elem) {
    // elem.addEventListener("mousemove", function(details){
        // console.log(details);
    // }) 
// }) 
// 
// 
document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;

    elem.addEventListener("mouseleave", function () {
        gsap.to(elem.querySelector("img"), {
            opacity: 0,
            ease: "power3",
            duration: 0.5,
        });
    });

    elem.addEventListener("mousemove", function (dets) {
        var rect = elem.getBoundingClientRect();
        var diff = dets.clientY - rect.top;
        diffrot = dets.clientX - rotate;
        rotate = dets.clientX;

        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            ease: "power3",
            duration: 0.3,
            top: diff + "px",
            left: (dets.clientX - rect.left) + "px",
            rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
        });
    });
});










































































