window.addEventListener('scroll', () => {
    let scrollValue = window.pageYOffset;
    const secondSection =  document.querySelector("section.about").offsetHeight;
    const leftTopBigObj = document.querySelector(".block-left-bottom");
    const leftBottomBigObj = document.querySelector("rect#Block-Utekai");
    const leftTopSmall = document.querySelector("rect#Block-Left-Top");
    const centerTopLarge = document.querySelector("rect#Block-Center-Top-Left-L");
    const centerSmall = document.querySelector("rect#Square-CENTER");
    const centerRightL = document.querySelector("rect#Block-Center-Right-L");
    const blackBlocksStroke = document.querySelectorAll(".black");
    const rigthBlock = document.querySelector("#Rigth-Block");
    const allLines = document.querySelectorAll(".st0");
    const size = document.documentElement.clientHeight;
    const thirdAnimationSrart = size * 2;

    const verticalRightCreate = document.querySelector("#vertical_right-Create");
    const horizontalCreate = document.querySelector("#Horizontal-Create");
    const verticalCentralCreate = document.querySelector("#Vertical_Central-Create");
    const verticalRightCreateSmall = document.querySelector("#Vertical_Right-Create");
    const horizontalSmallDownCreate = document.querySelector("#Horizontal_small_down-Create");
    const horizontalLowerCreate = document.querySelector("#Horizontal_Lower-Create");
    const verticalSmallCentrleftCreate = document.querySelector("#Vertical_Small_Centr-left-Create");
    const verticalSmallRightCreate = document.querySelector("#vertical_small_right-Create");

    
    
    
    if(scrollValue >= thirdAnimationSrart)
    {

        let value = (scrollValue - thirdAnimationSrart) * 4;
        leftTopBigObj.style.transform = `translateY(-${value}px)`;
        leftBottomBigObj.style.transform = `translateY(${1400 - value}px)`
        

        verticalRightCreate.style.animation = "lineDashSecond 2s linear forwards";
        verticalRightCreate.style.strokeDasharray = "4000";
        verticalRightCreate.style.strokeDashoffset = "4000";
        horizontalCreate.style.animation = "lineDashSecond 2s .1s linear forwards";
        horizontalCreate.style.strokeDasharray = "4000";
        horizontalCreate.style.strokeDashoffset = "4000";
        verticalCentralCreate.style.animation = "lineDashSecond 2s .3s linear forwards";
        verticalCentralCreate.style.strokeDasharray = "4000";
        verticalCentralCreate.style.strokeDashoffset = "4000";
        verticalRightCreateSmall.style.animation = "lineDashSecond 2s .4s linear forwards";
        verticalRightCreateSmall.style.strokeDasharray = "4000";
        verticalRightCreateSmall.style.strokeDashoffset = "4000";
        horizontalSmallDownCreate.style.animation = "lineDashSecond 2s .5s linear forwards";
        horizontalSmallDownCreate.style.strokeDasharray = "4000";
        horizontalSmallDownCreate.style.strokeDashoffset = "4000";
        verticalSmallCentrleftCreate.style.animation = "lineDashSecond 2s .6s linear forwards";
        verticalSmallCentrleftCreate.style.strokeDasharray = "4000";
        verticalSmallCentrleftCreate.style.strokeDashoffset = "4000";
        verticalSmallRightCreate.style.animation = "lineDashSecond 2s .7s linear forwards";
        verticalSmallRightCreate.style.strokeDasharray = "4000";
        verticalSmallRightCreate.style.strokeDashoffset = "4000";
        horizontalLowerCreate.style.animation = "lineDashSecond 2s .8s linear forwards";
        horizontalLowerCreate.style.strokeDasharray = "4000";
        horizontalLowerCreate.style.strokeDashoffset = "4000";
       
        
        
        if(value >= 50)
        {
            leftTopSmall.style.transform = `translateY(${1400 - (value - 100)}px)`
            centerTopLarge.style.transform = `translateY(${1400 - (value - 200)}px)`;
        }
        if(value >= 100)
        {
            centerSmall.style.transform = `translateY(${790 - (value - 800)}px)`
            centerRightL.style.transform = `translateY(${790 - (value - 1000)}px)`
            rigthBlock.style.transform = `translateY(${2400 - (value)}px)`
            
        }
        if(value >= 1400) {
            leftTopBigObj.style.transform = `translateY(-1400px)`;
            leftBottomBigObj.style.transform = `translateY(0px)`;
        }
        if(value >= 1600)
        {
            centerSmall.style.transform = `translateY(0px)`;
            blackBlocksStroke.forEach(el => {
                el.style.stroke = `black`;
            })
            allLines.forEach(line => {
                line.style.stroke = `transparent`;
            });
        } else {
            blackBlocksStroke.forEach(el => {
                el.style.stroke = `#efefef`
                el.style.strokeDasharray = "3000";
                el.style.strokeDashoffset = "3000";
               
                el.style.animation = "lineSquare 2s cubic-bezier(0.12, 0, 0.39, 0)";
            })
            allLines.forEach(line => {
                line.style.stroke = `#efefef`;
            });
        }
        if(value >= 1800)
        {
            centerRightL.style.transform = `translateY(0px)`;
        }
        if (value >= 2400)
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