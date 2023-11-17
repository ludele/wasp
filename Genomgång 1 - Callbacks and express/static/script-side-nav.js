function toggleSideNav() {
    var openWidth = "350px";
    var currentWidth = document.getElementById("sidenavId").style.width;

    if (window.matchMedia("(max-width: 768px)").matches) 
    {
        openWidth = "100%"; 
    } 
    if (currentWidth === openWidth) 
    {
        document.getElementById("sidenavId").style.width = "0";
    } 
    else 
    {
        document.getElementById("sidenavId").style.width = openWidth;
    }
}
