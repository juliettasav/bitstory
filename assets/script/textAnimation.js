// Init all needed ui text
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
const size = document.documentElement.clientHeight;


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




const titleText = document.querySelector(".title");
if(window.innerWidth <= 425)
{
    titleFirst.style.bottom = `10%`; 
    titleFirst.style.right = `calc(50% - ${titleFirst.offsetWidth / 2 + 4}px)`;


}
else
{
    titleFirst.style.bottom = `calc(50% - ${titleFirst.offsetHeight}px`;  

}

window.addEventListener("scroll", () => {
    if (window.pageYOffset < size * 3 - 50)
    {
        titleFirst.style.opacity = "1";
        titleSecond.style.opacity = "0";
        titleThird.style.opacity = "0";
        titleFourth.style.opacity = "0";
    }
    else if (window.pageYOffset >= (size * 3 - 50) && window.pageYOffset < (size * 3))
    {
        titleFirst.style.opacity = "0";
        titleSecond.style.opacity = "0";
        titleThird.style.opacity = "0";
        titleFourth.style.opacity = "0";
        titleFirst.style.transform = "translateY(-20px)";
    }
    else if (window.pageYOffset >= (size * 3) &&  window.pageYOffset < (size * 6 - 50))
    {
        titleFirst.style.opacity = "0";
        titleThird.style.opacity = "0";
        titleFourth.style.opacity = "0";
        titleSecond.style.opacity = "1";
        if(window.innerWidth <= 425)
        {
            titleSecond.style.bottom = `10%`;
            titleSecond.style.right = `calc(50% - ${titleSecond.offsetWidth / 2 + 4}px)`;


        }
        else
        {
            titleSecond.style.bottom = `calc(50% - ${titleSecond.offsetHeight}px`;

        }
        setTimeout(() => {
                tFifth.style.transform = "translate(0px, 0px)";
                tFifth.style.opacity = "1"
            
        }, 200)
        setTimeout(() => {
            tFourth.style.transform = "translateY(0px)";
            tFourth.style.opacity = "1"
        }, 500)

    } else if (window.pageYOffset >= ((size * 6 - 50)) &&  window.pageYOffset < (size * 6))
    {
        titleSecond.style.opacity = "0";
        titleFirst.style.opacity = "0";
        titleThird.style.opacity = "0";
        titleFourth.style.opacity = "0";
        titleSecond.style.transform = "translateY(-20px)";
    }
    else if (window.pageYOffset >= (size * 6) &&  window.pageYOffset < ((size * 8 - 50)))
    {
        titleFirst.style.opacity = "0";
        titleSecond.style.opacity = "0";
        titleThird.style.opacity = "1";
        if(Math.round(window.getComputedStyle(titleThird).getPropertyValue("opacity")) == 0)
        {
            titleThird.style.opacity = "1 !important";
            console.log('0');
            
        }
        titleFourth.style.opacity = "0";
        if(window.innerWidth <= 425)
        {
            titleThird.style.bottom = `10%`;
            titleThird.style.right = `calc(50% - ${titleThird.offsetWidth / 2 + 4}px)`;

        }
        else
        {
            titleThird.style.bottom = `calc(50% - ${titleThird.offsetHeight}px`;
        }

        setTimeout(() => {
            
            tSixth.style.transform = "translate(0px, 0px)";
            tSixth.style.opacity = "1"
            
        }, 200)
        setTimeout(() => {
            tSeventh.style.transform = "translateY(0px)";
            tSeventh.style.opacity = "1"
        }, 500)

        
    } 
    else if (window.pageYOffset >= ((size * 8 - 50)) &&  window.pageYOffset < (size * 8))
    {
        titleFirst.style.opacity = "0";
        titleSecond.style.opacity = "0";
        titleThird.style.opacity = "0";
        titleThird.style.transform = "translateY(-20px)";
        titleFourth.style.opacity = "0";
        
    }
    else if (window.pageYOffset >= (size * 8) &&  window.pageYOffset < (size * 9))
    {
        titleFourth.style.opacity = "1";
        titleFirst.style.opacity = "0";
        titleSecond.style.opacity = "0";
        titleThird.style.opacity = "0";
        if(window.innerWidth <= 425)
        {
            titleFourth.style.bottom = `10%`;
            titleFourth.style.right = `calc(50% - ${titleFourth.offsetWidth / 2 + 4}px)`;
        } 
        else 
        {
            titleFourth.style.bottom = `calc(50% - ${titleFourth.offsetHeight}px`;

        }
        setTimeout(() => {
            
            tEight.style.transform = "translate(0px, 0px)";
            tEight.style.opacity = "1"
            
        }, 200)
        setTimeout(() => {
            tNinth.style.transform = "translateY(0px)";
            tNinth.style.opacity = "1"
        }, 500)
    }
    else if (window.pageYOffset >= (size * 9))
    {
        titleFourth.style.opacity = "0";
    }
})