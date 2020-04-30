window.addEventListener('scroll', () => {
    const firstSection =  document.querySelector("section.intro");
    const secondSection =  document.querySelector("section.about");
    const thirdSection =  document.querySelector("section.we-create");
    const size = document.documentElement.clientHeight;
    const secondSectionValue = size * 2;
    // const thirdSectionValue = size * 3;
    let scrollValue = window.pageYOffset;
    if(scrollValue >= 0 && scrollValue <= size)
    {
        firstSection.style.opacity = "1";
        secondSection.style.opacity = "0";
        thirdSection.style.opacity = "0";
    }
    if(scrollValue >= size && scrollValue <= secondSectionValue)
    {
        firstSection.style.opacity = "0";
        secondSection.style.opacity = "1";
        thirdSection.style.opacity = "0";
    }
    if (scrollValue > secondSectionValue)
    {
        firstSection.style.opacity = "0";
        secondSection.style.opacity = "0";
        thirdSection.style.opacity = "1";
    }
    

})



window.onload = (e) => {
    e.preventDefault();

    //FIRST ANIMATION (CIRCLES)
    const leftTopCircleMove = document.querySelector(".circle-plain-left");
    const rigthTopCircleMove = document.querySelector(".circle-plain-right");
    const leftBottomCircleMove = document.querySelector(".circle-plain-left-bottom");
    const rigthBottomCircleMove = document.querySelector(".circle-plain-right-bottom");
    const leftTopCircle = leftTopCircleMove.childNodes[1].childNodes[0];
    const rightTopHalfCircle = rigthTopCircleMove.childNodes[3].childNodes[0];
    const rightTopStroke = rigthTopCircleMove.childNodes[2].childNodes[0];
    const rightBottomCircle = rigthBottomCircleMove.childNodes[1].childNodes[0];
    const leftBottomHalfCircle = leftBottomCircleMove.childNodes[4].childNodes[0];
    const leftBottomStroke = leftBottomCircleMove.childNodes[2].childNodes[0];

    
    setTimeout(() => {
        leftBottomHalfCircle.style.animation = "whiteFill 2s cubic-bezier(0.76, 0, 0.24, 1)";
        leftBottomCircleMove.style.animation = "left-right-bottom 2s ease";
        rigthBottomCircleMove.style.animation = "right-left-bottom 2s cubic-bezier(0.76, 0, 0.24, 1)";
        rightBottomCircle.style.animation = "whiteFill 2s cubic-bezier(0.76, 0, 0.24, 1)"

    }, 700)
    
    setTimeout(() => {
        leftTopCircleMove.style.animation = "left-right-top 2s cubic-bezier(0.76, 0, 0.24, 1)";
        rigthTopCircleMove.style.animation = "right-left-top 2s ease";
        leftTopCircle.style.animation = "whiteFill 2s cubic-bezier(0.76, 0, 0.24, 1)";
        rightTopHalfCircle.style.animation = "whiteFill 2s cubic-bezier(0.76, 0, 0.24, 1)";
        
    }, 1100);

    setTimeout(() => {
        
        leftBottomStroke.style.stroke = "none";
    }, 1700)
    
    setTimeout(() => {
        rightTopStroke.style.stroke = "none";
        rigthBottomCircleMove.style.right = "calc(100% - 155px)"
        leftBottomCircleMove.style.left = "calc(75% - 155px)";
        rightBottomCircle.style.fill = "#efefef";
        leftBottomHalfCircle.style.fill = "#efefef";

    }, 2100)

    setTimeout(() => {
        leftTopCircleMove.style.left = "calc(100% - 155px)";
        rigthTopCircleMove.style.right = "calc(75% - 155px)";
        leftTopCircle.style.fill = "#efefef";
        rightTopHalfCircle.style.fill = "#efefef";
    }, 2200)

    
}

window.addEventListener('scroll', () => {
    const leftTopCircleMove = document.querySelector(".circle-plain-left");
    const rigthTopCircleMove = document.querySelector(".circle-plain-right");
    const leftBottomCircleMove = document.querySelector(".circle-plain-left-bottom");
    const rigthBottomCircleMove = document.querySelector(".circle-plain-right-bottom");
    
    let scrollValue = window.pageYOffset;
    console.log(scrollValue);
    console.log(leftTopCircleMove);

    if(scrollValue > 0) {
        leftTopCircleMove.style.left = `calc(100% - 155px + ${scrollValue / 2}px)`;
        rigthTopCircleMove.style.top = `-${scrollValue / 2}px`;
        leftBottomCircleMove.style.bottom = `-${scrollValue / 2}px`
        rigthBottomCircleMove.style.right = `calc(100% - 155px + ${scrollValue / 2}px)`
    }
    // else
    // {
    //     leftTopCircleMove.style.left = "calc(100% - 155px)";
    // }
    
})

// SECOND ANIMATION
window.addEventListener('scroll', () => {
    
})


// THIRD ANIMATION 
window.addEventListener('scroll', () => {
    let scrollValue = window.pageYOffset;
    const secondSection =  document.querySelector("section.about").offsetHeight;
    const leftTopBigObj = document.querySelector(".block-left-bottom");
    const leftBottomBigObj = document.querySelector("rect#Block-Utekai");
    const leftTopSmall = document.querySelector("rect#Block-Left-Top");
    const centerTopLarge = document.querySelector("rect#Block-Center-Top-Left-L");
    const centerSmall = document.querySelector("rect#Square-CENTER");
    const centerRightL = document.querySelector("rect#Block-Center-Right-L");
    const blackBlocks = document.querySelectorAll(".black");
    const rigthBlock = document.querySelector("#Rigth-Block");
    const allLines = document.querySelectorAll(".st0");
    const size = document.documentElement.clientHeight;
    const thirdAnimationSrart = size * 2;
    
    
    if(scrollValue >= thirdAnimationSrart)
    {

        let value = (scrollValue - thirdAnimationSrart) * 4;
        leftTopBigObj.style.transform = `translateY(-${value}px)`;
        leftBottomBigObj.style.transform = `translateY(${1400 - value}px)`
        if(value >= 50)
        {
            leftTopSmall.style.transform = `translateY(${1400 - (value - 100)}px)`
            centerTopLarge.style.transform = `translateY(${1400 - (value - 200)}px)`;
        }
        if(value >= 100)
        {
            centerSmall.style.transform = `translateY(${790 - (value - 800)}px)`
            centerRightL.style.transform = `translateY(${790 - (value - 1000)}px)`
            
        }
        if (value >= 150) {
            rigthBlock.style.transform = `translateY(${1400 - (value - 600)}px)`
        }
        if(value >= 1400) {
            leftTopBigObj.style.transform = `translateY(-1400px)`;
            leftBottomBigObj.style.transform = `translateY(0px)`;
        }
        if(value >= 1600)
        {
            centerSmall.style.transform = `translateY(0px)`;
            blackBlocks.forEach(el => {
                el.style.stroke = `black`
            })
            allLines.forEach(line => {
                line.style.stroke = `transparent`;
            });
        } else {
            blackBlocks.forEach(el => {
                el.style.stroke = `#efefef`
            })
            allLines.forEach(line => {
                line.style.stroke = `#efefef`;
            });
        }
        if(value >= 1800)
        {
            centerRightL.style.transform = `translateY(0px)`;
        }
        if (value >= 2000)
        {
            rigthBlock.style.transform = `translateY(0px)`;
        }
        if(value >= 1200)
        {
            centerTopLarge.style.transform = `translateY(360px)`;
        }
        if(value - 100 >= 1400)
        {
            leftTopSmall.style.transform = `translateY(0px)`;
        }

    }
    
})

// THIRD ANIMATION 
// FOURTH ANIMATION 