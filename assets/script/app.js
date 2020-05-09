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


const tFirst = document.querySelector("#p1");
const tSecond = document.querySelector("#p2");
const tThird = document.querySelector("#p3");
const tFourth = document.querySelector("#p4");
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
setTimeout(() => {
    tFourth.style.transform = "translateY(0px)";
    tFourth.style.opacity = "1"
}, 1300)


const titleText = document.querySelector(".title");
titleText.style.bottom = `calc(50% - ${titleText.offsetHeight / 2}px`;



