// gsap.to(".logo", {duration: 2, x:300, backroundColor: "#560563", border: "5px solid white", ease: "bounce"});
// gsap.set(".logo, .flower", {transformOrgin: "50% 50%"});
// gsap.to(".logo, .flower", {duration: 20, rotation:360});


gsap.to(".flower", { duration: 2.5, ease: "circ.out", y: 100 });

var myObject = { rotation: 0 };
gsap.to(myObject, {
    duration: 3, rotation: 360, onUpdate: function () {
        console.log(myObject.rotation);
    }
})


// gsap.from(".logo",{duration: 1, opacity: 0, y:150});

gsap.from(".greeting", { duration: 2.5, ease: "slow(0.7, 0.7, false)", y: 150 });

gsap.registerPlugin(ScrollTrigger);
gsap.to(".line", {
    scrollTrigger: {
        trigger: ".line",
        start: "top center",
        markers: true,
        toggleActions: "restart pause reverse pause"
    },
    y: 200,
    duration: 3
});

// this is for the other page
gsap.to('.services-section',{
    scrollTrigger: {
        trigger: '.service-1',
        start: 'top bottom',
        end: 'center center',
        scrub: true
    },
    backgroundColor: '#2B2B2B'
});


gsap.to('.service-1', {
    scrollTrigger: {
        trigger: '.service-1',
        start: 'top bottom',
        end: 'center center',
        scrub: true
    },
    x: 0,
    duration: 3,
});

gsap.to('.service-1', {
    x: '60%',
    immediateRender: false,
    scrollTrigger: {
        trigger: '.service-1',
        start: 'center center',
        end: 'bottom top',
        scrub: true
    },
    duration: 3,
    ease: 'power3.out',
    opacity: 0
});


gsap.to('.service-2',{
    scrollTrigger: {
        trigger: '.service-1',
        start: 'top bottom',
        end: 'center center',
        scrub: true
    },
    x: 0,
    duration: 3
})

gsap.to('.service-2', {
    x: "-60%",
    immediateRender: false,
    scrollTrigger: {
        trigger: '.service-2',
        start: 'center center',
        end: 'bottom top',
        scrub: true
    },
    duration: 3,
    ease: 'power3.out',
    opacity: 0
});


gsap.to('.service-3', {
    scrollTrigger: {
        trigger: '.service-2',
        start: 'top bottom',
        end: 'center center',
        scrub: true
    },
    x: 0,
    duration: 3,
});

gsap.to('.service-3', {
    x: '60%',
    immediateRender: false,
    scrollTrigger: {
        trigger: '.service-3',
        start: 'center center',
        end: 'bottom top',
        scrub: true
    },
    duration: 3,
    ease: 'power3.out',
    opacity: 0
});


gsap.to('.service-4',{
    scrollTrigger: {
        trigger: '.service-3',
        start: 'top bottom',
        end: 'center center',
        scrub: true
    },
    x: 0,
    duration: 3
})

gsap.to('.service-4', {
    x: "-60%",
    immediateRender: false,
    scrollTrigger: {
        trigger: '.service-4',
        start: 'center center',
        end: 'bottom top',
        scrub: true
    },
    duration: 3,
    ease: 'power3.out',
    opacity: 0
});

gsap.to('.service-5', {
    scrollTrigger: {
        trigger: '.service-4',
        start: 'top bottom',
        end: 'center center',
        scrub: true
    },
    x: 0,
    duration: 3,
});

gsap.to('.service-5', {
    x: '60%',
    immediateRender: false,
    scrollTrigger: {
        trigger: '.service-5',
        start: 'center center',
        end: 'bottom top',
        scrub: true
    },
    duration: 3,
    ease: 'power3.out',
    opacity: 0
});

gsap.to('.service-6',{
    scrollTrigger: {
        trigger: '.service-5',
        start: 'top bottom',
        end: 'center center',
        scrub: true
    },
    x: 0,
    duration: 3
})

gsap.to('.service-6', {
    x: "-60%",
    immediateRender: false,
    scrollTrigger: {
        trigger: '.service-6',
        start: 'center center',
        end: 'bottom top',
        scrub: true
    },
    duration: 3,
    ease: 'power3.out',
    opacity: 0
});

gsap.to('.service-7', {
    scrollTrigger: {
        trigger: '.service-6',
        start: 'top bottom',
        end: 'center center',
        scrub: true
    },
    x: 0,
    duration: 3,
});

gsap.to('.service-7', {
    x: '60%',
    immediateRender: false,
    scrollTrigger: {
        trigger: '.service-7',
        start: 'center center',
        end: 'bottom top',
        scrub: true
    },
    duration: 3,
    ease: 'power3.out',
    opacity: 0
});




// let tl = gsap.timeline({

//         scrollTrigger: {
//             trigger: '.smiley',
//             toggleActions: "restart pause reverse pause",
//             start: 'center center',
//             end: () => "+=" + document.querySelector(".smiley").offsetWidthm,
//             markers: true,
//             scrub: true
//         },
//         x: 0,
//     });

//     tl.to('.smiley', {
//         immediateRender: false,
//         scrollTrigger: {
//             trigger: '.services-section',
//             start: 'top center',
//             end: 'bottom bottom',
//             scrub: true
//         },
//         y:500
//     });


