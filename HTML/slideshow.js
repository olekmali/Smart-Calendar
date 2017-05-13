var slideIndex = 0;

function DisplayNext()
{
    var x = window.document.getElementsByClassName("mySlides");
    window.document.currentAd.src=x[slideIndex].src;
    slideIndex++;
    if (slideIndex >= x.length)
    {
        slideIndex = 0;
        var r = Math.floor(Math.random() * 5);
        switch (r)
        {
            case 0:
            case 1:
                window.location.replace("index.html");
                break;
            case 2:
                window.location.replace("newsfeed.html");
                break;
            case 3:
                window.location.replace("power.html");
                break;
            case 4:
                window.location.replace("weather.html");
                break;
            default:
                window.location.replace("index.html");
        }
    } else {
        setTimeout(DisplayNext, 20000); // Change image every 20 seconds
    }
}

function StartShow()
{
    DisplayNext();
}
