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
        
        start: "bottom 100%",
    },
    x: "100%",
    opacity: 0,
    duration: 1,
    delay: 1,
})

gsap.from('.container .sub-heading', {
    onStart: function (){
            console.log('trigger animation')
        },
    scrollTrigger: {
        trigger: ".container .sub-heading",
        
        start: "bottom 100%",
    },
    x: "-100%",
    opacity: 0,
    duration: 1,
    delay: 1.5,
})

gsap.from('.container .order', {
    onStart: function (){
            console.log('trigger animation')
        },
    scrollTrigger: {
        trigger: ".container .order",
        
        start: "bottom 100%",
    },
    x: "100%",
    opacity: 0,
    duration: 1,
    delay: 2,
    transition: 0,
    clearProps: 'all',
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
    y: "-50%",
    opacity: 0,
    duration: 1,
    delay: 1,
    transition: 0,
    clearProps: 'all',
})
gsap.from('.ultra .btn', {
    scrollTrigger: ".ultra .btn",
    y: "-50%",
    opacity: 0,
    duration: 1,
    delay: 1,
    transition: 0,
    clearProps: 'all',
})
gsap.from('.armor .btn', {
    scrollTrigger: ".armor .btn",
    y: "-50%",
    opacity: 0,
    duration: 1,
    delay: 1,
    transition: 0,
    clearProps: 'all',
})
gsap.from('.versatile .btn', {
    scrollTrigger: ".versatile .btn",
    y: "-50%",
    opacity: 0,
    duration: 1,
    delay: 1,
    transition: 0,
    clearProps: 'all',
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
gsap.from('.ultra img', {
    scrollTrigger: ".ultra img",
    ease: "elastic.out(1, 1)",
    x: "50%",
    // rotation: "360",
    duration: 3
})

gsap.from('.ultra img', {
    scrollTrigger: ".ultra img",
    opacity: 0,
    // rotation: "360",
    duration: 3.5
})
gsap.from('.armor img', {
    scrollTrigger: ".armor img",
    ease: "elastic.out(1, 1)",
    x: "50%",
    // rotation: "360",
    duration: 3
})

gsap.from('.armor img', {
    scrollTrigger: ".armor img",
    opacity: 0,
    // rotation: "360",
    duration: 3.5
})
gsap.from('.versatile img', {
    scrollTrigger: ".versatile img",
    ease: "elastic.out(1, 1)",
    x: "50%",
    // rotation: "360",
    duration: 3
})

gsap.from('.versatile img', {
    scrollTrigger: ".versatile img",
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