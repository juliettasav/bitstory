window.onload = (e) => {
    e.preventDefault();
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

    console.log(rightTopStroke);
    
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

    // setTimeout(() => {
  
    // }, 500)
    
}