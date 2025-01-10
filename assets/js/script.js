const lenis = new Lenis({
    autoRaf: true,
});

lenis.on('scroll', (e) => {
    console.log(e);
});

const newCard = document.querySelectorAll(".card").forEach(newCard => {
    gsap.to(newCard, {
        opacity: 0,
        scale: 0.7,
        scrollTrigger: {
            trigger: newCard,
            start: "top 15%",
            end: "bottom 15%",
            scrub: 1
        }
    })
})
