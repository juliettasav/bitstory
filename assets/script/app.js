// Showing the animation depending on scrolling
window.addEventListener('scroll', () => {

    // Initialize all sections
    const firstSection =  document.querySelector("section.intro");
    const secondSection =  document.querySelector("section.about");
    const thirdSection =  document.querySelector("section.we-create");

    // Get the size of user's screen
    const size = document.documentElement.clientHeight;
    const secondSectionValue = size * 2 + 200;
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