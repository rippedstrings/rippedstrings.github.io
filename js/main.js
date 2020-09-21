// gsap.to(".logo", {duration: 2, x:300, backroundColor: "#560563", border: "5px solid white", ease: "bounce"});
// gsap.set(".logo, .flower", {transformOrgin: "50% 50%"});
// gsap.to(".logo, .flower", {duration: 20, rotation:360});


gsap.to(".flower", { duration: 2.5, ease: "circ.out", y: 100 });

var myObject = {rotation: 0};
gsap.to(myObject, {duration: 3, rotation: 360, onUpdate: function(){
    console.log(myObject.rotation);
}})


// gsap.from(".logo",{duration: 1, opacity: 0, y:150});

gsap.from(".greeting",{duration:2.5, ease: "slow(0.7, 0.7, false)", y:150});

gsap.registerPlugin(ScrollTrigger);
gsap.to(".line",{
    scrollTrigger: {
        trigger: ".line",
        start: "top center",
        markers: true,
        toggleActions: "restart pause reverse pause"
    },
    y: 200,
    duration: 3
});

