var slideIndex = 0;

function DisplayNext()
{
    var i;
    var x = window.document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++)
    {
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex >= x.length)
    {
        slideIndex = 0;
    }
    //x[slideIndex].style.display = "block";
    // window.alert(slideIndex);
    window.document.currentAd.src=x[slideIndex].src;
    setTimeout(DisplayNext, 20000); // Change image every 20 seconds
}

function StartShow()
{
    DisplayNext();
}
