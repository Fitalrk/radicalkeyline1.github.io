menu.onclick = function myFunction() {
    var x = document.getElementById("mytopnav");
    
    if(x.className === "topnav") {
        x.className += " responsive";
    } else{
        x.className = "topnav";
    }
}

$("a").click(function () {
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top;
    $('html, body').animate({ scrollTop: destination }, 600);
    return false;
});