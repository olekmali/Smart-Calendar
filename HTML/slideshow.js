var slideIndex = 0;

function DisplayNext()
{
    var x = window.document.getElementsByClassName("mySlides");
    window.document.currentAd.src=x[slideIndex].src;
    slideIndex++;
    if (slideIndex >= x.length)
    {
        slideIndex = 0;
        var r = Math.floor(Math.random() * 7);
        switch (r)
        {
            case 0:
            case 1:
            case 2:
                window.location.replace("index.html");
                break;
            case 3:
            case 4:
                window.location.replace("newsfeed.html");
                break;
            case 5:
                window.location.replace("weather.html");
                break;
            case 6:
                window.location.replace("forecast.html");
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
