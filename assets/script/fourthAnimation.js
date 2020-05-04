window.addEventListener("scroll", () => {
    const sixCircle = document.querySelector("#c6_1_ > circle");
    const fourCircle = document.querySelector("#c4_1_ > circle");
    const thirdCircle = document.querySelector("#c3_1_ > circle");
    const fifthCircle = document.querySelector("#c5_1_ > circle");
    const secondCircle = document.querySelector("#c2_1_ > circle");
    const firstCircle = document.querySelector("#c1_1_ > circle");
    const allBlocks = document.querySelectorAll(".innovate__block");
    const allCircles = document.querySelectorAll(".innovate__circles");
    const allMask = document.querySelectorAll("mask");
    const value = window.pageYOffset - 2600;
    const circlPostion = 20 - value;
    console.log(allMask);
    
    
    if(circlPostion > 5)

    {
        sixCircle.style.transform = `translateX(-${circlPostion}px)`;
        firstCircle.style.transform = `translateX(-${circlPostion}px)`;
        fourCircle.style.transform = `translateY(${circlPostion}px)`;
        thirdCircle.style.transform = `translateX(${circlPostion}px)`;
        fifthCircle.style.transform = `translate(-${circlPostion}px, ${circlPostion}px)`;
        secondCircle.style.transform = `translate(${circlPostion}px, -${circlPostion}px)`;
        
        allBlocks.forEach(element => {
            element.style.opacity = "1";
        })
        allCircles.forEach(element => {
            element.style.fill = "none";
            element.setAttribute("mask", "none");
            element.style.animation = "none";

        })
        //  allCircles.forEach(element => {
        //     element.style.transform = "scale(0)";
        // })
    } else if (circlPostion <= 5 && circlPostion > 0)
    {

        allBlocks.forEach(element => {
            element.style.opacity = "0";
        });
        
       
        
    }
    else 
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
            element.style.animation = `scaleUp .4s .${id}s cubic-bezier(0.33, 1, 0.68, 1)`;
            id--;
        })
        allMask.forEach(el => {
            // el.style.animation = `scaleUp 1s .${id}s cubic-bezier(0.33, 1, 0.68, 1)`;
        })

    }

    // if (circlPostion <= 5 && circlPostion >= 1) 
    // {

    //     allBlocks.forEach(element => {
    //         element.style.opacity = "0";
    //     });
    //     allCircles.forEach(element => {
    //         element.style.transform = "scale(0.2)";
    //     })
        
        

    // }
    
})