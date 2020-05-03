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
        firstSection.style.zIndex = "1";
        secondSection.style.opacity = "0";
        secondSection.style.zIndex = "0";
        thirdSection.style.opacity = "0";
        thirdSection.style.zIndex = "0";
    }
    if(scrollValue >= size && scrollValue <= secondSectionValue)
    {
        firstSection.style.opacity = "0";
        firstSection.style.zIndex = "0";
        secondSection.style.opacity = "1";
        secondSection.style.zIndex = "1";
        thirdSection.style.opacity = "0";
        thirdSection.style.zIndex = "0";
    }
    if (scrollValue > secondSectionValue)
    {
        firstSection.style.opacity = "0";
        firstSection.style.zIndex = "0";
        secondSection.style.opacity = "0";
        secondSection.style.zIndex = "0";
        thirdSection.style.opacity = "1";
        thirdSection.style.zIndex = "1";
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

    if(scrollValue > 0) 
    {
        leftTopCircleMove.style.left = `calc(100% - 155px + ${scrollValue}px)`;
        rigthTopCircleMove.style.top = `-${scrollValue}px`;
        leftBottomCircleMove.style.bottom = `-${scrollValue}px`
        rigthBottomCircleMove.style.right = `calc(100% - 155px + ${scrollValue}px)`
    } else
    {
        leftTopCircleMove.style.left = "calc(100% - 155px)";
        rigthTopCircleMove.style.right = "calc(75% - 155px)";
        rigthBottomCircleMove.style.right = "calc(100% - 155px)"
        leftBottomCircleMove.style.left = "calc(75% - 155px)";

    }



    
})

// SECOND ANIMATION
window.addEventListener('scroll', () => {
    let scrollValue = window.pageYOffset;
    const size = document.documentElement.clientHeight;
    const firstTriangle  = document.querySelector("g#_x31_ > polygon");
    const secondTriangle  = document.querySelector("g#_x32_ > polygon");
    const thirdTriangle  = document.querySelector("g#_x33_ > polygon");
    const fourthTriangle  = document.querySelector("g#_x34_ > polygon");
    const fifthTriangle  = document.querySelector("g#_x35_ > polygon");
    const sixthTriangle  = document.querySelector("g#_x36_ > polygon");
    const sevenTriangle  = document.querySelector("g#_x37_ > polygon");
    const eightTriangle  = document.querySelector("g#_x38_ > polygon");
    const ninthTriangle  = document.querySelector("g#_x39_ > polygon");
    const tenTriangle  = document.querySelector("g#_x31_0 > polygon");
    const elvnTriangle  = document.querySelector("g#_x31_1 > polygon");
    const twlvriangle  = document.querySelector("g#_x31_2 > polygon");
    const thrteenTriangle  = document.querySelector("g#_x31_3 > polygon");
    const fourteenTriangle  = document.querySelector("g#_x31_4 > polygon");
    const HorizontalLeft = document.querySelector("#Horizontal-Left-About");
    const HorizontalLeftSecond = document.querySelector("#Horizontal-Left-About_2_");
    const VerticalCenterAbout = document.querySelector("#Vertical-Center-About");
    const VerticalRightAbout = document.querySelector("#Vertical-Right-About");
    const HorizontalSmallTopAbout = document.querySelector("#Horizontal-Small-Top-About");
    const HorizontalSmallBottomAbout = document.querySelector("#Horizontal-Small-Bottom-About");


    let value = scrollValue - size;
    if(scrollValue >= size)
    {
        if(value < 117) {
            // Animate All Strokes
            HorizontalLeft.style.animation = "lineDashSecond 2.5s linear forwards";
            HorizontalLeft.style.strokeDasharray = "4000";
            HorizontalLeft.style.strokeDashoffset = "4000";
            HorizontalLeftSecond.style.animation = "lineDashSecond 2.5s .3s linear forwards";
            HorizontalLeftSecond.style.strokeDasharray = "4000";
            HorizontalLeftSecond.style.strokeDashoffset = "4000";
            VerticalCenterAbout.style.animation = "lineDashSecond 2.5s .5s linear forwards";
            VerticalCenterAbout.style.strokeDasharray = "4000";
            VerticalCenterAbout.style.strokeDashoffset = "4000";
            VerticalRightAbout.style.animation = "lineDashSecond 2.5s .7s linear forwards";
            VerticalRightAbout.style.strokeDasharray = "4000";
            VerticalRightAbout.style.strokeDashoffset = "4000";
            HorizontalSmallTopAbout.style.animation = "lineDashSecond 2s .8s linear forwards";
            HorizontalSmallTopAbout.style.strokeDasharray = "4000";
            HorizontalSmallTopAbout.style.strokeDashoffset = "4000";
            HorizontalSmallBottomAbout.style.animation = "lineDashSecond 2s 1s linear forwards";
            HorizontalSmallBottomAbout.style.strokeDasharray = "4000";
            HorizontalSmallBottomAbout.style.strokeDashoffset = "4000";
            


            firstTriangle.setAttribute("points", `351.1,697.7 700,697.7 ${351.1 + (value * 3)},${697.7 + (value * 3)}`);
            secondTriangle.setAttribute("points", `1048.9,697.7 700,697.7 ${1048.9 - (value * 3)},${697.7 - (value * 3)}`);
            thirdTriangle.setAttribute("points", `700,697.7 1048.9,697.7 1048.9,697.7`);
            fourthTriangle.setAttribute("points", `700,697.7 351.1,697.7 351.1,697.7`);
            fifthTriangle.setAttribute("points", `700,348.9 872.45,521.3 1048.9,697.7`);
            sixthTriangle.setAttribute("points", `700,1046.6 525.45,872.1 351.1,697.7`);
            sevenTriangle.setAttribute("points", `1048.9,697.7 1048.9,697.7 1048.9,348.9`);
            eightTriangle.setAttribute("points", `1048.9,348.9 700,348.9 700,348.9`);
            ninthTriangle.setAttribute("points", `351.1,1046.6 700,1046.6 700,1046.6`);
            tenTriangle.setAttribute("points", `351.1,697.7 351.1,697.7 351.1,1046.6`);
            elvnTriangle.setAttribute("points", `1048.9,348.9 1223.3,523.2 1397.7,697.7`);
            elvnTriangle.style.opacity = '0';
            twlvriangle.setAttribute("points", `351.1,1046.6 174,869.5 2.3,697.7`);
            thrteenTriangle.setAttribute("points", `2.3,1046.6 351.1,1046.6 351.1,1046.6`);
            fourteenTriangle.setAttribute("points", `1397.7,348.9 1048.9,348.9 1048.9,348.9`);
        }
        else if (value > 117 && value < 234)
        {
            let secondValue = value - 118;
            firstTriangle.setAttribute("points", `351.1,697.7 700,697.7 700,1046.6`);
            secondTriangle.setAttribute("points", `1048.9,697.7 700,697.7 700,348.9`);
            thirdTriangle.setAttribute("points", `700,697.7 1048.9,697.7 1048.9,${697.7 + (secondValue * 3) }`);
            fourthTriangle.setAttribute("points", `700,697.7 351.1,697.7 351.1,${697.7 - (secondValue * 3)}`);
            fifthTriangle.setAttribute("points", `700,348.9 872.45,521.3 1048.9,697.7`);
            sixthTriangle.setAttribute("points", `700,1046.6 525.45,872.1 351.1,697.7`);
            sevenTriangle.setAttribute("points", `1048.9,697.7 1048.9,697.7 1048.9,348.9`);
            eightTriangle.setAttribute("points", `1048.9,348.9 700,348.9 700,348.9`);
            ninthTriangle.setAttribute("points", `351.1,1046.6 700,1046.6 700,1046.6`);
            tenTriangle.setAttribute("points", `351.1,697.7 351.1,697.7 351.1,1046.6`);
            elvnTriangle.style.opacity = '0';
            elvnTriangle.setAttribute("points", `1048.9,348.9 1223.3,523.2 1397.7,697.7`);
            twlvriangle.setAttribute("points", `351.1,1046.6 174,869.5 2.3,697.7`);
            thrteenTriangle.setAttribute("points", `2.3,1046.6 351.1,1046.6 351.1,1046.6`);
            fourteenTriangle.setAttribute("points", `1397.7,348.9 1048.9,348.9 1048.9,348.9`);

            
        }
        else if (value > 234 && value < 292)
        {
            let secondValue = value - 233;
            firstTriangle.setAttribute("points", `351.1,697.7 700,697.7 700,1046.6`);
            secondTriangle.setAttribute("points", `1048.9,697.7 700,697.7 700,348.9`);
            thirdTriangle.setAttribute("points", `700,697.7 1048.9,697.7 1048.9,1046.6`);
            fourthTriangle.setAttribute("points", `700,697.7 351.1,697.7 351.1,348.9`);
            fifthTriangle.setAttribute("points", `700,348.9 ${872.45 + (secondValue * 3)},${521.3 - (secondValue * 3)} 1048.9,697.7`);
            sixthTriangle.setAttribute("points", `700,1046.6 ${525.45 - (secondValue * 3)},${872.1 + (secondValue * 3)} 351.1,697.7`);
            sevenTriangle.setAttribute("points", `1048.9,697.7 1048.9,697.7 1048.9,348.9`);
            eightTriangle.setAttribute("points", `1048.9,348.9 700,348.9 700,348.9`);
            ninthTriangle.setAttribute("points", `351.1,1046.6 700,1046.6 700,1046.6`);
            tenTriangle.setAttribute("points", `351.1,697.7 351.1,697.7 351.1,1046.6`);
            elvnTriangle.setAttribute("points", `1048.9,348.9 1223.3,523.2 1397.7,697.7`);
            elvnTriangle.style.opacity = '0';
            twlvriangle.setAttribute("points", `351.1,1046.6 174,869.5 2.3,697.7`);
            thrteenTriangle.setAttribute("points", `2.3,1046.6 351.1,1046.6 351.1,1046.6`);
            fourteenTriangle.setAttribute("points", `1397.7,348.9 1048.9,348.9 1048.9,348.9`);
        }

        else if (value > 292 && value < 408)
        {
            let secondValue = value - 291;
            firstTriangle.setAttribute("points", `351.1,697.7 700,697.7 700,1046.6`);
            secondTriangle.setAttribute("points", `1048.9,697.7 700,697.7 700,348.9`);
            thirdTriangle.setAttribute("points", `700,697.7 1048.9,697.7 1048.9,1046.6`);
            fourthTriangle.setAttribute("points", `700,697.7 351.1,697.7 351.1,348.9`);
            fifthTriangle.setAttribute("points", `700,348.9 1048.9,348.9 1048.9,697.7`);
            sixthTriangle.setAttribute("points", `700,1046.6 351.1,1046.6 351.1,697.7`);
            sevenTriangle.setAttribute("points", `${1048.9 + (secondValue * 3)},697.7 1048.9,697.7 1048.9,348.9`);
            eightTriangle.setAttribute("points", `1048.9,348.9 700,348.9 700,${348.9 - (secondValue * 3)}`);
            ninthTriangle.setAttribute("points", `351.1,1046.6 700,1046.6 700,${1046.6 + (secondValue * 3)}`);
            tenTriangle.setAttribute("points", `${351.1 - (secondValue * 3)},697.7 351.1,697.7 351.1,1046.6`);
            elvnTriangle.setAttribute("points", `1048.9,348.9 1223.3,523.2 1397.7,697.7`);
            elvnTriangle.style.opacity = '0';
            twlvriangle.setAttribute("points", `351.1,1046.6 174,869.5 2.3,697.7`);
            thrteenTriangle.setAttribute("points", `2.3,1046.6 351.1,1046.6 351.1,1046.6`);
            fourteenTriangle.setAttribute("points", `1397.7,348.9 1048.9,348.9 1048.9,348.9`);
            

        }

        else if (value > 408 && value < 466)
        {
            let secondValue = value - 408;
            firstTriangle.setAttribute("points", `351.1,697.7 700,697.7 700,1046.6`);
            secondTriangle.setAttribute("points", `1048.9,697.7 700,697.7 700,348.9`);
            thirdTriangle.setAttribute("points", `700,697.7 1048.9,697.7 1048.9,1046.6`);
            fourthTriangle.setAttribute("points", `700,697.7 351.1,697.7 351.1,348.9`);
            fifthTriangle.setAttribute("points", `700,348.9 1048.9,348.9 1048.9,697.7`);
            sixthTriangle.setAttribute("points", `700,1046.6 351.1,1046.6 351.1,697.7`);
            sevenTriangle.setAttribute("points", `1397.7,697.7 1048.9,697.7 1048.9,348.9`);
            eightTriangle.setAttribute("points", `1048.9,348.9 700,348.9 700,0`);
            ninthTriangle.setAttribute("points", `351.1,1046.6 700,1046.6 700,1395.4`);
            tenTriangle.setAttribute("points", `2.3,697.7 351.1,697.7 351.1,1046.6`);
            elvnTriangle.style.opacity = '1';
            elvnTriangle.setAttribute("points", `1048.9,348.9 ${1223.3 + (secondValue * 3)},${523.2 - (secondValue * 3)} 1397.7,697.7`);
            twlvriangle.setAttribute("points", `351.1,1046.6 ${174 - (secondValue * 3)},${869.5 + (secondValue * 3)} 2.3,697.7`);
            thrteenTriangle.setAttribute("points", `2.3,1046.6 351.1,1046.6 351.1,1046.6`);
            fourteenTriangle.setAttribute("points", `1397.7,348.9 1048.9,348.9 1048.9,348.9`);
        }
        else if (value > 466 && value < 525)
        {
            let secondValue = value - 408;
            firstTriangle.setAttribute("points", `351.1,697.7 700,697.7 700,1046.6`);
            secondTriangle.setAttribute("points", `1048.9,697.7 700,697.7 700,348.9`);
            thirdTriangle.setAttribute("points", `700,697.7 1048.9,697.7 1048.9,1046.6`);
            fourthTriangle.setAttribute("points", `700,697.7 351.1,697.7 351.1,348.9`);
            fifthTriangle.setAttribute("points", `700,348.9 1048.9,348.9 1048.9,697.7`);
            sixthTriangle.setAttribute("points", `700,1046.6 351.1,1046.6 351.1,697.7`);
            sevenTriangle.setAttribute("points", `1397.7,697.7 1048.9,697.7 1048.9,348.9`);
            eightTriangle.setAttribute("points", `1048.9,348.9 700,348.9 700,0`);
            ninthTriangle.setAttribute("points", `351.1,1046.6 700,1046.6 700,1395.4`);
            tenTriangle.setAttribute("points", `2.3,697.7 351.1,697.7 351.1,1046.6`);
            elvnTriangle.setAttribute("points", `1048.9,348.9 1397.7,348.9 1397.7,697.7`);
            twlvriangle.setAttribute("points", `351.1,1046.6 2.3,1046.6 2.3,697.7`);
            thrteenTriangle.setAttribute("points", `2.3,1046.6 351.1,1046.6 351.1,${1046.6 + (secondValue * 3)}`);
            fourteenTriangle.setAttribute("points", `1397.7,348.9 1048.9,348.9 1048.9,${348.9 - (secondValue * 3)}`);
        }
        else if (value >= 525)
        {
            firstTriangle.setAttribute("points", `351.1,697.7 700,697.7 700,1046.6`);
            secondTriangle.setAttribute("points", `1048.9,697.7 700,697.7 700,348.9`);
            thirdTriangle.setAttribute("points", `700,697.7 1048.9,697.7 1048.9,1046.6`);
            fourthTriangle.setAttribute("points", `700,697.7 351.1,697.7 351.1,348.9`);
            fifthTriangle.setAttribute("points", `700,348.9 1048.9,348.9 1048.9,697.7`);
            sixthTriangle.setAttribute("points", `700,1046.6 351.1,1046.6 351.1,697.7`);
            sevenTriangle.setAttribute("points", `1397.7,697.7 1048.9,697.7 1048.9,348.9`);
            eightTriangle.setAttribute("points", `1048.9,348.9 700,348.9 700,0`);
            ninthTriangle.setAttribute("points", `351.1,1046.6 700,1046.6 700,1395.4`);
            tenTriangle.setAttribute("points", `2.3,697.7 351.1,697.7 351.1,1046.6`);
            elvnTriangle.setAttribute("points", `1048.9,348.9 1397.7,348.9 1397.7,697.7`);
            twlvriangle.setAttribute("points", `351.1,1046.6 2.3,1046.6 2.3,697.7`);
            thrteenTriangle.setAttribute("points", `2.3,1046.6 351.1,1046.6 351.1,1395.4`);
            fourteenTriangle.setAttribute("points", `1397.7,348.9 1048.9,348.9 1048.9,0`);
        }
         
        
    }
    
    
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
        horizontalLowerCreate.style.animation = "lineDashSecond 2s .7s linear forwards";
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
