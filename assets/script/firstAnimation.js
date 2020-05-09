const circleWidth = document.querySelector('.circle-plain').clientWidth;
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
        rightBottomCircle.style.animation = "whiteFill 2s cubic-bezier(0.76, 0, 0.24, 1)"
        if (window.innerWidth >= 1920)
        {
            leftBottomCircleMove.style.animation = "left-right-bottom-1920 2s ease";
            rigthBottomCircleMove.style.animation = "right-left-bottom-1920 2s cubic-bezier(0.76, 0, 0.24, 1)";
        } else if (window.innerWidth >= 1440 && window.innerWidth <= 1920)
        {
            leftBottomCircleMove.style.animation = "left-right-bottom-1440 2s ease";
            rigthBottomCircleMove.style.animation = "right-left-bottom-1440 2s cubic-bezier(0.76, 0, 0.24, 1)";
        }
        else
        {
            leftBottomCircleMove.style.animation = "left-right-bottom-1024 2s ease";
            rigthBottomCircleMove.style.animation = "right-left-bottom-1024 2s cubic-bezier(0.76, 0, 0.24, 1)";
        }

    }, 700)
    
    setTimeout(() => {
        
        leftTopCircle.style.animation = "whiteFill 2s cubic-bezier(0.76, 0, 0.24, 1)";
        rightTopHalfCircle.style.animation = "whiteFill 2s cubic-bezier(0.76, 0, 0.24, 1)";
        if (window.innerWidth > 1920)
        {
            leftTopCircleMove.style.animation = "left-right-top-1920 2s cubic-bezier(0.76, 0, 0.24, 1)";
            rigthTopCircleMove.style.animation = "right-left-top-1920 2s ease";
        } else if (window.innerWidth >= 1440 && window.innerWidth < 1920)
        {
            leftTopCircleMove.style.animation = "left-right-top-1440 2s cubic-bezier(0.76, 0, 0.24, 1)";
            rigthTopCircleMove.style.animation = "right-left-top-1440 2s ease";
        }
        else 
        {
            leftTopCircleMove.style.animation = "left-right-top-1024 2s cubic-bezier(0.76, 0, 0.24, 1)";
            rigthTopCircleMove.style.animation = "right-left-top-1024 2s ease";
        }
        
    }, 1100);

    setTimeout(() => {
        
        leftBottomStroke.style.stroke = "none";
    }, 1700)
    
    setTimeout(() => {
        rightTopStroke.style.stroke = "none";
        rigthBottomCircleMove.style.right = `calc(100% - ${circleWidth + 1}px)`
        leftBottomCircleMove.style.left = `calc(75% - ${circleWidth}px)`;
        rightBottomCircle.style.fill = "#efefef";
        leftBottomHalfCircle.style.fill = "#efefef";

    }, 2100)

    setTimeout(() => {
        leftTopCircleMove.style.left = `calc(100% - ${circleWidth}px)`;
        rigthTopCircleMove.style.right = `calc(75% - ${circleWidth}px)`;
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

    if(scrollValue > 0) 
    {
        leftTopCircleMove.style.left = `calc(100% - ${circleWidth}px + ${scrollValue / 4}px)`;
        rigthTopCircleMove.style.top = `-${scrollValue / 4}px`;
        leftBottomCircleMove.style.bottom = `-${scrollValue / 4}px`;
        rigthBottomCircleMove.style.right = `calc(100% - ${circleWidth + 1}px + ${scrollValue / 4}px)`;
    } 
    else
    {
        rigthBottomCircleMove.style.right = `calc(100% - ${circleWidth + 1}px)`;
        leftTopCircleMove.style.left = `calc(100% - ${circleWidth}px)`;
        rigthTopCircleMove.style.top = "3px";
        leftBottomCircleMove.style.bottom = "3px";

    }
    
})