gsap.fromTo(
    ".hero_text",
    2,
    {
        x :-100,
        opacity: 0
    },
    {
        x :0,
        opacity: 1
    }
)

// CONCEPTの左側
gsap.fromTo(
    ".concept-first .column-left",
    1.5,
    {
        x: -100,
        opacity: 0
    },
    {
        x: 0,
        opacity: 1,
        scrollTrigger: {
            trigger: ".concept-first .column-left",
            start: "top center",
            // markers: true
        }
    }
) 

// CONCEPTの右側
gsap.fromTo(
    ".concept-first .column-right",
    1.5,
    {
        x: 100,
        opacity: 0
    },
    {
        x: 0,
        opacity: 1,
        // 遅延の設定
        delay: 1,
        scrollTrigger: {
            trigger: ".concept-first .column-right",
            start: "top center",
            // markers: true
        }
    }
) 

// ASSISTANTの左側
gsap.fromTo(
    ".assistant-first .column-left",
    1.5,
    {
        x: -100,
        opacity: 0
    },
    {
        x: 0,
        opacity: 1,
        scrollTrigger: {
            trigger: ".assistant-first .column-left",
            start: "top center",
            // markers: true
        }
    }
) 


// ASSISTANTの右側
gsap.fromTo(
    ".assistant-first .column-right",
    1.5,
    {
        x: 100,
        opacity: 0
    },
    {
        x: 0,
        opacity: 1,
        // 遅延の設定
        delay: 1,
        scrollTrigger: {
            trigger: ".assistant-first .column-right",
            start: "top center",
            // markers: true
        }
    }
) 


gsap.fromTo(
    ".assistant-first .assistant__foot",
    1.5,
    {
        x: -100,
        opacity: 0
    },
    {
        x: 0,
        opacity: 1,
        delay: 2,
        scrollTrigger: {
            trigger: ".assistant-first .column-right",
            start: "top center",
            // markers: true
        }
    }
) 


