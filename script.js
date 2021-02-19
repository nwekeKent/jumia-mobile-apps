gsap.registerPlugin(ScrollTrigger)

gsap.utils.toArray('.offer-text').forEach(offertext => {
    ScrollTrigger.create({
        trigger:offertext,
        x:40,
        opacity:1,
        duration:3,
        ease:'bounce'
    })
})