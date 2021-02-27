let portfolioImg = [...document.querySelectorAll('.portfolio__img')]
let portfolioArt = [...document.querySelectorAll('.portfolio__art-img')]

let vh = window.innerHeight * 0.01
let cursor = document.querySelector('#cursor')
let links = document.querySelectorAll('a')
/*************************/
let cursorFunc = (e) => {
    let x = e.pageX - 10
    let y = e.pageY - 10
    cursor.style.transform = `translateX(${x}px) translateY(${y}px)`
}
let resizeFunc = () => {
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
}
let onMouseHover = (e) => cursor.classList.add('is-cursor-enter')
let onMouseLeave = (e) => cursor.classList.remove('is-cursor-enter')
/*************************/
links.forEach( p => p.addEventListener('mouseenter', onMouseHover) )
links.forEach( p => p.addEventListener('mouseleave', onMouseLeave) )
document.documentElement.style.setProperty('--vh', `${vh}px`);
document.body.addEventListener('mousemove', cursorFunc)
window.addEventListener('resize', resizeFunc)

/*************************/
/*************************/

luxy.init()

gsap.registerPlugin(ScrollTrigger)

gsap.from( '.banner__title' ,{
    x: -20,
    alpha: 0,
    duration: 2,
    scrollTrigger: {
        trigger: '.banner__title',
        start: '0% 100%',
        end: '100% 0%',
        toggleActions: 'restart reverse restart reverse',
    },
})
gsap.from( '.banner__subtitle' ,{
    x: 20,
    alpha: 0,
    duration: 2,
    scrollTrigger: {
        trigger: '.banner__subtitle',
        start: '0% 100%',
        end: '100% 0%',
        toggleActions: 'restart reverse restart reverse',
    },
})
portfolioImg.forEach( p => {
    gsap.to( p ,{
        y: -40,
        duration: 3,
        scrollTrigger: {
            trigger: p,
            start: '0% 50%',
            end: '100% 40%',
            toggleActions: 'restart reverse none none',
            scrub: 3,
        },
    })

});
for (var a in portfolioArt) {
    gsap.from( portfolioArt[a] ,{
        x: -30,
        opacity: 0,
        duration: parseFloat(`1.${a*2}`),
        delay: parseFloat(`0.${a*2}`),
        scrollTrigger: {
            trigger: portfolioArt[a],
            start: '0% 100%',
            end: '100% 0%',
            toggleActions: 'restart reverse none none',
        },
    })
}
gsap.from( '.footer' ,{
    alpha: 0,
    duration: 2,
    delay: 2,
    scrollTrigger: {
        trigger: '.footer',
        start: '0% 100%',
        end: '90% 0%',
        toggleActions: 'restart reverse restart reverse',
    },
})
