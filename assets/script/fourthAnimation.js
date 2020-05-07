window.addEventListener("scroll", () => {
    const sixCircle = document.querySelector("#c6_1_ > circle");
    const fourCircle = document.querySelector("#c4_1_ > circle");
    const thirdCircle = document.querySelector("#c3_1_ > circle");
    const fifthCircle = document.querySelector("#c5_1_ > circle");
    const secondCircle = document.querySelector("#c2_1_ > circle");
    const firstCircle = document.querySelector("#c1_1_ > circle");
    const allBlocks = document.querySelectorAll(".innovate__block");
    const allCircles = document.querySelectorAll(".innovate__circles");
    const allMask = document.querySelectorAll(".fill-white");

    const size = document.documentElement.clientHeight;

    let value;
    if (window.pageYOffset < 748) 
    {
        value = window.pageYOffset - size * 4 + 250;
    }
    else
    {
        value = window.pageYOffset - size * 4 + 350;
       
    }
    
    const circlPostion = (50 - value) * 2;  

    allBlocks.forEach(el => {
        el.style.transition = "opacity ease-in-out .2s";
    })
        
    if(circlPostion > 5 && circlPostion <= 355)

    {
        sixCircle.style.transform = `translateX(-${circlPostion}px)`;
        firstCircle.style.transform = `translateX(-${circlPostion}px)`;
        fourCircle.style.transform = `translateY(${circlPostion}px)`;
        thirdCircle.style.transform = `translateX(${circlPostion}px)`;
        fifthCircle.style.transform = `translate(-${circlPostion}px, ${circlPostion}px)`;
        secondCircle.style.transform = `translate(${circlPostion}px, -${circlPostion}px)`;

        let id = 1;

        allBlocks.forEach(element => {
            element.style.opacity = "1";
            element.style.animation =`lineDashSecond 2.5s .${id}s linear infinite`;
            id++;
        })

        allCircles.forEach(element => {
            element.style.fill = "none";
            element.setAttribute("mask", "none");
            element.style.animation = "none";

        })

    } else if (circlPostion <= 5 && circlPostion > 0)
    {

        allBlocks.forEach(element => {
            element.style.opacity = "0";
        });
        
    }
    else if (circlPostion <= 0)
    {
        allBlocks.forEach(element => {
            element.style.opacity = "0";
        });

        sixCircle.style.transform = `translateX(0px)`;
        firstCircle.style.transform = `translateX(0px)`;
        fourCircle.style.transform = `translateY(0px)`;
        thirdCircle.style.transform = `translateY(0px)`;
        fifthCircle.style.transform = `translate(0px, 0px)`;
        secondCircle.style.transform = `translate(0px, 0px)`;
        
        let id = 6;
        
        allCircles.forEach(element => {

                element.style.fill = "#efefef";
                element.setAttribute("mask", `url(#mask-${id})`)
            id--;

        })
        
        allMask.forEach(el => {
            el.style.opacity = `1`;
        })

    }
    
    
    
})


