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
    const rightSide = document.querySelector("g#right-side");
    const leftSide = document.querySelector("g#left-side");

    thirdTriangle.style.transform = "translateY(-0.5px)"
    fourthTriangle.style.transform = "translateY(1px)"
    fifthTriangle.style.transform = "translateY(1px)"
    sixthTriangle.style.transform = "translateY(-1.5px)"
    sevenTriangle.style.transform = "translateX(-1px)"
    eightTriangle.style.transform = "translateY(1.5px)"
    ninthTriangle.style.transform = "translateY(-2.5px)"
    tenTriangle.style.transform = "translateX(0.5px)"
    elvnTriangle.style.transform = "translateX(-2.3px)"
    twlvriangle.style.transform = "translateX(2px)"
    thrteenTriangle.style.transform = "translateY(-1px)"
    fourteenTriangle.style.transform = "translateY(1px)"

    rightSide.style.transform = `translate(0px, 0px)`;
    leftSide.style.transform = `translate(0px, 0px)`;


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
            firstTriangle.style.opacity = "1";
            secondTriangle.setAttribute("points", `1048.9,697.7 700,697.7 ${1048.9 - (value * 3)},${697.7 - (value * 3)}`);
            secondTriangle.style.opacity = "1";
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
            
            thirdTriangle.style.opacity = "1";
            fourthTriangle.style.opacity = "1";
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
            fifthTriangle.style.opacity = "1";
            sixthTriangle.style.opacity = "1";
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
            sevenTriangle.style.opacity = "1";
            eightTriangle.style.opacity = "1";
            ninthTriangle.style.opacity = "1";
            tenTriangle.style.opacity = "1";
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
            elvnTriangle.style.opacity = '0.5';
            elvnTriangle.setAttribute("points", `1048.9,348.9 ${1223.3 + (secondValue * 3)},${523.2 - (secondValue * 3)} 1397.7,697.7`);
            twlvriangle.setAttribute("points", `351.1,1046.6 ${174 - (secondValue * 3)},${869.5 + (secondValue * 3)} 2.3,697.7`);
            elvnTriangle.style.opacity = "1";
            twlvriangle.style.opacity = "1";
            thrteenTriangle.setAttribute("points", `2.3,1046.6 351.1,1046.6 351.1,1046.6`);
            fourteenTriangle.setAttribute("points", `1397.7,348.9 1048.9,348.9 1048.9,348.9`);
        }
        else if (value > 466 && value < 565)
        {
            let secondValue = value - 466;
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
            thrteenTriangle.style.opacity = "1";
            fourteenTriangle.style.opacity = "1";
        }
        else if (value >= 565 && value < 600)
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
            
        } else if (value >= 600)
        {
            rightSide.style.transform = `translate(${value - 600}px, -${value - 600}px)`;
            leftSide.style.transform = `translate(-${value - 600}px, ${value - 600}px)`;            
        }

            

         
        
    }
    
    
})
