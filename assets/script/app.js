// Showing the animation depending on scrolling
window.addEventListener('scroll', () => {

    // Initialize all sections
    const firstSection =  document.querySelector("section.intro");
    const secondSection =  document.querySelector("section.about");
    const thirdSection =  document.querySelector("section.we-create");
    const fourthSection = document.querySelector("section.innovate")

    // Get the size of user's screen
    const size = document.documentElement.clientHeight;
    const secondSectionValue = size * 2 + 200;
    const thirdSectionValue = secondSectionValue + size;
    let scrollValue = window.pageYOffset;
    
    //Making some conditions on showing with opacity style
    if(scrollValue >= 0 && scrollValue <= size)
    {
        firstSection.style.opacity = "1";
        firstSection.style.zIndex = "1";
        secondSection.style.opacity = "0";
        secondSection.style.zIndex = "0";
        thirdSection.style.opacity = "0";
        thirdSection.style.zIndex = "0";
        fourthSection.style.opacity = "0";
        fourthSection.style.zIndex = "0";
        
    }
    if(scrollValue >= size && scrollValue <= secondSectionValue)
    {
        firstSection.style.opacity = "0";
        firstSection.style.zIndex = "0";
        secondSection.style.opacity = "1";
        secondSection.style.zIndex = "1";
        thirdSection.style.opacity = "0";
        thirdSection.style.zIndex = "0";
        fourthSection.style.opacity = "0";
        fourthSection.style.zIndex = "0";
  
    }
    if (scrollValue > secondSectionValue && scrollValue <= thirdSectionValue)
    {
        firstSection.style.opacity = "0";
        firstSection.style.zIndex = "0";
        secondSection.style.opacity = "0";
        secondSection.style.zIndex = "0";
        thirdSection.style.opacity = "1";
        thirdSection.style.zIndex = "1";
        fourthSection.style.opacity = "0";
        fourthSection.style.zIndex = "0";

    }
    if (scrollValue > thirdSectionValue)
    {
        firstSection.style.opacity = "0";
        firstSection.style.zIndex = "0";
        secondSection.style.opacity = "0";
        secondSection.style.zIndex = "0";
        thirdSection.style.opacity = "0";
        thirdSection.style.zIndex = "0";
        fourthSection.style.opacity = "1";
        fourthSection.style.zIndex = "1";


    }

})

// Mob Menu Animation

document.querySelector(".mob-menu").addEventListener('click', (e) => {
    e.preventDefault();
    const menu = document.querySelector("nav > ul");
    menu.classList.toggle("active");
    if(menu.classList.contains("active"))
    {
        menu.style.right = '0';  
    }
    else 
    {
        menu.style.right = '-100%';   
    }
    e.target.classList.toggle("mob-menu__active");
})

const titleFirst = document.querySelector("#title-first");
const titleSecond = document.querySelector("#title-second");
const titleThird = document.querySelector("#title-third");
const titleFourth = document.querySelector("#title-fourth");
const tFirst = document.querySelector("#p1");
const tSecond = document.querySelector("#p2");
const tThird = document.querySelector("#p3");
const tFourth = document.querySelector("#p4");
const tFifth = document.querySelector("#p5");
const tSixth = document.querySelector("#p6");
const tSeventh = document.querySelector("#p7");
const tEight = document.querySelector("#p8");
const tNinth = document.querySelector("#p9");
setTimeout(() => {
    if (window.innerWidth <= 425)
    {
        tFirst.style.transform = "translate(0px, 0px)";
        tFirst.style.opacity = "1"
    } 
    else 
    {
        tFirst.style.transform = "translate(-10px, 0px)";
        tFirst.style.opacity = "1"
    }
    
}, 100)
setTimeout(() => {
    tSecond.style.transform = "translateY(0px)";
    tSecond.style.opacity = "1"
}, 500)
setTimeout(() => {
    tThird.style.transform = "translate(10px, 0)";
    tThird.style.opacity = "1"
}, 900)


console.log(window.innerHeight);


const titleText = document.querySelector(".title");
titleFirst.style.bottom = `calc(50% - ${titleFirst.offsetHeight / 2}px`;  

window.addEventListener("scroll", () => {
    console.log(window.pageYOffset);
    if (window.pageYOffset < window.innerHeight - 50)
    {
        titleFirst.style.opacity = "1";
        titleSecond.style.opacity = "0";
        titleThird.style.opacity = "0";
        titleFourth.style.opacity = "0";
    }
    else if (window.pageYOffset >= (window.innerHeight - 50) && window.pageYOffset <= (window.innerHeight + 150))
    {
        titleFirst.style.opacity = "0";
        titleSecond.style.opacity = "0";
        titleThird.style.opacity = "0";
        titleFourth.style.opacity = "0";
        titleFirst.style.transform = "translateY(-20px)";
    }
    else if (window.pageYOffset >= (window.innerHeight + (window.innerHeight / 4)) &&  window.pageYOffset < (window.innerHeight + (window.innerHeight / 3.5)))
    {
        titleFirst.style.opacity = "0";
        titleThird.style.opacity = "0";
        titleFourth.style.opacity = "0";
        titleSecond.style.opacity = "1";
        titleSecond.style.bottom = `calc(50% - ${titleSecond.offsetHeight / 2}px`;
        setTimeout(() => {
                tFifth.style.transform = "translate(-10px, 0px)";
                tFifth.style.opacity = "1"
            
        }, 200)
        setTimeout(() => {
            tFourth.style.transform = "translateY(0px)";
            tFourth.style.opacity = "1"
        }, 500)

    } else if (window.pageYOffset >= ((window.innerHeight * 2) - 50) &&  window.pageYOffset <= ((window.innerHeight * 2) + 150))
    {
        titleSecond.style.opacity = "0";
        titleFirst.style.opacity = "0";
        titleThird.style.opacity = "0";
        titleFourth.style.opacity = "0";
        titleSecond.style.transform = "translateY(-20px)";
    }
    else if (window.pageYOffset >= (window.innerHeight * 2 + (window.innerHeight / 4)) &&  window.pageYOffset < (window.innerHeight * 2 + (window.innerHeight / 3.5)))
    {
        titleFirst.style.opacity = "0";
        titleSecond.style.opacity = "0";
        titleThird.style.opacity = "1";
        titleFourth.style.opacity = "0";
        titleThird.style.bottom = `calc(50% - ${titleThird.offsetHeight / 2}px`;

        setTimeout(() => {
            
            tSixth.style.transform = "translate(-10px, 0px)";
            tSixth.style.opacity = "1"
            
        }, 200)
        setTimeout(() => {
            tSeventh.style.transform = "translateY(0px)";
            tSeventh.style.opacity = "1"
        }, 500)
        
    } 
    else if (window.pageYOffset >= ((window.innerHeight * 3) - 50) &&  window.pageYOffset <= ((window.innerHeight * 3) + 150))
    {
        titleFirst.style.opacity = "0";
        titleSecond.style.opacity = "0";
        titleThird.style.opacity = "0";
        titleThird.style.transform = "translateY(-20px)";
        titleFourth.style.opacity = "0";
    }
    else if (window.pageYOffset >= (window.innerHeight * 3 + (window.innerHeight / 4)) &&  window.pageYOffset < (window.innerHeight * 3 + (window.innerHeight / 3.5)))
    {
        titleFourth.style.opacity = "1";
        titleFirst.style.opacity = "0";
        titleSecond.style.opacity = "0";
        titleThird.style.opacity = "0";
        titleFourth.style.bottom = `calc(50% - ${titleFourth.offsetHeight / 2}px`;
        setTimeout(() => {
            
            tEight.style.transform = "translate(-10px, 0px)";
            tEight.style.opacity = "1"
            
        }, 200)
        setTimeout(() => {
            tNinth.style.transform = "translateY(0px)";
            tNinth.style.opacity = "1"
        }, 500)
    }
})

document.querySelector("#contact-us").addEventListener("click", (e) => {
    console.log(e.target);
    
    
})