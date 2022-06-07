gsap.registerPlugin(ScrollTrigger);

gsap.from('.logo', {
    opacity: 0,
    duration: 3,
})

gsap.from('.container h1', {
    onStart: function (){
            console.log('trigger animation')
        },
    scrollTrigger: {
        trigger: ".container h1",
        
        start: "bottom 80%",
        markers: true
    },
    x: "100%",
    opacity: 0,
    duration: 1,
    delay: 1,
})

gsap.from('.container .sub-heading', {
    x: "-100%",
    opacity: 0,
    duration: 1,
    delay: 1.5,
})

gsap.from('.container .order', {
    x: "100%",
    opacity: 0,
    duration: 1,
    delay: 2,
})
// {
//     // scrollTrigger: " img",
//     x: "0%",
//     duration: 4,
//     ease: "elastic.out(1, 0.6)"
//     // ease: "bounce.out"
// })

gsap.from('.section-title', {
    scrollTrigger: {
        trigger: ".section-title",
        start: "bottom 80%",
        // markers: true
    },
    y: "-20%",
    opacity: 0,
    duration: 2
})

gsap.from('.exo .product-title', {
    scrollTrigger: ".exo .product-title",
    x: "-20%",
    opacity: 0,
    duration: 1
})
gsap.from('.ultra .product-title', {
    scrollTrigger: ".ultra .product-title",
    x: "-20%",
    opacity: 0,
    duration: 1
})
gsap.from('.armor .product-title', {
    scrollTrigger: ".armor .product-title",
    x: "-20%",
    opacity: 0,
    duration: 1
})
gsap.from('.versatile .product-title', {
    scrollTrigger: ".versatile .product-title",
    x: "-20%",
    opacity: 0,
    duration: 1
})

gsap.from('.exo .product-description', {
    scrollTrigger: ".exo .product-description",
    x: "20%",
    opacity: 0,
    duration: 1,
    delay: 1
})

gsap.from('.ultra .product-description', {
    scrollTrigger: ".ultra .product-description",
    x: "20%",
    opacity: 0,
    duration: 1,
    delay: 1
})

gsap.from('.armor .product-description', {
    scrollTrigger: ".armor .product-description",
    x: "20%",
    opacity: 0,
    duration: 1,
    delay: 1
})

gsap.from('.versatile .product-description', {
    scrollTrigger: ".versatile .product-description",
    x: "20%",
    opacity: 0,
    duration: 1,
    delay: 1
})

gsap.from('.exo .btn', {
    scrollTrigger: ".exo .btn",
    y: "-20%",
    opacity: 0,
    duration: 1,
    delay: 1
})
gsap.from('.ultra .btn', {
    scrollTrigger: ".ultra .btn",
    y: "-20%",
    opacity: 0,
    duration: 1,
    delay: 1
})
gsap.from('.armor .btn', {
    scrollTrigger: ".armor .btn",
    y: "-20%",
    opacity: 0,
    duration: 1,
    delay: 1
})
gsap.from('.versatile .btn', {
    scrollTrigger: ".versatile .btn",
    y: "-20%",
    opacity: 0,
    duration: 1,
    delay: 1
})

gsap.from('.exo img', {
    scrollTrigger: ".exo img",
    ease: "elastic.out(1, 1)",
    x: "50%",
    // rotation: "360",
    duration: 3
})

gsap.from('.exo img', {
    scrollTrigger: ".exo img",
    opacity: 0,
    // rotation: "360",
    duration: 3.5
})

// gsap.to('.ultra img', {
//     scrollTrigger: ".ultra img",
//     ease: "elastic.out(3, 5)",
//     x: "400",
//     rotation: "360",
//     duration: 3
// })

// gsap.to('.armor img', {
//     scrollTrigger: ".armor img",
//     ease: "elastic.out(3, 5)",
//     x: "400",
//     rotation: "360",
//     duration: 3
// })

// gsap.to('.versatile img', {
//     scrollTrigger: ".versatile img",
//     ease: "elastic.out(3, 5)",
//     x: "400",
//     rotation: "360",
//     duration: 3
// })

// gsap.fromTo('.ultra img', {
//     x: "100%"
// }, 
// {
//     x: "0%",
//     duration: 4,
//     ease: "elastic.out(1, 0.6)"
//     // ease: "bounce.out"
// })

// gsap.fromTo('.armor img', {
//     x: "100%"
// }, 
// {
//     x: "0%",
//     duration: 4,
//     ease: "elastic.out(1, 0.6)"
//     // ease: "bounce.out"
// })

// gsap.fromTo('.versatile img', {
//     x: "100%"
// }, 
// {
//     x: "0%",
//     duration: 4,
//     ease: "elastic.out(1, 0.6)"
//     // ease: "bounce.out"
// })