// Showing the animation depending on scrolling
window.addEventListener('scroll', () => {

    // Initialize all sections
    const firstSection =  document.querySelector("section.intro");
    const secondSection =  document.querySelector("section.about");
    const thirdSection =  document.querySelector("section.we-create");
    const fourthSection = document.querySelector("section.innovate");
    const footer = document.querySelector('footer');
    const lastTitle = document.querySelector("#title-fourth");

    // Get the size of user's screen
    const size = document.documentElement.clientHeight;
    const secondSectionValue = size * 2 + 200;
    const thirdSectionValue = secondSectionValue + size;
    let scrollValue = window.pageYOffset;
    
    //Making some conditions on showing with opacity style
    if(scrollValue >= 0 && scrollValue <= size * 3)
    {
        firstSection.style.opacity = "1";
        firstSection.style.zIndex = "1";
        secondSection.style.opacity = "0";
        secondSection.style.zIndex = "0";
        thirdSection.style.opacity = "0";
        thirdSection.style.zIndex = "0";
        fourthSection.style.opacity = "0";
        fourthSection.style.zIndex = "0";
        footer.style.opacity = 0;
        
    }
    if(scrollValue >= size * 3 && scrollValue <= size * 6)
    {
        firstSection.style.opacity = "0";
        firstSection.style.zIndex = "0";
        secondSection.style.opacity = "1";
        secondSection.style.zIndex = "1";
        thirdSection.style.opacity = "0";
        thirdSection.style.zIndex = "0";
        fourthSection.style.opacity = "0";
        fourthSection.style.zIndex = "0";
        footer.style.opacity = 0;
  
    }
    if (scrollValue > size * 6 && scrollValue <= size * 9)
    {
        firstSection.style.opacity = "0";
        firstSection.style.zIndex = "0";
        secondSection.style.opacity = "0";
        secondSection.style.zIndex = "0";
        thirdSection.style.opacity = "1";
        thirdSection.style.zIndex = "1";
        fourthSection.style.opacity = "0";
        fourthSection.style.zIndex = "0";
        footer.style.opacity = 0;
        

    }
    if (scrollValue > size * 8 && scrollValue <= size * 9)
    {
        console.log('last animation');
        
        firstSection.style.opacity = "0";
        firstSection.style.zIndex = "0";
        secondSection.style.opacity = "0";
        secondSection.style.zIndex = "0";
        thirdSection.style.opacity = "0";
        thirdSection.style.zIndex = "0";
        fourthSection.style.opacity = "1";
        fourthSection.style.zIndex = "1";
        footer.style.opacity = 0;
        footer.style.bottom = "0px";


    }
    if (scrollValue > size * 9)
    {
        console.log('footer show');
        lastTitle.style.opacity = 0;
        fourthSection.style.opacity = ".29";
        footer.style.opacity = 1;
        footer.style.bottom = "50px";

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

// Showing the modal
const modal = document.querySelector(".modal");

document.querySelectorAll("#contact-us").forEach(element => {
    element.addEventListener("click", (e) => {
        modal.style.display = "block";
        setTimeout(() => {
            modal.style.opacity = "1";
        }, 200);
    })
    
})

// document.querySelector("#contact-us").addEventListener("click", (e) => {
//     modal.style.display = "block";
//     setTimeout(() => {
//         modal.style.opacity = "1";
//     }, 200);
    
// })

document.querySelector(".close").addEventListener("click", (e) => {
    modal.style.opacity = "0";
    setTimeout(() => {
        modal.style.display = "none";
    }, 200);
})