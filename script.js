const cursor = document.querySelector(".cursor"),
enlargeCursor = document.querySelectorAll(".enlargeCursor");
let mouse = {
    x: undefined,
    y: undefined
}
gsap.to({}, 0.009, {
    repeat: Infinity,
    onRepeat: () => {
        gsap.set(cursor,{
            css: {left: mouse.x, top: mouse.y}
        })
    }
})
gsap.from(".title", {
    opacity: 0,
    scale: .5,
    duration: .6,
    delay: 1
})
gsap.from(".subtitle", {
    opacity: 0,
    scale: .5,
    x: 100,
    duration: .6,
    delay: 1.6
})
gsap.from(".from-left", {
    opacity: 0,
    x: "-100%",
    duration: .6,
    delay: 2.2,
    stagger: .5
})
gsap.from(".from-right", {
    opacity: 0,
    x: "100%",
    duration: .6,
    delay: 4.6,
    stagger: -.5
})
window.addEventListener("mousemove", e => {
    mouse.x = e.x
    mouse.y = e.y
})
enlargeCursor.forEach(item => {
    item.addEventListener("mousemove", () => {
        if(item.classList.contains("small")) cursor.classList.add("enlarge2")
        else cursor.classList.add("enlarge")
    })
    item.addEventListener("mouseleave", () => {
        if(item.classList.contains("small")) cursor.classList.remove("enlarge2")
        else cursor.classList.remove("enlarge")
    })
})
